const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

// Note Model

const Note = require('../../models/Note');

// @route GET api/notes
// @desc  Get All Notes
// @acess Public
router.get('/', (req, res) => {
    Note.find()
        .sort({ date: -1 })
        .then((notes) => res.json(notes));
});

// @route POST api/notes
// @desc  Create an Note
// @acess Private
router.post('/', auth, (req, res) => {
// router.post('/', (req, res) => {

    const newNote = new Note({
        user: req.body.user,
        title: req.body.title,
        body: req.body.body,
        prompt: req.body.prompt
    });

    newNote.save()
        .then(note => res.json(note));
});

// @route DELETE api/notes
// @desc  Delete an Note
// @acess Private
router.delete('/:id', auth, (req, res) => {
    Note.findById(req.params.id)
        .then(note => note.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

// export default router;
module.exports = router;