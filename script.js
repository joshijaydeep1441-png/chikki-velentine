const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const main = document.getElementById("main");
const letter = document.getElementById("letter");

/* NO button impossible */
const moveNo = () => {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
};

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* YES → Love Letter */
yesBtn.addEventListener("click", () => {
  main.style.display = "none";
  letter.style.display = "block";
});

/* Floating hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 300);
