const Sequelize = require('sequelize')
const database = require("./database")

const user = database.define('user' ,{
    //username, password, name, email, phone, country
    username : {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        notEmpty: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    name : {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    phone: {
        type: Sequelize, String,
        allowNull: false,
        notEmpty: true
    },
    country: {
        type: Sequelize, String,
        allowNull: false,
        notEmpty: true
    }
})

module.exports = user;