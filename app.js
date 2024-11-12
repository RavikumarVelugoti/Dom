
    //    ham burger
let ham =document.querySelector(".ham");
let div =document.querySelector(".div");
let line1=document.querySelector('.line1');
let line2=document.querySelector('.line2');
let line3=document.querySelector('.line3');
ham.addEventListener('click',()=>{
    div.classList.toggle('div1');
    line1.classList.toggle('hlo');
    line2.classList.toggle('hlo');
    line3.classList.toggle('hlo');

})

        //  accordion   
let answer=document.querySelectorAll(".answer")
let faq=document.querySelectorAll(".faq")
faq.forEach((faq)=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle('active')
    })
})
 
            // loadmore
let section2=document.querySelector(".section2-2");
let btn1 = document.querySelector("#btn-1")
btn1.addEventListener("click",()=>{
    section2.classList.add("added")
    btn1.style.display='none';
})

                // Form
let input1=document.querySelector('.input1');
let input2=document.querySelector('.input2');
let submit=document.querySelector('.form button');
let form=document.querySelector(".form")
let form1=document.querySelector(".form1")

submit.addEventListener('click',()=>{
    let value1=input1.value;
    let value2=input2.value;
    form.style.display='none';
    form1.style.display='flex';
    let formh3=document.querySelector(".form1-1 h2");
    formh3.textContent=value1;
    let formh31=document.querySelector(".form1-2 h2");
    formh31.textContent=value2;
    if(value1=="" && value2==""){
        form.style.display="flex";
        form1.style.display='none';
        alert("Enter the details ")
    }
    
})

 
        //   CardsHover
let card1=document.querySelector('.section2-cards1');
let button1=document.querySelector('.section2-cards1 button');
card1.addEventListener('mouseover',()=>{
    button1.style.cssText=' transform:translatey(20px)'
})
card1.addEventListener('mouseout',()=>{
    button1.style.cssText=' transform:translatey(0px)'
})

let card2=document.querySelector('.section2-cards2');
let button2=document.querySelector('.section2-cards2 button');
card2.addEventListener('mouseover',()=>{
    button2.style.cssText=' transform:translatey(20px)'
})
card2.addEventListener('mouseout',()=>{
    button2.style.cssText=' transform:translatey(0px)'
})

let card3=document.querySelector('.section2-cards3');
let button3=document.querySelector('.section2-cards3 button');
card3.addEventListener('mouseover',()=>{
    button3.style.cssText=' transform:translatey(20px)'
})
card3.addEventListener('mouseout',()=>{
    button3.style.cssText='transform:translatey(0px)'
})

let card4=document.querySelector('.section2-cards4');
let button4=document.querySelector('.section2-cards4 button');
card4.addEventListener('mouseover',()=>{
    button4.style.cssText=' transform:translatey(20px)'
})
card4.addEventListener('mouseout',()=>{
    button4.style.cssText=' transform:translatey(0px)'
})

let card5=document.querySelector('.section2-cards5');
let button5=document.querySelector('.section2-cards5 button');
card5.addEventListener('mouseover',()=>{
    button5.style.cssText=' transform:translatey(20px)'
})
card5.addEventListener('mouseout',()=>{
    button5.style.cssText='transform:translatey(0px)'
})

let card6=document.querySelector('.section2-cards6');
let button6=document.querySelector('.section2-cards6 button');
card6.addEventListener('mouseover',()=>{
    button6.style.cssText='transform:translatey(20px)'
})
card6.addEventListener('mouseout',()=>{
    button6.style.cssText=' transform:translatey(0px)'
})