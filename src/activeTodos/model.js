const { DataTypes } = require("sequelize")
const connection = require("../db/connection")

const ToDo = connection.define("ToDo", {
    todo: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = ToDo