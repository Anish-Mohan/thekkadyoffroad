const express = require('express')
var cors = require('cors')
const app = express()
const blogs = require('./blogs.json')


app.use(cors())

const port = 3000

app.get('/server', (req, res) => {
  res.send('Hello World!')
})

app.get('/server/blog/:id', (req, res) => {
    let blogs = blogs;

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(blogs[req.params.id]));
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})