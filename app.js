import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send.json({test: 'test result a json format'});
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});