const al = document.querySelector('#counter');
const zero = al.querySelector(`#value`)
const decr = al.querySelector('button[data-action="decrement"]')
const incr = al.querySelector('button[data-action="increment"]')

decr.addEventListener(`click`, handClickMinus);
incr.addEventListener(`click`, handClickPlus);
// zero.addEventListener(`onchange`,)

let counterValue  = 0;


function handClickPlus  (){
    counterValue +=1 ;
    zero.textContent = counterValue

  };

function handClickMinus  (){
    counterValue -=1;
    zero.textContent = counterValue;

};









