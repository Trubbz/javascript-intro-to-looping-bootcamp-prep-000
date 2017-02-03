function forLoop(array){
  for (let i = 0; i < 25; i++) {
      array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
    }
  return array;
  }
function whileLoop(n){
  while (n > 0){
    console.log(--n);
  }
  return "done";
}
function maybeTrue() {
  return Math.random() >= 0.5
}
function doWhileLoop(array){
  var i = array.length
  do {
    maybeTrue();
    array.length = --i;
  } while (array.length > 0 && maybeTrue());
  return array;
}
