const express = require('express');
//instalar npm i @faker-js/faker
const { faker } = require('@faker-js/faker');
//const randomName = faker.name.findName();
const randomName = faker.name.fullName();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola , soy una nueva ruta');
});

// Si quieren ver 2 o mas productos se escribe
// localhost:3000/products?size=2000
app.get('/products', (req, res) => {
  const products = [];
  //poner un limite de 10
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

//Todo lo que sea especifico debe ir antes d lo que es dinamico
//Casos de uso que siempre se comete errores
app.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter');
});

//Forma dinamica
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000,
  });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  //Validacion
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }
});

//endpoints mas complejo
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.listen(port, () => {
  console.log('Mi port' + port);
});
