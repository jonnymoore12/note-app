var assert = require("./asserts");
var NoteList = require("../models/note-list-model.js").NoteList;
var Note = require("../models/note-model.js").Note;


(function listHasNotes() {
  var note = new Note("tester");
  var note_list = new NoteList();
  note_list.pushNote(note);
  assert.isTrue(note_list.notes.includes(note));
})(this);

(function canGetNotes(){
  var note = new Note("hello");
  var note_list = new NoteList();
  note_list.pushNote(note);
  assert.isTrue(note_list.getNotes()[0] === note);
})(this);


(function canCreateNote(){
  var note_list = new NoteList();
  note_list.createNote("Text");
  var note_element = note_list.notes[0];
  assert.isTrue(note_element.text === "Text");
})(this);
