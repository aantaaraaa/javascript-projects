function randomColorValue() {
  return Math.floor(Math.random() * 256);
}

const red = randomColorValue();
const green = randomColorValue();
const blue = randomColorValue();

const randomColor = `rgb(${red}, ${green}, ${blue})`;

console.log("🎨 Random RGB Color:", randomColor);

console.log(
  "%c      ",
  `background-color: ${randomColor}; padding: 20px; border-radius: 5px;`
);
