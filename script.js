document.addEventListener("DOMContentLoaded", function () {
    // Toggle the mobile navigation menu
    const toggleButton = document.getElementById('toggleButton');
    const navList = document.querySelector('.top-menu nav ul');

    toggleButton.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    // Close the mobile navigation menu when a link is clicked
    const navLinks = document.querySelectorAll('.top-menu nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navList.classList.remove('show');
        });
    });
});

