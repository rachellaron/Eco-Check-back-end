const express = require('express')
let app = express()
const PORT = 3001
const pg = require('pg')

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))

app.use(express.json())

// You can replace this with a database
const db = new pg.Pool({
  database: 'ecocheck',
  // password: process.env.DB_PASSWORD
})

// Routes
app.get('/', (req, res) => {
  res.send("hello world")
})

app.get('/api/show', (req, res) => {

  db.query(`SELECT *     
          FROM product_name  
          JOIN recycle_key  
          ON product_name.common_form = recycle_key.common_form`)
    .then(result => {
      res.json({ data: result.rows })
    })


  // db.query("SELECT * FROM recycle_key;")
  //   .then(keyresult => {
  //     res.json({ data: keyresult.rows })
  //   })



})

module.exports = db



app.get('/api/show', (req, res) => {





  // console.log(db)
  // res.json({test: db})
  //db.query()
})


