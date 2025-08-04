


//   function showSelected() {
//     const select = document.getElementById("mySelect");
//     const selected = Array.from(select.selectedOptions).map(option => option.value);
//     document.getElementById("result").textContent = "You selected: " + selected.join(", ");
//   }

















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

