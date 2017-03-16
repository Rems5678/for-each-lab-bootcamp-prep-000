function log(e, i) {
  console.log(`${i}: ${e}`)
}

function iterativeLog(array) {
  array.forEach(log)
}

function iterate (callback) {
  var array = [1,2,3,4]
  array.forEach(callback)
  return array
}

function doToArray (array, callback) {
  array.forEach(callback)
}