// function changeText(text){
//   element = document.getElementById("app");
//   element.innerHTML = text;
// };
//
// changeText("howdy");

(function(exports){

function NoteController(notelist){
  this.noteListView = new NoteListView(noteList);
};

NoteController.prototype.displayNotes = function(){
  var element = document.getElementById('app');
  element.innerHTML = this.noteListView.viewNotes();
}

exports.NoteController = NoteController;

})(this);
