function toggleMode() {
    document.body.classList.toggle("dark");
}

// const text = "Python Developer | FastAPI Learner";
const text = "Python Full Stack Developer";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();

// function toggleMode() {
//     document.body.classList.toggle("dark");
// }

// const text = "Python Developer | FastAPI Learner";
// let index = 0;

// function typeEffect() {
//     if (index < text.length) {
//         document.getElementById("typing").innerHTML += text.charAt(index);
//         index++;
//         setTimeout(typeEffect, 100);
//     }
// }

// typeEffect();

// window.onscroll = function() {
//     document.getElementById("topBtn").style.display =
//         window.scrollY > 300 ? "block" : "none";
// }


// function toggleMode() {
//     document.body.classList.toggle("dark");
// }

// const text = "Python Developer";


// const text = "Python Developer | FastAPI Learner";
// let index = 0;

// function typeEffect() {
//     if (index < text.length) {
//         document.getElementById("typing").innerHTML += text.charAt(index);
//         index++;
//         setTimeout(typeEffect, 100);
//     }
// }

// typeEffect();