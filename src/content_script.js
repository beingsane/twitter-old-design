// Clear the timer if it already exists
window.edgeTimer && window.clearInterval(window.edgeTimer);

function removeEdgeDesign() {
    var edgeDesign = document.getElementsByClassName("edge-design");
    if (edgeDesign[0]) {
        edgeDesign[0].className = edgeDesign[0].className.replace(/\bedge-design\b/, '');
    }
}

// Dirty dirty timeout fix!
// TODO: Need to replace it with Mutation observer or chrome's alarm API
window.edgeTimer = window.setInterval(function () {
    removeEdgeDesign();
}, 1000);
