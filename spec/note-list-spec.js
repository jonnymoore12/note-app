var assert = require("./asserts");
var NoteList = require("../models/note-list-model.js").NoteList;
var Note = require("../models/note-model.js").Note;


(function testThatListHasNotes() {
  var note = new Note();
  var note_list = new NoteList();
  note_list.pushNote(note);
  assert.isTrue(note_list.notes.includes(note));
})(this);

(function canCreateaNote(){
  var note_list = new NoteList();
  note_list.createNote("Text");
  var note_element = note_list.notes[0];
  assert.isTrue(note_element.text === "Text");
})(this);
