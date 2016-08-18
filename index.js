var noteList = new NoteList();
noteList.createNote("Favourite drink: cola");
var controller = new NoteController(noteList);
controller.insertHTML();
