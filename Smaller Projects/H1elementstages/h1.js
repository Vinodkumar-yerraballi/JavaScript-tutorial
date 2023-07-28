// without the express h1 element we can use the in javascript function
let h1Element = document.createElement('h1')
h1Element.textContent='Web technologies'
let myContainer = document.getElementById('mycontainer')
myContainer.appendChild(h1Element);
let btnelement = document.createElement('button');
btnelement.textContent='change content'
myContainer.appendChild(btnelement);
btnelement.onclick=function(){
    h1Element.textContent='4.0 Technologies'
    h1Element.classList.add('heading')

};
h1Element.appendChild(btnelement);

let removeStyelbutton = document.createElement('button');
removeStyelbutton.textContent='remove stylesheet';
document.getElementById('mycontainer').appendChild(removeStyelbutton);
removeStyelbutton.onclick=function(){
    h1Element.classList.remove('heading');
};