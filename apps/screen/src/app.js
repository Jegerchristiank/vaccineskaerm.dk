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

const RIDDLE_REPEAT_GUARD_MS = 60 * 60 * 1000;
const RIDDLE_QUEUE_LOOKAHEAD_COUNT = 4;
const RIDDLE_QUEUE_LOW_WATERMARK = RIDDLE_QUEUE_LOOKAHEAD_COUNT + 2;
const RIDDLE_QUEUE_STORAGE_KEY = "riddleQueueStateV2";

const RIDDLE_BANK = [
  {
    question: "Alle i venteområdet har mig. Ingen kan låne mig ud. Jo mere man bruger mig, jo mindre har man tilbage.",
    answer: "Ventetid."
  },
  {
    question: "Jeg består af sorte og hvide linjer. Jeg bliver læst uden øjne og forstået uden sprog.",
    answer: "En stregkode."
  },
  {
    question: "To fædre og to sønner møder op sammen, men der står kun tre personer ved skranken. Hvordan kan det passe?",
    answer: "Det er en bedstefar, en far og en søn."
  },
  {
    question: "En medarbejder er den første, der går ind i vaccinationscenteret, og den sidste, der går ud. Alligevel har han ikke ventet længst. Hvorfor?",
    answer: "Han arbejder der og åbner/lukker centeret."
  },
  {
    question: "En person har tid klokken 10.00, kommer 9.55 og får alligevel at vide, at han er for tidligt på den. Hvorfor?",
    answer: "Tiden er klokken 10.00 på en anden dato."
  },
  {
    question: "En skærm viser en ny gåde hvert kvarter. Den første vises klokken 9.00. Hvor mange forskellige gåder er vist klokken 10.00, hvis gåden klokken 10.00 tæller med?",
    answer: "Fem: 9.00, 9.15, 9.30, 9.45 og 10.00."
  },
  {
    question: "En person bliver sendt til nummer 8, før nummer 7 er blevet kaldt. Systemet er ikke i stykker. Hvordan?",
    answer: "Nummer 8 er en vaccinationsstation, ikke et kønummer."
  },
  {
    question: "En person bliver kaldt frem, men ingen siger hans navn, og ingen råber. Hvordan ved han, at det er hans tur?",
    answer: "Hans kønummer vises på skærmen."
  },
  {
    question: "En person sidder i observation hele formiddagen, men er ikke selv blevet vaccineret. Hvordan kan det passe?",
    answer: "Personen er medarbejder og observerer området."
  },
  {
    question: "Jeg har felter, men er ikke en mark. Jeg har kryds, men er ikke et valgsted. Jeg er ofte færdig, før besøget går videre.",
    answer: "Et spørgeskema."
  },
  {
    question: "Hvilken kø kan gå i stå, selvom der ikke står et eneste menneske i den?",
    answer: "En printerkø."
  },
  {
    question: "En tid kan være ledig, selvom alle stole er optaget. Hvordan?",
    answer: "Det er en ledig bookingtid, ikke en ledig siddeplads."
  },
  {
    question: "En person går ud med færre papirer, end han kom ind med, men han har ikke mistet noget. Hvorfor?",
    answer: "Han har afleveret et skema ved check-in."
  },
  {
    question: "Når tallet på skærmen bliver større, bliver mit tal mindre. Hvad er jeg?",
    answer: "Antallet af personer foran dig i køen."
  },
  {
    question: "Hvad kan være langt, selvom ingen står i det?",
    answer: "En venteliste."
  },
  {
    question: "Jeg skal helst ikke brydes, så noget andet kan blive brudt. Hvad er jeg?",
    answer: "Kølekæden, som hjælper med at bryde smittekæden."
  },
  {
    question: "En kurve bliver knækket, men der er hverken lyd, skår eller oprydning bagefter. Hvilken kurve er det?",
    answer: "Smittekurven."
  },
  {
    question: "Jeg bestemmer, hvor mennesker står, selvom jeg selv ligger helt stille på gulvet.",
    answer: "En gulvmarkering."
  },
  {
    question: "Jeg har ti cifre og begynder med en dato, men jeg er ikke en kalender.",
    answer: "Et CPR-nummer."
  },
  {
    question: "Personalet spørger om en dato, de allerede kan se. De spørger ikke, fordi de har glemt den. Hvorfor spørger de?",
    answer: "For at kontrollere identiteten, typisk fødselsdatoen."
  },
  {
    question: "To personer har samme navn og samme fødselsdato, men personalet kan stadig skelne dem sikkert fra hinanden. Hvordan?",
    answer: "De har forskellige CPR-numre."
  },
  {
    question: "Jeg kan identificere dig i sundhedsvæsenet, selvom jeg ikke har et billede af dig.",
    answer: "Sundhedskortet."
  },
  {
    question: "Jeg kan udløbe, selvom jeg aldrig har levet.",
    answer: "En udløbsdato."
  },
  {
    question: "Jeg har hals og krop, men hverken hoved, ben eller arme. Jeg står ofte koldt, indtil jeg skal bruges.",
    answer: "Et hætteglas."
  },
  {
    question: "Jo mere man tager ud af mig, jo større bliver jeg.",
    answer: "Den tomme plads i køleskabet."
  },
  {
    question: "En person møder op uden vaccinationstid og går alligevel direkte videre uden at springe køen over. Hvorfor?",
    answer: "Personen er medarbejder og møder på arbejde."
  },
  {
    question: "En person får svaret på gåden, før han ser spørgsmålet. Hvordan kan det ske?",
    answer: "Han kigger på skærmen lige før den skifter fra svaret på den gamle gåde til den nye gåde."
  },
  {
    question: "Alle i venteområdet kan se gåden, men én person kendte svaret, før den kom på skærmen. Hvem?",
    answer: "Personen, der skrev gåden."
  },
  {
    question: "En gåde bliver kortere hele tiden, uden at der fjernes et eneste ord. Hvordan?",
    answer: "Tiden, den er tilbage på skærmen, bliver kortere."
  },
  {
    question: "Hvilket stik kan hjælpe dig med en gåde, men aldrig sættes i en arm?",
    answer: "Et stikord."
  },
  {
    question: "Hvilket stik kan give strøm, men ikke beskyttelse?",
    answer: "Et elstik."
  },
  {
    question: "Hvilken nål peger, men prikker ikke?",
    answer: "En kompasnål."
  },
  {
    question: "Hvilken prøve kan være tilfældig uden at være taget fra en person?",
    answer: "En stikprøve."
  },
  {
    question: "En borger bliver vist ind gennem døren, men døren er ikke åbnet for hans skyld. Hvorfor?",
    answer: "Han går ind sammen med den person, han ledsager."
  },
  {
    question: "Tre generationer møder op: to mødre og to døtre. Alligevel er de kun tre personer. Hvordan?",
    answer: "Det er en bedstemor, en mor og en datter."
  },
  {
    question: "En person er både foran og bagved den samme person i køen. Hvordan?",
    answer: "De står i hver sin kø: for eksempel check-in-kø og vaccinationskø."
  },
  {
    question: "En person har nummer 21, men bliver kaldt før nummer 20. Der er ingen fejl i køsystemet. Hvordan?",
    answer: "Nummer 21 er personens alder, ikke kønummeret."
  },
  {
    question: "En person har nummer 4, men skal gå til nummer 12. Ingen af numrene er forkerte. Hvad betyder de?",
    answer: "Nummer 4 er kønummeret, og nummer 12 er vaccinationsstationen."
  },
  {
    question: "Jeg kan være optaget uden at tale, ledig uden at stå tom og booket uden at være en bog.",
    answer: "En tid i bookingsystemet."
  },
  {
    question: "Jeg får mennesker til at rejse sig, men jeg rører dem aldrig.",
    answer: "Kønummeret på skærmen."
  },
  {
    question: "En person sidder præcis 15 minutter og ser alligevel to forskellige gåder. Hvordan?",
    answer: "Gåden skifter lige, når personen sætter sig, og igen præcis 15 minutter senere."
  },
  {
    question: "En ny gåde kommer hvert kvarter fra klokken 8.00 til og med klokken 12.00. Hvor mange gåder vises der?",
    answer: "17 gåder."
  },
  {
    question: "Hvis tre medarbejdere registrerer tre borgere på tre minutter, hvor mange medarbejdere skal der til for at registrere 100 borgere på 100 minutter i samme tempo?",
    answer: "Tre medarbejdere."
  },
  {
    question: "En person er nummer 27. Skærmen viser 24 nu og skifter til næste nummer hvert tredje minut. Hvor længe går der, før nummer 27 vises?",
    answer: "Ni minutter."
  },
  {
    question: "Jeg kan være grøn uden at være en plante, rød uden at være blod og gul uden at være solen. I et center bestemmer jeg ofte, hvad man skal gøre.",
    answer: "Farvemarkering eller skiltning."
  },
  {
    question: "En person siger \"ja\" uden at sige noget. Personalet forstår svaret. Hvordan?",
    answer: "Personen nikker."
  },
  {
    question: "Jeg kan være sat, uden at nogen har sat sig. Når jeg mangler, er sagen ikke færdig.",
    answer: "Et flueben i systemet."
  },
  {
    question: "Jeg kommer før besøget, bruges under besøget og er bagefter ikke længere vigtig. Jeg er ikke personen selv.",
    answer: "Bookingbekræftelsen."
  },
  {
    question: "Jeg kan stå på papir, på en telefon og i et system, men jeg kan ikke selv møde op.",
    answer: "En aftale eller booking."
  },
  {
    question: "Jeg er lavet for at få folk til at tænke i ventetiden, men mit bedste svar er først godt, når det ikke var det første svar, man tænkte på.",
    answer: "En god gåde."
  }
].map((riddle, index) => ({
  ...riddle,
  id: `riddle-${index + 1}`
}));

const RIDDLES_BY_ID = new Map(RIDDLE_BANK.map((riddle) => [riddle.id, riddle]));
let recentRiddleShows = [];
let riddleQueue = [];

function shuffleRiddles(riddles) {
  const shuffled = [...riddles];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

function readStoredRiddleState() {
  try {
    return JSON.parse(localStorage.getItem(RIDDLE_QUEUE_STORAGE_KEY) || "null");
  } catch {
    return null;
  }
}

function normalizeRecentRiddleShows(recentShows = [], now = Date.now()) {
  if (!Array.isArray(recentShows)) {
    return [];
  }

  const latestShows = new Map();

  recentShows.forEach((show) => {
    if (!show || !RIDDLES_BY_ID.has(show.id) || !Number.isFinite(show.shownAt)) {
      return;
    }

    if (now - show.shownAt >= RIDDLE_REPEAT_GUARD_MS) {
      return;
    }

    const previousShow = latestShows.get(show.id);
    if (!previousShow || show.shownAt > previousShow.shownAt) {
      latestShows.set(show.id, { id: show.id, shownAt: show.shownAt });
    }
  });

  return [...latestShows.values()].sort((firstShow, secondShow) => firstShow.shownAt - secondShow.shownAt);
}

function pruneRecentRiddleShows(now = Date.now()) {
  recentRiddleShows = normalizeRecentRiddleShows(recentRiddleShows, now);
}

function persistRiddleQueueState() {
  try {
    localStorage.setItem(
      RIDDLE_QUEUE_STORAGE_KEY,
      JSON.stringify({
        queueIds: riddleQueue.map((riddle) => riddle.id),
        recentShows: recentRiddleShows
      })
    );
  } catch {
    // If storage is unavailable, the in-memory queue still keeps the screen running.
  }
}

function refillRiddleQueue(minCount = RIDDLE_QUEUE_LOOKAHEAD_COUNT, now = Date.now()) {
  if (RIDDLE_BANK.length === 0) {
    return;
  }

  pruneRecentRiddleShows(now);

  while (riddleQueue.length < minCount) {
    const recentIds = new Set(recentRiddleShows.map((show) => show.id));
    const queuedIds = new Set(riddleQueue.map((riddle) => riddle.id));
    let candidates = RIDDLE_BANK.filter((riddle) => !recentIds.has(riddle.id) && !queuedIds.has(riddle.id));

    if (candidates.length === 0) {
      candidates = RIDDLE_BANK.filter((riddle) => !queuedIds.has(riddle.id));
    }

    if (candidates.length === 0) {
      candidates = RIDDLE_BANK;
    }

    riddleQueue.push(...shuffleRiddles(candidates));
  }
}

function restoreRiddleQueueState(now = Date.now()) {
  const storedState = readStoredRiddleState();
  recentRiddleShows = normalizeRecentRiddleShows(storedState?.recentShows, now);

  const recentIds = new Set(recentRiddleShows.map((show) => show.id));
  const queuedIds = new Set();

  riddleQueue = Array.isArray(storedState?.queueIds)
    ? storedState.queueIds
        .map((id) => RIDDLES_BY_ID.get(id))
        .filter((riddle) => {
          if (!riddle || recentIds.has(riddle.id) || queuedIds.has(riddle.id)) {
            return false;
          }

          queuedIds.add(riddle.id);
          return true;
        })
    : [];

  refillRiddleQueue(RIDDLE_QUEUE_LOW_WATERMARK, now);
  persistRiddleQueueState();
}

function rememberRiddleShown(riddle, now = Date.now()) {
  pruneRecentRiddleShows(now);
  recentRiddleShows = recentRiddleShows.filter((show) => show.id !== riddle.id);
  recentRiddleShows.push({ id: riddle.id, shownAt: now });
}

function getQueuedRiddles() {
  refillRiddleQueue(RIDDLE_QUEUE_LOOKAHEAD_COUNT);

  return riddleQueue.slice(0, RIDDLE_QUEUE_LOOKAHEAD_COUNT).map((riddle, index) => ({
    ...riddle,
    label: `Gåde ${index + 1} i køen`
  }));
}

function getCampaignAnswerItems(riddle) {
  return [{ ...riddle, label: "Denne gåde" }];
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
      kicker: "Gåde 1 i køen",
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
      kicker: "Gåde 2 i køen",
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
      kicker: "Gåde 3 i køen",
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
      kicker: "Gåde 4 i køen",
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

restoreRiddleQueueState();
let riddleAnswers = getQueuedRiddles();
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
  return riddleQueue.findIndex((riddle) => riddle.id === riddleId);
}

function getRiddleAnswerAt(riddleId) {
  const riddleIndex = getRiddleIndex(riddleId);

  if (riddleIndex === -1 || !nextCampaignAt) {
    return 0;
  }

  return nextCampaignAt + riddleIndex * CAMPAIGN_INTERVAL_MS;
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

function refreshQueuedRiddleSlides({ resetIndex = false } = {}) {
  riddleAnswers = getQueuedRiddles();
  carouselSlides = createCarouselSlides(riddleAnswers);

  if (resetIndex || carouselIndex >= carouselSlides.length) {
    carouselIndex = 0;
  }

  createCarouselDots();
  renderCarouselSlide();
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
  refillRiddleQueue(RIDDLE_QUEUE_LOW_WATERMARK);

  const riddle = riddleQueue.shift();
  const shownRiddle = { ...riddle, label: "Gåde" };

  rememberRiddleShown(riddle);
  refillRiddleQueue(RIDDLE_QUEUE_LOW_WATERMARK);
  persistRiddleQueueState();

  return shownRiddle;
}

function createRiddleQuestionSlide(riddle) {
  return {
    variant: "riddle-question",
    kicker: riddle.label,
    titleHtml: riddle.question,
    body: "Læs gåden igennem, og tænk over svaret.",
    meta: "Svaret kommer om 10 sekunder.",
    answers: getCampaignAnswerItems(riddle),
    currentAnswerId: riddle.id,
    showCurrentAnswer: false
  };
}

function createRiddleAnswerSlide(riddle) {
  return {
    variant: "answers",
    kicker: "Svar på gåden",
    titleHtml: riddle.answer,
    body: riddle.answerText || "Næste gåde står allerede klar i køen.",
    meta: "Næste gåde kommer om cirka 3 minutter.",
    answers: getCampaignAnswerItems(riddle),
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

  queueNextCampaign(CAMPAIGN_INTERVAL_MS);
  refreshQueuedRiddleSlides();
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
    scheduleCampaign();
    showCursorTemporarily();
  }
});

showCursorTemporarily();
