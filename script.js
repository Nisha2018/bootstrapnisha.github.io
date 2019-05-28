//Back to Top Button
function topFunction() {
    document.documentElement.scrollTop = 0;
}

//Image gallery
var images = ["0.png", "1.png", "2.jpg", "3.jpg", "4.jpg"];
var i = 0;

function gallery() {
    document.getElementById("gallery").src = "Images/" + images[i];
    if (i < (images.length - 1)) {
        i++;
    }
    else {
        i = 0;
    }
}
setInterval(gallery, 2000);

$(document).ready(function () {
    $(".readmorebtn").click(function () {
        $(".hide").slideToggle(1000, function () {
            var txt = $(".readmorebtn").text();
            if (txt == "Read More") {
                $(".readmorebtn").text("Read Less");
            }
            else {
                $(".readmorebtn").text("Read More");
            }
        });
    });
});




