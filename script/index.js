
let  seatCounterArr = [];
let seatBtn = getEleentByIdName("seat-number");

let seatNumber = getEleentByIdName('seat-counter')


let cc= 40;



seatBtn.addEventListener('click', function (e) {
   

   let targetBtn = e.target
   
   let targetBtnText=  targetBtn.innerText;

   let yy= targetBtn.classList.contains('bg-green-600');

   let xx = targetBtn.classList.contains('btn');
   if(cc==36){
      alert("You cannot buy more than 4 tickets");
   }
 
  

   
   if (xx = true) {
    
      
      if (yy == false && seatCounterArr.length<4 ) {
         targetBtn.classList.add('bg-green-600');
         seatCounterArr.push(targetBtnText);

         let seatInnerNumber= parseInt(seatNumber.innerText);
         if(seatInnerNumber<=4){
            counterListUpdate(targetBtnText,targetBtnText);
            cc=cc-1
         } 

      }
      else if ( yy == true){
         targetBtn.classList.remove('bg-green-600');
         seatCounterArr.pop(targetBtnText);
         


         
         cc=cc+1
      
      }

     
     console.log (counterListRemoveUpdate(targetBtnText))
     
     
      
   

      seatNumber.innerText= seatCounterArr.length;

      avilableSeatNum(cc)

      updateTotal()
     console.log();
     console.log();
}


})