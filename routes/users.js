var express = require('express');
var router = express.Router();
router.use(express.json())

let users = { items: [] }

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});


router.post('/', (req, res) => {
  users.items.push(req.body)
  console.log(req.body)
  console.log(users)
  res.send('Ok!');
})

router.delete('/', (req, res) => {
  console.log(req.body)
  let index = users.items.findIndex(e=> e.mail == req.body.email)
  console.log(index)
  users.items.splice(index, 1)
  console.log(users)
  res.send('Ok!');
})

module.exports = router;
