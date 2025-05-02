window.addEventListener( "load", () => {   //for main-text delay //
   setTimeout(() => {
     const audio = document.getElementById("Txt-bg-music");
     audio.play().catch((e) => {
        console.log("Autoplay blocked, maybe user interaction is needed.");
        const resumeAudio = () => {
         audio.play();
         document.removeEventListener("click", resumeAudio);
       };
 
       document.addEventListener("click", resumeAudio);
     });
     
   }, 1500);
   setTimeout(() => {
      const leftSparkle = document.getElementById("sparkleL");
      const rightSparkle = document.getElementById("sparkleR");
      
      leftSparkle.style.display = "block";
      leftSparkle.classList.add("popupL");

      rightSparkle.style.display = "block";
      rightSparkle.classList.add("popupR");
   }, 2000);
 
   // whole cookie animation//

   setTimeout( () => {
      const cookieContainer = document.getElementById('cookie-whole')

      cookieContainer.classList.add('shake');

      setTimeout( () => {
         cookieContainer.classList.remove('shake');
         cookieContainer.addEventListener('click', crackCookie)
      }, 2500);
   }, 4000);

});


//fortune messege here//
const quotes = [
   "You have a flair for the dramatic, and life seems to be in on the joke.",
   "Some days you conquer mountains. Other days you can’t find your phone while holding it.",
   "You were born to shine... just after one more nap and a snack.",
   "Your life is 10% planning and 90% ‘we'll just see what happens.’",
   "Your life is a delightful mess — mostly mess, occasionally delightful, but always interesting.",
   "You're in a group project called ‘life’ and apparently, no one else is doing their part.",
   "The universe loves throwing you plot twists. Too bad it never sends a script.",
   "Subtlety isn’t really your thing. You were made for grand entrances and dramatic sighs.",
   "You’re winging it with remarkable flair, and somehow it’s working. Mostly.",
   "You might not be lost — just dramatically detouring with unmatched style.",
   "Every day you wake up thinking, ‘Today I will be mysterious and composed.’ You rarely are, but points for consistency.",
   "Your soul says ‘glow-up,’ but your energy level says ‘let’s lie down instead.’",
   "Your life isn’t a mess — it’s an abstract masterpiece. Please stop interpreting it though.",
   "You make decisions with the confidence of someone who didn’t read the instructions — or even glance at them.",
   "Your dreams are out partying with your motivation. Neither is texting back.",
   "Your dreams are off wandering again, and you forgot to give them a curfew.",
   "You are, against all odds, still thriving. Chaotically, perhaps — but thriving.",
   "You flip between majestic icon and confused goblin hourly, and that’s okay.",
   "You’re not lost. You’re just meandering fabulously.",
   "Every time you get it together, life updates its terms and conditions."

 ];



function crackCookie () {
   const wholeCookie = document.getElementById('cookie-whole');
   const cookieLeft = document.getElementById('cookie-left');
   const cookieRight = document.getElementById('cookie-right');
   const scrollContainer = document.querySelector(".fortune-msg");
   const quote = document.getElementById("quote"); 
   const resetBtn = document.getElementById("reset");
    
   wholeCookie.style.display = 'none';
   cookieLeft.classList.remove('hidden');
   cookieRight.classList.remove('hidden');

   cookieLeft.classList.add('crack-left');
   cookieRight.classList.add('crack-right');

   setTimeout(() => {
      scrollContainer.classList.remove('hidden2');
   
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
       quote.textContent = randomQuote;
      
       quote.classList.remove('hidden2');
   
       resetBtn.classList.remove('hidden2');
      }, 600);

}

function resetFortune() {
   location.reload(); //reloads the page
}

