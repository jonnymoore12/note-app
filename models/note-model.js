(function(exports) {

  function Note(string){
    this.text = string
  };

  Note.prototype.NoteCanStoreText = function (arguments) {
    return this.text;
  };
  
  module.exports = Note;

})(this);
