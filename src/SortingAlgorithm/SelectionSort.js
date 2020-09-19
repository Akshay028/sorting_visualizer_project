export function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;

  for (let i = 0; i < array.length; i++) {
    let minElement = array[i];
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (array[j] < minElement) {
        minElement = array[j];
        minIndex = j;
      }
      animations.push([i, i]);
    }
    array = swap(array, i, minIndex);
    animations.push([i, minIndex]);
    animations.push([i, minIndex]);
    animations.push([i, minIndex]);
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
