var assert = require("./asserts.js");
var NoteListView = require("../models/note-list-view.js").NoteListView;
var NoteList = require("../models/note-list-model.js").NoteList;

(function noteListViewInstantiatedWithNoteList (){
  var note_list = new NoteList("My note");
  var note_list_view = new NoteListView(note_list);
  assert.isTrue(note_list_view.viewNotes() === "<ul><li><div>My note</div></li></ul>")
})(this);
