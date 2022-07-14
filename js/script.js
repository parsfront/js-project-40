const btn = document.querySelector(".my-btn");
const alertBox = document.querySelector(".alert-box");
const closeBtn = document.querySelector(".close-btn");
console.log(closeBtn);
let timer;

btn.addEventListener("click", function () {
    showAlertBox();
});

closeBtn.addEventListener("click", function () {
    hideAlertBox();
    clearTimeout(timer);
});

function showAlertBox() {
    alertBox.classList.remove("hide");
    alertBox.classList.add("show");
    if (alertBox.classList.contains("hidden")) {
        alertBox.classList.remove("hidden");
    }
    timer = setTimeout(function () {
        hideAlertBox();
    }, 5000);
}

function hideAlertBox() {
    alertBox.classList.remove("show");
    alertBox.classList.add("hide");
}
