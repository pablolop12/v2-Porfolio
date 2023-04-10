$(document).ready(function () {
    var lastLoadTime = localStorage.getItem("lastLoadTime");
    var currentTime = new Date().getTime();

    if (lastLoadTime && (currentTime - lastLoadTime < 300000)) { // 300000ms = 5 minutos
        $(".loader-container").fadeOut("slow");
    } else {
        localStorage.setItem("lastLoadTime", currentTime);
        $(window).on("load", function () {
            setTimeout(function () {
                $(".loader-container").fadeOut("slow");
            }, 3000);
        });
    }
});