(function(exports) {
  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.pushNote = function (note) {
    this.notes.push(note);
  };

  NoteList.prototype.createNote = function (text) {
    this.notes.push(new Note(text));
  };

  NoteList.prototype.getNotes = function () {
    return this.notes;
  };

  NoteList.prototype.getNoteById = function(id){
   var noteFound;
   this.notes.forEach(function(note){
     if(note.id === id){
       noteFound = note;
     }
   });
   return noteFound;
 };


  exports.NoteList = NoteList;
})(this);
