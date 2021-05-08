const database = require('../models/pessoas');

class PessoaController{
    static async show(req, res){
       try{
        const pessoas = await database.pessoas.findAll();
        return res.status(200).json(pessoas);
       }catch(error){
           return res.status(500).json(error.message);
       }        
    }
}
module.exports = PessoaController;