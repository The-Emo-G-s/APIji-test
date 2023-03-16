const router = require('express').Router();

router.use('emojis?access_key=1964210b221736f081d59668e9afaabcbf450755', require('./emojis'));

//add additional model routes here as you create them!

module.exports = router;