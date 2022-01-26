const Sequelize = require('sequelize')
const database = require("./database")

const purchaseCart = database.define('purchaseCart' ,{
    //item_id, name, price, stock, image, seller, description
    item_id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull : false,
        primaryKey : true,
        notEmpty: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull : false,
        notEmpty: true
    }
})

module.exports = purchaseCart;