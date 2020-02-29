'use strict'
module.exports = function(n, m) {
  if(m > n) {
    return undefined
  }else if(n < 100 || m < 100){
    return undefined
  }else if(n > 2000 || m > 2000){
    return undefined
  }
  return Math.floor(n / m);
}
