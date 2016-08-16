var NoteList = require("./note-list-model.js").NoteList;
var note_list = new NoteList();


console.log(note_list.notes);
(function(exports){
  function NoteListView(note_list){
    this.note_list_model = note_list;
  }

  NoteListView.prototype.viewNotes = function () {
    var notes_array = this.note_list_model.notes
    notes_array.forEach(function(note){
      return("<ul><li><div>" + note.text + "</div></li></ul>");
    });
  };

  exports.NoteListView = NoteListView;

})(this);
