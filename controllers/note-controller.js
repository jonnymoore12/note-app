(function(exports){
  function NoteController(noteList){
    this.view = new NoteListView(noteList);
  };

  NoteController.prototype._getAppElement = function () {
    return document.getElementById("app");
  };

  NoteController.prototype.insertHTML = function () {
    this._getAppElement().innerHTML = this.view.viewNotes();
  };

  NoteController.prototype.getNoteFromId = function () {
    var id = window.location.hash.split("#")[1];
    return this.view.getNoteList().notes[id];
  };

  NoteController.prototype.showNote = function (note) {
    singleNoteView = new NoteView(note);
    // console.log("singleNoteView:", singleNoteView);
    finalNoteHTML = singleNoteView.displayNote();
    console.log("finalNoteHTML:", finalNoteHTML);

    document
      .getElementById("app2").innerHTML = "yo!";
  };

  NoteController.prototype.loadChanges = function () {
    var note = this.getNoteFromId();
    window.addEventListener("hashchange", this.showNote(note));
  };

  exports.NoteController = NoteController;
})(this);
