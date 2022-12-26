const router = require('express').Router()
const controller = require('../controllers/controller')

router.post('/upload', controller.upload)

router.get('/test', (req, res) => {
    res.send('hello')
})

module.exports = router;