var assert = require("./asserts.js");
var NoteListView = require("../models/note-list-view.js").NoteListView;
var NoteList = require("../models/note-list-model.js").NoteList;
var Note = require("../models/note-model.js").Note;




(function noteListViewInstantiatedWithNoteList(){
  var note = new Note('hello');
  var note_list = new NoteList();
  // Shall we allow our NoteList to be instantiated with a new note?
  // How about NoteList.createNote. Why does that fuck up??
  note_list.pushNote(note);
  var note_list_view = new NoteListView(note_list);
  assert.isTrue(note_list_view.viewNotes() === "<ul><li><div>hello</div></li></ul>");
})(this);
