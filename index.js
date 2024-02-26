
// Getting box and options objects
var boxes = document.getElementsByClassName("items");
var options = document.getElementsByClassName("options");

function ExpandBox(boxNumber) {
    // Iterate through all boxes
    for (var i = 0; i < boxes.length; i++) {
        if (i === boxNumber) {
            // Expand the clicked box
            options[i].style.display = "block";
            boxes[i].style.backgroundColor = "#68de5d4d";
            boxes[i].style.border = "2px solid #079207";
        } else {
            // Hide options and set background color to white for other boxes
            options[i].style.display = "none";
            boxes[i].style.backgroundColor = "white";
            boxes[i].style.border = "2px solid #cecece";

        }
    }
}