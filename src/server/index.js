var path = require('path')
const fetch = require('node-fetch')
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('dist'))

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

// let baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=c0a2c728bb89503cdb9f258ba866df9b&lang=en&txt=hello&model=general';
// const apiKey = '13d2bf320cf4836f44b05ff1af01636a';

app.post('/process-text', function (req, res) {
  console.log("hit")
  fetch("https://api.meaningcloud.com/sentiment-2.1?key=13d2bf320cf4836f44b05ff1af01636a&lang=en&txt=hello&model=general", {
    method: "GET"
  }).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
    res.send(data)
  })
})

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
  res.send(mockAPIResponse)
})
