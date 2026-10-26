//foi necessario criar o arquivo de sincronização de tabelas
const {Cliente, Console, Agendamento} = require('./models/rel')
const conn = require('./db/conn')

async function syncDB(){
    try{
        await conn.sync({force:true})
        console.log('sincronziando tabelas')
    }catch(err){    
        console.error('erro ao sincronizar',err)
    }finally{
        await conn.close()
        console.log('fechando a conexão')
    }
}

syncDB()