// Create web server
// Create an API endpoint that receives a POST request to /comments
// The API endpoint should store the comment in a variable
// Create an API endpoint that receives a GET request to /comments
// The API endpoint should return the comment stored in the variable

const express = require('express');
const app = express();
app.use(express.json());

let comment = '';

app.post('/comments', (req, res) => {
  comment = req.body.comment;
  res.send('Comment stored!');
});

app.get('/comments', (req, res) => {
  res.send(comment);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Test the API by sending a POST request to /comments with a JSON object containing a comment key and a string value
// Send a GET request to /comments to verify that the comment is stored
// Try to send a POST request to /comments again with a different comment value
// Send a GET request to /comments to verify that the new comment is stored
// Test the API using a tool like Postman or cURL