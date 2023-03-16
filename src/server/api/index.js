const router = require('express').Router();
const cors = require('cors');

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

router.use(cors(corsOptions));

router.use('', require('./emojis'));

//add additional model routes here as you create them!

module.exports = router;