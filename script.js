// Loader removal
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 3000);
});

// Navigation Toggle
function toggleNav() {
    document.getElementById('sideNav').classList.toggle('active');
}
