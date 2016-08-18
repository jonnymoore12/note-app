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

  // NoteController.prototype.submitListener = function () {
  //   document.addEventListener("submit", function(submitForm) {
  //   var text = document.getElementById("text").value
  //   submitForm.preventDefault();
  //   controller.list.createNote("text")
  //   controller.insertHTML()
  //   });
  // };

  exports.NoteController = NoteController;
})(this);
