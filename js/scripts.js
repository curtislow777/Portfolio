
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const Masonry = require('masonry-layout');

import Masonry from 'masonry-layout';


window.addEventListener('load', function() {
    var container = document.querySelector('.masonry-container');
    var masonry = new Masonry(container, {
      itemSelector: '.masonry-item',
      columnWidth: '.masonry-item',
      gutter: 10, /* Adjust the gutter size as needed */
    });
  
    var images = container.querySelectorAll('.masonry-item img');
    images.forEach(function(image) {
      image.addEventListener('load', function() {
        var item = image.parentNode;
        if (image.height < item.offsetHeight) {
          item.classList.add('masonry-item--centered');
        }
      });
    });
  });