// Selectors
const textareaEl = document.querySelector(".textarea");
const charactersNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumberEl = document.querySelector(".stat__number--words");

// Handler Function
const inputHandler = () => {
  // input validation
  if (textareaEl.value.includes("<script>")) {
    alert("You can't use <script> in your text.");
    textareaEl.value = textareaEl.value.replace("<script>", "");
  }

  //determine new numbers
  let numberOfWords = textareaEl.value.split(" ").length;
  if (textareaEl.value.length === 0) {
    numberOfWords = 0;
  }
  const numberOfCharacters = textareaEl.value.length;
  const twitterCharLeft = 280 - numberOfCharacters;
  const facebookCharLeft = 2200 - numberOfCharacters;

  //add visual indicator if limit is exceeded
  if (twitterCharLeft < 0) {
    twitterNumberEl.classList.add("stat__number--limit");
  } else {
    twitterNumberEl.classList.remove("stat__number--limit");
  }
  if (facebookCharLeft < 0) {
    facebookNumberEl.classList.add("stat__number--limit");
  } else {
    facebookNumberEl.classList.remove("stat__number--limit");
  }
  //set new numbers
  charactersNumberEl.textContent = numberOfCharacters;
  twitterNumberEl.textContent = twitterCharLeft;
  facebookNumberEl.textContent = facebookCharLeft;
  wordsNumberEl.textContent = numberOfWords;
};

textareaEl.addEventListener("input", inputHandler);
