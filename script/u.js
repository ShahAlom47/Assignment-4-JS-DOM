function getEleentByIdName(id) {
  return document.getElementById(id)

}

function counterListUpdate(value, idname) {

  let seatCounterList = document.getElementById('seat-counter-box');

  let newListContainer = document.createElement('div')

  let seatName = document.createElement('h3');
  seatName.innerText = value;



  let seatClass = document.createElement('p');
  seatClass.innerText = 'Economic';

  let seatPrice = document.createElement('p');
  seatPrice.innerText = '550';

  newListContainer.appendChild(seatName);
  newListContainer.appendChild(seatClass);
  newListContainer.appendChild(seatPrice);

  seatCounterList.appendChild(newListContainer);
  newListContainer.classList.add('flex')
  newListContainer.classList.add('justify-between')
  newListContainer.setAttribute("id", idname);




  return seatCounterList
}


function avilableSeatNum(value) {

  let avilableSet = getEleentByIdName('seats-count')
  let avilableSeatNum = avilableSet.innerText;
  let xx = parseInt(avilableSeatNum);
  avilableSet.innerText = value;

}



function counterListRemoveUpdate(targetText) {
  let targetBtnText = targetText

  let seatCounterList = document.getElementById('seat-counter-box');

  let child = document.getElementById(targetBtnText)

  let dd = seatCounterList.removeChild(child)
  return dd

}










function updateTotal(value) {
  let seatNumber = getEleentByIdName('seat-counter')
  let seatnumbervalue = parseInt(seatNumber.innerText);

  let total = getEleentByIdName('total')
  total.innerText = seatnumbervalue * 550;
  return total
}



function applyBtnDisabled() {
  let applyBtn = document.getElementById("apply-btn");

  if (seatCounterArr.length === 4) {
    applyBtn.removeAttribute('disabled');
  } else {
    applyBtn.setAttribute('disabled', 'true');
  }
}





function grandTotalUpdate() {

  let total = getEleentByIdName('total').innerText;
  let totalValue = parseFloat(total);

  let grandTotalDis = getEleentByIdName('Grand-total')

  grandTotalDis.innerText=totalValue;

  


}



function couponChack() {
  let discountBox = getEleentByIdName('discount-price')

  let discountPrice = getEleentByIdName('discountPrice')

  let inputCupon = getEleentByIdName("coupon-input").value

  let grandTotalDis = getEleentByIdName('Grand-total')

  let total = getEleentByIdName('total').innerText

  let totalValue = parseFloat(total);

  let couponBox = getEleentByIdName('coupon-box')

  if (inputCupon === "NEW15") {

    const discount15 = (totalValue / 100) * 15

    discountPrice.innerText = discount15;
    

    let grand= totalValue-discount15
    grandTotalDis.innerText=grand;


    discountBox.classList.remove('hidden');
    let error = getEleentByIdName('error-box')
    error.innerText = ''


    couponBox.classList.add('hidden')


    return  discount15
  }

  else if (inputCupon === "Couple 20") {


    const discount20 = (totalValue / 100) * 20
    discountPrice.innerText = discount20;

    let grand= totalValue-discount20
    grandTotalDis.innerText=grand

    discountBox.classList.remove('hidden');
    let error = getEleentByIdName('error-box')
    error.innerText = ''

    couponBox.classList.add('hidden')

    return discount20 

  }

  else {
    discountBox.classList.add('hidden')
    let error = getEleentByIdName('error-box')
    error.innerText = '! Wrong Code ,Please recheck your coupon code'


  }

}


function showElement(element){
  
  element.classList.remove('hidden');
 



}

function hideElement(element){
 
 element.classList.add('hidden');

}

