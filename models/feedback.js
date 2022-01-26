const Sequelize = require('sequelize')
const database = require("./database")

const feedback = database.define('feedback' ,{
    feedback_id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull : false,
        primaryKey : true,
        notEmpty: true
    },
    username : {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
    },
    item_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        notEmpty: true
    },
    review: {
        type: Sequelize.STRING,
    },
    rate : {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate :{
            min: 0,
            max: 5
    }
}
})

module.exports = feedback;

