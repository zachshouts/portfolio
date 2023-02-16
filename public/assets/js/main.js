const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

// Applies The Class That Transforms The Mobile Menu
const toggleNav = () => {
    navList.classList.toggle('nav-open');
};


// Gets The Position Of Section Heading Elements For Side Dot Nav
const updateList = () => {
    const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
        return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
    });
    
    document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
};

updateList();
window.addEventListener('scroll', () => {
    updateList();
});

// Toggles Mobile Nav When Closed
navToggle.addEventListener('click', toggleNav);

// Check If Mobile Nav Item Was Pressed
// Then Closes The Menu If Nav Item Is Pressed
navList.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('nav-item')) {
        setTimeout(() => {
            toggleNav();
        }, 500);
    };
});
