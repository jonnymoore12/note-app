var assert = require("./asserts");
var NoteList = require("../models/note-list-model.js").NoteList;
var Note = require("../models/note-model.js").Note;


(function testThatListHasNotes() {
  // We were coming back to this, changing NoteList to be
  // instantiated with an argument.
  var note = new Note("tester");
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
