const express = require('express')
const Cars = require('./cars-model')
const { checkCarId } = require('./cars-middleware')
const router = require('express').Router()


router.get('/', (req,res,next) => {
    Cars.getAll()
    .then(car => {
        res.json(car)
    })
    .catch(

        next()
    )

    


})

router.getById, checkCarId, ('/:id', (req,res,next) => {

    
})

// router.post('/:id', (req,res,next) => {
    
// })

module.exports = router;

