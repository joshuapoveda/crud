const Note = require("../models/noteModel");

//create a note
const postNote = async (req, res) => {
  const { title, body, eng } = req.body;

  try {
    const createdNote = await Note.create({
      title,
      body,
      eng,
    });

    res.json({ note: createdNote });
  } catch (err) {
    res.status(500).json({ error: "Failed to create the note." });
  }
};
//get all notes
const getNotes = async (req, res) => {
  try {
    //if key and value match, you can represent them as one as seen in
    //example above (postNote)
    const allNotes = await Note.find();
    res.json({ notes: allNotes });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch notes from database." });
  }
};

//get all true notes
const getTrueNotes = async (req, res) => {
  try {
    const notes = await Note.find({ eng: true });
    res.json({ notes });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch notes from database." });
  }
};

//get one note
const getOneNote = async (req, res) => {
  const { id } = req.params;
  //or const noteId = req.params.id
  try {
    const note = await Note.findById(id);
    res.json({ note });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch note from database." });
  }
};

//update note
const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, body, eng } = req.body;

  try {
    await Note.findByIdAndUpdate(id, {
      title,
      body,
      eng,
    });

    //Finds updated note
    const newNote = await Note.findById(id);

    res.json({ note: newNote });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch and update note from database." });
  }
};

//delete note
const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    await Note.findByIdAndDelete(id);
    res.json({ status: "deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch and delete note from database." });
  }
};

module.exports = {
  postNote,
  getNotes,
  getOneNote,
  updateNote,
  getTrueNotes,
  deleteNote,
};
