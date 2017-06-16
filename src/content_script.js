window.setInterval(function () {
    var edgeDesign = document.getElementsByClassName("edge-design");
    if (edgeDesign[0]) {
        edgeDesign[0].className = edgeDesign[0].className.replace(/\bedge-design\b/, '');
    }
}, 100);
