$(document).ready(function() {
    // Toggle dark mode based on time of the day
    var hour = new Date().getHours();
    const darkMode = hour >= 18 || hour <= 6 ? true : false;
    if (darkMode === true) {
        $('html').addClass('dark-mode');
    }
});
