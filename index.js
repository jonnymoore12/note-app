var noteList = new NoteList();
noteList.createNote("Another note");
noteList.createNote("And again");
noteList.createNote("To do list: 1.Weekend challenge, 2. Walk the dog.");
var controller = new NoteController(noteList);
controller.insertHTML();
controller.loadChanges();
