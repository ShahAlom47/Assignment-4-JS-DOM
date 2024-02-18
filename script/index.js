
let  seatCounterArr = [];
let seatBtn = getEleentByIdName("seat-number");

let seatNumber = getEleentByIdName('seat-counter')

 let applyBtn = document.getElementById("apply-btn"); 

 let nextBtn = document.getElementById('form-btn');
 nextBtn.setAttribute('disabled', 'true');

 let discountPrice =  getEleentByIdName('discount-price');
 discountPrice.classList.add('hidden');


let cc= 40;



seatBtn.addEventListener('click', function (e) {
   

   let targetBtn = e.target
   
   let targetBtnText=  targetBtn.innerText;

   let yy= targetBtn.classList.contains('bg-green-600');

   let xx = targetBtn.classList.contains('btn');

   discountPrice.classList.add('hidden');

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




let couponBtn =getEleentByIdName('apply-btn')
couponBtn.addEventListener('click',function(){
console.log(couponChack())
couponChack()

})



function mobileNumber(){

   let mobileNum = getEleentByIdName('mobileNum').value ;
   
   let counArr=seatCounterArr.length
  
   if(!isNaN(mobileNum) && counArr>=1 ){
      nextBtn.removeAttribute('disabled');
      
   }
   else {
      nextBtn.setAttribute('disabled', 'true');
    }


}

let page2= getEleentByIdName('page2');
page2.classList.add('hidden')
function success(){

   let page1= getEleentByIdName('page1');

   let page2= getEleentByIdName('page2');

  page2.classList.remove('hidden')
  page1.classList.add('hidden')


}

