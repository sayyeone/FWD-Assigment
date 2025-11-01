const filterData = (arr, searchValue) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) {
      result.push(arr[i]);
    }
  }
  return result;
}

let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(filterData(data_array, 5));
