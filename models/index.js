const User = require('./user');
const Item = require('./item');
const database = require('./database')

User.hasMany(Item)
Item.belongsTo(User)


module.exports = {
    Item,
    User,
    database
}