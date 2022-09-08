import { knex } from "knex";

const connection = knex({
    client: 'pg',
    connection: {
        host: 'database',
        port: 5432,
        user: 'dgdev',
        password: 'dgdev',
        database: 'dgdev'
    }
})

export default connection;
