//necessario mudar o nome do banco de dados para db_pixelfix pois é o nome do banco inidcado no arquivo
//lembrar de mudar a senha do banco para "senai" quando for utilizar o workbanch a escola
const { Sequelize } = require('sequelize')
const db = new Sequelize('db_pixelfix', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

db.authenticate()
    .then(() => {
        console.log('Banco de dados Conectado!')
    })
    .catch((err) => {
        console.error('Erro de conexão com banco de dados!', err)
    })

module.exports = db

        