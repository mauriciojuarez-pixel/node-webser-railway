/*const express = require('express')
const app = express()
const port = 3000;

// Middleware para servir contenido estático desde la carpeta "public"
app.use(express.static('public'));

app.get('/hola-mundo', (req, res) => {
  res.send('Hola Mundo en su respectiva ruta')
});

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
});


// Ruta * para manejar páginas no encontradas
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});*/

const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs'); // para usar handlebars con express
hbs.registerPartials(__dirname + '/views/partials'); // para usar parciales

// Para servir contenido estático
app.use(express.static('public')); // definición de middleware express

// Rutas
app.get('/', (req, res) => {
  res.render('home', { // estos son los argumentos
    nombre: 'Armando David',
    titulo: 'Curso de Node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Armando David',
    titulo: 'Curso de Node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Armando David',
    titulo: 'Curso de Node'
  });
});

// Ruta para manejar páginas no encontradas (404)
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

// Levantar servidor
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


