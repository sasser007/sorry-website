let scale = 1;

window.increaseNo = function () {
  const noBtn = document.getElementById("noBtn");
  scale += 0.2;
  noBtn.style.transform = `scale(${scale})`;
};

window.goNext = function () {
  window.location.href = "gifts.html";
};
