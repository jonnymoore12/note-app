describe('Note List View', function(){
  it('can be instantiated with note list', function(){
    var note = new Note('hello');
    var note_list = new NoteList();
    note_list.pushNote(note);
    var note_list_view = new NoteListView(note_list);
    isTrue(note_list_view.viewNotes() === "<ul><li><div>hello</div></li></ul>");
  });
  it('shows only the first 20 characters of a note', function(){
    var note = new Note("Please remind me that i have to buy a gallon of milk tomorrow");
    var note_list = new NoteList();
    note_list.pushNote(note);
    var note_list_view = new NoteListView(note_list);
    isTrue(note_list_view.viewNotes() === "<ul><li><div>Please remind me tha</div></li></ul>");
  });
});
