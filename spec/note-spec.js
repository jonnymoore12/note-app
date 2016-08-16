var assert = require("./asserts");
var noteModelFile = require("../models/note-model.js");

(function testNoteCanStoreText() {
  var i = new noteModelFile.Note("My favourite language is JavaScript");
  assert.isTrue(i.text === "My favourite language is JavaScript");
})(this);

(function() {
  var i = new noteModelFile.Note("My favourite language is JavaScript");
  assert.isTrue(i.getText === "My favourite language is JavaScript");
})(this);
