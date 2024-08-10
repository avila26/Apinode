import { DataTypes } from "sequelize";
import { sequelize1 } from "../db/conexion.js";
import {  TypesUser} from "./TypesUser.js";


export const UserModel = sequelize1.define(
  "users",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
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

TypesUser.hasMany(UserModel, { foreignKey: "typeusers_id" });
UserModel.belongsTo(TypesUser, { foreignKey: "typeusers_id" });