let i = 3
const menu_Btn = document.querySelector('.humberger')
const mobile_menu = document.querySelector('.mobil')
menu_Btn.addEventListener('click',function(){
    if(i == 3){
    menu_Btn.classList.add('is-active');
    mobile_menu.classList.add('is-active');
    i=4
    }
    else {
    mobile_menu.classList.remove('is-active');
    menu_Btn.classList.remove('is-active');
    i=3
    }
});
