
let card = document.querySelector('.card');
let cardArr = [];

let body = document.body;
    card.addEventListener('click',  (e)=>{
    let val = document.querySelector('.inp');
    let btn = document.querySelector('.btn');
    if(e.target.classList.contains('btn')){
    let div = document.createElement('div');
    div.classList.add('content');
    
    cardArr.push(val.value);
    div.innerText = val.value;
    card.append(div);
    btn.remove();
    val.remove();
    html='<input type="text" class="inp" placeholder="Add food item">\
    <input type="button" class="btn" value="Add item">'
    card.innerHTML += html;
    }
    
});

console.log(cardArr);
