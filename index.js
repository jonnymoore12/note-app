var note = new Note("I'm not telling you my fave drink");
var noteList = new NoteList();
noteList.pushNote(note);
var controller = new NoteController(noteList);
controller.displayNotes();
