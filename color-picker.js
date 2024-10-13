let colorChoice = document.getElementById("colorChoice");
if (colorChoice) {
	colorChoice.addEventListener("change", selectColour);
}
function selectColour() {
	let colour = colorChoice.value;
	let box = document.getElementsByClassName("box")[0];
	if (box) {
		console.log(box.style.color);
		box.style.color = colour;
	}
}
