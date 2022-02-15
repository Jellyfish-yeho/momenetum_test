const images = [];
for (let i = 1; i <= 8; i++){
    images.push(`0${i}.jpg`);
}
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage)