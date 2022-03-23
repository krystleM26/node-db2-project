const Cars = require('./cars-model')

const checkCarId = (req, res, next) => {
  const { id } = req.params
  Cars.getById(id)
  .then(car => {
    if(car == null) {
      res.status(404).json({
        message: `car with id ${id} is not found`
      })
    } else {
      next()
    }
    
  })
 
}

const checkCarPayload = (req, res, next) => {
  Cars.getAll()
  .then( car=> {
    if (!car) {
      res.status(400).json({ message: " Field is missing " })
    } else {
      next()
    }
  })
}

const checkVinNumberValid = (req, res, next) => {
  
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberValid,
}