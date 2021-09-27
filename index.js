

const body = document.getElementsByTagName("body")[0];
const wrapper = document.querySelector(".wrapper");
let textContainerList = wrapper.children;
let list;
let newList;
let spanList;
let currentSpan = 0;
let index = 0;
let length;
let removedNodes = [];



window.onload = () => {
  
  wrapper.focus();
  updateElement(index,currentSpan);
 
};



//click event
document.addEventListener("click", (event) => {
  let  target, classPropsArr;
  target = event.target;
  
  checkPropertyExists = target.attributes.hasOwnProperty("class");
  classPropsArr = ["wrapper", "wrapper__text-container", "text"];

  if (checkPropertyExists && !classPropsArr.includes(target.classList[0])) {
      // remove focus of the wrapper
      wrapper.blur();
  }

});

// Key down event

wrapper.addEventListener("keydown", (event) => {
 
    if(event.target != undefined && spanList[currentSpan].textContent == event.key){
      
      
      
    
    if(currentSpan === length){
     
      // remove the cursor from front of element
      spanList[currentSpan].classList.remove("cursor");
      // add the newly cursor after element
      spanList[currentSpan].classList.add("newCursor");
    }
  

    if(currentSpan < length){
      
      spanList[currentSpan].classList.remove("cursor");
      
      ++currentSpan;
     
      spanList[currentSpan].classList.add("cursor");
     
      }
      return;
    }

    if( (event.which === 32  || event.keyCode === 32) && currentSpan === length){
     
        //if true than push the whole span out using animation
      

        textContainerList[index].classList.add("bounce-it");

        spanList[length].classList.remove("newCursor");
        
      setTimeout(() => {
          
          removedNodes[index] = wrapper.removeChild(textContainerList[index]);
        
        }, 800);
  
     
        setTimeout(() =>{
          
          if (textContainerList.length != 1 && textContainerList[index] != undefined) {
                 
            currentSpan = 0;
            // append new child into wrapper
            
            // Update element
            updateElement(index, currentSpan);
            // append element
            let element = appendElement(wrapper);
                }
        },800)
        
      
      return
  }
  
  // Else part comes here if key doesn't matches the key pressed by user
  /*
  FIXME:
  */
 
  // if (event.target != undefined && spanList[currentSpan].textContent !== event.key) {
  //   spanList[currentSpan].classList.add("shake");
  //   spanList[currentSpan].classList.add("is-wrong")
  // }
});

const updateElement = (index, currentSpan) =>{
  // Update the spanList
  spanList = textContainerList[index].childNodes;
  
  // Update the length variable
  length = spanList.length - 1;

  // Add cursor to first element of spanList
  spanList[currentSpan].classList.add("cursor");
}

// I'll refactor this appendElement function later
const appendElement = (element) => {
  let currentIndex = 0;
  
  const textList = [
    "where","fill","close","desert","elite",
    "fanbase","ghost","hilton","injector",
    "jack","kill","lost","month","not",
    "over","prized","quit","rest","smart",
    "talented","user","visitor","westler",
    "xponent","yes","zoo",
  ];

  const div = document.createElement("div");
  div.classList.add("wrapper__text-container");

  const text = textList[Math.floor(Math.random() * 25)];
  
  do {
    // Generate span nodes based on length of text
    let span = document.createElement("span");

    // Set the inner content of span to text's content based on index
    span.textContent = text.charAt(currentIndex);

    // Set text class on span
    span.classList.add("text");

    // Append span to div created earlier
    div.appendChild(span)
  
    // Increment current index by one
    currentIndex++;
    
  } while (currentIndex < text.length)


  // Append the div inside given element
  element.appendChild(div);
  
  return div;
 
};