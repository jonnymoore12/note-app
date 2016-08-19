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


  exports.NoteController = NoteController;
})(this);
