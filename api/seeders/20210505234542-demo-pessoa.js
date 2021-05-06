'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('Pessoas', [
       {
         nome: 'Nadia',
         ativo: true,
         email: 'na@gmail.com',
         role: 'estudante',
         createdAt: new Date(),
         updatedAt: new Date()         
      },
      {
        nome: 'Alessandra',
        ativo: true,
        email: 'ale@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()  
      },
      {
        nome: 'Mary',
        ativo: true,
        email: 'mary@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()  
      },
      {
        nome: 'Pamela',
        ativo: true,
        email: 'pan@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()  
      },
      {
        nome: 'Alessandra',
        ativo: true,
        email: 'ale@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()  
      },
      {
        nome: 'Ellen',
        ativo: true,
        email: 'ellen@gmail.com',
        role: 'professora',
        createdAt: new Date(),
        updatedAt: new Date()  
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Pessoas', null, {})     
  }
};
