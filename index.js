var number1=Math.floor(Math.random()*6)+1;
var diceimage="images/"+"dice"+number1+".png";
document.querySelectorAll("img")[0].setAttribute("src",diceimage);


var number2=Math.floor(Math.random()*6)+1;
var diceimage1="images/"+"dice"+number2+".png";
document.querySelectorAll("img")[1].setAttribute("src",diceimage1);

if(number1>number2){
  document.querySelector("h1").innerHTML="Player 1 Win!"
}else if(number1<number2){
  document.querySelector("h1").innerHTML="Player 2 Win!"
}else{
  document.querySelector("h1").innerHTML="Draw"
}
