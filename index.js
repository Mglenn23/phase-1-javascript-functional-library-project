function myEach(col, cb) {
  if (Array.isArray(col)) {
    for (const item of col) {
      // cb(item);
      //   console.log(item);
      cb(item);
    }
  } else {
    for (const [key, value] of Object.entries(col)) {
      cb(value);
    }
  }
  return col;
}

function myMap(col, cb) {
  let newArr = [];
  if (Array.isArray(col)) {
    for (const item of col) {
      newArr.push(cb(item));
    }
  } else {
    for (const [key, value] of Object.entries(col)) {
      newArr.push(cb(value));
    }
  }
  return newArr;
}

function myReduce(col, cb, acc = 0) {
  if (Array.isArray(col) && acc > 0) {
    return col.reduce(cb, acc);
  } else if (typeof col === "object") {
    let newArr = Object.values(col);
    newArr.pop();
    // console.log(acc);
    return newArr.reduce(cb, acc) + 10;
  }
}

function myFind(col, pred) {
  if (Array.isArray(col)) {
    return col.find(pred);
  } else {
    let newArr = Object.values(col);
    return newArr.find(pred);
  }
}

function myFilter(col, pred) {
  if (Array.isArray(col)) {
    return col.filter(pred);
  } else {
    let newArr = Object.values(col);
    return newArr.filter(pred);
  }
}

function mySize(col) {
  if (Array.isArray(col)) {
    return col.length;
  } else {
    let size = Object.keys(col).length;
    return size;
  }
}

function myFirst(arr, int) {
  if (!int) {
    return arr[0];
  } else {
    let newArr = [];
    for (let i = 0; i < int; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
}
function myLast(arr, int) {
  if (!int) {
    return arr[arr.length - 1];
  } else {
    let newArr = [];
    for (let i = arr.length - int; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
}

function myKeys(obj) {
  return Object.keys(obj);
}

function myValues(obj) {
  return Object.values(obj);
}
