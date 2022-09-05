const wordSearch = (letters, word) => {
  if (letters.length === 0) {
      return false
  }
  const horizontalJoin = letters.map((ls) => ls.join(''));
  const verticalJoin = letters[0].map((column, index) =>
    letters.map((row) => row[index])
  );
  const verticalFlip = verticalJoin.map((ls) => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word))
      return true;
    else {
      for (l of verticalFlip) {
        for (l of verticalFlip) {
          if (l.includes(word))
            return true;
        }

      }
    }
  }
  return false;
};


module.exports = wordSearch;



