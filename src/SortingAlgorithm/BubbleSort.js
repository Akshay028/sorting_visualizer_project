export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (array[i] > array[j]) {
        array = swap(array, i, j);
        animations.push([i, j]);
      } else {
        animations.push([-1, -1]);
      }
    }
  }

  return animations;
}

function swap(mainArray, leftIndex, rightIndex) {
  [mainArray[leftIndex], mainArray[rightIndex]] = [
    mainArray[rightIndex],
    mainArray[leftIndex],
  ];
  return mainArray;
}
