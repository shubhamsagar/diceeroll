function randomNumberGenerator(){
  var randomNumber = Math.random();
  randomNumber = randomNumber*6;
  randomNumber = Math.floor(randomNumber)+1;
  return randomNumber;
}
var player1Dice = randomNumberGenerator();
var player2Dice = randomNumberGenerator();
document.querySelector(".img1").setAttribute("src","./images/dice"+player1Dice+".png")
document.querySelector(".img2").setAttribute("src","./images/dice"+player2Dice+".png")

if(player1Dice>player2Dice){
  document.querySelector("h1").innerHTML = "Player 1 Wins"
}else if (player2Dice > player1Dice){
  document.querySelector("h1").innerHTML = "Player 2 Wins"
}else{
  document.querySelector("h1").innerHTML = "Match Draw"
}
