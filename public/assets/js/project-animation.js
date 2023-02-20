const hiddenElements = document.querySelectorAll('.hide');


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    });
});


hiddenElements.forEach((element) => observer.observe(element));