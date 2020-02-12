function countOccurrences(string) {
  return _.countBy(string, function (num) {
    return num;
  });
}
console.log(countOccurrences('engineering'));
