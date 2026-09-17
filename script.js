/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 1800);

});


/* =========================
   MUSIC
========================= */
const music = document.getElementById("birthdayMusic");

function startMusic() {
    music.play()
        .then(() => {
            console.log("🎵 Birthday music started!");
        })
        .catch((error) => {
            console.log("Music error:", error);
        });

    // Remove listeners after music starts
    document.removeEventListener("click", startMusic);
    document.removeEventListener("touchstart", startMusic);
}

document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);


/* =========================
   START SURPRISE
========================= */

function startSurprise() {

    createConfetti();

    createHearts();

    toggleMusic();

    document.querySelector(".countdown-section")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================
   COUNTDOWN
========================= */

/*
   CHANGE THIS DATE
   Example:
   "August 20, 2026 00:00:00"
*/

const birthdayDate =
    new Date("September 18, 2026 00:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = birthdayDate - now;

    if (difference <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        return;
    }

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60)) /
                (1000 * 60)
        );

    const seconds =
        Math.floor(
            (difference %
                (1000 * 60)) /
                1000
        );


    document.getElementById("days").innerText =
        String(days).padStart(0, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(0, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(0, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(0, "0");
}


setInterval(updateCountdown, 1000);

updateCountdown();


/* =========================
   CANDLES
========================= */

function blowCandles() {

    const flames =
        document.querySelectorAll(".flame");

    flames.forEach(flame => {

        flame.style.display = "none";

    });

    createConfetti();

    setTimeout(() => {

        alert(
            "🎉 Wish made! May all your dreams come true! ❤️"
        );

    }, 500);
}


/* =========================
   TYPING MESSAGE
========================= */

const message = `
My Love,

On your birthday, I just want you to know
how incredibly special you are to me.

You make ordinary moments beautiful.
Your smile can make my entire day better,
and having you in my life is something
I will always be grateful for.

I wish you happiness, success, peace
and everything your heart desires.

No matter where life takes us,
I hope we continue creating beautiful
memories together.

Happy Birthday to my favorite person. ❤️

I love you more than words can say. 💕
`;

let index = 0;

function typeMessage() {

    if (index < message.length) {

        document.getElementById(
            "typingText"
        ).innerHTML +=
            message.charAt(index);

        index++;

        setTimeout(typeMessage, 35);
    }
}

setTimeout(typeMessage, 2000);


/* =========================
   SECRET MESSAGE
========================= */

function openSurprise() {

    const message =
        document.getElementById("secretMessage");

    message.style.display = "block";

    createConfetti();

    createHearts();

    fireworks();

    setTimeout(() => {

        message.scrollIntoView({
            behavior: "smooth"
        });

    }, 300);
}


/* =========================
   HEARTS
========================= */

function createHearts() {

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.className = "heart";

            heart.innerHTML =
                ["❤️","💕","💖","💗","💘"]
                [Math.floor(Math.random() * 5)];

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.fontSize =
                (Math.random() * 25 + 15) + "px";

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 6000);

        }, i * 150);
    }
}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    for (let i = 0; i < 120; i++) {

        const piece =
            document.createElement("div");

        piece.className = "confetti";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.background =
            [
                "#ff2f75",
                "#ffd166",
                "#06d6a0",
                "#4cc9f0",
                "#ffffff",
                "#c77dff"
            ][
                Math.floor(
                    Math.random() * 6
                )
            ];

        piece.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 6000);
    }
}


/* =========================
   SIMPLE FIREWORKS
========================= */

function fireworks() {

    for (let i = 0; i < 5; i++) {

        setTimeout(() => {

            createConfetti();

        }, i * 700);

    }
}


/* =========================
   AUTOMATIC HEARTS
========================= */

setInterval(() => {

    const heart =
        document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        "18px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 2500);