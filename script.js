const eventContainer = document.querySelector(".event-container");
const dialogBox = document.querySelector(".dialog-box");

const messages = [
    "This is a smol surprise...",
    "from...a floating cat!",
    "pop all the balloons in the next screen",
    "Are you ready!?"
];

const wishes = [
    `Happy 21 maboi!! You are REALLY sweet and fun and I love being around you :3
    It is always interesting to talk about cool collectibles that you are obsessed with and I always cherish
    the comfort I find with you to confide about things.`,

    `I'm a biggg admirer of things you create—from the stuff you design to the photos you take. 
    God really maxxed out your creativity stats when creating you (he even maxxed out the hotness stat :P )`,

    `Today is a very special day and I hope you have fun! Here's to 21 and more!! 
    You are an amazing friend and I hope we just get older and still do all of our quirky stuff!`
];

let index = 0;
let wishIndex = 0;
let popCount = 0;

document.querySelector("#next").addEventListener("click", () => {
    if (index < messages.length) {
        dialogBox.innerHTML = messages[index];
        index++;
    } else {
        clearInitial();
    }
});

function appendBalloons() {
    popCount = 0;

    for (let i = 0; i < 4; i++) {
        const balloon = document.createElement("img");
        balloon.src = `assets/balloon${i + 1}.png`;
        balloon.alt = "Balloon";
        balloon.style.height = "20vh";
        balloon.style.cursor = "pointer";

        const balloonContainer = document.createElement("div");
        balloonContainer.style.display = "flex";
        balloonContainer.style.alignItems = "center";
        balloonContainer.style.justifyContent = "center";
        balloonContainer.style.width = "100%";
        balloonContainer.style.height = "100%";

        balloonContainer.appendChild(balloon);
        eventContainer.appendChild(balloonContainer);

        balloon.addEventListener("click", () => {
            balloon.style.opacity = "0"; 
            setTimeout(() => balloonContainer.remove(), 300); // Remove after animation

            popCount++;

            // When all balloons are popped
            if (popCount === 4) {
                setTimeout(showBirthdayScreen, 300);
            }
        });
    }
}

function clearInitial() {
    eventContainer.innerHTML = "";
    eventContainer.style.display = "grid";
    eventContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
    eventContainer.style.gridTemplateRows = "repeat(2, 1fr)";
    appendBalloons();
}

function showBirthdayScreen() {
    eventContainer.innerHTML = "";
    eventContainer.style.display = "flex";
    eventContainer.style.flexDirection = "column";
    eventContainer.style.alignItems = "center";
    eventContainer.style.justifyContent = "center";
    eventContainer.style.fontSize = "30px";
    eventContainer.style.textAlign = "center";

    const birthdayText = document.createElement("p");
    birthdayText.innerHTML = "Happy Birthday Darshan!!!";
    birthdayText.style.marginBottom = "20px";

    const video = document.createElement("video");
    video.src = "assets/uia.mp4";
    video.controls = false;
    video.autoplay = true;
    video.style.width = "80%";
    video.style.marginBottom = "20px";

    const button = document.createElement("button");
    button.textContent = ">";
    button.style.display = "flex"; 
    button.style.alignItems = "center"; 
    button.style.justifyContent = "center"; 
    button.style.fontSize = "20px";
    button.style.padding = "10px 20px";
    button.style.border = "none";
    button.style.backgroundColor = "#F2F2F2";
    button.style.borderRadius = "10px";
    button.style.cursor = "pointer";

    
    button.style.borderRadius = "10px";
    button.style.cursor = "pointer";

    button.addEventListener("click", () => {
        eventContainer.innerHTML = "";
        showWishesScreen();
    });

    eventContainer.appendChild(birthdayText);
    eventContainer.appendChild(video);
    eventContainer.appendChild(button);
}

function showWishesScreen() {
    eventContainer.innerHTML = "";
    eventContainer.style.display = "flex";
    eventContainer.style.flexDirection = "column";
    eventContainer.style.alignItems = "center";
    eventContainer.style.justifyContent = "center";
    eventContainer.style.fontSize = "30px";
    eventContainer.style.textAlign = "center";

    const wishText = document.createElement("p");
    wishText.innerHTML = wishes[wishIndex];
    wishText.style.maxWidth = "80%";
    wishText.style.marginBottom = "20px";

    const button = document.createElement("button");
    button.textContent = ">";
    button.style.display = "flex"; 
    button.style.alignItems = "center"; 
    button.style.justifyContent = "center"; 
    button.style.fontSize = "20px";
    button.style.padding = "10px 20px";
    button.style.border = "none";
    button.style.backgroundColor = "#F2F2F2";
    button.style.borderRadius = "10px";
    button.style.cursor = "pointer";

    button.addEventListener("click", () => {
        wishIndex++;
        if (wishIndex < wishes.length) {
            wishText.innerHTML = wishes[wishIndex];
        } else {
            eventContainer.innerHTML = "<p>Happy 21 Darshan!</p>";
        }
    });

    eventContainer.appendChild(wishText);
    eventContainer.appendChild(button);
}
