var  options = document.querySelectorAll(".options"); // selects all elements with the class name "options" and stores them in the options variable.
          var  pScore = 0;
          var  cScore = 0;
      
          options.forEach((option) => {
            option.addEventListener("click", function () { //Gets the value of the clicked element and assigns it to the variable pInput
              var pInput = this.value;//this refers to the element that was clicked, and this.value retrieves the value of that element.
      
              var cOptions = ["Rock", "Paper", "Scissors"];
              var cInput = cOptions[Math.floor(Math.random() * 3)];//Assigns a random element from cOptions to the variable cInput.
              
              updateMoves(pInput, cInput);
              compareInputs(pInput, cInput);
              updateScore();
              if(checkWinner()){    //Checks if there is a winner by calling the checkWinner function
                pScore = cScore= 0;
                updateScore();
              }
            });
          });
          function updateMoves(pInput, cInput){    //the function displays the corresponding images of the chosen moves.
            document.getElementById("p-move").src = `/${pInput}.webp`;
            document.getElementById("c-move").src = `/${cInput}.webp`;
          }
          
      
      
          function compareInputs(pInput, cInput) {
            var  currentMatch = `${pInput} vs ${cInput}`;
            if (pInput === cInput) {
              alert(`${currentMatch} = is a Tie`);
              return;
            }
      
            if (pInput === "Rock") {                            // kan NA5TAR 7ajra
              if (cInput === "Scissors") {
                alert(`${currentMatch} = You Win`);
                pScore++;
              } else {
                alert(`${currentMatch} = Computer Wins`);
                cScore++;
              }
            }
           
            else if (pInput === "Paper") {                  //kan NA5TAR war9a
              if (cInput === "Rock") {
                alert(`${currentMatch} = You Win`);
                pScore++;                                             
              } else {
                alert(`${currentMatch} = Computer Wins`);
                cScore++;
              }
            }
            
            else {                 //kan NA5TAR  m9ass
              if (cInput === "Paper") {
                alert(`${currentMatch} = You Win`);
                pScore++;
              } else {
                alert(`${currentMatch} = Computer Wins`);
                cScore++;
              }
            }
          }
         

          
          

          function checkWinner() {
            if (pScore === 5 ) {
                alert("You win the game! Congratulations!")
            }else if (cScore===5){
                alert("Computer wins the game! Try again next time!")
            }
              
            
                
        }
        function updateScore() {
            document.getElementById("p-score").textContent = pScore;
            document.getElementById("c-score").textContent = cScore;
          }

          