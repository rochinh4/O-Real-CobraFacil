"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cobrançareals", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      numero: {
        type: Sequelize.STRING,
      },
      chavePix: {
        type: Sequelize.STRING,
      },
      dataEnvio: {
        type: Sequelize.DATE,
      },
      nomeDevedor: {
        type: Sequelize.STRING,
      },
      valorDebito: {
        type: Sequelize.STRING,
      },
      nomeEmpresa: {
        type: Sequelize.STRING,
      },
      nomeDono: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cobrançareals");
  },
};
