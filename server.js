const express = require('express')
let app = express()
const PORT = process.env.PORT || 3001;
const pg = require('pg')
app.use(express.static('images'));
app.use(express.static('client/build'));

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))

app.use(express.json())

// You can replace this with a database
// const db = new pg.Pool({
//   database: 'ecocheck',
//   // password: process.env.DB_PASSWORD
// })

let pool;
if (process.env.NODE_ENV === 'production') {
  pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })
} else {
  pool = new pg.Pool({
    database: 'ecocheck',
  })
}

// Routes
app.get('/', (req, res) => {
  res.send("hello world")
})

app.get('/api/show', (req, res) => {

  pool.query(`SELECT * FROM products ORDER by product_name;`)
    .then(result => {
      res.json({ data: result.rows })
    })
})

if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}


