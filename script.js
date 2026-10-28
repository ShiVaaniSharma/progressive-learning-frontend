
/* 1. SUBMIT BUTTON */
const submitBtn = document.getElementById("submitBtn");
const select = document.getElementById("mySelect");
const resultText = document.getElementById("result-text");

submitBtn?.addEventListener("click", () => {
  const selected = Array.from(select.selectedOptions)
    .map(option => option.value);

  resultText.textContent = selected.length
    ? "You selected: " + selected.join(", ")
    : "Please select a fruit!";
});


/* 2. MAGNETIC RESULT BUTTON */
const magneticButton = document.getElementById("result");
const magneticText = magneticButton?.querySelector(
  ".magnetic-demo-button-text"
);

if (
  magneticButton &&
  magneticText &&
  window.matchMedia("(hover: hover)").matches
) {
  magneticButton.addEventListener("mousemove", (e) => {
    const rect = magneticButton.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    magneticButton.style.transform =
      `translate(${x * 0.25}px, ${y * 0.25}px)`;

    magneticText.style.transform =
      `translate(${x * 0.35}px, ${y * 0.35}px)`;
  });

  magneticButton.addEventListener("mouseleave", () => {
    magneticButton.style.transform = "";
    magneticText.style.transform = "";
  });
}


/* 3. MAGICAL MOUSE TAIL */
(() => {
  if (!window.matchMedia("(hover: hover)").matches) return;

  const count = 20;
  const dots = [];
  let mouseX = -100;
  let mouseY = -100;

  for (let i = 0; i < count; i++) {
    const dot = document.createElement("div");
    dot.className = "magic-tail-dot";
    document.body.appendChild(dot);

    dots.push({
      element: dot,
      x: mouseX,
      y: mouseY
    });
  }

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    let x = mouseX;
    let y = mouseY;

    dots.forEach((dot, i) => {
      dot.x += (x - dot.x) * 0.3;
      dot.y += (y - dot.y) * 0.3;

      const scale = 1 - i / count;

      dot.element.style.opacity = scale;
      dot.element.style.transform =
        `translate3d(${dot.x - 4}px, ${dot.y - 4}px, 0) scale(${scale})`;

      x = dot.x;
      y = dot.y;
    });

    requestAnimationFrame(animate);
  }

  animate();
})();
