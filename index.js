// Navbar toggerler
const navDialog = document.getElementById("nav-dialog");

function handleMenu() {
	navDialog.classList.toggle("hidden");
}

// Scroll to horizontal cards
const scrollContainer = document.getElementById("scrollContainer");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
console.log(nextButton, prevButton);

nextButton.addEventListener("click", () => {
	console.log("clicket");
	scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
});

prevButton.addEventListener("click", () => {
	scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
});
