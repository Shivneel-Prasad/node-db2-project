const router = require('express').Router()
const model = require('./cars-model')
const mw = require('./cars-middleware')

router.get('/', (req, res, next) => {
  model.getAll()
    .then(autos => {
      res.status(200).json(autos)
    })
    .catch(next)
})

router.get('/:id', mw.checkCarId, (req, res, next) => {
  const { id } = req.params
  model.getById(id)
    .then(auto => {
      res.json(auto)
    })
    .catch(next)
})

router.post('/', 
    mw.checkCarPayload, 
    mw.checkVinNumberUnique, 
    mw.checkVinNumberValid, 
    async (req, res, next) => {
    try {
        const newAuto = await model.create(req.body)
        res.status(201).json(newAuto)
    } catch (err){
        next(err)
    }
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message
    })
  })

module.exports = router