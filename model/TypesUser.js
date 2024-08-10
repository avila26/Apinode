import { DataTypes } from "sequelize";
import { sequelize1 } from "../db/conexion.js";

export const TypesUser = sequelize1.define(
  "typesuser",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
  
);
