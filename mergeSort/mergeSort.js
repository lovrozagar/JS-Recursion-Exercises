function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid);

  return sort(mergeSort(leftArray), mergeSort(rightArray));
}

function sort(leftArray, rightArray) {
  const sortedArray = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }

  return sortedArray.concat(leftArray.slice().concat(rightArray.slice()));
}

console.log(mergeSort([2, 3, 56, 7 ,91, 1314, 54, 90, 4, 8, 5, 11, 36]))
