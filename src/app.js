const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
//conectar DB
mongoose.connect('mongodb://localhost/crud')
 .then(db => console.log('Base de datos conectada'))
 .catch(err => console.log(err));

//importar rutas

const indexrutas = require('./rutas/index');

//configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'vistas'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//rutas
app.use('/', indexrutas)


// iniciar servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});