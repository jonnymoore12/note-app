// require("./asserts");

function describeBlock(messageName, blockToCheck) {
  if (!messageName || !blockToCheck) {
    throw new Error("Message name or block is missing!");
  } else {
    return blockToCheck;
  }
};

function isTrue(assertionToCheck) {
  if (!assertionToCheck) {
    throw new Error("Assertion fails: " + assertionToCheck + " is not truthy");
  } else {
    process.stdout.write(`${"Test passes"}\n`);
  }
};

describeBlock("tests if 1 and 1 equals 2", function(){
  isTrue(1 + 1 === 2);
});

// describeBlock("hello", function(){});
