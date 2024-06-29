const { jsonResponse } = require('./lib/jsonResponse');

const router = require('express').Router();

router.post('/', (req,res)=>{
    const { username, password } = req.body;

    if(!!!username || !!!password ) {
        return res.status(400).json(jsonResponse(400,{
            error: 'Complete the fields'
        }))
    }

    const accessToken = 'accessToken';
    const refreshToken = 'refreshToken';
    const user = {
        id: 1,
        username: 'jeff_tlv',
        name: 'jefferson'
    }

    res.status(200).json(200, {
        user, accessToken, refreshToken
    })
})

module.exports = router;