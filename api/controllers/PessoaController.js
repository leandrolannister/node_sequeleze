const database = require('../models/pessoas');

class PessoaController{
    static async show(req, resp){
       try{
        const pessoas = await database.pessoas.findAll();
        return resp.status(200).json(pessoas);
       }catch(error){
           return resp.status(500).json(error.message);
       }        
    }
}
module.exports = PessoaController;