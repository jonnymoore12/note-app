var noteList = new NoteList();
noteList.createNote("To do list: 1.Weekend challenge, 2. Walk the dog.");
var controller = new NoteController(noteList);
controller.insertHTML();
