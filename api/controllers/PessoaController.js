const database = require('../models');

class PessoaController{
    static async show(req, res){
       try{
        const pessoas = await database.Pessoas.findAll();
        return res.status(200).json(pessoas);
       }catch(error){
           return res.status(500).json(error.message);
       }        
    }

    static async findOne(req, res){
        const { id } = req.params;

        try {
           const pessoa = await database.Pessoas.findOne({
               where:{ id: Number(id) }
            });    
            return res.status(200).json(pessoa);
        } catch (error) {
            return res.status(500).json(error.message);    
        }
    } 
    
    static async store(req, res) {
        const pessoa = req.body
        try {
          const store = await database.Pessoas.create(pessoa);
          return res.status(200).json({ message: `Pessoa: ${pessoa.nome} cadastrado com sucesso`});
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }

    static async update(req, res){
        const { id } = req.params;

        try {
           await database.Pessoas.update(req.body, { where: { id: Number(id)}});
           const pessoaAtualizada = await database.Pessoas.findOne({ where:{ id: Number(id) } });
           return res.status(200).json(pessoaAtualizada);

        } catch (error) {
            return res.status(500).json(error.message);    
        }
    }

    static async destroy(req, res){
        try{
            await database.Pessoas.destroy({where: {id: Number(req.params.id)}});
            return res.status(200).json({ message: `id: ${req.params.id} deletado`});
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async showMatricula(req, res){
        const { estudanteId, matriculaId } = req.params;

        try{
            const matricula = await database.Matriculas.findOne({
                where:{ 
                    id: Number(matriculaId),
                    estudante_id: estudanteId
                }
            });

            return (matricula == null)
            ? res.status(404).json(`not found`)
            : res.status(200).json({data: matricula});
            
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async storeMatricula(req, resp){
        const { estudanteId } = req.params;
        const matricula = {...req.body, estudante_id: Number(estudanteId)};
               
        try{
            const store = await database.Matriculas.create(matricula);
            return resp.status(200).json({ message: `Matricula: cadastrado com sucesso`});
            
        }catch(error){
            return resp.status(400).json(error.message);
        }
    }

    static async destroyMatricula(req, resp){
        const { estudanteId, matriculaId } = req.params;

        try{
            await database.Matriculas.destroy({
                where: {estudante_id: Number(estudanteId), 
                        turma_id: Number(matriculaId)}
            });
            return resp.status(200).json("Registro excluído com sucesso!");
            

        }catch(error){
            resp.status(400).json(error.message);
        }

        
    }


}
module.exports = PessoaController;