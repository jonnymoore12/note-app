(function(exports) {

  id_counter = 0
  function Note(string) {
    this.text = string;
    id_counter += 1;
    this.id = id_counter;
  }

  Note.prototype.getText = function () {
    return(this.text);
  };

  Note.prototype.getId = function () {
    return(this.id);
  };

  exports.Note = Note;

})(this);
