const router = require('express').Router()
const Feedback = require('../models/feedback')
const database = require('../models/database')

router.get('/', async(req, res) => {
    try{
        const feedback = await Feedback.findAll()
        res.status(200).send(feedback)
    }catch(error){
        res.status(404).send(error.message)
    }
    }
)

router.post('/', async(req, res) => {
    try{
        const newFeedback = await Feedback.create(req.body)
        res.json(newFeedback)
    }catch (error){
        res.send(error.message)
    }
})

module.exports = router;
