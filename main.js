//btn up
let btnUp=document.querySelector('.up');
btnUp.onclick=function (){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}

//Change Navbar Style On Scroll
window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle("window-scroll", window.scrollY>30)

    //up
    if(window.scrollY>=500){
        btnUp.style.display='block'
    }else{
        btnUp.style.display='none'
    }
    
})


//show/hide faq answer
const parent=document.querySelectorAll('.faqs .faqs__container .faq');
parent.forEach((faq) => {
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open')

        //change icon
        const icon=faq.querySelector('.faq__icon i')
        if(icon.className==='fa-solid fa-plus'){
            icon.className='fa-solid fa-minus'
        }else{
            icon.className='fa-solid fa-plus'
        }
    })
});


//show/hide nav menu
const menu=document.querySelector('.nav__menu')
const menuBtn=document.querySelector('#open-menu-btn')
const closeBtn=document.querySelector('#close-menu-btn')

menuBtn.addEventListener('click', function (){
    menu.style.display='block'
    closeBtn.style.display='block'
    menuBtn.style.display='none'
})

closeBtn.addEventListener('click',()=>{
    menu.style.display='none'
    closeBtn.style.display='none'
    menuBtn.style.display='block'
})



