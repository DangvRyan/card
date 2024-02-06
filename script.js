document.getElementById("web").addEventListener("mouseenter", mouseOver);
document.getElementById("web").addEventListener("mouseleave", mouseOut);

function mouseOver() {
    document.getElementById("web").src = "assets/icons/icon_weborange.png";
}

function mouseOut() {
    document.getElementById("web").src = "assets/icons/icon_webwhite.png";
}
