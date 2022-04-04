const diceBtn = document.querySelector(".btn-section");
const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".first-adivse");
const apiUrl = "https://api.adviceslip.com/advice";

diceBtn.addEventListener("click", () => {
  
  fetch(apiUrl)
    .then((response) => response.json())
    .then((response) => {
      let data = response.slip;
      let dataId = data.id;
      let dataAdvice = data.advice;
      
      adviceNumber.innerHTML = `advice # ${dataId}`;
      adviceText.innerHTML = dataAdvice;
    });
});
