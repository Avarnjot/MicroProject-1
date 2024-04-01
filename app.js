const express = require('express');
const app = express();
const port = 3000; 
const jsonData = require('./data/data.json');


app.use(express.static('public'));


app.get('/api/data', (req, res) => {
  res.json(jsonData);
});


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

