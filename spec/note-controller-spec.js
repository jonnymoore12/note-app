describe('Note Controller', function(){
  it('Notes have Ids', function(){
    var note = new Note('Yo!');
    isTrue(note.id === note.getId());
  });
});
