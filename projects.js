document.addEventListener("DOMContentLoaded", function() {
    const slideshows = document.querySelectorAll('.slideshow');

    slideshows.forEach(slideshow => {
        let slides = slideshow.getElementsByTagName('img');
        let currentIndex = 0;
        
        setInterval(() => {
            slides[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].style.display = 'block';
        }, 3000); // Changes the slide every 3000 milliseconds (3 seconds)
    });
});
