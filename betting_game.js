$(document).ready(function(){
  
  $("span").text(BettingGame.money +"$");
  $("#betting-form").on("submit", BettingGame.start);
  $(".reload-btn").on("click", function(){
    location.reload(true);
  }); 
});

var BettingGame = {
  start: function(evt){
    evt.preventDefault();
    BettingGame.placeBet();
    BettingGame.generateRandomNumber();
    BettingGame.guessNumber();
    BettingGame.checkGuess();
    BettingGame.gameOver();
  },
  money: 100,
  placeBet: function(){
    BettingGame.bet = +$("#bet").val();
  },
  generateRandomNumber: function(){
    BettingGame.randomNumber = Math.floor(Math.random()*16);
  },
  guessNumber: function(){
    BettingGame.guess = +$("#guess").val(); 
  },
  checkGuess: function(){
    if(BettingGame.guess === BettingGame.randomNumber) {
      alert("Nice one, You doubled your winnings!!!");
      BettingGame.money *= 2;
      $("span").text(BettingGame.money + "$");
    } else if(BettingGame.guess === BettingGame.randomNumber +1 || BettingGame.guess === BettingGame.randomNumber -1) {
      alert("That was close! I'll let you keep your money. The number was " + BettingGame.randomNumber);
    } else {
      alert('Nope! The number was ' + BettingGame.randomNumber);
      BettingGame.money-=BettingGame.bet;
      $("span").text(BettingGame.money +"$");
    }
  },
  gameOver: function(){
    if(BettingGame.money <= 0)
    {
      alert("Game Over!");
      location.reload(true);
    }
  }
};

