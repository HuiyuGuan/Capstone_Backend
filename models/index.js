const User = require('./user');
const Item = require('./item');
const database = require('./database');
const Order = require('./order');
const Category = require('./category');
const SellingList = require('./selllingList');

User.hasMany(Item)
Item.belongsTo(User)


module.exports = {
    Item,
    User,
    database,
    Order,
    Category,
    SellingList
}