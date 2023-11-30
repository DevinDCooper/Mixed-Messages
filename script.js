document.addEventListener('DOMContentLoaded', function() {


let btn = document.getElementById("btn");
let output = document.getElementById("output");

let messages = [
  "Power level over 9000! Ready to tackle the day like a Super Saiyan!",
  "Kamehameha of productivity coming your way. Let's crush it together!",
  "Just like the Dragon Balls, every problem has a solution. Stay positive!",
  "Charging up my energy for the day ahead. Time to go Super Saiyan mode!",
  "In the game of life, be a Z Fighter. Face challenges with strength and courage!",
  "Spirit Bombing negativity out of existence. Positivity, let's go!",
  "Just like Goku, pushing my limits today. Nothing's impossible!",
  "Sensing good vibes in the air—must be a sign of a great day ahead!",
  "Channeling my inner Vegeta. Today, I'm the Prince of all accomplishments!",
  "Finding the Dragon Balls of motivation to make my wishes come true. Let's make it happen!",
];

btn.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * messages.length);
  let randomMessage = messages[randomIndex];

  output.innerHTML = randomMessage;
});
})
