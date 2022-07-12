function random(min, max) {
    return Math.floor(Math.random() * (max - min)  + min, 0)
  }
  function getInput(trays, min=15, max=17) {
    let param = true;
    return function () {
      if (param) {
          param = false
          return trays
      }
      trays -= 1 
      if (trays == 0) {
        return false
      }
      return random(min, max) + "x" + random(min, max)
    }
  }
  
  trays = 10
  min = 1
  max = 1000
  
  input = getInput(trays, min, max)
  
console.log(input())



// let num = 5
// let arr = ['3x10','7x8','5x5','1x10','6x9']

// function huita (num, arr) {
//     arr.forEach(element => {
        
//     });
// }