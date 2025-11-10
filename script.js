// Ensure the script runs only after the entire page is loaded
document.addEventListener('DOMContentLoaded', () => {
    // 1. Select the emoji element by its ID
    const emoji = document.getElementById('download-emoji');

    // 2. Select all download buttons by their class
    const downloadButtons = document.querySelectorAll('.download-btn');

    // 3. Loop through all buttons and add a click listener
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Prevent the browser from trying to follow the '#' link
            event.preventDefault(); 
            
            // A. Show the emoji and start the scaling animation (infinite loop starts)
            emoji.style.opacity = '1';
            emoji.classList.add('animate-download');

            // B. Set a timer to stop the animation after 5 seconds
            setTimeout(() => {
                // Stop the infinite loop by removing the class
                emoji.classList.remove('animate-download');
                // Hide the emoji smoothly
                emoji.style.opacity = '0'; 
            }, 5000); // 5000 milliseconds = 5 seconds
        });
    });
});