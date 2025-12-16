// Create 40 snowflakes
for (let i = 0; i < 40; i++) {
  const snow = document.createElement("div");
  snow.className = "snowflake";
  snow.textContent = "❄";

  // Random position and size
  snow.style.left = Math.random() * 100 + "vw";
  snow.style.fontSize = 10 + Math.random() * 20 + "px";

  // Random animation duration
  snow.style.animationDuration = 5 + Math.random() * 5 + "s";

  // Make sure it doesn't block clicks
  snow.style.pointerEvents = "none";
  snow.style.position = "fixed";
  snow.style.top = "-10px";
  snow.style.zIndex = 999;

  document.body.appendChild(snow);
}

// Add the falling animation CSS
const style = document.createElement("style");
style.textContent = `
  @keyframes fall {
    0% { transform: translateY(0); }
    100% { transform: translateY(110vh); }
  }
  .snowflake {
    animation-name: fall;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`;
document.head.appendChild(style);
