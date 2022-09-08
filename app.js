function myFunction() {
    var x = document.getElementById("myMenu");
    if (x.className === "menu") {
      x.className += "responsive";
      document.getElementById("logo").style.display = "none";
    } else {
      x.className = "menu";
      document.getElementById("logo").style.display = "block";
    }
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}
onload = function () {
     setTimeout(function run() {
       let date = new Date();
       let h = date.getHours();
       let m = date.getMinutes();
       let s = date.getSeconds();

       let d = date.getDate();
       let mm = date.getMonth() + 1;
       let y = date.getFullYear();

       if (h < 10) h = "0" + h;
       if (m < 10) m = "0" + m;
       if (s < 10) s = "0" + s;

       if (d < 10) d = "0" + d;
       if (mm < 10) mm = "0" + mm;

       let clock = h + ":" + m + ":" + s;
       let dat = d + "." + mm + "." + y;

       document.getElementById("clock").innerHTML = clock;
       document.getElementById("dat").innerHTML = dat;

       setTimeout(run, 1000);
     }, 0);
   };

   function ValidateEmail(input) {

     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     if (!input.value.match(validRegex)) {
       alert("Invalid email address!");
       document.form1.text1.focus();
       return true;
     }
   }
