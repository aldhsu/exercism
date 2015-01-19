module.exports = function(word) {
  return {
    word: word,

    matches: function() {
      var words = this.flatten(arguments);
      var word = this.word.toLowerCase().split("").sort();

      return words.filter(function(w) {
        return this.arrayCompare(w.toLowerCase().split("").sort(), word) && this.word !== w.toLowerCase()
      }.bind(this))
    },

    arrayCompare: function(array1, array2) {
      if (array1.length !== array2.length) {return false }

      return !array1.some(function(el, index) {
        return el !== array2[index]
      });
    },

    flatten: function(array) {
      var merged = [];
      merged = merged.concat.apply(merged, array);

      return merged
    }
  }
};

