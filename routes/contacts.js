const express = require('express')
const router = express.Router()

// @route Get api/contacs
// @desc get contact
// @acess Private

router.get('/', (req, res) => {
    res.send('Get all contacts')
})

// @route Post api/contacs
// @desc Add new contact
// @acess Private
router.post('/', (req, res) => {
    res.send('add Contact')
})


// @route Put api/contacs/:id
// @desc Uptade Contact
// @acess Private
router.put('/:id', (req, res) => {
    res.send('Update contact')
})

// @route Delete api/contacs/:id
// @desc Delete Contact
// @acess Private
router.delete('/:id', (req, res) => {
    res.send('Delete contact')
})

module.exports = router