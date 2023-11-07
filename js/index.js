// index.js
// ====
// This file is included at the end of index.html

"use strict";

function addEvents() {
	let container = document.getElementById("eventsSection");
	
	allEventsList.forEach((event, index) => {
		container.appendChild(event.createDiv(true));
	});
}

// Main
// Populate the list with events from the allEventsList global
addEvents();
