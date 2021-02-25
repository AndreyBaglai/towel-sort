
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!arguments.length || !matrix.length) return [];

  return matrix.reduce((result, nextArr, idx) => {
    if (idx % 2 ) {
        return result.concat(nextArr.reverse());
    }

    return result.concat(nextArr);
  });
}
