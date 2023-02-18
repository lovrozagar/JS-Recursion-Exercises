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

// BY RECURSION
function fibonacciRecursion(sequenceLength, sequence = [0, 1]) {
  if (sequence.length >= sequenceLength) {
    return sequence.slice(0, sequenceLength);
  }

  let currentNumber = sequence.at(-1) + sequence.at(-2);
  sequence.push(currentNumber);
  return fibonacciRecursion(sequenceLength, sequence);
}

console.log(fibonacciRecursion(8));
