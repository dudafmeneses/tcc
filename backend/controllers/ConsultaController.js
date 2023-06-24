const Consulta = require("../models/consultas")
module.exports = class ConsultasController{
    static async getAll(req, res){
        try{
            const todasColsutas = await Consulta.find()
            res.json(todasColsutas)
        }catch(error){
            console.log(error)
            res.status(500).json({message: "Erro ao pegar todas as consultas"})
        }
        }
    static async create(req, res){
        try{
            const {paciente, data, horário, desc} = req.body;
            // item obrigatório
            if(!paciente){
                return res.status(406).json({message: "paciente é obrigatório"})
            }
            const novaConsulta = new Consulta({paciente, data, horário, desc})
            await novaConsulta.save()
            res.status(201).json(novaConsulta)
        }catch(error){
            console.log(error)
            res.status(500).json({message: "Erro ao pegar todas as consultas"})
        }
        }
        static async editConsulta(req,res){
            try {
                const {paciente, data, horário, desc} = req.body;
                const consulta = await Consulta.findByIdAndUpdate(
                    req.params.id,
                    {paciente, data, horário, desc} ,
                    {new: true}
                );
                if(!consulta){
                    return res.status(404).json({message: "esta consulta não existe"})
                }
                res.json(consulta);
            } catch (error) {
                console.log(error);
                res.status(500).json({message: "Erro ao editar a consulta."})
            }
        }
        static async deleteConsulta(req,res){
            try {
                const consulta = await Consulta.findByIdAndRemove(req.params.id)
                if(!consulta){
                    return res.status(404).json({message: "Não existe uma consulta com este id"})
                }
                res.json({message: "Consulta deletado com sucesso!"})
            } catch (error) {
                console.log(error);
                res.status(500).json({message: "Erro ao deletar a consulta."})
            }
        }
    }