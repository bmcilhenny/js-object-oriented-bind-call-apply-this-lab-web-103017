function justInvoke(callback) {
  return callback()
}

function setThisWithCall(callback, name, age) {
  return callback.call(name, age)
}

function setThisWithApply(callback, name, array) {
  return callback.apply(name, array)
}

function returnNewFunctionOf (functionToBeCopied, name) {
  return functionToBeCopied.bind(name)
}
