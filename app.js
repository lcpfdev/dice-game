document.getElementById("editNamesBtn").addEventListener('click', () => {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change Player2 name");

    document.getElementById("player1")
                    .innerHTML = player1;
                      
    document.getElementById("player2")
                   .innerHTML = player2;
})





document.getElementById("rollBtn").addEventListener('click', () => {
    
    let randomThrow = randomNumbers()

   let diceImageTag = document.getElementById("dicecover")

   diceImageTag.src = 'dice'+randomThrow+'.png';
   
   let score = 0

    score = randomThrow
   
   document.getElementById("score").innerHTML = score 
    

  

   
 })


    



 function randomNumbers () {
    return Math.ceil(Math.random()*6);
}


























  



