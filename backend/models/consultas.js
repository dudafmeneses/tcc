const mongoose = require('mongoose')
const consultaSchema = new mongoose.Schema({
    paciente: String,
    data: type.date,
    horário: String,
    desc: String,
    createdAt: {type: Date, default: Date.now}
})

const Consulta = mongoose.model('consulta', produtoSchema)
module.exports = Consulta