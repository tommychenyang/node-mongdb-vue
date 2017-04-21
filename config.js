/**
 * Created by chenya3 on 4/11/2017.
 */
module.exports={
    dev:{
        port:8080,
        connectionString:'mongodb://tommychenyang:7896321psn@ds145370.mlab.com:45370/node-mongo-vue'
    },
    prod:{
        port:process.env.PORT,
        connectionString: process.env.ConnectionString//'mongodb://tommychenyang:7896321psn@ds145370.mlab.com:45370/node-mongo-vue'
    }
}