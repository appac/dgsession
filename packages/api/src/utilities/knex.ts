import { knex } from "knex";

const connection = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'dgdev',
        password: 'dgdev',
        database: 'dgdev'
    }
})

export default connection;
