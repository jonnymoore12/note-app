// var Note = require("./note-model.js").Note;
var new_note = new Note("test");

(function(exports) {
  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.pushNote = function (note) {
    this.notes.push(note);
  };

  NoteList.prototype.createNote = function (text) {
    this.notes.push(new Note(text));
  };

  NoteList.prototype.getNotes = function () {
    return this.notes;
  };


  exports.NoteList = NoteList;
})(this);
