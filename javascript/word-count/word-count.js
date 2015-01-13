var word = function(phrase) {
  var dict = {};
  phrase.trim().match(/\S+/g).forEach(function(word) {
    if (dict[word] && (typeof dict[word] === "number")) {
      dict[word] += 1;
    } else {
      dict[word] = 1;
    }
  });

  return dict
};


module.exports = word;
