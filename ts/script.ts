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

const wrapper = document.getElementById("bubble-wrapper");

const animateBubble = (x: any) => {
    const bubble = document.createElement("div");

    bubble.className = "bubble";
    bubble.style.left = `${x}px`;

    wrapper.appendChild(bubble);
    if (window.innerWidth < 659) {
        bubble.style.opacity = "0";
    }
    else {
        bubble.style.opacity = "1";
    }

    setTimeout(() => wrapper.removeChild(bubble), 2000);
}

window.onmousemove = (e: { clientX: any; }) => animateBubble(e.clientX);

function colourChange() {
    const body = document.body;
    const topbar = document.querySelector('.top-bar');
    const topbs = document.querySelectorAll('.topb');
    const msitecolour = document.querySelector('.msite-colours');
    const sitecolour = document.querySelector('.site-colours');
    const mobilemenu = document.querySelector('.mobile-menu');
    const menuis = document.querySelectorAll('.menui');
  
    if (body.classList.contains('default')) {
      body.classList.remove('default');
      body.classList.add('neon');
    } else if (body.classList.contains('neon')) {
      body.classList.remove('neon');
      body.classList.add('green');
    } else if (body.classList.contains('green')) {
      body.classList.remove('green');
      body.classList.add('default');
    }
  
    if (topbar.classList.contains('default')) {
      topbar.classList.remove('default');
      topbar.classList.add('neon');
    } else if (topbar.classList.contains('neon')) {
      topbar.classList.remove('neon');
      topbar.classList.add('green');
    } else if (topbar.classList.contains('green')) {
      topbar.classList.remove('green');
      topbar.classList.add('default');
    }

    if (msitecolour.classList.contains('default')) {
        msitecolour.classList.remove('default');
        msitecolour.classList.add('neon');
    } else if (msitecolour.classList.contains('neon')) {
        msitecolour.classList.remove('neon');
        msitecolour.classList.add('green');
    } else if (msitecolour.classList.contains('green')) {
        msitecolour.classList.remove('green');
        msitecolour.classList.add('default');
    }

    if (sitecolour.classList.contains('default')) {
        sitecolour.classList.remove('default');
        sitecolour.classList.add('neon');
    } else if (sitecolour.classList.contains('neon')) {
        sitecolour.classList.remove('neon');
        sitecolour.classList.add('green');
    } else if (sitecolour.classList.contains('green')) {
        sitecolour.classList.remove('green');
        sitecolour.classList.add('default');
    }

    if (mobilemenu.classList.contains('default')) {
        mobilemenu.classList.remove('default');
        mobilemenu.classList.add('neon');
    } else if (mobilemenu.classList.contains('neon')) {
        mobilemenu.classList.remove('neon');
        mobilemenu.classList.add('green');
    } else if (mobilemenu.classList.contains('green')) {
        mobilemenu.classList.remove('green');
        mobilemenu.classList.add('default');
    }

    menuis.forEach((menui) => {
        if (menui.classList.contains('default')) {
            menui.classList.remove('default');
            menui.classList.add('neon');
        } else if (menui.classList.contains('neon')) {
            menui.classList.remove('neon');
            menui.classList.add('green');
        } else if (menui.classList.contains('green')) {
            menui.classList.remove('green');
            menui.classList.add('default');
        }
    });

    topbs.forEach((topb) => {
        if (topb.classList.contains('default')) {
          topb.classList.remove('default');
          topb.classList.add('neon');
        } else if (topb.classList.contains('neon')) {
          topb.classList.remove('neon');
          topb.classList.add('green');
        } else if (topb.classList.contains('green')) {
          topb.classList.remove('green');
          topb.classList.add('default');
        }
      });
}