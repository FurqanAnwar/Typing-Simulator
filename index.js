const body = document.getElementsByTagName("body")[0];
const wrapper = document.querySelector(".wrapper");
const wordContainer = document.querySelector(".word_container");

let textContainerList = wrapper.children;
let list;
let newList;
let spanList;
let currentSpan = 0;
let currentTextContainer = 0;
let length;
let removedNodes = [];
let pushWord = false;

window.onload = () => {
  wrapper.focus();
  updateElement(currentTextContainer,currentSpan);
};

//click event
document.addEventListener("click", (event) => {
  let  target, classPropsArr;
  let indexForClassName = 0;
  target = event.target;

  hasClassAttribute = target.attributes.hasOwnProperty("class");
  classPropsArr = ["wrapper", "wrapper__text-container", "text"];
  
  if (hasClassAttribute && !classPropsArr.includes(target.classList[indexForClassName])) {
    // remove focus of the wrapper
    wrapper.blur();
  }
});

// Key down event
wrapper.addEventListener("keydown", (event) => {
  if(event.target != undefined && spanList[currentSpan].textContent == event.key){
    spanList[currentSpan].classList.add("is-correct");

    if(currentSpan === length){
      // remove the cursor from front of element
      spanList[currentSpan].classList.remove("cursor");

      // add the newly cursor after element
      spanList[currentSpan].classList.add("newCursor");

      // set pushWord
      pushWord = true;
    }

    if(currentSpan < length){
      spanList[currentSpan].classList.remove("cursor");
      ++currentSpan;
      spanList[currentSpan].classList.add("cursor");
    }
    return;
  }

  if( (event.which === 32  || event.keyCode === 32) && pushWord){

    wordContainer.appendChild(textContainerList[currentTextContainer]);
    
    for(const child of wordContainer.children){
      child.classList.add("bounce-it")
    }
      
    setTimeout(() => {
      //Remove all nodes having bounce animation
      for(const child of wordContainer.children){
        if(child.classList.contains("bounce-it")){
          child.classList.remove("bounce-it");
          removedNodes[currentTextContainer] = wordContainer.removeChild(child);
        }
      } 
    }, 1000);

   
    if (textContainerList.length != 1 && textContainerList[currentTextContainer] != undefined) {
      currentSpan = 0;

      // Update element i.e cursor position, currentTextContainer value
      updateElement(currentTextContainer, currentSpan);

      // Add new text_container to wrapper
      appendElement(wrapper);
    }
    return;
  }
  
  if (spanList[currentSpan].textContent !== event.key && pushWord) {

    removeCursorAndAnimateLetter(spanList[currentSpan], "newCursor");
    // return so that code does not go to the next if 
    return;
  }

  if (spanList[currentSpan].textContent !== event.key) {

    removeCursorAndAnimateLetter(spanList[currentSpan],"cursor");
    return;
  }
});

const removeCursorAndAnimateLetter = (letterToAnimate, cursor) => {
/* 
1: Cursor is dynamic here it can be newCursor or cursor depending up the
positon of letter you are at 
2: if letter is green than there is no need to run wrong letter animation 
*/
  if (!letterToAnimate.classList.contains("is-correct")) {
    
    spanList[currentSpan].classList.remove(cursor);
    spanList[currentSpan].classList.add("shake");
    spanList[currentSpan].classList.add("is-wrong");

    // Remove animation class after .8 sec delay
    setTimeout(() => {
      spanList[currentSpan].classList.remove("shake");
      spanList[currentSpan].classList.remove("is-wrong");
      spanList[currentSpan].classList.add(cursor);
    }, 800)
  }
}

const updateElement = (index, currentSpan) =>{
  // Update the spanList
  spanList = textContainerList[index].children;

  // Update the length variable
  length = spanList.length - 1;

  // Add cursor to first element of spanList
  spanList[currentSpan].classList.add("cursor");

  // Reset pushWord value
  pushWord = false;
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



/** Will deal with it later  **/
// Timer function for the clock working as a stopwatch.
/** 
const timer = document.getElementById("display");
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;
// function to start time
function startTimer() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}
// function to stop/pause the time
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}
// function to run the cycle of the time
function timerCycle() {
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    sec = sec + 1;
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }
    if (min < 10 || min == 0) {
      min = "0" + min;
    }
    if (hr < 10 || hr == 0) {
      hr = "0" + hr;
    }
    timer.innerHTML = hr + ":" + min + ":" + sec;
    setTimeout("timerCycle()", 1000);
  }
}
// function to reset the timer
function resetTimer() {
  timer.innerHTML = "00:00:00";
  hr = 0;
  min = 0;
  sec = 0;
  stoptime = true;
}
*/