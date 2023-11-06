// main.js
// ====
// This file contains the logic for this site.
"use strict";


// Creates a <div> for an event, to be inserted into the DOM
function createEventDiv(event) {
	const divID = "event_"+event.identifier;
	const eventLink = "event.html?id="+event.identifier;
	
	// Container div for tile
	const container = document.createElement("div");
	container.className = "col-6 col-md-4 col-xl-3 col-xxl-2";
	
	const imageAnchor = document.createElement("a");
	imageAnchor.href = eventLink;
	container.appendChild(imageAnchor);
	
	const image = document.createElement("img");
	image.src = "img/"+event.imageFile;
	image.alt = "Event "+event.identifier+" image";
	image.className = "img-fluid rounded";
	imageAnchor.appendChild(image);
	
	const details = document.createElement("div");
	container.appendChild(details);
	
	const detailsAnchor = document.createElement("a");
	detailsAnchor.href = eventLink;
	detailsAnchor.className = "no-underline";
	details.appendChild(detailsAnchor);
	
	const title = document.createElement("div");
	title.className = "brand-white my-0";
	title.appendChild(document.createTextNode(event.title));
	details.appendChild(title);
	
	const location = document.createElement("div");
	location.className = "brand-yellow my-0";
	location.appendChild(document.createTextNode(event.location));
	details.appendChild(location);
	
	const date = document.createElement("div");
	date.className = "brand-burgandy my-0";
	date.appendChild(document.createTextNode(event.date));
	details.appendChild(date);
	
	return container;
}

function addEvents() {
	let container = document.getElementById("eventsSection");
	
	allEventsList.forEach((event, index) => {
		container.appendChild(createEventDiv(event));
	});
}

// Main
// Populate the list with events from the allEventsList global
addEvents();
