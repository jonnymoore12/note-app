describe('Note Controller', function(){
  it('takes a note list model upon instantiation', function(){
    var notelist = new NoteList();
    notelist.createNote('yo');
    var controller = new NoteController(notelist);
    isTrue(controller.list === notelist);
  });

  it('HTML from Note List View is inserted into "app" element', function(){
    var notelist = new NoteList();
    notelist.createNote('hello');
    var view = new NoteListView(notelist);
    var controller = new NoteController(notelist);
    var element = document.createElement("div",{id: "app"});
    controller._getAppElement = function(){
      return element;
    };
    controller.insertHTML();
    isTrue(view.viewNotes() === element.innerHTML);
  });
});

// describe('Note Controller', function(){
//   it('Notes have Ids', function(){
//     var note = new Note('Yo!');
//     isTrue(note.id === note.getId());
//   });
// });
