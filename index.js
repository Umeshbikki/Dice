let img1=document.querySelector(".img1")
let img2=document.querySelector(".img2")
document.querySelector(".button").addEventListener('click',()=>{
    let img1Num=Math.floor(Math.random()*6)+1
    let img2Num=Math.floor(Math.random()*6)+1
    img1.src=`images/dice${img1Num}.png`
    img2.src=`images/dice${img2Num}.png`
    let announcement=document.querySelector(".result")
    if(img1Num==img2Num) announcement.innerHTML="Draw!"
    else if(img1Num>img2Num) announcement.innerHTML="Player1! Wins 🚩"
    else announcement.innerHTML="Player2! Wins 🚩"
})
