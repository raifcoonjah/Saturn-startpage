// JavaScript to control the modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Check localStorage for a flag indicating if the modal has been shown
const hasModalBeenShown = localStorage.getItem('modalShown');

if (!hasModalBeenShown) {
    // Show the modal if it hasn't been shown before
    document.getElementById('modal').style.display = 'block';

    // Set a flag in localStorage to indicate that the modal has been shown
    // localStorage.setItem('modalShown', 'false');

    // Automatically close the modal after a few seconds (adjust the timeout as needed)
    // setTimeout(closeModal, 100000); // Close the modal after 5 seconds
}
