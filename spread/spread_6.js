// Arguments to Array
function names() {
  const argumentsArray = [...arguments];

  argumentsArray.map(name => `hi ${name}`);
}

names('James', 'Bob');
