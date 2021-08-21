var r1= Math.floor(Math.random()*6)+1;
var ran= "dice"+r1+".png";
var ra="images/"+ran;
var im1=document.querySelectorAll("img")[0];
im1.setAttribute("src",ra);


var r2= Math.floor(Math.random()*6)+1;
var ran2= "dice"+r2+".png";
var ra2="images/"+ran2;
var im2=document.querySelectorAll("img")[1];
im2.setAttribute("src",ra2);

if(r1>r2){
  document.querySelector("h1").innerHTML="Player 1 win!"
}else if(r1<r2){
  document.querySelector("h1").innerHTML="Player 2 win!"
}else{
  document.querySelector("h1").innerHTML="Draw!"
}
