function showHidden(divId, radio) {
    var selectedValue = radio.value;

    var desc1 = document.getElementById("desc1");
    var desc2 = document.getElementById("desc2");
    var desc3 = document.getElementById("desc3");

    if (selectedValue === "pair1") {
        desc1.style.display = "block";
        desc2.style.display = "none";
        desc3.style.display = "none";
    } else if (selectedValue === "pair2") {
        desc1.style.display = "none";
        desc2.style.display = "block";
        desc3.style.display = "none";
    } else if (selectedValue === "pair3") {
        desc1.style.display = "none";
        desc2.style.display = "none";
        desc3.style.display = "block";
    }

    var selectedDiv = document.getElementById(divId);
    var allDivs = document.getElementsByClassName("row");

    for (var i = 0; i < allDivs.length; i++) {
        allDivs[i].style.backgroundColor = "white"; // Reset all divs to white background
    }

    selectedDiv.style.backgroundColor = "rgba(0, 127, 97, 0.1)"; // Change the selected div's background color
    selectedDiv.style.borderColor = "#007F61"; // Change the selected div's border color
}

