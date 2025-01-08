

const background = document.querySelector('.background');

function createDot() {
  const dot = document.createElement('div');
  dot.classList.add('dot');

  const size = Math.random() > 0.5 ? 4 : 2;
  dot.style.width = `${size}px`;
  dot.style.height = `${size}px`;

  dot.style.left = `${Math.random() * window.innerWidth}px`;
  dot.style.animationDuration = `${Math.random() * 5 + 5}s`;

  background.appendChild(dot);

  setTimeout(() => {
      dot.remove();
  }, 10000);
}
setInterval(createDot, 100);
