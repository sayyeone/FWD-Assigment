const rotate = (arr, num) => {
  let newArr = [...arr];
  for(let i = 0; i < num; i++) {
    let last = newArr.pop();
    newArr.unshift(last);
  }
  return newArr;
};

let angka = [3, 4, 5, 6, 7, 8, 9];
console.log('array: ', angka);
console.log('rotate 3: ', rotate(angka, 3));
