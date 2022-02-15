const router = require('express').Router()


router.get('/', (req, res, next) => {

})

router.get('/:id', (req, res, next) => {
    
})

router.post('/', (req, res, next) => {
    
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message
    })
  })

module.exports = router