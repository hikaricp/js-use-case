// Clone Array
const original = ['zero', 'one'];
const newArray = original;

newArray[1] = '💩';

console.log(original); // [ "zero", "💩" ] 👈 😱 原始数组受到了影响

// Cloning Array the Right Way
const original2 = ['foo', 'bar'];
const newArray2 = [...original2];

newArray2[1] = '💩';

console.log(original2); // [ "foo", "bar" ] 👈 ✅ Nice 原始数组没有受到影响