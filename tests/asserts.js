function describeBlock(messageName, blockToCheck) {
  if (!messageName || !blockToCheck) {
    throw new Error("Message name or block is missing!")
  }
};

function isTrue(assertionToCheck) {
  if (!assertionToCheck) {
    throw new Error("Assertion fails: " + assertionToCheck + " is not truthy");
  }
};

function isFalse(assertionToCheck) {
  if (assertionToCheck) {
    throw new Error("Assertion fails: " + assertionToCheck + " is not falsey");
  }
};
