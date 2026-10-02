const progress = document.getElementById('progress');
const percent = document.getElementById('percent');
const status = document.getElementById('status');
const stage = document.getElementById('stage');
const tip = document.getElementById('tip');

let current = 0;

const tips = [
  'Your character and persistent data are handled by the SzCore server authority.',
  'SzCore resources are modular, so each major system can be maintained independently.',
  'Vehicle, economy and inventory mutations are validated on the server.',
  'The framework uses indexed player lookups and event-driven state updates.',
  'Almost ready — your character selector will open after the game session starts.'
];

const statuses = {
  startInitFunction: 'Initializing game runtime...',
  startDataFileEntries: 'Preparing server resources...',
  onDataFileEntry: 'Streaming resource data...',
  performMapLoadFunction: 'Loading Los Santos...',
  endDataFileEntries: 'Finalizing streamed assets...',
  loadProgress: 'Loading game session...'
};

function setProgress(value) {
  const next = Math.max(current, Math.min(100, Math.round(Number(value) || 0)));
  current = next;
  progress.style.width = next + '%';
  percent.textContent = next + '%';

  if (next >= 90) {
    stage.textContent = 'Starting SzCore character systems';
  } else if (next >= 65) {
    stage.textContent = 'Streaming world and gameplay resources';
  } else if (next >= 30) {
    stage.textContent = 'Loading server resource pack';
  } else {
    stage.textContent = 'Connecting to server';
  }
}

window.addEventListener('message', (event) => {
  const data = event.data || {};

  if (data.eventName && statuses[data.eventName]) {
    status.textContent = statuses[data.eventName];
  }

  if (data.eventName === 'loadProgress' && typeof data.loadFraction === 'number') {
    setProgress(data.loadFraction * 100);
  }
});

let tipIndex = 0;
setInterval(() => {
  tipIndex = (tipIndex + 1) % tips.length;
  tip.style.opacity = '0';

  setTimeout(() => {
    tip.textContent = tips[tipIndex];
    tip.style.opacity = '1';
  }, 180);
}, 5200);

tip.style.transition = 'opacity .18s ease';
setProgress(2);
