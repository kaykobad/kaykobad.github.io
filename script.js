// add underline to Name 
let author_tags = document.getElementsByTagName("author");
for (let i = 0; i < author_tags.length; i++) {
    author_tags[i].innerHTML = author_tags[i].textContent.replace('Md Kaykobad Reza', '<u>Md Kaykobad Reza</u>')
}
