
let card = document.querySelector('.card');

let body = document.body;
    card.addEventListener('click',  (e)=>{
    let val = document.querySelector('.inp');
    let btn = document.querySelector('.btn');
    if(e.target.classList.contains('btn')){
    let div = document.createElement('div');
    div.classList.add('content');
    
    
    if(val.value == '')
    {
        alert("Invalid input!");
    }

    else 
    {
        div.innerText = val.value;
        card.append(div);
        btn.remove();
        val.remove();
        html='<input type="text" class="inp" placeholder="Add food item">\
        <input type="button" class="btn" value="Add item">'
        card.innerHTML += html;
    }
  
    }
});

let save = document.querySelector('.butn');
save.addEventListener('click', saveFunc = () =>{
    localStorage.setItem('card', card.innerHTML);
    let saved = localStorage.getItem('card');
    if(saved)
    {
        card.innerHTML = saved
    }

    document.querySelector('.inp').setAttribute('style', 'display:none');
    document.querySelector('.btn').setAttribute('style', 'display:none');
})


