let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
//
let homePlus1 = document.getElementById("home-plus1");
let homePlus2 = document.getElementById("home-plus2");
let homePlus3 = document.getElementById("home-plus3");
let guestPlus1 = document.getElementById("guest-plus1");
let guestPlus2 = document.getElementById("guest-plus2");
let guestPlus3 = document.getElementById("guest-plus3");
let reset = document.getElementById("reset");
let HomeScore = 0;
let GuestScore = 0;
//Reset
const Reset = () => {
  HomeScore = 0;
  GuestScore = 0;
  homeScore.textContent = HomeScore;
  guestScore.textContent = GuestScore;
};

reset.addEventListener("click", Reset);

// Home Function
const HomePlus1 = () => {
  homeScore.innerText = HomeScore += 1;
};
const HomePlus2 = () => {
  homeScore.innerText = HomeScore += 2;
};
const HomePlus3 = () => {
  homeScore.innerText = HomeScore += 3;
};
//Home Listener
homePlus1.addEventListener("click", HomePlus1);
homePlus2.addEventListener("click", HomePlus2);
homePlus3.addEventListener("click", HomePlus3);
//Guest Function
const GuestPlus1 = () => {
  guestScore.innerText = GuestScore += 1;
};
const GuestPlus2 = () => {
  guestScore.innerText = GuestScore += 2;
};
const GuestPlus3 = () => {
  guestScore.innerText = GuestScore += 3;
};
//Guest Listener
guestPlus1.addEventListener("click", GuestPlus1);
guestPlus2.addEventListener("click", GuestPlus2);
guestPlus3.addEventListener("click", GuestPlus3);
