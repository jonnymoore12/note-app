(function testNoteCanStoreText() {
  var note_instance = new Note("My favourite language is JavaScript");
  console.log("testNoteCanStoreText");
  assert.isTrue(note_instance.text === "My favourite language is JavaScript");
})(this);

(function testNoteCanDisplayText() {
  var note_instance = new Note("My favourite language is JavaScript");
  console.log("testNoteCanDisplayText");
  assert.isTrue(note_instance.getText() === "My favourite language is JavaScript");
})(this);
