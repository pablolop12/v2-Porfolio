window.addEventListener('scroll', function () {
    var goTopButton = document.querySelector('.goTop');
    if (window.pageYOffset > 400) {
        goTopButton.classList.add('show');
    } else {
        goTopButton.classList.remove('show');
    }
});