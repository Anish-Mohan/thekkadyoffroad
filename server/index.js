const express = require('express')
var cors = require('cors')
const app = express()
const blogsA = require('./blogs.json')
const mysql = require('mysql')



app.use(cors())

const port = 3000

app.get('/server', (req, res) => {
  res.send('Hello World!')
})

// app.get('/server/blog/:id', (req, res) => {
//     let blogs = blogsA;

//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify(blogs[req.params.id]));
    
// })

app.get('/server/blog/:blogName', (req, res) => {

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'xavkvwos_thekkadyoffroad'
  })
  
  connection.connect()
  let result = {};
  let blogsAr = {};
  let addsAr = {};
  
  connection.query('SELECT *,points.title as point_title,points.description as point_description FROM `blogs` JOIN points ON blogs.ID=points.blog_id WHERE blogs.title="'+req.params.blogName+'"', (err, rows, fields) => {
    if (err) throw err
  
    rows.forEach(element => {
      result["Title"] = element["title"];
      result["Image"] = element["image"];
      result["Description"] = element["description"];
      blogsAr[element["point_title"]]=element["point_description"];
    });

    result["points"]= blogsAr;
  
    connection.query('SELECT adds.* FROM `blogs` JOIN adds ON blogs.ID=adds.blog_id WHERE blogs.title="'+req.params.blogName+'"', (err, results, fields) => {
      if (err) throw err

      results.forEach(element => {
        addsAr[element["title"]]=element["description"];
      });
      result["additional"] = addsAr;
    
      res.send(result);
    })
  })
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})