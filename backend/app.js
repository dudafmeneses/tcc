const express = require('express')
const cors = require('cors')
require('dotenv').config()
var app = express();
const ConsultasRoutes = require('./routes/ConsultasRoutes')
app.use(cors())
app.use(express.json())
app.use('/consultas', ConsultasRoutes)
app.listen(3001,()=>{
  console.log(`Servidor rodando na porta: 3001`)
})

require("./database/connection")