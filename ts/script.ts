function redirect(link: string) {
    window.location.href = link;
}

window.onload = function() {
    const borgir = document.querySelector(".borgir");
    const mobimenu = document.querySelector(".mobile-menu");

    borgir.addEventListener("click", function() {
        borgir.classList.toggle("active");
        mobimenu.classList.toggle("active");
    });
}

if(localStorage.getItem("cookie") == 'true') {
    document.getElementById("cookie-banner").style.display = 'none';
    // make buttons clickable
    let clickable = document.querySelectorAll<HTMLElement>("button:not(.cookie-btn)");
    for (let i = 0; i < clickable.length; i++) {
        clickable[i].style.pointerEvents = 'auto';
    }
} else {
    document.getElementById("cookie-banner").style.display = 'flex';
    // make buttons unclickable
    let not_banner = document.querySelectorAll<HTMLElement>("button:not(.cookie-btn)");
    for (let i = 0; i < not_banner.length; i++) {
        not_banner[i].style.pointerEvents = 'none';
    }
}

function acceptCookie(){
    let banner = document.getElementById("cookie-banner")
    banner.innerHTML = "<img src='static/sys-granted.png' alt='access granted' id='sys'></img><p>Access granted!</p>"
    localStorage.setItem("cookie", 'true');
    setTimeout(hideCookie, 2000);
}

function hideCookie(){
    document.getElementById("cookie-banner").style.display = 'none';
    let clickable = document.querySelectorAll<HTMLElement>("button:not(.cookie-btn)");
    for (let i = 0; i < clickable.length; i++) {
        clickable[i].style.pointerEvents = 'auto';
    }
}

function denyCookie(){
    let banner = document.getElementById("cookie-banner")
    banner.innerHTML = "<img src='static/sys-confused.png' alt='confused system' id='sys'></img><p>Wait how did you find...? Well you still have to accept it.</p><button class='cookie-btn' onclick='acceptCookie()'>Fine... Accept</button>"
    localStorage.setItem("cookie", 'false');
}

function setThemeCookie(theme: string) {
    // Set the expiration date to one year from now
    let expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);

    // Set the cookie with the name "theme" and the desired value
    document.cookie = "theme=" + theme + "; expires=" + expirationDate.toUTCString() + "; SameSite=Strict";
}
  
// Read the cookie value
function getCookie(name: string) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

const body = document.body;
const topbar = document.querySelector(".top-bar");
const topbs = document.querySelectorAll(".topb");
const msitecolour = document.querySelector(".msite-colours");
const sitecolour = document.querySelector(".site-colours");
const mobilemenu = document.querySelector(".mobile-menu");
const menuis = document.querySelectorAll(".menui");
const cards = document.querySelectorAll(".card");

const themes = ["default", "neon", "green"];
let theme = parseInt(getCookieValue("theme")) || 0;

function getTheme(): string {
  return themes[theme];
}

function cycleTheme() {
  theme++;
  theme %= themes.length;

  updateCookie();
  updateTheme();
}

function updateCookie() {
  const nextYear = new Date();
  nextYear.setFullYear(nextYear.getFullYear() + 1);

  document.cookie = `theme=${theme}; Expires=${nextYear}`;
}

function getCookieValue(name: string): string {
  return (
    document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() || ""
  );
}

function updateElementTheme(element: Element | null) {
  if (!element) return;

  for (const theme of themes) element.classList.remove(theme);

  element.classList.add(getTheme());
}

function updateTheme() {
  updateElementTheme(body);
  updateElementTheme(topbar);
  updateElementTheme(msitecolour);
  updateElementTheme(sitecolour);
  updateElementTheme(mobilemenu);

  menuis.forEach(updateElementTheme);
  topbs.forEach(updateElementTheme);
  cards.forEach(updateElementTheme);
}

updateTheme();