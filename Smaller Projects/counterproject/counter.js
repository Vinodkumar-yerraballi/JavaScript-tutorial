let counterElement=document.getElementById('counterValue');
function onDecrease(){
    let previousCountervalues=counterElement.textContent;
    let decreseElement=parseInt(previousCountervalues)-1;
    counterElement.textContent=decreseElement;
    // counterElement.style.color='red';
    if (decreseElement>0){
        counterElement.style.color='green';
    }
    else if(decreseElement<0){
        counterElement.style.color='red';
    
    }
    else {
        counterElement.style.color='black';
    }
}
function onReset(){
   let updateValue=0;
   counterElement.textContent=updateValue;
  counterElement.style.color='black'
}
function onIncrease(){
    let previousCountervalue=counterElement.textContent;
    let increaseElement=parseInt(previousCountervalue)+1;
    counterElement.textContent=increaseElement;
    if (increaseElement>0){
        counterElement.style.color='green';
    }
    else if(increaseElement<0){
        counterElement.style.color='red';
    
    }
    else {
        counterElement.style.color='black';
    }
    
}