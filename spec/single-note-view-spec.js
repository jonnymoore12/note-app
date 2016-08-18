describe('Single Note View', function(){
  it('can display notes', function(){
    var note = new Note('happy dog');
    var note_view = new NoteView(note);
    isTrue(note_view.displayNote() === '<div>happy dog</div>');
  });
});
