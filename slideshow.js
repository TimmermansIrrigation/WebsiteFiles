let slideIndex = 0;
showSlides();

function showSlides(){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }


      slideIndex++;


      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "inline-block";



      //setTimeout(showSlides, 8000); // Change image every 8 seconds       This sort of automatically runs it, but it bugs out in browser sometimes so I have disabled it.
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}