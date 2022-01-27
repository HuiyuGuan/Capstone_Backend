const User = require('./user');
const Item = require('./item');
const database = require('./database');
const Order = require('./order');
const Category = require('./category');
const SellingList = require('./selllingList');
const Feedback = require('./feedback');
const PurchaseCart = require('./purchaseCart');

User.hasMany(Item)
Item.belongsTo(User)

User.hasMany(Order)
Order.belongsTo(User)

User.hasOne(PurchaseCart)
PurchaseCart.belongsTo(User)

User.hasMany(Feedback)
Feedback.belongsTo(User)

Item.hasMany(Feedback)
Feedback.belongsTo(Item)
//many to many or one to many?
Item.belongsToMany(Order)
Order.belongsToMany(Item)

Item.belongsToMany(PurchaseCart)
PurchaseCart.belongsToMany(Item)

Category.hasMany(Item)
Item.belongsTo(Category)

module.exports = {
    Item,
    User,
    database,
    Order,
    Category,
    SellingList,
    Feedback,
    PurchaseCart
}