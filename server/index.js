const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

const port = 3000

app.get('/server', (req, res) => {
  res.send('Hello World!')
})

app.get('/server/blog/:id', (req, res) => {
    let blogs = {
        "Angamoozhy":{
            "title":"Angamoozhy",
            "image":"",
            "points":["Angamuizhi safari start morning 5.45am",
            "totally 180km safari 95 km frost ride..",
            "5 dam view muliyar dam...",
            "Anganuzhi dam view....",
            "Kakki dam view...",
            "Gavi dam.. View",
            "..kouchu pamba..",
            "Tea garden photo..",
            "Periyar river point..",
            "Programs full day chance 75 /wild animals"]
    }
}
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(blogs[req.params.id]));
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})