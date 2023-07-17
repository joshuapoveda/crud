const express = require('express')

const {
    postNote,
    getNotes,
    getTrueNotes,
    getOneNote,
    updateNote,
    deleteNote
} = require("../controllers/noteControllers")

const router = express.Router()

router.post('/note', postNote)

router.get('/notes', getNotes)

router.get('/true', getTrueNotes)

router.get('/notes/:id', getOneNote)

router.put('/notes/:id', updateNote)

router.delete('/notes/:id', deleteNote)

module.exports = router