const pg = require('pg')

const db = new pg.Pool({
      database: 'dogwatch',
      password: process.env.DB_PASSWORD
    })