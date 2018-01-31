import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchCount = 0;
    this.state = {
      data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
    }

    this.onClick = this.onClick.bind(this);
    this.binarySearch = this.binarySearch.bind(this);
  }

  linearSearch(input) {
    let searchCount = 0;
   for(let i = 0; i < this.state.data.length; i++) {
     if (this.state.data[i] === input) {
      searchCount++;
      return `${this.state.data[i]} successfully found. Search took ${searchCount} steps.`;
     }
     searchCount++;
   }
   return `${input} not found. Search took ${searchCount} steps.`;
  }

  binarySearch(array, input, start = 0, end = array.length) {
    this.searchCount++;
    // if (start === undefined) {
    //   start = 0;
    // }
    // if (end === undefined) {
    //   end = array.length;
    // }
    if (input > array[end - 1]) {
      let output = `${input} not found. Search took ${this.searchCount} steps.`;
      this.searchCount = 0;
      console.log('base case');
      return output;
    }

    if (start > end) {
      let output = `${input} not found. Search took ${this.searchCount} steps.`;
      this.searchCount = 0;
      console.log('base case');
      return output;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    if (item === input) {
      let output = `${input} at index ${index} successfully found. Search took ${this.searchCount} steps.`;
      this.searchCount = 0;
      return output;
    }
    else if (item < input) {
      return this.binarySearch(array, input, index + 1, end);
    }
    else if (item > input) {
      return this.binarySearch(array, input, start, index - 1);
    }

    this.searchCount = 0;
    // else {
    //   // console.log('input:', input);
    //   // console.log('index:', index);
    //   // console.log('item:', item);
    //   return `${input} not found. Search took ${this.state.searchCount} steps.`;
    // 
  };

  incrementSearchCount() {
    this.setState({
      searchCount: this.state.searchCount + 1
    })
  }


  onClick(e) {
    // console.log(`clicked linear with input`)
    // console.log(this.input.value)
    const input = parseInt(this.input.value, 10);
    if (e.target.className === 'linear') {
      console.log(this.linearSearch(input));
    } else {
      const data = this.state.data.sort((a,b) => a-b);
      console.log('HERE>>>>', data);
      console.log(this.binarySearch(data, input));
    }
    this.input.value = '';
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={(input) => {this.input = input; }}
        />
        <button
          type="button"
          className="linear"
          onClick={(e) => this.onClick(e)}>
          Linear Search
        </button>
        <button
          type="button"
          className="binary"
          onClick={(e) => this.onClick(e)}>
          Binary Search
        </button>
      </div>
    )

  }
}