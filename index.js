tests = ["abacCdDe"]
document.getElementById('main').innerText = `tests: ${tests}`;


function duplicateCount(text){
  let count = 0;
  let arr = text.toLowerCase().split('').sort();  
  let arr2 = [];
 
  for(let i=0; i<arr.length; i++){
    let search = arr[i],
      count = arr.reduce(function(r, a) {
      return r + !!~a.indexOf(search);
    }, 0);
  }
  console.log(`count: ${count}`)
  return count
}

function runTests(){
  for(let i=0; i<tests.length; i++){
    duplicateCount(tests[i])
  }
}

runTests();