const body = document.getElementsByTagName("body")[0];
const wrapper = document.querySelector(".wrapper");

let words = ["spell", "spoon", "food", "house", "corner", "working", "boxer"];

let textContainerList = wrapper.children;
let list;
let newList;
let spanList;
let currentSpan = 0;
let index = 0;
let length;
let removedNodes = [];
let pushWord = false;

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

      //if true than push the whole span out using animation
      textContainerList[index].classList.add("bounce-it");
      spanList[length].classList.remove("newCursor");
      
    setTimeout(() => {
      removedNodes[index] = wrapper.removeChild(textContainerList[index]);
    }, 800);

   
      setTimeout(() => {
        if (textContainerList.length != 1 && textContainerList[index] != undefined) {
          currentSpan = 0;

          // append new child into wrapper
          // Update element
          updateElement(index, currentSpan);

          // append element
          appendElement(wrapper);
        }
      },800);
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
    }, 600)
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
  const textList = [
    "where","fill","close","desert","elite",
    "fanbase","ghost","hilton","injector",
    "jack","kill","lost","month","not",
    "over","prized","quit","rest","smart",
    "talented","user","visitor","westler",
    "xponent","yes","zoo",
  ];
  const div = document.createElementWithAttributes("div",
    {"class":"wrapper__text-container"}
  );

  const text = textList[Math.floor(Math.random() * textList.length)];
  
  for(letter of text){
    let span = document.createElementWithAttributes("span", 
      {'class':'text'}
    );
    // Set the inner content of span to text's content based on index
    span.textContent = letter

    // Append span to div created earlier
    div.appendChild(span)
  }
  
  // Append the div inside given element
  element.appendChild(div);

  return div;
};

// Timer function for the clock working as a stopwatch.

const timer = document.getElementById("display");
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;
// function to start time
function startTimer() {
  console.log("Started");
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}
// function to stop/pause the time
function stopTimer() {
  console.log("stoped");
  if (stoptime == false) {
    stoptime = true;
  }
}
// function to run the cycle of the time
function timerCycle() {
  console.log("Running");
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
  console.log("Reset");
  timer.innerHTML = "00:00:00";
  hr = 0;
  min = 0;
  sec = 0;
  stoptime = true;
}