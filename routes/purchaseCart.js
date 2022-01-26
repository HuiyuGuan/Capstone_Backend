const router = require('express').Router()
const PurchaseCart = require('../models/purchaseCart')
const database = require('../models/database')

router.get('/', async(req, res) => {
    try{
        const purchaseCarts = await PurchaseCart.findAll()
        res.status(200).send(purchaseCarts)
    }catch(error){
        res.status(404).send(error.message)
    }
    }
)

router.post('/', async(req, res) => {
    try{
        const newPurchaseCart = await PurchaseCart.create(req.body)
        res.json(newPurchaseCart)
    }catch (error){
        res.send(error.message)
    }
})

module.exports = router;
