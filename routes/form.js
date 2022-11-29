var express = require('express');
var router = express.Router();
router.use(express.json())

router.get('/', (req, res) => {

    res.render('form', {
        name: req.params.name,
        email: req.params.email,
        address: req.params.address
    });
})

module.exports = router;