const Parent=document.getElementById("wrp");
let count=0;

document.getElementById("next").addEventListener('click',()=>{
    if(count>=4)
    return;
Parent.children[++count].classList.add("bg-color");
Parent.children[++count].classList.add("bg-color");
})
document.getElementById("prev").addEventListener('click',()=>{
    if(count==0)
    return;
    Parent.children[count--].classList.remove("bg-color");
Parent.children[count--].classList.remove("bg-color");
})

