function getEleentByIdName(id){
return document.getElementById(id)

}

function counterListUpdate(value,idname){

  let seatCounterList = document.getElementById('seat-counter-box'); 

let newListContainer =document.createElement('div')

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


function avilableSeatNum(value){

let avilableSet= getEleentByIdName('seats-count')
let avilableSeatNum = avilableSet.innerText;
let xx= parseInt(avilableSeatNum);
avilableSet.innerText=value;

}



function counterListRemoveUpdate(targetText){
let targetBtnText = targetText


let seatCounterList = document.getElementById('seat-counter-box'); 

return seatCounterList.removeChild(targetBtnText);


}










function updateTotal(value){
    let seatNumber = getEleentByIdName('seat-counter')
    let seatnumbervalue = parseInt(seatNumber.innerText);

    let total = getEleentByIdName('total')
    total.innerText=seatnumbervalue*550;
    return total
}


