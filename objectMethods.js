let object = {
  a: {
    name: "Avet",
  },
  b: {
    name: "Rafo",
  },
  c: {
    name: "Tigran",
  },
};

// get from the object an array like [ {name: "Avet", id: "a"}, {name: "Rafo", id: "b"}, {name: "Tigran", id: "c"} ]

// Way 1 - Object keys method

function iddAdderWithKeys(obj) {
  let keys = Object.keys(obj); // [a, b, c]
  let newArr = [];
  for (let index = 0; index < keys.length; index++) {
    newArr.push({ ...obj[keys[index]], id: keys[index] });
  }
  return newArr;
}

console.log("add id with Object keys", iddAdderWithKeys(object));

// Way 2 - Object values method

function iddAdderWithValues(obj) {
  let values = Object.values(obj);
  let newArr = [];
  for (let index = 0; index < values.length; index++) {
    newArr.push({ ...values[index], id: Object.keys(obj)[index] });
  }
  return newArr;
}

console.log("add id with values", iddAdderWithValues(object));

// Way 3 - map method

function iddAdderWithMap(obj) {
  let values = Object.values(obj);
  let newArr = values.map((item, index) => {
    return { ...item, id: Object.keys(obj)[index] };
  });
  return newArr;
}

console.log("add id with map", iddAdderWithMap(object));

// way 4 For of method

function iddAdderWithForof(obj) {
  let newArr = [];
  for (const [key, value] of Object.entries(obj)) {
    newArr.push({ ...value, id: key });
  }
  return newArr;
}

console.log("add id with For of", iddAdderWithForof(object));

// way 5 Reduce method

function iddAdderWithReduce(obj) {
  let values = Object.values(obj);

  let newArr = values.reduce(function (acc, value, index) {
    acc.push({ ...value, id: Object.keys(obj)[index] });
    return acc;
  }, []);
  return newArr;
}

console.log("add id with reduce", iddAdderWithReduce(object));
