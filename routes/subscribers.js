const express = require('express')
const router = express.Router()
const Subscriber = require('../models/model')

// get all
router.get('/', async(req,res) => {
    try {
        const subscribers = await Subscriber.find()
        res.send(subscribers)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

// get one
router.get('/:id', (req,res) => {
    console.log(req.params.id)
})

// create one
router.post('/', async(req,res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribed: req.body.subscribed
    })
    try {
        const newSubscriber = await Subscriber.save()
    } catch(err) {
        res.status(201).json({message:err.message})
    }
})
// update one
router.patch('/', (req,res) => {

})
//delete one
router.delete('/', (req,res) => {

})

module.exports = router