setInterval(timerFunction, 1000);

function displayTimer(days, hours, minutes, seconds) {
  const daysHtml = document.getElementById('days-container')
  const hoursHtml = document.getElementById('hours-container')
  const minutesHtml = document.getElementById('minutes-container')
  const secondsHtml = document.getElementById('seconds-container')
  daysHtml.innerHTML = days
  hoursHtml.innerHTML = hours
  minutesHtml.innerHTML = minutes
  secondsHtml.innerHTML= seconds
  
}

 function timerFunction(){
  const currentDate = new Date().getTime();
  const countdownDate = new Date(2022, 4, 12, 9, 0, 0, 0).getTime();
  const distance = new Date(countdownDate - currentDate).getTime();
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  displayTimer(days, hours, minutes, seconds);
 } 

 
