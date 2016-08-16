var Note = require("./note-model.js").Note;
var new_note = new Note("test");

(function(exports) {
  // Originally no argument on instantiation, but we changed things a bit
  function NoteList(new_note) {
    this.notes = [];
    pushNote(new_note);
  }

  NoteList.prototype.pushNote = function (note) {
    this.notes.push(note);
  };

  NoteList.prototype.createNote = function (text) {
    this.notes.push(new Note(text));
  };

  exports.NoteList = NoteList;
})(this);
