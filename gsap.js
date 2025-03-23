const cursor = document.querySelector(".cursor");
const follower = document.querySelector('.cursor-follower');
let posX = 0,
	posY = 0,
	mouseX = 0,
	mouseY = 0;
TweenMax.to({}, 0.02, {
  'repeat': -0x1,
  'onRepeat': function () {
    posX += (mouseX - posX) / 0x9;
    posY += (mouseY - posY) / 0x9;
    TweenMax.set(follower, {
      'css': {
        'left': posX - 0x14,
        'top': posY - 0x14
      }
    });
    TweenMax.set(cursor, {
      'css': {
        'left': mouseX,
        'top': mouseY
      }
    });
  }
});
document.addEventListener('mousemove', (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
  //console.log(e.pageX);
});
const cursorHoverItems = document.querySelectorAll(".cursor-hover-item");
cursorHoverItems.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    const cursorText = e.getAttribute("data-cursor-text");
    cursor.classList.add("active");
    follower.classList.add('active');
    cursor.setAttribute("data-cursor-text", cursorText);
    cursor.querySelector("::before").textContent = cursorText;
  });
  e.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
    follower.classList.remove("active");
    cursor.setAttribute("data-cursor-text", ""); // Reset text to empty
  });
});