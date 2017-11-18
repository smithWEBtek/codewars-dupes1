tests = ["aBaBAcc", "aabbcde", "aabBcde", "Indivisibility", "Indivisibilities", "asadDf1312", "qwerrrR11144"]

document.getElementById('main').innerText = `tests: ${tests}`;

function duplicateCount(text){
  let count = 0;
  newText = text.toLowerCase().split('');

console.log(`1)****START NEW ARGUMENT****text: ${text}`)
console.log(`2)newText: ${newText}`)
    
  for(let i=0;i<newText.length;i++){
    let newTextLength = newText.length 
    let element = newText[i]
    let newTextFiltered = newText.filter(a => a !== element);

console.log(`3)newTextFiltered: ${newTextFiltered}`)

    if ( newText[0] == newText[1] || newTextLength - newTextFiltered.length > 1 ) {
      // newText = newText.filter(a => a !== newText[i])
      count++
      newText = newTextFiltered
      newText.shift()
      console.log(`Found a dupe: ${newTextFiltered.length !== newTextLength - 1} = ${element}`)
    }

    console.log(`5)newText after loop: ${newText}`)
  }
  console.log(`6)count: ${count}  `)
  return count;
}

function runTests(){
  for(let i=0; i<tests.length; i++){
    duplicateCount(tests[i])
  }
}

runTests();