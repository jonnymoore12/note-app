describe('Note',function(){
  it('can store text', function(){
    var note_instance = new Note("My favourite language is JavaScript");
    isTrue(note_instance.text === "My favourite language is JavaScript");
  });

  it('can display text', function(){
    var note_instance = new Note("My favourite language is JavaScript");
    isTrue(note_instance.getText() === "My favourite language is JavaScript");
  });

  it('have Ids', function(){
    var note = new Note('Yo!');
    isTrue(note.id === note.getId());
  });
});
