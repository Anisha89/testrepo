var hole=document.getElementById("hole");
var game=document.getElementById("game");
var result=document.getElementById("result");
var text=document.getElementById("text");
var score=0;
var jumping=0;
hole.addEventListener("animationiteration",RanHole)
function RanHole() { 
   var random= -((Math.random()*350)+150)
   console.log(random);
   hole.style.top=random+"px";
   score++;
   
}
var fall=setInterval(function(){
    var birdtop=parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    console.log(birdtop)
    if(jumping == 0)
    {
        bird.style.top=(birdtop+2)+"px";
    }
    var blockLeft= parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop=parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var hTop=(500+holeTop);
    if((birdtop>450)||((blockLeft<50)&&(blockLeft>-50)&&(birdtop<hTop)||(birdTop+100)))
    {
        result.style.display="block";
        text.innerText = `your final score is :${score}`;
        game.style.display="none";
        score=0;
    }
        

},10)
window.addEventListener("keydown",hop)
function hop(){
    jumping=1;
    var birdtop=parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    if(birdtop>6){
        bird.style.top=(birdtop - 60)+"px";
    }
    setTimeout(function(){
        jumping = 0
    },100)
}
