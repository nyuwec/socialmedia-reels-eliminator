// content.js  
// Function to remove YouTube Reels
function removeYouTubeReels() {
    const reelsSection = document.querySelector("ytd-reel-shelf-renderer");
    if (reelsSection) {
        reelsSection.remove();
    }
}

// Function to remove Facebook Reels
function removeFacebookReels() {
    // Remove Reels from the feed
    const reelContainers = document.querySelectorAll('div[aria-label="Reels"');
    reelContainers.forEach(reelContainer => {
        if (reelContainer) reelContainer.remove();
    });
}

// Function to determine which site we're on and remove appropriate content
function removeReels() {
    const hostname = window.location.hostname;
    if (hostname.includes('youtube.com')) {
        removeYouTubeReels();
    } else if (hostname.includes('facebook.com')) {
        removeFacebookReels();
    }
}

// Run when the page loads
document.addEventListener('DOMContentLoaded', removeReels);

// Observe DOM changes to remove Reels if they appear later
const observer = new MutationObserver(removeReels);
observer.observe(document.body, { 
    childList: true, 
    subtree: true 
});
