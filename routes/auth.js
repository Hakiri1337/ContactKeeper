const express = require('express')
const router = express.Router()
const config = require('config')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
// @route GET api/auth
// @desc Get logged in user
// @acess Private

router.get('/', (res, req) =>
    res.send("Get Request"))


// @route POST api/users
// @desc Auth user & get token
// @acess Public

router.post('/', [check('email', 'Please include a valid email').isEmail(),
check('password', 'Password is required').exists()], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ msg: "Invalid Credentials" })
        }
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' })
        }
        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 360000
        }, (err, token) => {
            if (err) throw err
            res.json({ token })
        })
    }
    catch (err) {
        console.error(err)
        res.status(500).send("Server error")

    }

})
module.exports = router