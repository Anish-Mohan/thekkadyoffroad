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
       "Angamoozhy": {
          "Title": "Angamoozhy",
          "Image": "img/anga_blog.png",
          "Description": "Angamoozhy Safari is an early morning wildlife safari experience, typically starting at 5:45 AM. It is located near Gavi, Kerala, and is known for its breathtaking views, lush forests, and diverse wildlife, including elephants, deer, and various bird species",
          "Points": {
              "Start Time": "5:45 AM",
              "Best time to visit": "Early morning for maximum wildlife sightings",
              "Location": "Near Angamoozhy, Pathanamthitta district, Kerala",
              "Wildlife Spotting": "Elephants, Indian gaur, deer, Malabar giant squirrel, and different bird species",
              "Scenic Beauty": "Dense forests, rivers, and misty hills",
              "Inclustions":"Driver/Guide,Breakfast and lunch,tea snacks , Hotel pickup/drop(10km radius)"
          },
          "additional": {
              "Kakki dam Visit": "Kakki Dam is a gravity dam located in the Pathanamthitta district of Kerala, India. It is built across the Kakki River, a tributary of the Pamba River, and serves as an essential part of the Sabarigiri Hydroelectric Project. The dam plays a crucial role in generating hydroelectric power and supplying water for irrigation and drinking purposes",
              "Gavi dam Visit": "Gavi Dam is a small yet significant reservoir located in the Pathanamthitta district of Kerala, India. It is part of the Gavi eco-tourism project and is surrounded by the lush forests of the Periyar Tiger Reserve. The dam is known for its scenic beauty and rich biodiversity, making it a popular spot for nature lovers and adventure seekers.",
              "kouchu pamba Visit": " Kouchu Pamba is a serene and lesser-known river or waterbody located in the Pathanamthitta district of Kerala, India. It is part of the Pamba River system, which is one of the most important rivers in Kerala, known for its religious, ecological, and geographical significance.",
              "Periyar River Point": "The Periyar River is often described as the 'Lifeline of Kerala' due to its multifaceted significance in the region",
              "Valanjanganam Water Falls (only rainy season)":"",
              "Moozhiyar Dam Visit":"",
              "Tea garden visit and photoshot":"",
              "Spice Garden Visit":"(free)",
              "Annathodu dam view":""

            }
      }
  }

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(blogs[req.params.id]));
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})