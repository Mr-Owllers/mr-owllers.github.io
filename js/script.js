function redirect(link) {
    window.location.href = link;
}
window.onload = function () {
    const borgir = document.querySelector(".borgir");
    const mobimenu = document.querySelector(".mobile-menu");
    borgir.addEventListener("click", function () {
        borgir.classList.toggle("active");
        mobimenu.classList.toggle("active");
    });
};
const wrapper = document.getElementById("bubble-wrapper");
const animateBubble = (x) => {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.left = `${x}px`;
    wrapper.appendChild(bubble);
    bubble.style.opacity = "1";
    setTimeout(() => wrapper.removeChild(bubble), 2000);
};
window.onmousemove = (e) => animateBubble(e.clientX);
