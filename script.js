// add underline to Name
document.querySelectorAll(".authors").forEach(function (el) {
    el.innerHTML = el.textContent.replace('Md Kaykobad Reza', '<u>Md Kaykobad Reza</u>');
});
