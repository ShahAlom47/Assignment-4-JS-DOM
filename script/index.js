
let  seatCounterArr = [];

// seat container 
let seatBtn = getEleentByIdName("seat-number");
let seatNumber = getEleentByIdName('seat-counter')
let seatNumber2 =document.querySelectorAll('.br .btn')


 let applyBtn = document.getElementById("apply-btn"); 

 let nextBtn = document.getElementById('form-btn');
 nextBtn.setAttribute('disabled', 'true');

 let discountPrice =  getEleentByIdName('discount-price');
 discountPrice.classList.add('hidden');


let cc= 40;

// seat button listener 
for(let btnNumb of seatNumber2){
 
btnNumb.addEventListener('click', function (e) {
   

   let targetBtn = e.target
   
   let targetBtnText=  targetBtn.innerText;

   let yy= targetBtn.classList.contains('bg-green-600');

   let onlySeatBtn = targetBtn.classList.contains('btn');

   discountPrice.classList.add('hidden');

   if(cc==36){
      alert("You cannot buy more than 4 tickets");
   }
 
  

   
   if (onlySeatBtn = true) {
    
      
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
         counterListRemoveUpdate(targetBtnText)

         let couponBox = getEleentByIdName('coupon-box')
         couponBox.classList.remove('hidden')
         


         
         cc=cc+1
      
      }
     
     
      
   

      seatNumber.innerText= seatCounterArr.length;

      avilableSeatNum(cc);
      updateTotal();
      applyBtnDisabled();
      grandTotalUpdate()
   
}


});

}


let couponBtn =getEleentByIdName('apply-btn')
couponBtn.addEventListener('click',function(){
console.log(couponChack())
couponChack()

})



function mobileNumber(){

   let mobileNum = getEleentByIdName('mobileNum').value ;
   
   let counArr=seatCounterArr.length
   let numberIs = /^\d+$/;
  
   if(!isNaN(mobileNum) && numberIs.test(mobileNum) && counArr>=1 ){
      nextBtn.removeAttribute('disabled');
      
   }
   else {
      nextBtn.setAttribute('disabled', 'true');
    }


}


// next button 

let page2= getEleentByIdName('page2');

function success(){
   let page1 = getEleentByIdName("page2");
   let  page2= getEleentByIdName("page1");

   showElement(page1);
   hideElement(page2);

}


// continue button 

function continueBtn(){
   let page1 = getEleentByIdName("page2");
   let  page2= getEleentByIdName("page1");

   showElement(page2);
   hideElement(page1);

   location.reload();

} 
