const pig = document.querySelectorAll("img[src='/images/custom/enemy.png']");

pig.forEach((item) => {
  const coords = item.getBoundingClientRect();
  const finX = 608;
  const finY = 385;

  let x = coords.x + 12;
  let y = coords.y + 12;

  let stepX = (finX - x) / 1000;
  let stepY = (finY - y) / 1000;

  const int = setInterval(() => {
    x = x > finX ? x : x + stepX;
    y = y > finY ? y : y + stepY;
    if (x >= finX && y >= finY) {
      clearInterval(int);
      console.log("clear");
    }
    item.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }, 10);
});
