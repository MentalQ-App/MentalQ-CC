'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pyschologist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pyschologist.belongsTo(models.Users, {
        foreignKey: 'user_id',
        as: 'users',
      });
      // define association here
    }
  }
  Pyschologist.init({
    pyschologist_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'pyschologist_id',
    },
    prefix_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    suffix_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    certificate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    isOnline: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }
  }, {
    sequelize,
    modelName: 'Pyschologist',
    tableName: 'pyschologist',
  });

  return Pyschologist;
};