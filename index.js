const body = document.getElementsByTagName('body')[0];
const wrapper = document.querySelector('.wrapper');
const span = document.querySelector('.text-container');
const spanList = document.getElementsByTagName('span');
const preWrapper = document.querySelector('.pre-wrapper');
let removedNodes = [];




window.onload = () =>{
    let i = 0;
    let index = 0;
    let result;
    
    spanList[i].classList.add('cursor');
    body.addEventListener('keydown',(event) =>{
        const startTime = new Date().getSeconds();
             result = spanList[i].className.split(' ');
            if(result[3] === 'shake') console.log('This is working');spanList[i].classList.remove('shake'); 
            
                
            if( spanList[i] != undefined && event.key === spanList[i].textContent){
               spanList[i].classList.add('bounce-it');
                
                    //LIttle change has been made due to git 
                    //This is second commit;
                    //This is third + second COmmit;
                
                    console.log('Git is amazing and owsume');
                
                    syncWait();
//                setTimeout(()=>{
                    removedNodes[index] = wrapper.removeChild(spanList[i]);
                            ++index;
                    console.log('Exiting setTimeout');
                    console.log(spanList.length); console.log(spanList);
             
//                },600);
                
                
               console.log('Looking forward to add cursor');
               if(spanList.length != 1 && spanList[i+1] != undefined) console.log('adding cursor');spanList[i+1].classList.add('cursor'); 
                
               
//
//             console.log(i); console.log(spanList);
            

       
        } else{
            console.log('else block');
            console.log(i); console.log(spanList);
            spanList[i].classList.add('shake');
           
        }
        
        
            
           

  });
};

const syncWait = ms => {
    const end = new Date().getSeconds();
    console.log(end);
    while (new Date().getSeconds() === end) 
    {
//        console.log(new Date().getSeconds());
        continue;
    }
    
        
}

//const waitForAMin = (startTime,i,index,removedNodes,wrapper,spanList) =>{
//    let now = new Date().getSeconds();
//    while(true){
//        let result = now - startTime;
//        if(result >1){
//            return;
//        }
//        now = new Date().getSeconds();
//    } 
//    
//    removedNodes[index] = wrapper.removeChild(spanList[i]);
//                ++index;
    
    



//const letItAnimate = (elem,time,i,index) =>{
//    const endTime = new Date().getMinutes();
//    if(endTime > time){
//      return removedNodes[index] = wrapper.removeChild(spanList[i]); ++index;
//    }else{
//        return removedNodes[index] = letItAnimate(elem,time,i,index);
//    }
//    
//}

const animate = () =>{
    
}