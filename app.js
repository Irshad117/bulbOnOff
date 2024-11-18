let bulbOn = document.querySelector("#bulbOn");
let bulbOff = document.querySelector("#bulbOff");

bulbOn.addEventListener("click", () => {
  document.querySelector("#myImg").src="pic_bulbon.gif";
  bulbOn.style.backgroundColor = "green";
  bulbOff.style.backgroundColor = "white";
  console.log("bulbOn clicked");
});

bulbOff.addEventListener("click", () => {
  document.querySelector("#myImg").src="pic_bulboff.gif";
  bulbOn.style.backgroundColor = "white";
  bulbOff.style.backgroundColor = "red";
  bulbOff.style.color="black";
  console.log("bulbOff clicked");
});