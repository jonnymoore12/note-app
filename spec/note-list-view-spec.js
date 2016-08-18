describe('Note List View', function(){
  it('can be instantiated with note list', function(){
    var noteList = new NoteList();
    noteList.createNote('hello');
    var note_list_view = new NoteListView(noteList);
    var result = "<ul><li><div><a href=\"#" +
                noteList.getNotes()[0].id +
                "\">hello</a></div></li></ul>";
    isTrue(note_list_view.viewNotes() === result);
  });
  it('shows only the first 20 characters of a note', function(){
    var noteList = new NoteList();
    noteList.createNote("Please remind me that i have to buy a gallon of milk tomorrow");
    var note_list_view = new NoteListView(noteList);
    var result = "<ul><li><div><a href=\"#" +
                noteList.getNotes()[0].id +
                "\">Please remind me tha</a></div></li></ul>";
    isTrue(note_list_view.viewNotes() === result);
  });
  it('includes a link to a single note', function(){
    var noteList = new NoteList();
    noteList.createNote('I luurrrv Ruby');
    var view = new NoteListView(noteList);
    var result = "<ul><li><div><a href=\"#" +
                noteList.getNotes()[0].id +
                "\">I luurrrv Ruby</a></div></li></ul>";
    isTrue(view.viewNotes() === result);
  });
});
