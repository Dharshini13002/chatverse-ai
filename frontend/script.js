const themeSelect = document.getElementById("themeSelect");
const characterSelect = document.getElementById("characterSelect");
const characterName = document.getElementById("characterName");
const characterPersonality = document.getElementById("characterPersonality");
const characterAvatar = document.getElementById("characterAvatar");
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

const API_BASE = 'http://localhost:8080/api'; // Adjust if backend runs on different port

/* Load saved theme */
window.onload = () => {
  loadCharacters();
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.className = savedTheme;
    themeSelect.value = savedTheme;
  }
};

/* Load characters from backend */
async function loadCharacters() {
  try {
    const response = await fetch(`${API_BASE}/characters`);
    const characters = await response.json();
    populateCharacterSelect(characters);
  } catch (error) {
    console.error('Failed to load characters:', error);
    // Fallback to default characters if backend is not available
    populateCharacterSelect([
      { id: 'sakura', name: 'Sakura', theme: 'pinky', icon: 'sakura.svg', personality: 'Gentle, poetic, speaks in soft, floral imagery.' }
    ]);
  }
}

function populateCharacterSelect(characters) {
  characterSelect.innerHTML = '';
  characters.forEach(char => {
    const option = document.createElement('option');
    option.value = char.id;
    option.textContent = char.name;
    characterSelect.appendChild(option);
  });
  // Trigger change to set initial character
  characterSelect.dispatchEvent(new Event('change'));
}

/* Theme change */
themeSelect.addEventListener("change", () => {
  document.body.className = themeSelect.value;
  localStorage.setItem("theme", themeSelect.value);
});

/* Character change */
characterSelect.addEventListener("change", () => {
  const selectedId = characterSelect.value;
  // Find character data (assuming we have it from loadCharacters)
  // For simplicity, we'll fetch again or store globally
  updateCharacterInfo(selectedId);
});

async function updateCharacterInfo(characterId) {
  try {
    const response = await fetch(`${API_BASE}/characters`);
    const characters = await response.json();
    const char = characters.find(c => c.id === characterId);
    if (char) {
      characterName.textContent = char.name;
      characterPersonality.textContent = char.personality;
      characterAvatar.src = `assets/icons/${char.icon}`;
      const theme = "theme-" + char.theme;
      document.body.className = theme;
      themeSelect.value = theme;
      localStorage.setItem("theme", theme);
    }
  } catch (error) {
    console.error('Failed to update character info:', error);
  }
}

/* Send message */
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  userInput.value = "";

  // Get selected character
  const characterId = characterSelect.value;

  // Call backend API
  fetch(`${API_BASE}/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      characterId: characterId,
      message: text
    })
  })
  .then(response => response.json())
  .then(data => {
    addMessage(data.reply, "ai");
  })
  .catch(error => {
    console.error('Error:', error);
    addMessage("Sorry, I couldn't get a response. Please try again.", "ai");
  });
}

function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.className = `message ${type}`;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

/* Settings modal */
function openSettings() {
  document.getElementById("settingsModal").classList.remove("hidden");
}

function closeSettings() {
  document.getElementById("settingsModal").classList.add("hidden");
}
