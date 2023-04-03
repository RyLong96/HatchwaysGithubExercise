//Write a function called countdown that accepts a number as a parameter and every 1000 ms decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.

function countDown(time){
    let timer = setInterval(function() {
      time--;
      if(time <= 0){
        clearInterval(timer);
        console.log('DONE!');
        return;
      }
  
        console.log(time);
      
    }, 1000)
  }
  
  
  
  
  
  console.log(countDown(4));
  //expected outcome is 3, 2, 1, done
  
  //Write a function called randomGame that selects a random number between 0 and 1 everyt 1000 ms and each time that a random number is picked, add 1 to the counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.
  
  function randomGame() {
    let num = 0;
    let counter = 0;
    let timer = setInterval(function() {
      num = Math.random();
      counter ++;
      if(num > .75) {
        clearInterval(timer);
        console.log("It took " + counter + " try/tries before we got a number greater than .75!")
      }
    },1000)
  }
  console.log(randomGame())
  