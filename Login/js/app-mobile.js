document.addEventListener("DOMContentLoaded", function () {
    var tabs = document.querySelectorAll(".nav-link");
    var tabContents = document.querySelectorAll(".tab-pane");

    tabs.forEach(function (tab, index) {
        tab.addEventListener("click", function (e) {
            e.preventDefault();

            tabs.forEach(function (t) {
                t.parentElement.classList.remove("active");
            });
            tab.parentElement.classList.add("active");

            tabContents.forEach(function (content) {
                content.style.display = "none";
            });
            tabContents[index].style.display = "block";
        });
    });
});
