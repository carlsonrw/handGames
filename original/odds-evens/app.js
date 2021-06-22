const game = () => {
  let pScore = 0;
  let cScore = 0;
  let myGameMode; 

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const oddsOrEvens = document.querySelectorAll(".odds-or-evens button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["one", "two"];


     oddsOrEvens.forEach(option => {
      option.addEventListener("click", function() {
          myGameMode = this.textContent;
        });
    });


    options.forEach(option => {
      option.addEventListener("click", function() {

        setTimeout(() => {
          let computerNumber = Math.floor(Math.random() * 2);
          let computerChoice = computerOptions[computerNumber];
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          const dig = {1: "one", 2: "two"};
          //Update Images 
          playerHand.src = `./assets/${dig[this.textContent]}.png`;
          //playerHand.src = `./assets/${computerChoice}.png`;
          console.log(computerNumber, computerChoice);
          computerHand.src = `./assets/${computerChoice}.png`;
          //computerHand.src = `./assets/${dig[this.textContent]}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };
  const playerWins = () => {
    document.getElementById("player-added").style.visibility = "visible";
    setTimeout(function(){document.getElementById("player-added").style.visibility = "hidden"},1750)
  }
  const playerLoses = () => {
    document.getElementById("player-minus").style.visibility = "visible";
    setTimeout(function(){document.getElementById("player-minus").style.visibility = "hidden"},1750)
  }
  const playerTied = () => {
    document.getElementById("player-tied").style.visibility = "visible";
    setTimeout(function(){document.getElementById("player-tied").style.visibility = "hidden"},1750)
  }

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    let parsePlayer = 2;
    let parseComputer = 2;
    if (playerChoice == 1) parsePlayer = 1;
    if (computerChoice == "one") parseComputer= 1;
    const winner = document.querySelector(".winner");
    console.log((parsePlayer+parseComputer) %2 > 0, parsePlayer, parseComputer);
    if ((parsePlayer+parseComputer) %2 > 0) {
      if (myGameMode == "Odds") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore()
        playerWins()
      } else {
        winner.textContent = "Player Loses";
        cScore++; 
        updateScore()
        playerLoses() 
      }
    } else {
       if (myGameMode == "Evens") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore()
        playerWins()
      } else {
        winner.textContent = "Player Loses";
        cScore++
        updateScore()
        playerLoses()
      }
  }

  
 //Checking for a tie
   //  if (playerChoice === computerChoice) {
   //    winner.textContent = "It is a tie";
   //    playerTied();
   //    return;
   //  }
   // //Check for Rock
   //  if (playerChoice === "rock") {
   //    if (computerChoice === "scissors") {
   //      winner.textContent = "Player Wins";
   //      pScore++;
   //      updateScore();
   //      playerWins();
   //      return;
   //    } else {
   //      winner.textContent = "Computer Wins";
   //      cScore++;
   //      updateScore();
   //      playerLoses();
   //      return;
   //    }
   //  }
   //  //Check for Paper
   //  if (playerChoice === "paper") {
   //    if (computerChoice === "scissors") {
   //      winner.textContent = "Computer Wins";
   //      cScore++;
   //      updateScore();
   //      playerLoses();
   //      return;
   //    } else {
   //      winner.textContent = "Player Wins";
   //      pScore++;
   //      updateScore();
   //      playerWins();
   //      return;
   //    }
   //  }
   //  //Check for Scissors
   //  if (playerChoice === "scissors") {
   //    if (computerChoice === "rock") {
   //      winner.textContent = "Computer Wins";
   //      cScore++;
   //      updateScore();
   //      playerLoses();
   //      return;
   //    } else {
   //      winner.textContent = "Player Wins";
   //      pScore++;
   //      updateScore();
   //      playerWins();
   //      return;
   //    }
   //  }
  };

  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();
