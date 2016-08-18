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

  it('displays a note on click', function(){
    var noteList = new NoteList();
    noteList.createNote('individual link');
    var controller = new NoteController(noteList);
    var singleNoteView = new NoteView(noteList.getNotes()[0]);
    var element = document.createElement("div",{id: "app"});
    controller._getAppElement = function(){
      return element;
    };
    controller.insertHTML();
    window.addEventListener("hashchange", controller.showNoteForCurrentPage);
    // function showNoteForCurrentPage(){
    //   controller.showNote(controller.getNoteFromURL(window.location));
    // };
    element.getElementsByTagName("a")[0].click();
    window.setTimeout(function(){
    var result = singleNoteView.displayNote();
    var tag = element;
     isTrue(result === tag.innerHTML);
    }, 500);
  });
});
