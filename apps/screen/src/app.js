const DENMARK_TIME_ZONE = "Europe/Copenhagen";
const CAMPAIGN_FIRST_DELAY_MS = 60 * 1000;
const CAMPAIGN_INTERVAL_MS = 8 * 60 * 1000;
const CAMPAIGN_DURATION_MS = 45 * 1000;
const SETTINGS_VISIBLE_MS = 6500;

const stations = {
  p4: {
    name: "DR P4 Sjælland",
    url: "https://live-icy.gss.dr.dk/A/A11H.mp3"
  },
  p5: {
    name: "DR P5",
    url: "https://live-icy.gss.dr.dk/A/A25H.mp3"
  },
  p3: {
    name: "DR P3",
    url: "https://live-icy.gss.dr.dk/A/A05H.mp3"
  }
};

const clock = document.querySelector("#clock");
const dateLine = document.querySelector("#dateLine");
const campaignToggle = document.querySelector("#campaignToggle");
const campaignToggleText = document.querySelector("#campaignToggleText");
const radioStatus = document.querySelector("#radioStatus");
const volumeControl = document.querySelector("#volumeControl");
const stationButtons = [...document.querySelectorAll(".station-button")];
const stopRadio = document.querySelector("#stopRadio");
const hideSettings = document.querySelector("#hideSettings");

const audio = new Audio();
audio.preload = "none";
audio.volume = Number(volumeControl.value);

let campaignEnabled = localStorage.getItem("campaignEnabled") !== "false";
let selectedStation = localStorage.getItem("selectedStation") || "";
let campaignTimer = null;
let campaignHideTimer = null;
let settingsTimer = null;

function updateClock() {
  const now = new Date();
  const timeFormatter = new Intl.DateTimeFormat("da-DK", {
    timeZone: DENMARK_TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
  const dateFormatter = new Intl.DateTimeFormat("da-DK", {
    timeZone: DENMARK_TIME_ZONE,
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  clock.textContent = timeFormatter.format(now).replace(/\./g, ":");
  clock.dateTime = now.toISOString();
  const formattedDate = dateFormatter.format(now);
  dateLine.textContent = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

function setCampaignVisible(visible) {
  document.body.classList.toggle("campaign-active", visible);
  document.querySelector(".campaign-screen").setAttribute("aria-hidden", String(!visible));
}

function showCampaign() {
  if (!campaignEnabled) return;
  setCampaignVisible(true);
  clearTimeout(campaignHideTimer);
  campaignHideTimer = setTimeout(() => setCampaignVisible(false), CAMPAIGN_DURATION_MS);
}

function scheduleCampaign() {
  clearInterval(campaignTimer);
  clearTimeout(campaignHideTimer);
  setCampaignVisible(false);

  if (!campaignEnabled) return;

  clearTimeout(campaignHideTimer);
  campaignHideTimer = setTimeout(showCampaign, CAMPAIGN_FIRST_DELAY_MS);
  campaignTimer = setInterval(showCampaign, CAMPAIGN_INTERVAL_MS);
}

function syncCampaignToggle() {
  campaignToggle.checked = campaignEnabled;
  campaignToggleText.textContent = campaignEnabled ? "Til" : "Fra";
  localStorage.setItem("campaignEnabled", String(campaignEnabled));
}

function revealSettings() {
  document.body.classList.add("settings-visible");
  clearTimeout(settingsTimer);
  settingsTimer = setTimeout(() => {
    document.body.classList.remove("settings-visible");
  }, SETTINGS_VISIBLE_MS);
}

function hideSettingsPanel() {
  document.body.classList.remove("settings-visible");
  clearTimeout(settingsTimer);
}

function setActiveStation(stationKey) {
  selectedStation = stationKey;
  localStorage.setItem("selectedStation", stationKey);
  stationButtons.forEach((button) => {
    const isActive = button.dataset.station === stationKey && !audio.paused;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

async function playStation(stationKey) {
  const station = stations[stationKey];
  if (!station) return;

  if (!audio.paused && selectedStation === stationKey) {
    stopRadioPlayback();
    return;
  }

  audio.src = station.url;
  radioStatus.textContent = `Starter ${station.name}...`;
  setActiveStation(stationKey);

  try {
    await audio.play();
    radioStatus.textContent = `${station.name} spiller`;
    setActiveStation(stationKey);
  } catch {
    radioStatus.textContent = `${station.name} kunne ikke starte. Prøv igen.`;
    stationButtons.forEach((button) => {
      button.classList.remove("is-active");
      button.setAttribute("aria-pressed", "false");
    });
  }
}

function stopRadioPlayback() {
  audio.pause();
  audio.removeAttribute("src");
  audio.load();
  radioStatus.textContent = "Radio er slukket";
  stationButtons.forEach((button) => {
    button.classList.remove("is-active");
    button.setAttribute("aria-pressed", "false");
  });
}

setInterval(updateClock, 250);
updateClock();

syncCampaignToggle();
scheduleCampaign();

stationButtons.forEach((button) => {
  button.setAttribute("aria-pressed", "false");
  button.addEventListener("click", () => {
    revealSettings();
    playStation(button.dataset.station);
  });
});

if (selectedStation) {
  stationButtons.forEach((button) => {
    button.classList.toggle("was-selected", button.dataset.station === selectedStation);
  });
}

stopRadio.addEventListener("click", () => {
  revealSettings();
  stopRadioPlayback();
});

volumeControl.addEventListener("input", () => {
  audio.volume = Number(volumeControl.value);
  revealSettings();
});

campaignToggle.addEventListener("change", () => {
  campaignEnabled = campaignToggle.checked;
  syncCampaignToggle();
  scheduleCampaign();
  revealSettings();
});

hideSettings.addEventListener("click", hideSettingsPanel);

["pointermove", "pointerdown", "touchstart"].forEach((eventName) => {
  window.addEventListener(eventName, revealSettings, { passive: true });
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    updateClock();
    scheduleCampaign();
  }
});
