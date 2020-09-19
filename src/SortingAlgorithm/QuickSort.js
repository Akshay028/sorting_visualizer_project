export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  QuickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function QuickSortHelper(mainArray, startIdx, endIdx, animations) {
  if (startIdx < endIdx) {
    let index = partition(mainArray, startIdx, endIdx, animations);
    QuickSortHelper(mainArray, startIdx, index - 1, animations);
    QuickSortHelper(mainArray, index + 1, endIdx, animations);
  }
}

function partition(mainArray, startIdx, endIdx, animations) {
  let pivot = mainArray[endIdx];
  let i = startIdx - 1;
  for (let j = startIdx; j < endIdx; j++) {
    animations.push([j, endIdx]); // to change the color
    animations.push([j, endIdx]); // to revert the color
    if (mainArray[j] < pivot) {
      i++;
      mainArray = swap(mainArray, i, j);
      animations.push([i, j]);
      animations.push([-1, -1]);
    } else {
      animations.push([-1, -1]); // 0 indicates that we don't have to swap these values
      animations.push([-1, -1]);
    }
  }
  mainArray = swap(mainArray, i + 1, endIdx);
  animations[animations.length - 1] = [i + 1, endIdx]; // positioning of pivot to its correct position
  return i + 1;
}

function swap(mainArray, leftIndex, rightIndex) {
  [mainArray[leftIndex], mainArray[rightIndex]] = [
    mainArray[rightIndex],
    mainArray[leftIndex],
  ];
  return mainArray;
}
