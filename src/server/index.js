var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

// let baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=c0a2c728bb89503cdb9f258ba866df9b&lang=en&txt=hello&model=general';
// const apiKey = '13d2bf320cf4836f44b05ff1af01636a';



app.post('/process-text', async function(req, res) {

  fetch("https://api.meaningcloud.com/sentiment-2.1?key=13d2bf320cf4836f44b05ff1af01636a&lang=en&txt=hello&model=general", {
    method: "GET"
  }).then((response) => {
    return response.json();
  }).then((data) => {
      res.send(data)
      console.log(data);
  })


})

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
