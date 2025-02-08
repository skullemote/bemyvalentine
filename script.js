document.addEventListener("DOMContentLoaded", function () {
    function checkAnswer() {
        const correctAnswer = "talk to me"; 
        const userAnswer = document.getElementById("answer");
        if (!userAnswer) {
            console.error("Element with ID 'answer' not found!");
            return;
        }
        if (userAnswer.value.toLowerCase() === correctAnswer.toLowerCase()) {
            window.location.href = "question.html"; 
        } else {
            alert("Oops! Try again!");
        }
    }
    window.checkAnswer = checkAnswer;
});

document.getElementById("yes-btn").addEventListener("click", function() {
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });
    setTimeout(() => {
        alert("YAY! You said YES! ❤️🎉. I LOVE YOU SO MUCH POOKIE PIE");
    }, 500);
});

// This is the original confetti function
// function showConfetti() {
//     const confettiContainer = document.createElement("div");
//     confettiContainer.style.position = "fixed";
//     confettiContainer.style.top = "0";
//     confettiContainer.style.left = "0";
//     confettiContainer.style.width = "100vw";
//     confettiContainer.style.height = "100vh";
//     confettiContainer.style.pointerEvents = "none";
//     document.body.appendChild(confettiContainer);

//     for (let i = 0; i < 100; i++) {
//         const confetti = document.createElement("div");
//         confetti.style.position = "absolute";
//         confetti.style.width = "10px";
//         confetti.style.height = "10px";
//         confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
//         confetti.style.top = `${Math.random() * 100}vh`;
//         confetti.style.left = `${Math.random() * 100}vw`;
//         confetti.style.opacity = Math.random();
//         confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
//         confetti.style.animation = `falling ${Math.random() * 2 + 2}s linear infinite`;

//         confettiContainer.appendChild(confetti);
//     }

//     // Add CSS animation dynamically
//     const style = document.createElement("style");
//     style.innerHTML = `
//         @keyframes falling {
//             to {
//                 transform: translateY(100vh) rotate(360deg);
//                 opacity: 0;
//             }
//         }
//     `;
//     document.head.appendChild(style);
// }

function moveButton() {
    const noBtn = document.getElementById("no-btn");
    const newX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const newY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = "absolute";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
}

document.getElementById("no-btn").addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth * 0.5; // Adjusted so it stays visible
    let y = Math.random() * window.innerHeight * 0.5;
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
