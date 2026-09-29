// add underline to Name
document.querySelectorAll(".authors").forEach(function (el) {
    el.innerHTML = el.textContent.replace('Md Kaykobad Reza', '<u>Md Kaykobad Reza</u>');
});

// collapse long news list on the homepage (all items stay in the DOM for crawlers and no-JS users)
(function () {
    var news = document.querySelector(".news");
    var LIMIT = 8;
    if (!news || news.children.length <= LIMIT) return;
    var total = news.children.length;
    news.classList.add("news--collapsed");
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "news-toggle";
    btn.setAttribute("aria-expanded", "false");
    btn.textContent = "Show all " + total + " updates";
    btn.addEventListener("click", function () {
        var collapsed = news.classList.toggle("news--collapsed");
        btn.setAttribute("aria-expanded", String(!collapsed));
        btn.textContent = collapsed ? "Show all " + total + " updates" : "Show fewer";
    });
    news.parentNode.insertBefore(btn, news.nextSibling);
})();
