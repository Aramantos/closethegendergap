function carouselProfile() {
    // Sets timer of 750ms before executing to ensure the new slide is properly active
    setTimeout(function () {
        console.log("carouselProfile called!");
        var activeSlideArray = [];
        activeSlideArray = document.getElementsByClassName("active");
        var activeSlide = activeSlideArray[1];

        // Removes all existing profile text
        var x = document.getElementsByClassName("profile");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }

        // Displays profile text matching the active slide
        switch (activeSlide.id) {
            case "item1":
                console.log("Ada Lovelace active");
                document.getElementById("lovelace").style.display = "block";
                break;
            case "item2":
                console.log("Alan Turing active");
                document.getElementById("turing").style.display = "block";
                break;
            case "item3":
                console.log("Marie Curie active");
                document.getElementById("curie").style.display = "block";
                break;
            default:
                console.log("Couldn't identify slide! Displaying error text!");
                document.getElementById("placeholder").style.display = "block";
        }
    }, 750);
};