// FIBONACCI SEQUENCE

// BY LOOP
function fibonacciLoop(sequenceLength) {
  let sequence = [0, 1]; // FIRST TWO NUMBERS

  let currentNumber;
  for (let i = 2; i < sequenceLength; i += 1) {
    currentNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(currentNumber);
  }
  return sequence;
}

console.log(fibonacciLoop(8));
