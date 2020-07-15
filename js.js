// const stack = [];
// const word = "";
// for (var i = 0; i < checkpalindrome.length; i++) {
// 	stack.push(checkpalindrome[i])
// const checkpalindrome = prompt("is this word is palindrome");

// 	word += stack.pop();
// }
const inputValue = document.querySelector(".input");
const addButton = document.querySelector(".inputbutton"); 
const container = document.querySelector(".container"); 

class item{
	constructor(itemName){

		//create the div
		this.createDiv(itemName)
	} 

	createDiv(itemName){
		let itemBox = document.createElement("div");
		itemBox.classList.add("item");

		let input = document.createElement("input");
		input.classList.add("item_input");
		input.value = itemName;
		input.disabled = true;
		input.type = "text";

		let editButton = document.createElement("button");
		editButton.classList.add("editbutton");
		editButton.innerHTML = "EDIT";

		let removeButton = document.createElement("button");
		removeButton.classList.add("removebutton");
		removeButton.innerHTML = "REMOVE"

		container.appendChild(itemBox);
		itemBox.appendChild(input);
		itemBox.appendChild(editButton);
		itemBox.appendChild(removeButton);

		editButton.addEventListener("click", () => {
			editButton.innerHTML = "SAVE";
			input.disabled = !input.disabled;
		});

		removeButton.addEventListener("click", () => {
			container.removeChild(itemBox);
		})

	}

	// edit(input){
	// 	input.disabled = !input.disabled;
	// }
}


addButton.addEventListener("click", () => {
	if (inputValue.value != "") {
		new item(inputValue.value);
		inputValue.value = "";
	}
	
})

// function check() {
// 	if (inputValue.value != "") {
// 		new item("Sport");
// 		inputValue.value = "";
// 	}
	
// }
