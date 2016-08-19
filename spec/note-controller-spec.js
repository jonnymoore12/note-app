describe('Note Controller', function(){
  // NOW THAT WE'RE PASSING A VIEW IN, CANNOT TEST THIS.
  // it('takes a note list model upon instantiation', function(){
  //   var notelist = new NoteList();
  //   notelist.createNote('yo');
  //   var controller = new NoteController(notelist);
  //   isTrue(controller.view === notelist);
  // });

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
    isTrue(controller._getAppElement().innerHTML === view.viewNotes());
  });

  



});
