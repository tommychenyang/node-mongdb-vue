import Vue from 'vue';
import { LOAD, ADD, SELECT, CLEAR_SELECT, UPDATE, REMOVE } from './types';

export const NAMESPACE = '/api/gundam';

export const selectRow = ({ commit }, row, multiSelect) => {
    commit(SELECT, row, multiSelect);
};

export const clearSelection = ({ commit }) => {
    commit(CLEAR_SELECT);
};

export const load = ({ commit }) => {
    Vue.http.get(NAMESPACE).then((response) => {
        console.log('loading');
        if (response.status === 200 && response.data) {
            commit(LOAD, response.data);
        } else {
            console.error('Request error!', response.error);
        }
    }).catch((response) => {
        console.error('Request error!', response.statusText);
    });
};

export const saveRow = ({ commit }, model) => {
    Vue.http.post(NAMESPACE, model).then((response) => {
        if (response.status === 200 && response.data) {
            commit(ADD, response.data);
            commit(SELECT, response.data, false);
        }
    }).catch((response) => {
        if (response.data.error) {
            console.error(response.data.error.message);
        }
    });
};
export const updateRow = ({ commit }, model) => {
    Vue.http.put(NAMESPACE, model).then((response) => {
        if (response.status === 200 && response.data) {
            commit(UPDATE, response.data);
            commit(SELECT, response.data, false);
        }
    }).catch((response) => {
        if (response.data.error) {
            console.error(response.data.error.message);
        }
    });
};

export const deleteRow = ({ commit }, model) => {
    Vue.http.delete(NAMESPACE + '/' + model._id).then((response) => {
        if (response.status === 200 && response.data) {
            commit(REMOVE, model);
        }
    }).catch((response) => {
        if (response.data.error) {
            console.error(response.data.error.message);
        }
    });
};
