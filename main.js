let id = document.querySelector("h4");
let pattern = document.querySelector(".pattern");
let quote = document.querySelector("q");
let icon = document.querySelector(".icon");

function patternSize() {
  if (window.innerWidth >= 1440) {
    pattern.src = "images/pattern-divider-desktop.svg";
  } else {
    pattern.src = "images/pattern-divider-mobile.svg";
  }
}
async function fetchData() {
  let fetchedData = await (
    await fetch("https://api.adviceslip.com/advice")
  ).json();
  id.textContent = `ADVICE #${fetchedData.slip.id}`;
  quote.textContent = fetchedData.slip.advice;
  console.log(fetchedData);
}

patternSize();
fetchData();
icon.onclick = fetchData;
window.onresize = patternSize;
