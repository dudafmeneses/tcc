const router = require('express').Router()
const ConsultasController = require('../controllers/ConsultaController')

// http:localhost:3001/consultas/
router.get('/',ConsultasController.getAll)
router.post('/',ConsultasController.createConsulta)

// http:localhost:3001/consultas/:id
router.put('/:id', ConsultasController.editConsulta)
router.delete('/:id', ConsultasController.deleteConsulta)

module.exports = router