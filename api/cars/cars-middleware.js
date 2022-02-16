const model = require('./cars-model')
const vinValidator = require('vin-validator')

const checkCarId = (req, res, next) => {
  const { id } = req.params
  model.getById(id)
    .then(auto => {
      if(!auto) {
        res.status(404).json({
          status: 404, 
          message: `car with id ${id} is not found`,
        })
      } else {
        req.auto = auto
        next()
      }
    })
    .catch(next)
}

const checkCarPayload = async (req, res, next) => {
  try {
    const { vin, make, model, mileage, title, transmission } = req.body
    if(!vin){
    res.status(400).json({ 
      status: 400, 
      message: 'vin is missing',
    })
    } else if (!make){
      res.status(400).json({ 
        status: 400, 
        message: 'make is missing',
      })
    } else if (!model){
      res.status(400).json({ 
        status: 400, 
        message: 'model is missing',
      })
    } else if (!mileage) {
      res.status(400).json({ 
        status: 400, 
        message: 'mileage is missing',
      })
    } else if (!title) {
      res.status(400).json({ 
        status: 400, 
        message: 'title is missing',
      })
    } else if (!transmission) {
      res.status(400).json({ 
        status: 400, 
        message: 'transmission is missing',
      })
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }  
}

const checkVinNumberValid = async (req, res, next) => {
  try {
    const { vin } = req.body
    if(vinValidator.validate(vin)){
      next()
    } else {
      res.status(400).json({
        status: 400, 
        message: `vin ${vin} is invalid`
      })
    }
  } catch (err) {
    next(err)
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try {
    const { vin } = req.body
    const existing = await model.getByVinId(vin)
      if(existing){
        res.status(400).json({  
          status: 400, 
          message: `vin ${vin} already exists`
        })
      } else {
        next()
      }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}