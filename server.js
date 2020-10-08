const express = require('express');
const db = require('./db');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist'));

app.post('/input', (req, res) => {
  res.send(`Data ${JSON.stringify(req.body)} received`);
});

app.get('/search:id', (req, res) => {
  const letter = req.params.id;
  db.getAllWords((err, result) => {
    if (err) {
      res.send(err);
    } else {
      const allWords = result.map((item) => item.word);
      const uniqueWords = new Set(allWords);
      const newarray = [...uniqueWords];
      res.send(newarray);
    }
  }, letter);
});

app.get('/input:id', (req, res) => {
  const word = req.params.id;
  db.getDefinition((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  }, word);
});

app.listen(port, () => console.log(`Listening port ${port}`));
