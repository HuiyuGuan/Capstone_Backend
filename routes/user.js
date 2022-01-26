const router = require('express').Router()
const Item = require('../models/item')
const User = require('../models/user')
const database = require('../models/database')

router.get('/', async(req, res) => {
    try{
        const users = await User.findAll()
        res.status(200).send(users)
    }catch(error){
        res.status(404).send(error.message)
    }
    }
)

router.post('/', async(req, res) => {
    try{
        const newUser = await User.create(req.body)
        res.json(newUser)
    }catch (error){
        res.send(error.message)
    }
})

module.exports = router;