(function noteListViewInstantiatedWithNoteList(){
  var note = new Note('hello');
  var note_list = new NoteList();
  // Shall we allow our NoteList to be instantiated with a new note?
  // How about NoteList.createNote. Why does that fuck up??
  note_list.pushNote(note);
  var note_list_view = new NoteListView(note_list);
  console.log("noteListViewInstantiatedWithNoteList");
  assert.isTrue(note_list_view.viewNotes() === "<ul><li><div>hello</div></li></ul>");
})(this);
