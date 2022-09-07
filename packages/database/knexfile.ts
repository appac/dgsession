

// Update with your config settings.

const config = {
  development: {
    client: "pg",
    connection: {
      host: 'localhost',
      port: 5432,
      user: 'dgdev',
      password: 'dgdev',
      database: 'dgdev'
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/migrations",
      extension: 'ts',
    }
  },
  production: {
    client: "pg",
    connection: {
      host: 'localhost',
      port: 5432,
      user: 'dgdev',
      password: 'dgdev',
      database: 'dgdev'
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/migrations"
    }
  }

};

module.exports = config;
