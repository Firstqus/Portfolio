const bg = document.querySelector(".hero-bg");

if (bg) {
    document.addEventListener("mousemove", (e) => {

        let x = (window.innerWidth / 2 - e.clientX) / 50;
        let y = (window.innerHeight / 2 - e.clientY) / 50;

        bg.style.transform = `translate(${x}px, ${y}px)`;
    });
}

const bgText = document.querySelector(".hero-bg-text");

document.addEventListener("mousemove", (e) => {

    let x = (window.innerWidth / 2 - e.clientX) / 30;
    let y = (window.innerHeight / 2 - e.clientY) / 30;

    bgText.style.transform =
        `translate(calc(-50% + ${x}px), ${y}px)`;

});

const shapes = document.querySelectorAll(".shape");

document.addEventListener("mousemove", (e) => {

    let x = (window.innerWidth/2 - e.clientX) / 30;
    let y = (window.innerHeight/2 - e.clientY) / 30;

    shapes.forEach((shape, index) => {

        let speed = (index + 1) * 0.5;

        shape.style.transform =
        `translate(${x * speed}px, ${y * speed}px)`;

    });

});

const sliders = document.querySelectorAll(".project-slider");

sliders.forEach(slider => {

    const images = slider.querySelectorAll("img");
    let index = 0;

    setInterval(() => {

        images[index].classList.remove("active");

        index = (index + 1) % images.length;

        images[index].classList.add("active");

    }, 3000);

});

function toggleCertificates() {
    const hiddenCards = document.querySelectorAll('.certificate-card.hidden');
    const btn = document.getElementById('showMoreBtn');

    hiddenCards.forEach(card => card.classList.remove('hidden'));
    btn.style.display = 'none'; // ซ่อนปุ่มหลังกด
}