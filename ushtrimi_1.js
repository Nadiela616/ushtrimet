const values = [0, 2, 5, 4, 1, 0, 3, 3, 6, 7];
var doubled = [];

for (var i = 0; i < values.length; i++) {
  doubled.push(values[i] * 2);
}
for (var i = 1; i < values.length; i++) {
  if (values[i] === doubled[i + 1]) {
    doubled[i] = 0;
  }
}

console.log(values);
console.log(
  doubled.sort(function (a, b) {
    return a - b;
  })
);
