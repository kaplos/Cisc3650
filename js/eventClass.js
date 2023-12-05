// eventClass.js
// ====
// This file contains the definition of the class Event.

"use strict";

// Object Class "BCEvent"
class BCEvent {
	constructor(identifier, title, location, date, imageFile, description, eventTypes, relatedEvents) {
		this.identifier = identifier;
		this.title = title;
		this.location = location;
		this.date = date;
		this.imageFile = imageFile;
		this.description = description;
		this.eventTypes = eventTypes;
		this.relatedEvents = relatedEvents;
	}
	
	// Creates a <div> for an event, to be inserted into the DOM
	createDiv(isMainPage) {
		const divID = "event_"+this.identifier;
		const eventLink = "event.html?id="+this.identifier;
		
		// Container div for tile
		const container = document.createElement("div");
		container.className = isMainPage? "col-6 col-md-4 col-xl-3 col-xxl-2" : "col-6 col-sm-4 col-md-3 col-xl-2";
		
		const imageAnchor = document.createElement("a");
		imageAnchor.href = eventLink;
		imageAnchor.className = "ratio ratio-1x1";
		container.appendChild(imageAnchor);
		
		// const imageDiv = document.createElement("div");
		// imageAnchor.appendChild(imageDiv);
		
		const image = document.createElement("img");
		image.src = "img/"+this.imageFile;
		image.alt = "Event "+this.identifier+" image";
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
		title.appendChild(document.createTextNode(this.title));
		detailsAnchor.appendChild(title);
		
		const location = document.createElement("div");
		location.className = "brand-yellow my-0";
		location.appendChild(document.createTextNode(this.location));
		detailsAnchor.appendChild(location);
		
		const date = document.createElement("div");
		date.className = "brand-burgandy my-0";
		date.appendChild(document.createTextNode(this.date));
		detailsAnchor.appendChild(date);
		
		return container;
	}
	
}

