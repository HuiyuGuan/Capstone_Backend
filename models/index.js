const User = require('./user');
const Item = require('./item');

User.hasMany(Item)
Item.belongsTo(User)


module.exports = {
    Item,
    User
}