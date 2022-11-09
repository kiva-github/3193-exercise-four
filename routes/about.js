const express = require("express");
const router = express.Router();

router.use((req,  res, next) => {
    console.log('Time: ', Date.now());
    next();
})

router.get('/', (req, res) => {
    res.send('About Page');
})

router.get('/me', (req, res) => {
    res.send('About Me Page')
})

module.exports = router;