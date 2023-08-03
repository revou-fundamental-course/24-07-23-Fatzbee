let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1500); 
}

const button = document.getElementById("botsum");


button.addEventListener("click", function (event) {
    const nama = document.getElementById("name");
    const email = document.getElementById("email");
    const kota = document.getElementById("kota");
    if (nama.value === "") {
        window.alert("Isikan Nama");
    }

    else if (email.value === "") {
        window.alert("Isikan Email");
    }

    else if (kota.value === "default") {
        window.alert("Isikan Kota");
    }

    else {
      window.alert("Sukses Terkirim")
    }
});