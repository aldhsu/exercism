module.exports = {
  compute: function(strand1, strand2) {
    if (strand1.length !== strand2.length) {
      throw new Error("DNA strands must be of equal length.")
    }

    hamming = 0;

    strand1.split("").forEach(function(element, index){
      if (element !== strand2[index]) {
        hamming += 1;
      }
    });

    return hamming
  }
}


