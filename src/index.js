const express = require('express');
const morgan = require('morgan');
const routes = require('../routes/routes.js');
const app = express();

//configs
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
app.set('json spaces', 2);


//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//rutas
app.use(routes);

//inicializa servidor en puerto asignado
app.listen(port, () => {
    console.log(`Servidor activo en el puerto ${port}`);
})