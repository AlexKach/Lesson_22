(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.addEventListener("click", littleSpoiler);
    const more = document.getElementById("more");
    const dots = document.getElementById("dots");
    const script_button = document.querySelector(".button");
    function littleSpoiler(e) {
        const targetElement = e.target;
        if (targetElement.closest("button")) {
            script_button.classList.toggle("active");
            more.style.display = "inline";
            dots.style.display = "none";
            script_button.innerHTML = "Hide";
        } else {
            more.style.display = "none";
            dots.style.display = "inline";
            script_button.innerHTML = "Read more";
        }
        if (script_button.closest(".active")) {
            more.style.display = "none";
            dots.style.display = "inline";
            script_button.innerHTML = "Read more";
        }
    }
    window["FLS"] = true;
    isWebp();
})();