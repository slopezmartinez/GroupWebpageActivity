/**
 * Toggles the display of an individual team member's bio
 * @param {string} bioId - The ID of the bio section to show or hide
 */
function toggleBio(bioId) {
    const bio = document.getElementById(bioId);
    // Toggle between showing and hiding the bio section
    if (bio.style.display === "none" || bio.style.display === "") {
        bio.style.display = "block";
    } else {
        bio.style.display = "none";
    }
}

/**
 * Shows the specified section ('bios' or 'vision') and hides the other
 * @param {string} sectionId - The ID of the section to display
 */
function showSection(sectionId) {
    const biosSection = document.getElementById("bios");
    const visionSection = document.getElementById("vision");

    // Display the bios section and hide the vision section
    if (sectionId === "bios") {
        biosSection.style.display = "flex";
        visionSection.style.display = "none";
    }
    // Display the vision section and hide the bios section
    else if (sectionId === "vision") {
        biosSection.style.display = "none";
        visionSection.style.display = "block";
    }
}

// Function to show/hide team bio sections
function showSection(sectionId) {
    // Hide all containers
    document.querySelectorAll('.container').forEach(container => {
        container.style.display = 'none';
    });
    // Show the selected container
    document.getElementById(sectionId).style.display = 'flex';
}

// Function to toggle individual bio text
function toggleBio(bioId) {
    const bio = document.getElementById(bioId);
    if (bio.style.display === "block") {
        bio.style.display = "none";
    } else {
        bio.style.display = "block";
    }
}

// --- Vidhi's Mood Board Functions ---

// Function to open Vidhi's Mood Board Modal
function openMoodBoard5() {
    const modal = document.getElementById("moodBoard5Modal");
    modal.style.display = "block";
}

// Function to close Vidhi's Mood Board Modal
function closeMoodBoard5() {
    const modal = document.getElementById("moodBoard5Modal");
    modal.style.display = "none";
}

// Close modal if user clicks anywhere outside of the image
window.onclick = function (event) {
    const modal = document.getElementById("moodBoard5Modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

