const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const fetch = require('node-fetch')
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')


const app = express()
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static('dist'))

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
  console.log('Example app listening on port 8081!')
})


app.get('/', function(req, res) {
  res.sendFile('dist/index.html')
})

app.get('/test', function(req, res) {
  res.send(mockAPIResponse)
})


app.post('/process-text', function(req, res) {

  // meaningcloud api structure
  // let baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=APIKEYHERE&lang=en&txt=hello&model=general';

  // Establishing API Info
  const apiKey = process.env.API_KEY; // meaningcloud API key hidden
  const articleURL = req.body.articleURL;

  // Building Fetch URL Using Base Url then adding Params with API Key and URL Info
  const baseURL = 'https://api.meaningcloud.com/sentiment-2.1' //meaningcloud base request url
  const allParams = `?key=${apiKey}&lang=en&model=general&url=${articleURL}` // adding API Params
  const fetchURL = baseURL + allParams; // builing full Fetch Url

  console.log(fetchURL); // logging Fetch URL

  fetch(fetchURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
    res.send({
      irony: data.irony,
      agreement: data.agreement,
      subjectivity: data.subjectivity,
      confidence: data.confidence,
      status: data.status.msg,
    })
  });
})
