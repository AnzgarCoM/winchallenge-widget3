
const challenges = [
  { name: "Wer wird Millionär 500k", current: 0, total: 1 },
  { name: "Valo jeder Agent", current: 0, total: 7 },
  { name: "Pushing it! Together", current: 0, total: 1 },
  { name: "Warzone", current: 0, total: 1 },
  { name: "Fortnite", current: 0, total: 1 }
];

function renderChallenges() {
  const ul = document.getElementById("challengeList");
  ul.innerHTML = "";
  challenges.forEach(ch => {
    const li = document.createElement("li");
    li.textContent = `${ch.name}: ${ch.current}/${ch.total}`;
    ul.appendChild(li);
  });
}

function updateStartTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("de-DE", { hour12: false });
  document.getElementById("startClock").textContent = timeString;
}

window.addEventListener("DOMContentLoaded", () => {
  renderChallenges();
  updateStartTime();
});
