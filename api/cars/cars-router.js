const express = require('express')
const Cars = require('./cars-model')
const { checkCarId } = require('./cars-middleware')
const router = require('express').Router()

router.get('/', (req, res, next) => {
  Cars.getAll()
    .then((car) => {
      res.json(car)
    })
    .catch(next())
})

router.get('/:id', (req, res, next) => {
    const {id} = req.params.id
    Cars.getById(id)
    .then(car => {
        res.json(car)
    })
   .catch( 
       next()

   ) 
})

router.post('/', (req, res, next) => {
    Cars.create(req.body)
    .then(newCar => {
        res.status(200).json
    })
    .catch(next())
console.log(req.body)

})

module.exports = router
