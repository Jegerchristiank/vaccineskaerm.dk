const DENMARK_TIME_ZONE = "Europe/Copenhagen";
const RIDDLE_ANSWER_INTERVAL_MS = 3 * 60 * 1000;
const CAMPAIGN_FIRST_DELAY_MS = RIDDLE_ANSWER_INTERVAL_MS;
const CAMPAIGN_INTERVAL_MS = RIDDLE_ANSWER_INTERVAL_MS;
const CAMPAIGN_DURATION_MS = 24 * 1000;
const CAMPAIGN_ANSWER_DURATION_MS = 16 * 1000;
const SETTINGS_VISIBLE_MS = 6500;
const SETTINGS_IDLE_CHECK_MS = 500;
const SETTINGS_REOPEN_GRACE_MS = 4200;
const CURSOR_IDLE_MS = 3200;
const CURSOR_CLOSE_HIDE_MS = 2200;
const OBSERVATION_OFFSET_MS = 15 * 60 * 1000;
const CAROUSEL_INTERVAL_MS = 12 * 1000;

const riddleAnswers = [
  {
    id: "riddle-1",
    label: "Gåde 1",
    question: "Hvad kan du holde uden at røre ved det?",
    answer: "Et løfte.",
    answerText: "Man kan holde et løfte uden at have det i hånden."
  },
  {
    id: "riddle-2",
    label: "Gåde 2",
    question: "Hvad går og går, men kommer ingen vegne?",
    answer: "Et ur.",
    answerText: "Uret går hele tiden, men det flytter sig ikke."
  },
  {
    id: "riddle-3",
    label: "Gåde 3",
    question: "Hvad bliver større, jo mere man tager væk?",
    answer: "Et hul.",
    answerText: "Jo mere man graver væk, jo større bliver hullet."
  },
  {
    id: "riddle-4",
    label: "Gåde 4",
    question: "Hvad kan fylde et rum uden at tage plads?",
    answer: "Lys.",
    answerText: "Lys kan fylde hele rummet uden at optage plads."
  }
];

const carouselSlides = [
  {
    kicker: "Mens du venter",
    title: "Hold øje med kroppen",
    text: "Sig til personalet, hvis du bliver utilpas, får åndenød, udslæt eller føler dig svimmel.",
    extra: "Vi hjælper dig gerne."
  },
  {
    kicker: "Klokken nederst til højre",
    title: "Sådan bruger du ventetiden",
    text: "Når uret for 15 minutter siden viser din vaccinationstid, er observationstiden gået.",
    extra: "Spørg personalet, hvis du er i tvivl."
  },
  {
    kicker: "Praktisk info",
    title: "Brug ventetiden roligt",
    text: "Sæt dig godt til rette, og brug uret nederst til højre til at følge observationstiden.",
    extra: "Personalet er tæt på, hvis du får brug for hjælp."
  },
  {
    ...riddleAnswers[0],
    type: "riddle",
    kicker: "Gåde 1 af 4",
    title: riddleAnswers[0].question,
    text: "Tænk over den, mens du venter.",
    extra: "Svaret vises på sin egen svarskærm."
  },
  {
    kicker: "Hvem får tilbuddet?",
    title: "Spørg hvis du er i tvivl",
    text: "Vaccinationstilbud afhænger af målgruppe og helbred. Personalet kan hjælpe dig videre.",
    extra: "Du kan også læse mere og booke via vacciner.dk."
  },
  {
    ...riddleAnswers[1],
    type: "riddle",
    kicker: "Gåde 2 af 4",
    title: riddleAnswers[1].question,
    text: "Kig på skærmen, men vent med svaret.",
    extra: "Svaret vises på sin egen svarskærm."
  },
  {
    kicker: "Efter vaccination",
    title: "Bliv i venteområdet",
    text: "Ventetiden gør det lettere for personalet at hjælpe hurtigt, hvis du får det dårligt.",
    extra: "Spørg personalet, hvis du er i tvivl."
  },
  {
    kicker: "Pneumokok",
    title: "Ikke alle tilbud er ens",
    text: "Nogle vaccinationer afhænger af alder, sygdomsrisiko eller lægelig vurdering.",
    extra: "Spørg personalet, hvis du er usikker."
  },
  {
    ...riddleAnswers[2],
    type: "riddle",
    kicker: "Gåde 3 af 4",
    title: riddleAnswers[2].question,
    text: "Svar først, når kampagneskærmen kommer.",
    extra: "Svaret vises på sin egen svarskærm."
  },
  {
    kicker: "Godt at vide",
    title: "Kroppen kan reagere",
    text: "Ømhed, rødme eller hævelse ved indstiksstedet kan forekomme efter vaccination.",
    extra: "Kontakt personalet, hvis du føler dig utilpas."
  },
  {
    kicker: "Tryghed",
    title: "Sig til med det samme",
    text: "Bliver du svimmel, får åndenød, udslæt eller føler dig dårlig, så kontakt personalet.",
    extra: "Vi hjælper dig gerne."
  },
  {
    ...riddleAnswers[3],
    type: "riddle",
    kicker: "Gåde 4 af 4",
    title: riddleAnswers[3].question,
    text: "Tænk over den, mens karussellen kører videre.",
    extra: "Svaret vises på sin egen svarskærm."
  },
  {
    kicker: "Book tid",
    title: "Se vaccination på vacciner.dk",
    text: "Vacciner.dk bruges til at finde og booke vaccination, når du er omfattet af tilbuddet.",
    extra: "Kampagneskærmen viser linket igen om lidt."
  }
];

const campaignSlides = [
  {
    kicker: "Vaccination - vi er til for dig",
    titleHtml: "Bestil dine vacciner på <span>vacciner.dk</span>",
    body: "Her kan du få influenza-vaccinen, pneumokok-vaccinen og covid-vaccinen.",
    meta: "Spørg personalet, hvis du er i tvivl eller føler dig utilpas.",
    durationMs: 24 * 1000
  },
  {
    kicker: "Mens du venter",
    titleHtml: "Brug de 15 minutter",
    body: "Når uret nederst til højre viser din vaccinationstid, er observationstiden gået.",
    meta: "Bliv i venteområdet, indtil tiden er gået.",
    durationMs: 22 * 1000
  },
  {
    kicker: "Mens du venter",
    titleHtml: "Hold øje med hvordan du har det",
    body: "Sig til personalet, hvis du bliver svimmel, utilpas, får udslæt eller åndenød.",
    meta: "Vi hjælper dig gerne.",
    durationMs: 22 * 1000
  },
  {
    kicker: "Spørgsmål",
    titleHtml: "Er du i tvivl?",
    body: "Spørg personalet om vaccination, booking eller hvem tilbuddet gælder for.",
    meta: "Du kan også bruge vacciner.dk.",
    durationMs: 22 * 1000
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
const carouselCard = document.querySelector("#carouselCard");
const carouselKicker = document.querySelector("#carouselKicker");
const carouselTitle = document.querySelector("#carouselTitle");
const carouselText = document.querySelector("#carouselText");
const carouselExtra = document.querySelector("#carouselExtra");
const carouselCountdown = document.querySelector("#carouselCountdown");
const carouselDots = document.querySelector("#carouselDots");
const campaignScreen = document.querySelector(".campaign-screen");
const campaignKicker = document.querySelector("#campaignKicker");
const campaignTitle = document.querySelector("#campaignTitle");
const campaignBody = document.querySelector("#campaignBody");
const campaignMeta = document.querySelector("#campaignMeta");
const campaignAnswers = document.querySelector("#campaignAnswers");

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
let nextRiddleAnswerIndex = 0;
let nextCampaignAt = 0;

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

function formatCountdown(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  if (minutes > 0) {
    return `${minutes}:${String(seconds).padStart(2, "0")} min`;
  }

  return `${seconds} sek.`;
}

function createCarouselDots() {
  carouselDots.innerHTML = "";

  carouselSlides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = "carousel-dot";
    dot.dataset.index = String(index);
    carouselDots.append(dot);
  });
}

function updateCarouselDots() {
  [...carouselDots.children].forEach((dot, index) => {
    dot.classList.toggle("is-active", index === carouselIndex % carouselSlides.length);
  });
}

function getRiddleIndex(riddleId) {
  return riddleAnswers.findIndex((answer) => answer.id === riddleId);
}

function getRiddleAnswerAt(riddleId) {
  const riddleIndex = getRiddleIndex(riddleId);

  if (riddleIndex === -1 || !nextCampaignAt) {
    return 0;
  }

  const riddleOffset = (riddleIndex - nextRiddleAnswerIndex + riddleAnswers.length) % riddleAnswers.length;
  return nextCampaignAt + riddleOffset * RIDDLE_ANSWER_INTERVAL_MS;
}

function updateRiddleCountdown() {
  const slide = carouselSlides[carouselIndex % carouselSlides.length];

  if (slide.type !== "riddle") {
    carouselCountdown.hidden = true;
    carouselCountdown.textContent = "";
    return;
  }

  carouselCountdown.hidden = false;

  if (!campaignEnabled || !nextCampaignAt) {
    carouselCountdown.textContent = "Svarskærme er slået fra.";
    return;
  }

  carouselCountdown.textContent = `Svar på ${slide.label.toLowerCase()} vises om ${formatCountdown(getRiddleAnswerAt(slide.id) - Date.now())}`;
}

function renderCarouselSlide({ animate = false } = {}) {
  const slide = carouselSlides[carouselIndex % carouselSlides.length];

  if (animate) {
    carouselCard.classList.remove("is-swiping");
    void carouselCard.offsetWidth;
    carouselCard.classList.add("is-swiping");
  }

  carouselKicker.textContent = slide.kicker;
  carouselTitle.textContent = slide.title;
  carouselText.textContent = slide.text;
  carouselExtra.textContent = slide.extra;
  carouselCard.dataset.type = slide.type || "info";

  updateCarouselDots();
  updateRiddleCountdown();
}

function renderCampaignAnswers(answers = [], currentAnswerId = "") {
  campaignAnswers.replaceChildren();
  campaignAnswers.hidden = answers.length === 0;

  answers.forEach((answer) => {
    const item = document.createElement("div");
    item.className = "campaign-answer-item";
    const isCurrent = answer.id === currentAnswerId;
    item.classList.toggle("is-current", isCurrent);
    item.classList.toggle("is-hidden-answer", !isCurrent);

    const label = document.createElement("span");
    label.textContent = answer.label;

    item.append(label);

    if (isCurrent) {
      const value = document.createElement("strong");
      value.textContent = answer.answer;
      item.append(value);
    }

    campaignAnswers.append(item);
  });
}

function renderCampaignSlide(slide) {
  campaignScreen.dataset.variant = slide.variant || "default";
  document.body.dataset.campaignVariant = slide.variant || "default";
  campaignKicker.textContent = slide.kicker;
  campaignTitle.innerHTML = slide.titleHtml;
  campaignBody.textContent = slide.body;
  campaignMeta.textContent = slide.meta || "";
  renderCampaignAnswers(slide.answers, slide.currentAnswerId);
}

function getNextCampaignSlide() {
  const riddle = riddleAnswers[nextRiddleAnswerIndex];
  nextRiddleAnswerIndex = (nextRiddleAnswerIndex + 1) % riddleAnswers.length;

  return {
    variant: "answers",
    kicker: `Svar på ${riddle.label.toLowerCase()}`,
    titleHtml: riddle.answer,
    body: riddle.answerText,
    meta: "Næste gådesvar kommer om cirka 3 minutter.",
    answers: riddleAnswers,
    currentAnswerId: riddle.id,
    durationMs: CAMPAIGN_ANSWER_DURATION_MS
  };
}

function setCampaignVisible(visible) {
  document.body.classList.toggle("campaign-active", visible);
  campaignScreen.setAttribute("aria-hidden", String(!visible));

  if (!visible) {
    delete document.body.dataset.campaignVariant;
  }
}

function showCampaign() {
  if (!campaignEnabled) return;
  const slide = getNextCampaignSlide();
  renderCampaignSlide(slide);
  setCampaignVisible(true);
  clearTimeout(campaignHideTimer);
  campaignHideTimer = setTimeout(() => setCampaignVisible(false), slide.durationMs || CAMPAIGN_DURATION_MS);
  queueNextCampaign(CAMPAIGN_INTERVAL_MS);
}

function queueNextCampaign(delay) {
  clearTimeout(campaignTimer);

  if (!campaignEnabled) {
    nextCampaignAt = 0;
    return;
  }

  nextCampaignAt = Date.now() + delay;
  campaignTimer = setTimeout(showCampaign, delay);
}

function scheduleCampaign() {
  clearTimeout(campaignTimer);
  clearTimeout(campaignHideTimer);
  setCampaignVisible(false);

  if (!campaignEnabled) {
    nextCampaignAt = 0;
    updateRiddleCountdown();
    return;
  }

  queueNextCampaign(CAMPAIGN_FIRST_DELAY_MS);
  updateRiddleCountdown();
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
  updateRiddleCountdown();
}, 250);
updateClock();
createCarouselDots();
renderCarouselSlide();
renderCampaignSlide(campaignSlides[0]);

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
  renderCarouselSlide({ animate: true });
}, CAROUSEL_INTERVAL_MS);

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    updateClock();
    scheduleCampaign();
    showCursorTemporarily();
  }
});

showCursorTemporarily();
