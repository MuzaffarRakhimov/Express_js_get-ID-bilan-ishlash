 const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.get('/api/books', (req, res) => {
    res.send(['html-css','javascript','react','express','mongodb','express']);
     });

app.get('/api/books/:id', (req, res) => {
    res.send(req.params.id );
});

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`${port} portni eshitishni boshladim...`);
});