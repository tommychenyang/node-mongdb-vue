'use strict';
import { each, find, assign, filter, isArray } from 'lodash';
import { LOAD, ADD, SELECT, CLEAR_SELECT, UPDATE, REMOVE } from './types';

const mutations = {
    [LOAD](state, models) {
        state.rows.splice(0);
        state.rows.push(...models);
    },
    [ADD](state, model) {
        const found = find(state.rows, (item) => item._id === model._id);
        if (!found) {
            state.rows.push(model);
        }
    },
    [UPDATE](state, model) {
        each(state.rows, (item) => {
            if (item._id === model._id) {
                assign(item, model);
            }
        });
    },
    [SELECT](state, row, multiSelect) {
        if (isArray(row)) {
            state.selected.splice(0);
            state.selected.push(...row);
        } else {
            if (multiSelect === true) {
                if (state.selected.indexOf(row) !== -1) {
                    state.selected = state.selected.filter(item => item !== row);
                } else {
                    state.selected.push(row);
                }
            } else {
                state.selected.splice(0);
                state.selected.push(row);
            }
        }
    },

    [CLEAR_SELECT](state) {
        state.rows.splice(0);
    },

    [REMOVE](state, model) {
        state.rows = filter(state.rows, item => item._id !== model._id);
    }
};

const state = {
    rows: [],
    selected: []
};

import * as getters from './getter';
import * as actions from './action';
console.log(actions);
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
