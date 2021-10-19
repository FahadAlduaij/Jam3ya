var Coin = document.getElementById("coin");
var degrees = 0;
Coin.onclick = function () {
  degrees += 1800;
  console.log(degrees);
  Coin.style.webkitTransform = "rotateY(" + degrees + "deg)";
  Coin.style.MozTransform = "rotateY(" + degrees + "deg)";
  Coin.style.msTransform = "rotateY(" + degrees + "deg)";
  Coin.style.OTransform = "rotateY(" + degrees + "deg)";
  Coin.style.transform = "rotateY(" + degrees + "deg)";
};
