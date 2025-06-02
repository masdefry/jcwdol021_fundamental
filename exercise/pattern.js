function Pattern(s) {
  let output = '';

  for (let i = 1; i <= s; i++) {
    for (let j = 1; j <= s; j++) {
      output += '*';
    }
    output += '\n';
  }

  return output;
}

const result = Pattern(3);
console.log(result);
