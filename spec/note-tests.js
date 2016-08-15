var assert = require("./assert.js")
var Note = require("../models/note-model.js")

function testNoteCanStoreText(){
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.text === "My favourite language is JavaScript");
};
