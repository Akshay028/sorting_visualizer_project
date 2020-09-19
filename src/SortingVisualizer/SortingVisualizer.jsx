import React from "react";
import { getMergeSortAnimations } from "../SortingAlgorithm/MergeSort.js";
import { getQuickSortAnimations } from "../SortingAlgorithm/QuickSort.js";
import { getBubbleSortAnimations } from "../SortingAlgorithm/BubbleSort.js";
import { getSelectionSortAnimations } from "../SortingAlgorithm/SelectionSort.js";
import "./SortingVisualizer.css";

const ANIMATION_SPEED_MS = 2;

const NUMBER_OF_ARRAY_BARS = 120;

const PRIMARY_COLOR = "turquoise";

const SECONDARY_COLOR = "red";

export class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 500));
    }
    this.setState({ array });
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    const array1 = this.state.array;
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 4 === 0 || i % 4 === 1;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else if (animations[i][0] !== -1) {
        setTimeout(() => {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barTwoIdx].style;
          const barTwoStyle = arrayBars[barOneIdx].style;
          let height1 = array1[barOneIdx];
          let height2 = array1[barTwoIdx];

          barOneStyle.height = `${height2}px`;
          barTwoStyle.height = `${height1}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  bubbleSort() {
    const array2 = this.state.array;
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 === 0 || i % 3 === 1;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else if (animations[i][0] !== -1) {
        setTimeout(() => {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barTwoIdx].style;
          const barTwoStyle = arrayBars[barOneIdx].style;
          let height1 = array2[barOneIdx];
          let height2 = array2[barTwoIdx];

          barOneStyle.height = `${height2}px`;
          barTwoStyle.height = `${height1}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  selectionSort() {
    const array3 = this.state.array;
    const animations = getSelectionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 === 0 || i % 3 === 1;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barTwoIdx].style;
          const barTwoStyle = arrayBars[barOneIdx].style;
          let height1 = array3[barOneIdx];
          let height2 = array3[barTwoIdx];

          barOneStyle.height = `${height2}px`;
          barTwoStyle.height = `${height1}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  render() {
    const { array } = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}
          ></div>
        ))}
        <button className="myButton" onClick={() => this.resetArray()}>
          Generate New Array
        </button>
        <button className="myButton" onClick={() => this.mergeSort()}>
          Merge Sort
        </button>
        <button className="myButton" onClick={() => this.quickSort()}>
          Quick Sort
        </button>
        <button className="myButton" onClick={() => this.bubbleSort()}>
          Bubble Sort
        </button>
        <button className="myButton" onClick={() => this.selectionSort()}>
          Selection Sort
        </button>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
