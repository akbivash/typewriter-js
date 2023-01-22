let words = ['developer', 'designer']
let text = ''
let textElem = document.querySelector('#demo span')
let current = 0
let isDeleting = false

function typeWriter(){
let fullTxt = words[current]

if(isDeleting){
  text = fullTxt.slice(0,  text.length - 1)
}else{
  text = fullTxt.slice(0, text.length + 1)
}
let newText = `<span class='text' >a ${text}</span>`
textElem.innerHTML = newText

// check if one word is complete
if(!isDeleting && text === fullTxt){
 isDeleting = true
}else if( isDeleting && text === ''){
isDeleting = false

current++
if(current === words.length){

    current = 0
}
}
// setTimeout(typeWriter, 500)
}

// insert txt into element

typeWriter()


