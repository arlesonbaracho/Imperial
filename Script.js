function updateCountdown() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 30); // Define a data final para 30 dias a partir de hoje

    const timer = document.getElementById("timer");
    const daysSpan = document.getElementById("days");
    const hoursSpan = document.getElementById("hours");
    const minutesSpan = document.getElementById("minutes");
    const secondsSpan = document.getElementById("seconds");

    function update() {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance <= 0) {
            clearInterval(interval);
            timer.innerHTML = "Expirado!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysSpan.textContent = String(days).padStart(2, "0");
        hoursSpan.textContent = String(hours).padStart(2, "0");
        minutesSpan.textContent = String(minutes).padStart(2, "0");
        secondsSpan.textContent = String(seconds).padStart(2, "0");
    }

    update();
    const interval = setInterval(update, 1000);
}

updateCountdown();



//Baner

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos (3000 milissegundos)
}

