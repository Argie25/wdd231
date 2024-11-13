// Select the hamburger button and navigation menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

// Toggle 'open' class on click
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// Select the <span> element with id="currentyear"
const currentYearElement = document.getElementById("currentyear");

// Get the current year using the Date object
const currentYear = new Date().getFullYear();

// Populate the <span> element with the current year
currentYearElement.textContent = currentYear;


// Select the element
const lastModifiedElement = document.getElementById("lastModified");


// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Populate the element
lastModifiedElement.textContent = `Last updated: ${lastModifiedDate}`;