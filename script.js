document.addEventListener("DOMContentLoaded", function() {

const btnYes = document.getElementById("btn-yes");
const btnNo = document.getElementById("btn-no");
const cardProposal = document.getElementById("card-proposal");
const cardConfession = document.getElementById("card-confession");
const btnPopup = document.getElementById("btn-popup");
const popup = document.getElementById("popup-love");
const popupClose = document.getElementById("popup-close");
const bgSong = document.getElementById("bg-song");

let musicStarted = false;
document.body.addEventListener("click", () => {
    if(!musicStarted){ bgSong.muted=false; bgSong.play(); musicStarted=true;}
}, {once:true});

let noCount = 0;
const savageLines = ["Dil dukha diya 😭","Still no? 🥺","Thoda pyaar dedo 💖","Itna bhi kya gussa? 😔","Ek smile to de do 😊","Thoda sa YES bol do na 🫣","Ab bas YES hi bacha 💞"];

btnYes.addEventListener("click", ()=>{
    cardProposal.classList.add("hidden");
    cardConfession.classList.remove("hidden");
});

btnNo.addEventListener("click", ()=>{
    if(noCount < savageLines.length){
        btnNo.innerText = savageLines[noCount++];
    } else { btnYes.click(); }
});

btnPopup.addEventListener("click", ()=>{
    popup.classList.remove("hidden");
    createHearts();
});

popupClose.addEventListener("click", ()=>popup.classList.add("hidden"));
popup.addEventListener("click",(e)=>{ if(e.target===popup) popup.classList.add("hidden"); });

function createHearts(){
    const popupCard = popup.querySelector(".popup-card");
    popupCard.querySelectorAll(".heart").forEach(h=>h.remove());
    for(let i=0;i<10;i++){
        const heart = document.createElement("span");
        heart.className="heart";
        heart.innerText = ["❤️","💖","💞","💗"][Math.floor(Math.random()*4)];
        heart.style.left = Math.random()*90+"%";
        heart.style.fontSize = (15+Math.random()*10)+"px";
        heart.style.animationDelay = (Math.random()*2)+"s";
        popupCard.appendChild(heart);
    }
}

});
