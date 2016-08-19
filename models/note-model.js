(function(exports) {

  id_counter = 0;
  function Note(string) {
    this.text = string;
    this.id = id_counter;
    id_counter += 1;
  };

  Note.prototype.getText = function () {
    return(this.text);
  };

  Note.prototype.getId = function () {
    return(this.id);
  };

  exports.Note = Note;

})(this);
