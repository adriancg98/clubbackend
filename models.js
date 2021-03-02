const mongoose = require('mongoose');


const Directivo = mongoose.model('Directivo',
  new mongoose.Schema({ nombre: String, apellidos: String })
);

const Jugador = mongoose.model('Jugador',
  new mongoose.Schema({ nombre: String, precio: Number })
);

module.exports = {
    Directivo: Directivo,
    Jugador: Jugador
  }
