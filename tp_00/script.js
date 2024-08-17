let g_filter = 63; // a global variable setted to max onload
let parent = document.getElementById("parent"); // selecting where i ll push the elements

function renderElements(target_parent, data, filter) {  // function the create and render the elemets passed as arg to web page

  for (piece of data) { // iterating elements
    if ((filter & 1) != 1 && piece.category == "smartphones") continue; // checking the filter to decide creating that element or not
    else if (((filter >> 1) & 1) != 1 && piece.category == "laptops") continue;
    else if (((filter >> 2) & 1) != 1 && piece.category == "fragrances")
      continue;
    else if (((filter >> 3) & 1) != 1 && piece.category == "skincare") continue;
    else if (((filter >> 4) & 1) != 1 && piece.category == "groceries")
      continue;
    else if (((filter >> 5) & 1) != 1 && piece.category == "home-decoration") {
      continue;
    } else { 
      let element = document.createElement("div");
      element.classList.add("element");
      element.innerHTML = `
		
		
			<span>category: </span><span>${piece.category}</span>
			<img src="${piece.thumbnail}"/>
			<div class="info">
				<h2>${piece.title}</h2>
				<p>${piece.description}</p><br>
			</div>
			<div class="pricing">
				<span>price:</span><span class="price">${(
          piece.price -
          piece.price * Number(piece.discountPercentage / 100)
        ).toFixed(2)}</span><span class="discount"><del>${
        piece.price
      }<del></span><br>
				<button>Buy</button>
				<span>${piece.stock} left</span>
			</div>
			
			
			`;
      target_parent.appendChild(element);
    }
  }
}

fetch("./data.json")       //fetching data from the file data.json
  .then((res) => res.json()) // catching the promised response and taking the json data and passing to the next 
  .then((json_data) => {renderElements(document.getElementById("parent"), json_data, g_filter);}) //rendering that data to the web page
  .catch((err) => console.log(err)); // in case there is an error

function rerender(checkbox) { // rerenders the elements when a checkbox changed
  parent.innerHTML = "";// emptying the parent of elements
  if (checkbox.checked == true) g_filter += Number(checkbox.value); //checking the changed check box whether its checked or unchecked
  else g_filter -= Number(checkbox.value);
//   console.log(g_filter);
  fetch("./data.json")
    .then((res) => res.json())
    .then((json_data) => {
      renderElements(document.getElementById("parent"), json_data, g_filter);
    })
    .catch((err) => console.log(err));
}
