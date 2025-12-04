document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const menuOverlay = document.getElementById('menu-overlay');
    const navItems = document.querySelectorAll('.nav-item');

    if (menuToggle && sidebar && menuOverlay) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            sidebar.classList.toggle('active');
            menuOverlay.classList.toggle('active');
        });

        navItems.forEach(item => {
            item.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                sidebar.classList.remove('active');
                menuOverlay.classList.remove('active');
            });
        });

        menuOverlay.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            sidebar.classList.remove('active');
            menuOverlay.classList.remove('active');
        });

        document.addEventListener('click', function(event) {
            if (!sidebar.contains(event.target) && !menuToggle.contains(event.target) && !menuOverlay.contains(event.target)) {
                if (sidebar.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                    sidebar.classList.remove('active');
                    menuOverlay.classList.remove('active');
                }
            }
        });
    }
});