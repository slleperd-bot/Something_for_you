const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const botMessage = document.getElementById("botMessage");
const success = document.getElementById("successScreen");
const card = document.querySelector(".card");
const emojiContainer = document.getElementById("emoji-container");

let noCount = 0;

const replies = [
"🥺 Are you sure?",
"🥹 Bnn jaa naa aab itne bhi kyaa nakhre karna, maan bhi jaao ❤️",
"😂 Bss karo ywrr, hath dard hone lagega No ka option click karte karte.",
"🥺 Kyaa ywrr itna bhi kyaa pareshaan karna kisi bacchee ko.",
"😭 Kyaa ywrr tum itne bure ho ki mere friend nhi bann sakte?"
];

function createEmoji(){

const emoji=document.createElement("div");

emoji.className="emoji";

emoji.innerHTML="🥺";

emoji.style.left=Math.random()*window.innerWidth+"px";

emoji.style.top=(window.innerHeight-120)+"px";

emojiContainer.appendChild(emoji);

setTimeout(()=>{
emoji.remove();
},2000);

}

function jumpButton(){

const x=Math.random()*(window.innerWidth-120);

const y=Math.random()*(window.innerHeight-80);

noBtn.style.position="fixed";

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

}

noBtn.addEventListener("click",()=>{

createEmoji();

if(noCount<replies.length){

botMessage.innerHTML=replies[noCount];

noCount++;

}else{

botMessage.innerHTML="😂 Ab to YES hi dabana padega.";

jumpButton();

}

});

noBtn.addEventListener("mouseover",()=>{

if(noCount>=replies.length){

jumpButton();

}

});

yesBtn.addEventListener("click",()=>{

card.style.display="none";

success.classList.remove("hidden");

confetti({

particleCount:250,

spread:150,

origin:{y:0.6}

});

});
