const mongoose = require('mongoose')
const consultaSchema = new mongoose.Schema({
    paciente: String,
    data: Date,
    horário: String,
    desc: String,
    createdAt: {type: Date, default: Date.now}
})

const Consulta = mongoose.model('consulta', consultaSchema)
module.exports = Consulta