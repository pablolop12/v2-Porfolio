window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;
    var isSmallScreen = window.innerWidth <= 768;
  
    if (!isSmallScreen && scrollPosition === 0) {
      navbar.classList.add('navbar-transparent');
      navbar.classList.remove('navbar-black');
    } else {
      navbar.classList.add('navbar-black');
      navbar.classList.remove('navbar-transparent');
    }
  });

window.addEventListener('resize', function() {
    var navbar = document.querySelector('.navbar');
    var isSmallScreen = window.innerWidth <= 768;

    if (isSmallScreen) {
      navbar.classList.add('navbar-black');
      navbar.classList.remove('navbar-transparent');
    } else {
      var scrollPosition = window.scrollY;
      if (scrollPosition === 0) {
        navbar.classList.add('navbar-transparent');
        navbar.classList.remove('navbar-black');
      } else {
        navbar.classList.add('navbar-black');
        navbar.classList.remove('navbar-transparent');
      }
    }
});