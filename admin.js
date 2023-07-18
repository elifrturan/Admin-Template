let menu = document.querySelector('.menu');
let sideBar = document.querySelector('.sideBar');
let main = document.querySelector('.main');

menu.onclick = function(){
    sideBar.classList.toggle('active');
    main.classList.toggle('active');
}



let list = document.querySelectorAll('.sideBar li');

function activeLink(){
    list.forEach(e =>{
        e.classList.remove('hovered');
        this.classList.add('hovered');
    })
}

list.forEach(e =>{
    e.addEventListener('mouseover',activeLink);
})
