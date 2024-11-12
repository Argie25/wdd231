// Select the hamburger button and navigation menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

// Toggle 'open' class on click
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
