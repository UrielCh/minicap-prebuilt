const { getMinicapSO, getScrcpyJar } = require('./index.cjs');

console.log(getMinicapSO('arm64-v8a', 30));
console.log(getScrcpyJar('3.3.1'));
