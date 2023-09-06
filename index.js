function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    const hearts = document.createElement("div");
    hearts.classList.add("hearts");

    heart.style.left = Math.random() * 100 + 'vw';
    hearts.style.left = Math.random() * 100 + 'vw';

    heart.style.animationDuration = Math.random() *  2 + 3 + "5";
    hearts.style.animationDuration = Math.random() *  2 + 3 + "5";

    heart.innerText = "🧡";
    hearts.innerText = "💋";

    document.body.appendChild(heart);
    document.body.appendChild(hearts);

    setTimeout(() => {
        heart.remove();
    }, 4000)

}

setInterval(createHeart, 1000)