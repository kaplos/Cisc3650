// index.js
// ====
// This file is included at the end of index.html

"use strict";

function addEvents(filter) {
	let container = document.getElementById("eventsSection");

	allEventsList.forEach((event, index) => {
		if (filter == null || filter == "all") {
			container.appendChild(event.createDiv(true));
		} else if (event.eventTypes.includes(filter)) {
			container.appendChild(event.createDiv(true));
		}
	});
}

function removeEvents() {
	// Remove all elements except the filterButtons from the page
	let container = document.getElementById("eventsSection");
	let toRemove = [];
	for (const child of container.children) {
		if (child.id != "filterButtons") toRemove.push(child);
	}
	for (const child of toRemove) container.removeChild(child);
}

// Main
// Populate the list with all events from the allEventsList global
addEvents(null);

// Add event listener for the filter buttons
document.getElementById("filterButtonGroup").addEventListener('click', ({target}) => {
	if (target.getAttribute("name") === "filter") {
		const filterBy = target.value;
		//console.log("Filter by: "+filterBy);
		removeEvents();
		addEvents(filterBy);
	}
});
