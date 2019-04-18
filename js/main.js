console.log('hello from main.js')

const audrey = document.getElementById("audrey");


document.addEventListener("scroll", function(event) {

  let windowX = window.scrollX / 4,
    windowY = window.scrollY / 3,
    x = Math.max(windowX, 50),
    y = Math.max(windowY, 100);
  audrey.style.width = `${x}px`;
  audrey.style.height = `${y}px`;


});
