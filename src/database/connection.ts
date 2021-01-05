export const KNEX = require('knex')({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : 'admin123456',
        database : 'curso'
    }
});
