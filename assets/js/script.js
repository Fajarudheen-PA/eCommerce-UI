// Nav
$(".nav-link").click(function() {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
});

// cart count section
let add = document.querySelector("#add");
let subract = document.querySelector("#subtract");

//increase value
add.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) + 1;

  if (result > 9) {
    result = 9;
  }

  output.innerText = result;
});

//decrease value
subract.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 0;
  }

  output.innerText = result;
});

//Auto hover active 

(function ($) {
  $(function () {
    $(document).off('click.bs.tab.data-api', '[data-hover="pill"]');
    $(document).on('mouseenter.bs.tab.data-api', '[data-bs-toggle="pill"], [data-hover="pill"]', function () {
      $(this).tab('show');
    });
  });
})(jQuery);

// Lightbox content - script
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}