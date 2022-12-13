const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
$$(".listing-item").forEach((item) => {
    item.onclick = (e) => {
        e.preventDefault();
        $$(".listing-item").forEach((item) =>
            item.classList.remove("active")
        );
        item.classList.add("active");
    };
});

function showModalMenu() {
    $(".modal-nav").style.display = "block";
}

function hideModalMenu() {
    $(".modal-nav").style.display = "none";
}

const modalNav = $(".modal-nav");
const modalContainer = $(".modal-container");

$(".mobile-icon").onclick = showModalMenu;

modalContainer.onclick = (e) => e.stopPropagation();
modalNav.onclick = hideModalMenu;
$(".modal-close").onclick = hideModalMenu;