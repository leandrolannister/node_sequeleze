const database = require('../models');

class TurmaController{

    static async show(req, res) {
        try{
            const turmas = await database.Turmas.findAll();
            return res.status(200).json(turmas);            
        }catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async findOne(req, res){
        const { id } = req.params;
  
        try{
          const turma = await database.Turmas.findOne({
              where:{ id: Number(id)}  
          });
          return res.status(200).json(turma);
        }catch(error) {
          return res.status(500).json(error.message);
        }
    }

    static async store(req, res) {
        const turma = req.body
        try {
          const store = await database.Turmas.create(turma);
          return res.status(200).json({ message: `Turma: cadastrada com sucesso`});
        } catch (error) {
          return res.status(500).json(error.message)
        }
    }

    static async update(req, res){
        const { id } = req.params;
  
        try {
           await database.Turmas.update(req.body, { where: { id: Number(id)}});
           const turma = await database.Turmas.findOne({ where:{ id: Number(id) } });
           console.log('xura', turma);
           
           if(turma == null)
             return res.status(204).json({ message: 'Registro não encontrado'});

           return res.status(200).json({ message: `Registro atualizado com sucesso`});
  
        } catch (error) {
            return res.status(500).json(error.message);    
        }
      }
  
      static async destroy(req, res){      
        try{
            await database.Turmas.destroy({where: {id: Number(req.params.id)}});
            return res.status(200).json({ message: `id: ${req.params.id} deletado`});
        }catch(error){
            return res.status(500).json(error.message);
        }
    }
}

module.exports = TurmaController;