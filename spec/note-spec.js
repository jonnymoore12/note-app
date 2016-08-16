var assert = require("./asserts");
var Note = require("../models/note-model.js").Note;


(function testNoteCanStoreText() {
  var note_instance = new Note("My favourite language is JavaScript");
  assert.isTrue(note_instance.text === "My favourite language is JavaScript");
})(this);

(function testNoteCanDisplayText() {
  var note_instance = new Note("My favourite language is JavaScript");
  assert.isTrue(note_instance.getText() === "My favourite language is JavaScript");
})(this);
