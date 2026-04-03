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

/* Sree Functions */
/* toggle button feat Sree's bio */
function toggleBio3(bioId, btn) {
    const bio = document.getElementById(bioId);
    bio.classList.toggle("show");
    // Toggle between showing and hiding the bio section
    if (bio.classList.contains("show")) {
        btn.innerText = "Hide Bio";
    } else {
        btn.innerText = "Meet Sree";
    }
}

function openMoodboard3() {
    document.getElementById("moodboard3Modal").style.display = "block";
}

function closeMoodboard3() {
    document.getElementById("moodboard3Modal").style.display = "none";
}
