const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  status: {
    type: DataTypes.STRING,
    defaultValue: "todo",
  },
});

module.exports = Task;