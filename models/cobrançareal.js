"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cobrançareals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cobrançareal.init(
    {
      numero: DataTypes.STRING,
      chavePix: DataTypes.STRING,
      dataEnvio: DataTypes.STRING,
      nomeDevedor: DataTypes.STRING,
      valorDebito: DataTypes.STRING,
      nomeEmpresa: DataTypes.STRING,
      nomeDono: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "cobrançareals",
    }
  );
  return cobrançareals;
};
