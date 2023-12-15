//  const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Welcome');
// });

// app.get('/api/books', (req, res) => {
//     res.send(['html-css','javascript','react','express','mongodb','express']);
//      });

// app.get('/api/books/:id', (req, res) => {
//     res.send(req.params.id );
// });

// const port = process.env.PORT || 5000;

// app.listen(port,()=>{
//     console.log(`${port} portni eshitishni boshladim...`);
// });


//---------------------------ID orqali malumot olish--------------------------------------------------

const express = require("express");
const app = express();

const books = [
  { id: 1, name: "html-css" },
  { id: 2, name: "javascript" },
  { id: 3, name: "react" },
  { id: 4, name: "express" },
];

app.get("/api/books", (req, res) => {
  res.send(books);
});

app.get("/api/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) res.status(404).send("Berilgan IDga teng bo'lgan kitob topilmadi");
  res.send(book);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`${port} portni eshitishni boshladim...`);
});









