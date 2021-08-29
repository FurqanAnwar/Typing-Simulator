// Next Task
//1)Make sure animate does not work on caps lock and shif button because of Capital vs small letter issue.
//2)Make UI structure of your application and upload it to codepen

const body = document.getElementsByTagName("body")[0];
const wrapper = document.querySelector(".wrapper");
const textContainersList = document.querySelectorAll(".wrapper__text-container");
let spanList;
let i = 0;
let index = 0;
let length;
let removedNodes = [];

console.log(textContainersList[0].childNodes);
window.onload = () => {
  
  wrapper.focus();
  updateElement(index,i);
 
};



//click event
document.addEventListener("click", (event) => {
  let elemClass, target, classPropsArr, checkClassMatches;
  target = event.target;
  
  checkPropertyExists = target.attributes.hasOwnProperty("class");
  classPropsArr = ["wrapper", "wrapper__text-container", "text"];

  if (checkPropertyExists) {
    console.log("Check if there is classProps",classPropsArr.includes(target.classList[0]))
    
    if (!classPropsArr.includes(target.classList[0])) wrapper.blur();
  }

});

// Key down event

wrapper.addEventListener("keydown", (event) => {
  console.log(event.target);
    if(event.target != undefined && spanList[i].textContent == event.key){
      
    console.log(spanList[i]);
    if(i === length){
      console.log(length)
      // remove the cursor from front of element
      spanList[i].classList.remove("cursor");
      // add the newly cursor after element
      spanList[i].classList.add("newCursor");
    }
  

    if((i < length)){
      
      spanList[i].classList.remove("cursor");
      console.log("cursor is removed", spanList[i]);
      ++i;
      console.log("cursor is moved to next element", spanList[i])
      spanList[i].classList.add("cursor");
     
    } }

    if( event.which === 32  || event.keyCode === 32){
      if(i === length){
        console.log("The val of i is equal to length", i === length);
        
        //if true than push the whole span out using animation
        textContainersList[index].classList.add("bounce-it");
        // textContainersList[index].classList.remove("cursor");
        spanList[length].classList.remove("newCursor");
        
        setTimeout(() => {
              removedNodes[index] = wrapper.removeChild(textContainersList[index]);
                ++index;
                console.log("index after increment", index)
            
          }, 800);
        setTimeout(() =>{
          console.log(removedNodes)
          if (textContainersList.length != 1 && textContainersList[index] != undefined) {
                 
                  console.log("true");
                  i = 0;
                  updateElement(index,i);
                }
        },800)
        
      }
      
    }
  // Else part comes here if key doesn't matches the key pressed by user
  
});

const updateElement = (index, i) =>{
  // Change the spanList
  spanList = textContainersList[index].childNodes;
  console.log(spanList)
  // Change the length variable
  length= spanList.length - 1;
  // Add cursor to first element of span
  spanList[i].classList.add("cursor");
}

const appendElement = (element) => {
  const rand = [
    "where","fill","close","desert","elite",
    "fanbase","ghost","hilton","injector",
    "jack","kill","lost","month","not",
    "over","prized","quit","rest","smart",
    "talented","user","visitor","westler",
    "xponent","yes","zoo",
  ];

  const node = document.createElement("span");
  element.appendChild(node);
  node.innerHTML = `${rand[Math.floor(Math.random() * 25)]}`;
  node.classList.add("wrapper__text-container");
  console.log("this node is appended", node);
};

// Below is old code commented only for reference in case i need something
// Change the value of length to next element items length
        // Set the value of i = 0 again
    //     spanList[i].classList.add("bounce-it");
    //     spanList[i].classList.remove("cursor");
    //     setTimeout(() => {
    //     removedNodes[index] = wrapper.removeChild(spanList[i]);
    //       ++index;
    //   appendElement(wrapper);
    // }, 800);
//     if (spanList.length != 1 && spanList[i + 1] != undefined) {
//       spanList[i + 1].classList.add("cursor");
//     }
//   } else {
//     spanList[i].classList.remove("cursor");
//     spanList[i].classList.add("is-wrong");
//     spanList[i].classList.toggle("shake");
//     setTimeout(() => {
//       spanList[i].classList.add("cursor");
//       spanList[i].classList.toggle("is-wrong");
//       spanList[i].classList.toggle("shake");
//       console.log("Waiting For Animation To Occur");
//       console.log("Is class removed or not ", spanList[i]);
//     }, 800);