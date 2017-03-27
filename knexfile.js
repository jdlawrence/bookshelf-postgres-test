// Update with your config settings.

module.exports = {
  test: {
    client: 'postgresql',
    connection: {
      user: 'postgres',
      database: 'dummy',
      port: 5432,
      host: 'localhost',
      password: ''
    },
    debug: false,
    pool: {
      min: 1,
      max: 2
    },
    migrations: {
      tableName: 'knex_migrations'
    }, 
    seeds: {
      directory: './seeds/test'
    }
  },

  development: {
    client: 'postgresql',
    connection: {
      user: 'postgres',
      database: 'dummy',
      port: 5432,
      host: 'localhost',
      password: ''
    },
    debug: false,
    pool: {
      min: 1,
      max: 2
    },
    migrations: {
      tableName: 'knex_migrations'
    },

  },
  production: {
    client: 'postgresql',
    connection: {
      user: 'postgres',
      database: 'dummy',
      port: 5432,
      host: 'localhost',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};


