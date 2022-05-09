document.querySelector("audio").volume = 0.1;



document.querySelector(".start").addEventListener("click", () => {
  document.querySelector("audio").play();
  document.querySelector(".start").style.display = "none";
  document.querySelector(".stop").style.display = "block";
})

document.querySelector(".stop").addEventListener("click", () => {
  document.querySelector("audio").pause();
  document.querySelector(".stop").style.display = "none";
  document.querySelector(".start").style.display = "block";
})
