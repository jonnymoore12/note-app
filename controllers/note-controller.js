(function(exports){
  function NoteController(noteList){
    this.list = noteList;
  };

  NoteController.prototype._getAppElement = function () {
    return document.getElementById("app");
  };

  NoteController.prototype.insertHTML = function () {
    this.view = new NoteListView(this.list);
    this._getAppElement().innerHTML = this.view.viewNotes();
  };

  exports.NoteController = NoteController;
})(this);
