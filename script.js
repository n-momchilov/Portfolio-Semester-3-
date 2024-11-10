// JavaScript for falling star and scroll functionality
const fallingStar = document.getElementById('fallingStar');
const aboutSection = document.querySelector('.about-section');

fallingStar.addEventListener('click', () => {
    // Start the falling animation
    fallingStar.classList.toggle('fall');
    
    // Smooth scroll to the about section
    aboutSection.scrollIntoView({
        behavior: 'smooth'
    });
});




// Modal functionality for images
function showImage(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    modal.style.display = "block"; // Show the modal
    modalImage.src = imageSrc; // Set the image source
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Hide the modal
}

document.addEventListener("DOMContentLoaded", function() {
    const projectsDropdown = document.querySelector('#projectsDropdown .dropdown-content');
    const projectsLink = document.querySelector('#projectsDropdown > a');

    // Toggle dropdown on click of "Projects"
    projectsLink.addEventListener('click', function(event) {
        event.preventDefault();
        projectsDropdown.style.display = projectsDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!projectsDropdown.contains(event.target) && event.target !== projectsLink) {
            projectsDropdown.style.display = 'none';
        }
    });

    // Close dropdown when clicking on any dropdown item
    projectsDropdown.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', function() {
            projectsDropdown.style.display = 'none';
        });
    });
});


