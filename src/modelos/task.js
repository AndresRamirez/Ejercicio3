const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tarea = new Schema({
    carta: String,
    descripcion: String,
    estado: {
        type: Boolean,
        default: false
    }
 
});

module.exports = mongoose.model('tareas',tarea);