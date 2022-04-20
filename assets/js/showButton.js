window.addEventListener("scroll", function() {showButton()});

function showButton() {
    if (window.screen.availWidth < 1280) {   
        if (document.documentElement.scrollTop > 150 && document.documentElement.scrollTop <= 300){
            document.getElementById("post__button_01").style.display = "block";
            document.getElementById("blur_01").style.display = "block";
            document.getElementById("post__button_02").style.display = "block";
            document.getElementById("blur_02").style.display = "block";
        } else {
            document.getElementById("post__button_01").style.display = "none";
            document.getElementById("blur_01").style.display = "none";
            document.getElementById("post__button_02").style.display = "none";
            document.getElementById("blur_02").style.display = "none";

        } if (document.documentElement.scrollTop > 300 && document.documentElement.scrollTop <= 500){
            document.getElementById("post__button_03").style.display = "block";
            document.getElementById("blur_03").style.display = "block";
            document.getElementById("post__button_04").style.display = "block";
            document.getElementById("blur_04").style.display = "block";
        } else {
            document.getElementById("post__button_03").style.display = "none";
            document.getElementById("blur_03").style.display = "none";
            document.getElementById("post__button_04").style.display = "none";
            document.getElementById("blur_04").style.display = "none";
        }
    }
}


   