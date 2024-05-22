document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.topNav a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var sectionId = link.getAttribute('href');
            var section = document.querySelector(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});