const DENMARK_TIME_ZONE = "Europe/Copenhagen";
const CAMPAIGN_FIRST_DELAY_MS = 60 * 1000;
const CAMPAIGN_INTERVAL_MS = 8 * 60 * 1000;
const CAMPAIGN_DURATION_MS = 45 * 1000;
const SETTINGS_VISIBLE_MS = 6500;
const SETTINGS_IDLE_CHECK_MS = 500;
const SETTINGS_REOPEN_GRACE_MS = 4200;
const CURSOR_IDLE_MS = 3200;
const CURSOR_CLOSE_HIDE_MS = 2200;
const OBSERVATION_OFFSET_MS = 15 * 60 * 1000;
const CAROUSEL_INTERVAL_MS = 12 * 1000;

const carouselSlides = [
  {
    kicker: "Mens du venter",
    title: "Hold øje med kroppen",
    text: "Sig til personalet, hvis du bliver utilpas, får åndenød, udslæt eller føler dig svimmel.",
    extra: "Vi hjælper dig gerne."
  },
  {
    kicker: "15 minutter",
    title: "Bliv siddende lidt endnu",
    text: "Ventetiden giver personalet mulighed for at reagere hurtigt, hvis kroppen reagerer på vaccinen.",
    extra: "Når uret for 15 minutter siden viser din vaccinationstid, er ventetiden gået."
  },
  {
    kicker: "Gåde",
    title: "Hvad kan du holde uden at røre ved det?",
    text: "Tænk over den, mens du venter.",
    extra: "Svar: Et løfte."
  },
  {
    kicker: "Godt at vide",
    title: "Vaccinen træner immunforsvaret",
    text: "Efter vaccination arbejder kroppen videre med at opbygge beskyttelse.",
    extra: "Spørg personalet, hvis du er i tvivl."
  }
];

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
  },
  voice: {
    name: "The Voice",
    url: "https://live-bauerdk.sharp-stream.com/thevoice_dk_mp3"
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
const observationTimer = document.querySelector("#observationTimer");
const carouselKicker = document.querySelector("#carouselKicker");
const carouselTitle = document.querySelector("#carouselTitle");
const carouselText = document.querySelector("#carouselText");
const carouselExtra = document.querySelector("#carouselExtra");

const audio = new Audio();
audio.preload = "none";
audio.volume = Number(volumeControl.value);

let campaignEnabled = localStorage.getItem("campaignEnabled") !== "false";
let selectedStation = localStorage.getItem("selectedStation") || "";
let campaignTimer = null;
let campaignHideTimer = null;
let settingsTimer = null;
let settingsLastInteraction = 0;
let settingsClosedUntil = 0;
let cursorTimer = null;
let carouselIndex = 0;

function updateClock() {
  const now = new Date();
  const observationTime = new Date(now.getTime() - OBSERVATION_OFFSET_MS);
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
  observationTimer.textContent = timeFormatter.format(observationTime).replace(/\./g, ":");
  observationTimer.dateTime = observationTime.toISOString();
  const formattedDate = dateFormatter.format(now).replace(" den ", " ");
  dateLine.textContent = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

function renderCarouselSlide() {
  const slide = carouselSlides[carouselIndex % carouselSlides.length];
  carouselKicker.textContent = slide.kicker;
  carouselTitle.textContent = slide.title;
  carouselText.textContent = slide.text;
  carouselExtra.textContent = slide.extra;
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

function scheduleCursorHide(delay = CURSOR_IDLE_MS) {
  clearTimeout(cursorTimer);
  cursorTimer = setTimeout(() => {
    document.body.classList.add("cursor-hidden");
  }, delay);
}

function showCursorTemporarily() {
  document.body.classList.remove("cursor-hidden");
  scheduleCursorHide();
}

function revealSettings() {
  showCursorTemporarily();

  if (Date.now() < settingsClosedUntil) return;

  settingsLastInteraction = Date.now();
  document.body.classList.add("settings-visible");
  clearTimeout(settingsTimer);
  settingsTimer = setTimeout(hideSettingsPanel, SETTINGS_VISIBLE_MS);
}

function hideSettingsPanel({ pauseBeforeReopen = false, hideCursorSoon = false } = {}) {
  document.body.classList.remove("settings-visible");
  clearTimeout(settingsTimer);
  settingsLastInteraction = 0;

  if (pauseBeforeReopen) {
    settingsClosedUntil = Date.now() + SETTINGS_REOPEN_GRACE_MS;
  }

  if (hideCursorSoon) {
    scheduleCursorHide(CURSOR_CLOSE_HIDE_MS);
  }
}

function setActiveStation(stationKey) {
  selectedStation = stationKey;
  localStorage.setItem("selectedStation", stationKey);
  stationButtons.forEach((button) => {
    const isActive = button.dataset.station === stationKey && !audio.paused;
    button.classList.toggle("is-active", isActive);
    button.classList.toggle("was-selected", button.dataset.station === stationKey);
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

setInterval(() => {
  updateClock();
}, 250);
updateClock();
renderCarouselSlide();

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

hideSettings.addEventListener("click", () => {
  hideSettingsPanel({ pauseBeforeReopen: true, hideCursorSoon: true });
});

["pointermove", "pointerdown", "touchstart"].forEach((eventName) => {
  window.addEventListener(eventName, revealSettings, { passive: true });
});

setInterval(() => {
  if (!settingsLastInteraction || !document.body.classList.contains("settings-visible")) return;

  if (Date.now() - settingsLastInteraction >= SETTINGS_VISIBLE_MS) {
    hideSettingsPanel();
  }
}, SETTINGS_IDLE_CHECK_MS);

setInterval(() => {
  carouselIndex = (carouselIndex + 1) % carouselSlides.length;
  renderCarouselSlide();
}, CAROUSEL_INTERVAL_MS);

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    updateClock();
    scheduleCampaign();
    showCursorTemporarily();
  }
});

showCursorTemporarily();
