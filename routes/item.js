const router = require('express').Router()
const Item = require('../models/item')

router.get('/', async(req, res) => {
    try{
        const items = await Item.findAll()
        res.status(200).send(items)
    }catch(error){
        res.status(404).send(error.message)
    }
    }
)

router.post('/', async(req, res) => {
    try{
        const newItem = await Item.create(req.body)
        res.json(newItem)
    }catch (error){
        res.send(error.message)
    }
})

router.delete('/:item_id', async(req, res) => {
    try {
        const inputid = req.params.item_id;
        await Item.destroy({ where : { item_id : inputid } });
        res.status(200).json({
            outcome: `Deleted item with id ${inputid}.`
        })
    } catch (error) {
        res.send(error.message)
    }
})



module.exports = router;