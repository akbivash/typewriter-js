let words = ['developer', 'UI designer']
let root = document.querySelector('#demo span')
let index = 0
let text = ''
let isDeleting = false
let wait 

function typeWriter() {
  let curText = words[index];
  root.innerText = text;
  wait = false
  if (isDeleting) {
    text = curText.slice(0, text.length - 1);
  root.innerText = text;
   
  } else {
    text = curText.slice(0, text.length + 1);
    root.innerText = text;

  }

  if (!isDeleting && text === curText) {
   wait = true
    isDeleting = true;
  
  }
  if (isDeleting && text === "") {
    index++;
    isDeleting = false;
    if (index === words.length) {
      
      index = 0;
    }
  }

  let delay = wait ? 1000 : isDeleting ? 100 : 300
  setTimeout(typeWriter, delay);
}
typeWriter();

// another way
// let words = ["developer", "UI designer"];
// let root = document.querySelector("#demo span");
// let i = 0;
// let j = 0;
// let text = [];
// let isDeleting = false;
// let wait

// function loop() {
//     wait = false
//     root.innerText = text.join("");

//         if (!isDeleting && j <= words[i].length ) {
//             text.push(words[i][j]);
//             j++;
//   root.innerText = text.join("");
       
//           }
//           if (isDeleting && j <= words[i].length) {
//             text.pop(words[i][j]);
//             j--;
//   root.innerText = text.join("");
       
//           }
//           if ( j === words[i].length ) {
//       wait = true
//             isDeleting = true;
           
//           }
//           if ( j === 0) {
//             isDeleting = false
//             i++;
//             if (i === words.length) {
//               i = 0;
//             }
//           }
//           let delay = wait ? 1000 : isDeleting ? 100 :300
//   setTimeout(loop, delay);
// }
// loop()
