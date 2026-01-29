let scale = 1;

function increaseNo() {
  const noBtn = document.getElementById("noBtn");

  scale += 0.25; // grows clearly on mobile
  noBtn.style.transform = "scale(" + scale + ")";
}

function goNext() {
  window.location.href = "gifts.html";
}

/* ✅ Mobile touch support */
document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.querySelector(".yes");

  yesBtn.addEventListener("touchstart", function (e) {
    e.preventDefault(); // important for Android
    increaseNo();
  });
});
