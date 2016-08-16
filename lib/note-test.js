var assert = require("./asserts");
var notes = require("./note");

function createsEmptyNote() {
  var note = new Note();
  assert.isTrue(note);
};

createsEmptyNote();
