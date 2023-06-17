const mongoose = require('mongoose')

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

const connect = ()=>{
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.sorofmz.mongodb.net/testes?retryWrites=true&w=majority`)
    const connection = mongoose.connection;
    connection.on('error', ()=>{
        console.log('erro ao conectar com o mongodb')
    })
    connection.on('open', ()=>{
        console.log('conectado com o mongodb')
    })
}
connect()