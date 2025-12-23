const themeSelect = document.getElementById("themeSelect");
const characterSelect = document.getElementById("characterSelect");
const characterName = document.getElementById("characterName");

themeSelect.addEventListener("change", () => {
  document.body.className = themeSelect.value;
});

characterSelect.addEventListener("change", () => {
  characterName.textContent =
    characterSelect.options[characterSelect.selectedIndex].text;

  // Auto change theme based on character
  document.body.className = "theme-" + characterSelect.value;
  themeSelect.value = "theme-" + characterSelect.value;
})