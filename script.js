// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
        }, 500);
    }, 2000);
});

// Toggle Side Nav
function toggleNav() {
    document.getElementById('sideNav').classList.toggle('active');
}

// Search Function
function searchFunction() {
    let query = document.getElementById('mainSearch').value;
    if(query) {
        alert("Searching AH Studio for: " + query);
    } else {
        alert("Please enter a keyword.");
    }
}

// Scroll Animations
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "1s ease-out";
    observer.observe(el);
});
