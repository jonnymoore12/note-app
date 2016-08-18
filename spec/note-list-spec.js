describe('Note List', function(){
  it('has notes', function(){
    var note = new Note("tester");
    var note_list = new NoteList();
    note_list.pushNote(note);
    isTrue(note_list.notes.includes(note));
  });
  it('can get notes', function(){
    var note = new Note("hello");
    var note_list = new NoteList();
    note_list.pushNote(note);
    isTrue(note_list.getNotes()[0] === note);
  });
  it('can create note and push into list', function(){
    var note_list = new NoteList();
    note_list.createNote("Text");
    var note_element = note_list.notes[0];
    isTrue(note_element.text === "Text");
  });
});
