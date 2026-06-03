const DENMARK_TIME_ZONE = "Europe/Copenhagen";
const RIDDLE_ANSWER_INTERVAL_MS = 3 * 60 * 1000;
const CAMPAIGN_FIRST_DELAY_MS = RIDDLE_ANSWER_INTERVAL_MS;
const CAMPAIGN_INTERVAL_MS = RIDDLE_ANSWER_INTERVAL_MS;
const CAMPAIGN_DURATION_MS = 24 * 1000;
const RIDDLE_QUESTION_DURATION_MS = 10 * 1000;
const CAMPAIGN_ANSWER_DURATION_MS = 16 * 1000;
const SETTINGS_VISIBLE_MS = 6500;
const SETTINGS_IDLE_CHECK_MS = 500;
const SETTINGS_REOPEN_GRACE_MS = 4200;
const CURSOR_IDLE_MS = 3200;
const CURSOR_CLOSE_HIDE_MS = 2200;
const OBSERVATION_OFFSET_MS = 15 * 60 * 1000;
const CAROUSEL_INTERVAL_MS = 12 * 1000;

const RIDDLE_ROTATION_INTERVAL_HOURS = 2;
const RIDDLES_PER_ROTATION = 4;

const RIDDLE_BANK = [
  {
    question: "Jeg bliver vådere, jo mere jeg tørrer. Hvad er jeg?",
    answer: "Et håndklæde.",
    answerText: "Et håndklæde suger vand, hver gang det tørrer noget andet."
  },
  {
    question: "Jeg har hænder og ansigt, men ingen krop. Hvad er jeg?",
    answer: "Et ur.",
    answerText: "Et ur kan have visere som hænder og en urskive som ansigt."
  },
  {
    question: "Jeg har byer, veje og vand, men ingen mennesker, biler eller fisk. Hvad er jeg?",
    answer: "Et kort.",
    answerText: "Et kort viser steder og ruter, men indeholder kun tegninger af dem."
  },
  {
    question: "Jeg følger dig i lyset, men forsvinder i mørke. Hvad er jeg?",
    answer: "Din skygge.",
    answerText: "Skyggen opstår, når du står mellem lyset og noget andet."
  },
  {
    question: "Hvad bliver større, jo mere man tager væk fra det?",
    answer: "Et hul.",
    answerText: "Et hul vokser netop ved, at der fjernes mere omkring det."
  },
  {
    question: "Hvad kan du bryde uden at røre ved det?",
    answer: "Et løfte.",
    answerText: "Et løfte brydes med en handling eller beslutning, ikke med hænderne."
  },
  {
    question: "Hvad tilhører dig, men bliver brugt mest af andre?",
    answer: "Dit navn.",
    answerText: "Andre bruger dit navn, når de taler til dig eller om dig."
  },
  {
    question: "Jeg kommer altid, men når aldrig frem. Hvad er jeg?",
    answer: "I morgen.",
    answerText: "Når dagen kommer, hedder den ikke længere i morgen, men i dag."
  },
  {
    question: "Jeg har blade, men er ikke et træ. Jeg kan fortælle uden stemme. Hvad er jeg?",
    answer: "En bog.",
    answerText: "En bog har sider, som også kan kaldes blade, og fortæller gennem tekst."
  },
  {
    question: "Jeg kan flyve uden vinger og græde uden øjne. Hvad er jeg?",
    answer: "En sky.",
    answerText: "Skyer driver over himlen, og regn kan beskrives som skyens tårer."
  },
  {
    question: "Jeg siger ingenting, men svarer når du råber. Hvad er jeg?",
    answer: "Et ekko.",
    answerText: "Et ekko er lyden af din egen stemme, der bliver kastet tilbage."
  },
  {
    question: "Hvad er fuld af huller, men kan stadig holde vand?",
    answer: "En svamp.",
    answerText: "En svamp har mange små huller, men kan suge og holde på vand."
  },
  {
    question: "Hvad har sorte og hvide tænder, men spiser aldrig?",
    answer: "Et klaver.",
    answerText: "Klaverets tangenter ligner en række tænder, men de bruges til musik."
  },
  {
    question: "Hvad går gennem byer og marker, men bevæger sig aldrig?",
    answer: "En vej.",
    answerText: "En vej ligger stille, selvom den fører mennesker gennem mange steder."
  },
  {
    question: "Hvad har hoved og hale, men ingen krop?",
    answer: "En mønt.",
    answerText: "En mønt har to sider, som ofte kaldes hoved og hale."
  },
  {
    question: "Hvad går kun opad og kommer aldrig ned igen?",
    answer: "Din alder.",
    answerText: "Alder stiger med tiden og kan ikke sættes tilbage."
  },
  {
    question: "Jeg bliver født høj og dør lav. Hvad er jeg?",
    answer: "Et stearinlys.",
    answerText: "Et stearinlys bliver kortere, mens det brænder."
  },
  {
    question: "Hvad kan fylde et helt rum uden at tage plads?",
    answer: "Lys.",
    answerText: "Lys kan brede sig i rummet, men det fylder ikke som en genstand."
  },
  {
    question: "Hvad kan falde hele dagen uden at slå sig?",
    answer: "Regnen.",
    answerText: "Regndråber falder fra skyerne, men kan ikke komme til skade."
  },
  {
    question: "Hvad har mange øjne, men kan ikke se?",
    answer: "En kartoffel.",
    answerText: "De små spiringspunkter på en kartoffel kaldes øjne."
  },
  {
    question: "Hvad kan du holde uden at bruge hænderne?",
    answer: "Vejret.",
    answerText: "At holde vejret betyder at lade være med at trække vejret et øjeblik."
  },
  {
    question: "Hvad kan rejse rundt i verden, mens det bliver i hjørnet?",
    answer: "Et frimærke.",
    answerText: "Frimærket sidder i hjørnet af brevet, mens brevet sendes afsted."
  },
  {
    question: "Jeg har tænder, men spiser aldrig. Hvad er jeg?",
    answer: "En kam.",
    answerText: "En kam har tænder, der reder hår, men den kan ikke spise."
  },
  {
    question: "Jeg har hals, men intet hoved. Hvad er jeg?",
    answer: "En flaske.",
    answerText: "En flaske har en flaskehals, men ikke et rigtigt hoved."
  },
  {
    question: "Jeg har en munding, men taler aldrig, og et leje, men sover aldrig. Hvad er jeg?",
    answer: "En flod.",
    answerText: "En flod kan have en munding og et leje, men den er ikke levende."
  },
  {
    question: "Hvilken nøgle kan ikke låse noget op?",
    answer: "En musiknøgle.",
    answerText: "En musiknøgle bruges i noder, ikke i en lås."
  },
  {
    question: "Hvis du smiler til mig, smiler jeg tilbage. Hvad er jeg?",
    answer: "Et spejl.",
    answerText: "Et spejl viser dit eget ansigt tilbage til dig."
  },
  {
    question: "Hvad bliver brudt, så snart man taler?",
    answer: "Stilheden.",
    answerText: "Stilhed findes kun, indtil nogen laver lyd."
  },
  {
    question: "Hvad kan du fange, men ikke kaste?",
    answer: "En forkølelse.",
    answerText: "Man kan sige, at man fanger en forkølelse, men den kan ikke kastes."
  },
  {
    question: "Jeg ligger ved døren og bliver trådt på, men byder alle velkommen. Hvad er jeg?",
    answer: "En dørmåtte.",
    answerText: "Dørmåtten ligger ved indgangen og bruges, når folk kommer ind."
  },
  {
    question: "Jeg bærer folk over vandet, men går aldrig selv. Hvad er jeg?",
    answer: "En bro.",
    answerText: "En bro står stille, mens mennesker kan gå eller køre over den."
  },
  {
    question: "Jeg åbner mig, når himlen lukker op. Hvad er jeg?",
    answer: "En paraply.",
    answerText: "Når det regner, slår man paraplyen op for at holde sig tør."
  },
  {
    question: "Jeg bliver sværere at bære, jo flere der kender mig. Hvad er jeg?",
    answer: "En hemmelighed.",
    answerText: "En hemmelighed er lettest at holde, når få personer kender den."
  },
  {
    question: "Hvad har tunge, men kan ikke tale?",
    answer: "En sko.",
    answerText: "En sko har en del, der kaldes tungen, men den kan ikke sige noget."
  },
  {
    question: "Hvad har rødder, men står ikke i jorden?",
    answer: "En tand.",
    answerText: "En tand har en rod nede i kæben, men den er ikke en plante."
  },
  {
    question: "Jeg lader dig se ud, men holder vind og regn ude. Hvad er jeg?",
    answer: "Et vindue.",
    answerText: "Et vindue giver udsyn, samtidig med at rummet er lukket af."
  }
];

function getCopenhagenDateParts(date = new Date()) {
  const values = {};
  const parts = new Intl.DateTimeFormat("da-DK", {
    timeZone: DENMARK_TIME_ZONE,
    day: "numeric",
    hour: "numeric",
    hourCycle: "h23",
    month: "numeric",
    year: "numeric"
  }).formatToParts(date);

  parts.forEach((part) => {
    if (part.type !== "literal") {
      values[part.type] = Number(part.value);
    }
  });

  return {
    day: values.day,
    hour: values.hour,
    month: values.month,
    year: values.year
  };
}

function getCopenhagenDateKey(date = new Date()) {
  const { day, month, year } = getCopenhagenDateParts(date);
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function getRiddleRotationKey(date = new Date()) {
  const { hour } = getCopenhagenDateParts(date);
  const rotationHour = Math.floor(hour / RIDDLE_ROTATION_INTERVAL_HOURS) * RIDDLE_ROTATION_INTERVAL_HOURS;
  return `${getCopenhagenDateKey(date)}-${String(rotationHour).padStart(2, "0")}`;
}

function hashStringToSeed(value) {
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function createSeededRandom(seed) {
  let state = seed >>> 0;

  return () => {
    let value = (state += 0x6d2b79f5);
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleRiddlesForRotation(rotationKey) {
  const random = createSeededRandom(hashStringToSeed(rotationKey));
  const riddles = [...RIDDLE_BANK];

  for (let index = riddles.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [riddles[index], riddles[swapIndex]] = [riddles[swapIndex], riddles[index]];
  }

  return riddles;
}

function getRiddleAnswersForRotation(date = new Date()) {
  const rotationKey = getRiddleRotationKey(date);
  const rotationSet = shuffleRiddlesForRotation(rotationKey).slice(0, RIDDLES_PER_ROTATION);

  return rotationSet.map((riddle, index) => ({
    ...riddle,
    id: `${rotationKey}-riddle-${index + 1}`,
    label: `Gåde ${index + 1}`,
  }));
}

function createCarouselSlides(riddles) {
  return [
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
      ...riddles[0],
      type: "riddle",
      kicker: "Gåde 1 af 4",
      title: riddles[0].question,
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
      ...riddles[1],
      type: "riddle",
      kicker: "Gåde 2 af 4",
      title: riddles[1].question,
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
      ...riddles[2],
      type: "riddle",
      kicker: "Gåde 3 af 4",
      title: riddles[2].question,
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
      ...riddles[3],
      type: "riddle",
      kicker: "Gåde 4 af 4",
      title: riddles[3].question,
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
}

const initialRiddleDate = new Date();
let activeRiddleRotationKey = getRiddleRotationKey(initialRiddleDate);
let riddleAnswers = getRiddleAnswersForRotation(initialRiddleDate);
let carouselSlides = createCarouselSlides(riddleAnswers);

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
  },
  nova: {
    name: "Nova FM",
    url: "https://live-bauerdk.sharp-stream.com/nova_dk_mp3"
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
let campaignAnswerTimer = null;
let campaignTransitionTimer = null;
let campaignContentAnimationTimer = null;
let settingsTimer = null;
let settingsLastInteraction = 0;
let settingsClosedUntil = 0;
let cursorTimer = null;
let carouselIndex = 0;
let nextRiddleAnswerIndex = 0;
let nextCampaignAt = 0;

function updateClock(now = new Date()) {
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

  carouselCountdown.textContent = `${slide.label} vises om ${formatCountdown(getRiddleAnswerAt(slide.id) - Date.now())}`;
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

function refreshRiddleRotation(now = new Date()) {
  const nextRotationKey = getRiddleRotationKey(now);

  if (nextRotationKey === activeRiddleRotationKey) {
    return false;
  }

  activeRiddleRotationKey = nextRotationKey;
  riddleAnswers = getRiddleAnswersForRotation(now);
  carouselSlides = createCarouselSlides(riddleAnswers);
  carouselIndex = 0;
  nextRiddleAnswerIndex = 0;
  createCarouselDots();
  renderCarouselSlide();
  return true;
}

function renderCampaignAnswers(answers = [], currentAnswerId = "", showCurrentAnswer = true) {
  campaignAnswers.replaceChildren();
  campaignAnswers.hidden = answers.length === 0;

  answers.forEach((answer) => {
    const item = document.createElement("div");
    item.className = "campaign-answer-item";
    const isCurrent = answer.id === currentAnswerId;
    item.classList.toggle("is-current", isCurrent);
    item.classList.toggle("is-pending-answer", isCurrent && !showCurrentAnswer);
    item.classList.toggle("is-hidden-answer", !isCurrent);

    const label = document.createElement("span");
    label.textContent = answer.label;

    item.append(label);

    if (isCurrent && showCurrentAnswer) {
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
  renderCampaignAnswers(slide.answers, slide.currentAnswerId, slide.showCurrentAnswer !== false);
}

function triggerCampaignContentEnter() {
  clearTimeout(campaignContentAnimationTimer);
  campaignScreen.classList.remove("is-content-entering");
  void campaignScreen.offsetWidth;
  campaignScreen.classList.add("is-content-entering");
  campaignContentAnimationTimer = setTimeout(() => {
    campaignScreen.classList.remove("is-content-entering");
  }, 760);
}

function transitionCampaignSlide(slide) {
  clearTimeout(campaignTransitionTimer);
  clearTimeout(campaignContentAnimationTimer);
  campaignScreen.classList.remove("is-content-entering");
  campaignScreen.classList.add("is-content-leaving");

  campaignTransitionTimer = setTimeout(() => {
    renderCampaignSlide(slide);
    campaignScreen.classList.remove("is-content-leaving");
    triggerCampaignContentEnter();
  }, 230);
}

function getNextRiddle() {
  const riddle = riddleAnswers[nextRiddleAnswerIndex];
  nextRiddleAnswerIndex = (nextRiddleAnswerIndex + 1) % riddleAnswers.length;
  return riddle;
}

function createRiddleQuestionSlide(riddle) {
  return {
    variant: "riddle-question",
    kicker: riddle.label,
    titleHtml: riddle.question,
    body: "Læs gåden igennem, og tænk over svaret.",
    meta: "Svaret kommer om 10 sekunder.",
    answers: riddleAnswers,
    currentAnswerId: riddle.id,
    showCurrentAnswer: false
  };
}

function createRiddleAnswerSlide(riddle) {
  return {
    variant: "answers",
    kicker: `Svar på ${riddle.label.toLowerCase()}`,
    titleHtml: riddle.answer,
    body: riddle.answerText,
    meta: "Næste svarskærm kommer om cirka 3 minutter.",
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
    campaignScreen.classList.remove("is-content-entering", "is-content-leaving");
  }
}

function showCampaign() {
  if (!campaignEnabled) return;
  const riddle = getNextRiddle();
  const questionSlide = createRiddleQuestionSlide(riddle);

  renderCampaignSlide(questionSlide);
  setCampaignVisible(true);
  triggerCampaignContentEnter();

  clearTimeout(campaignAnswerTimer);
  clearTimeout(campaignHideTimer);
  campaignAnswerTimer = setTimeout(() => {
    const answerSlide = createRiddleAnswerSlide(riddle);
    transitionCampaignSlide(answerSlide);
    clearTimeout(campaignHideTimer);
    campaignHideTimer = setTimeout(() => setCampaignVisible(false), answerSlide.durationMs || CAMPAIGN_DURATION_MS);
  }, RIDDLE_QUESTION_DURATION_MS);

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
  clearTimeout(campaignAnswerTimer);
  clearTimeout(campaignTransitionTimer);
  clearTimeout(campaignContentAnimationTimer);
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
  const now = new Date();
  updateClock(now);
  if (refreshRiddleRotation(now)) {
    scheduleCampaign();
  }
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
    const now = new Date();
    updateClock(now);
    refreshRiddleRotation(now);
    scheduleCampaign();
    showCursorTemporarily();
  }
});

showCursorTemporarily();
