const sections = document.querySelectorAll("section");
let currentSectionIndex = 0;

document.addEventListener("wheel", (event) => {
	// Detect scroll direction
	const direction = event.deltaY > 0 ? 1 : -1;

	// Update current section index
	currentSectionIndex += direction;

	// Make sure the index stays within the valid range
	if (currentSectionIndex < 0) {
		currentSectionIndex = 0;
	} else if (currentSectionIndex >= sections.length) {
		currentSectionIndex -= 1;
	}
	for (let i = 0; i < sections.length; i++) {
		if (i == currentSectionIndex) {
			sections[i].classList.remove("hidden");
		} else {
			sections[i].classList.add("hidden");
		}
	}
	// Prevent default scroll behavior
	event.preventDefault();
});
