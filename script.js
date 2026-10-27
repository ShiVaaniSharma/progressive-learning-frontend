const dots = [];
const count = 20;

for (let i = 0; i < count; i++) {
  const dot = document.createElement("div");
  dot.className = "dot";
  document.body.appendChild(dot);

  dots.push({
    element: dot,
    x: 0,
    y: 0
  });
}

let mouseX = 0;
let mouseY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  let x = mouseX;
  let y = mouseY;

  dots.forEach((dot, index) => {
    dot.x += (x - dot.x) * 0.25;
    dot.y += (y - dot.y) * 0.25;

    dot.element.style.left = dot.x + "px";
    dot.element.style.top = dot.y + "px";

    const scale = 1 - index / count;
    dot.element.style.opacity = scale;
    dot.element.style.transform =
      `translate(-50%, -50%) scale(${scale})`;

    x = dot.x;
    y = dot.y;
  });

  requestAnimationFrame(animate);
}

animate();


//   function showSelected() {
//     const select = document.getElementById("mySelect");
//     const selected = Array.from(select.selectedOptions).map(option => option.value);
//     document.getElementById("result").textContent = "You selected: " + selected.join(", ");
//   }



// space for second section editing code




// adding this miracle code later 








// ✅ Common properties you can use:
// Property	            What it means
// select.options	        All <option> elements inside the <select>
// select.value	        The currently selected value (like "Apple")
// select.selectedIndex	The index (number) of the selected option (e.g. 0, 1)
// select.length	        Total number of options
// select.multiple	        Whether multiple selections are allowed (true/false)
// select.name 	        The name of the <select> tag (if given in HTML)
// select.disabled	        Whether the <select> is disabled
// select.form  	        The form element this select belongs to (if any)








//     document.getElementById("submitBtn").onclick = function() {
//     var select = document.getElementById("mySelect");
//     var result = "";

//     if (select.options[0].selected) {
//       result += "Apple ";
//     }
//     if (select.options[1].selected) {
//       result += "Banana";
//     }

//     document.getElementById("result").innerText = "You selected: " + result;
//   };










// using placehollders 


//     document.getElementById("submitBtn").onclick = function () {
//     var select = document.getElementById("mySelect");
//     var result = "";

//     if (select.options[0].selected) {
//       result += select.options[0].value + " ";
//     }
//     if (select.options[1].selected) {
//       result += select.options[1].value;
//     }

//     document.getElementById("result").innerText = "You selected: " + result;
//   };






(() => {

 

 

  const button = section.querySelector(
    ".magnetic-demo-button"
  );

  const text = section.querySelector(
    ".magnetic-demo-button-text"
  );

  // Disable magnetic movement on touch devices

  if (window.matchMedia("(hover: none)").matches) {
    return;
  }

  const strength = 0.3;
  const textStrength = 0.5;

  button.addEventListener("mousemove", (event) => {

    const rect = button.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = event.clientX - centerX;
    const y = event.clientY - centerY;

    // Move the button

    button.style.transform = `
      translate(${x * strength}px, ${y * strength}px)
    `;

    // Move the text independently

    text.style.transform = `
      translate(
        ${x * textStrength}px,
        ${y * textStrength}px
      )
    `;

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "translate(0, 0)";
    text.style.transform = "translate(0, 0)";

  });

})();






//   using function 


//   document.getElementById("submitBtn").onclick = displaySelectedOptions;

//   function displaySelectedOptions() {
//     var select = document.getElementById("mySelect");
//     var result = "";

//     for (var i = 0; i < select.options.length; i++) {
//       if (select.options[i].selected) {
//         result += select.options[i].value + " ";
//       }
//     }

//     document.getElementById("result").innerText = "You selected: " + result.trim();
//   }















    document.getElementById("submitBtn").onclick = function() {
    var select = document.getElementById("mySelect");
    var result = "";

    if (!select.options[0].selected) {
      result += "Apple";
    }
    if (!select.options[1].selected) {
      result += "Banana";
    }

    document.getElementById("result").innerText = "You selected: " + result;
  };










// adding more functions next day 
