export default function Banner() {
  console.log("Banner started...");

  const bg = document.getElementById("bg");
  const banner = document.createElement("div");
  banner.id = "banner";

  const txt = document.createElement("img");
  txt.src = "artwork/background-banner.png";
  banner.appendChild(txt);

  if (bg) bg.appendChild(banner);

  const start = Date.now(); // remember start time
  const timer = setInterval(function() {
    const timePassed = Date.now() - start;
    if (timePassed >= 23000) {
      clearInterval(timer); // finish the animation after 2 seconds
      console.log("Banner stopped...");
      return;
    }
    draw(timePassed);
  }, 19);
  
  function draw(timePassed: number) {
    banner.style.left = 2000 - (timePassed / 5) + 'px';
  }
}
