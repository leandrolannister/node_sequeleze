const database = require('../models');

class NivelController {

    static async show(req, res) {
      try {
        const niveis = await database.Niveis.findAll()
        return res.status(200).json(niveis)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async findOne(req, res){
      const { id } = req.params;

      try{
        const nivel = await database.Niveis.findOne({
            where:{ id: Number(id)}  
        });
        return res.status(200).json(nivel);
      }catch(error) {
        return res.status(500).json(error.message);
      }
    }

    static async store(req, res) {
      const nivel = req.body
      try {
        const store = await database.Niveis.create(nivel);
        return res.status(200).json({ message: `Nível: ${nivel.descr_nivel} cadastrado com sucesso`});
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

    static async update(req, res){
      const { id } = req.params;

      try {
         await database.Niveis.update(req.body, { where: { id: Number(id)}});
         const nivel = await database.Niveis.findOne({ where:{ id: Number(id) } });
         return res.status(200).json({ message: `Registro atualizado com sucesso`});

      } catch (error) {
          return res.status(500).json(error.message);    
      }
    }

    static async destroy(req, res){      
      try{
          await database.Niveis.destroy({where: {id: Number(req.params.id)}});
          return res.status(200).json({ message: `id: ${req.params.id} deletado`});
      }catch(error){
          return res.status(500).json(error.message);
      }
  }

    
  }

  module.exports = NivelController;