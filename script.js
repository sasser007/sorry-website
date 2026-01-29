let scale = 1;
let count = 0;

const messages = [
  "Okay okay… I deserve that 😔",
  "Still angry? I’m listening 👂",
  "Hmm… that YES felt personal 😅",
  "Chalo yarr abb mannnn v jao 🥺",
  "Come on… press NO already 😌",
  "Alright… I’ll wait ❤️"
];

function increaseNo() {
  const noBtn = document.getElementById("noBtn");
  const text = document.getElementById("funnyText");

  scale += 0.25;
  noBtn.style.transform = "scale(" + scale + ")";

  if (count < messages.length) {
    text.innerText = messages[count];
    count++;
  }
}

function goNext() {
  window.location.href = "gifts.html";
}

/* Mobile support */
document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.querySelector(".yes");

  yesBtn.addEventListener("touchstart", function (e) {
    e.preventDefault();
    increaseNo();
  });
});
