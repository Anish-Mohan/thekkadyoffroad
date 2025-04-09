const express = require('express')
var cors = require('cors')
const app = express()
const blogsA = require('./blogs.json');
const creds = require('./cred.json');
const mysql = require('mysql')

const connection = mysql.createConnection(creds);

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

app.get('/server/blogs', (req, res) => {

  connection.connect();
  connection.query('SELECT * from blogs', (err, rows, fields) => {
    if (err) throw err

    res.send(rows)
  });
  connection.end();
  

});

app.get('/server/blog/:blogName', (req, res) => {

  connection.connect()
  let result = {};
  let blogsAr = {};
  let addsAr = {};
  
  connection.query('SELECT *,points.title as point_title,points.description as point_description,blogs.description as description_t,blogs.title as title_t FROM blogs JOIN points ON blogs.ID=points.blog_id WHERE blogs.title="'+req.params.blogName+'"', (err, rows, fields) => {
    if (err) throw err
  
    rows.forEach(element => {
      result["Title"] = element["title_t"];
      result["Image"] = element["image"];
      result["Description"] = element["description_t"];
      blogsAr[element["point_title"]]=element["point_description"];
    });

    result["Points"]= blogsAr;
  
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