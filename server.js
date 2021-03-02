require('dotenv').config();

const PORT   = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;
const express = require('express');

const app = express();

const path = require('path');

const cors = require('cors');

const mongoose = require('mongoose');

const apiRoutes = require('./routes');

// MIDDLEWARE
app.use(express.json());  
app.use(express.static(path.join(__dirname , 'public')));
app.use(cors()); 
app.use('/api', apiRoutes);

// SERVIDOR WEB
app.listen(3000, () => console.log("Servidor iniciado..."));

// CONEXIÓN A BASE DE DATOS
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log("Conexión a BD correcta"))
    .catch(error => console.log("Error al conectarse a la BD" + error));