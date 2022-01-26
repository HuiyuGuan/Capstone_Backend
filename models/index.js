const User = require('./user');
const Item = require('./item');
const database = require('./database');
const Order = require('./order');
const Category = require('./category');
const SellingList = require('./selllingList');
const feedback = require('./feedback');
const purchaseCart = require('./purchaseCart');

User.hasMany(Item)
Item.belongsTo(User)


module.exports = {
    Item,
    User,
    database,
    Order,
    Category,
    SellingList,
    feedback,
    purchaseCart
}