const Sequelize = require('sequelize')
const database = require("./database")

const purchaseCart = database.define('purchaseCart' ,{
    username : {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        notEmpty: true
    },

    item_id : {
        type: Sequelize.INTEGER,
        allowNull : false,
        primaryKey : true,
        notEmpty: true
    },
})

module.exports = purchaseCart;