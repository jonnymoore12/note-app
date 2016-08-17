(function(exports){

  function NoteView(note){
    this.note = note;
  };

  NoteView.prototype.displayNote = function () {
    return "<div>" + this.note.getText() + "</div>"
  };

  exports.NoteView = NoteView;
})(this);
