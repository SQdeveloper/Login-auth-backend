const { jsonResponse } = require('./lib/jsonResponse');

const router = require('express').Router();

router.post('/', (req,res)=>{
    const { username, name, password } = req.body;

    if( !!!username || !!!name || !!!password ) {
        return res.status(400).json(jsonResponse(400, {
            error: 'Fields are missing'
        }))
    }

    res.status(200).json(200, {
        message: 'User created successful'
    })
})

module.exports = router;