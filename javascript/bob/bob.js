var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (input.trim() === "") {
    return "Fine. Be that way!"
  } else if ((input.toUpperCase() === input) && (input.match(/[A-Z]/g))) {
    return "Whoa, chill out!"
  } else if (input.indexOf("?") === (input.length -1)) {
    return "Sure."
  } else {
    return "Whatever."
  }
};

module.exports = Bob;
