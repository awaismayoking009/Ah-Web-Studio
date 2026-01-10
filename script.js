// Loader removal
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
        }, 500);
    }, 2000);
});

// Menu Toggle
function toggleNav() {
    document.getElementById('sideNav').classList.toggle('active');
}
