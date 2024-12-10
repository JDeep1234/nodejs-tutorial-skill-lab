const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.get('/search', (req, res) => {
    const { query } = req.query;
    res.send(`Search query: ${query}`);
});

app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    res.send(`User ID: ${id}`);
});


app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

app.post('/submit', (req, res) => {
    res.send('Data submitted');
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


