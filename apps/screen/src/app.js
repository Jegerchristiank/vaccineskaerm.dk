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

// Index 0 is day 1 of the month. Each entry is [question, answer, answerText].
const DAILY_RIDDLE_SETS = [
  [
    [
      "Hvad giver kroppen en prøve uden eksamen?",
      "En vaccine.",
      "En vaccine hjælper immunforsvaret med at genkende noget, det kan møde senere."
    ],
    [
      "Hvad lander i armen og varer et øjeblik?",
      "Et stik.",
      "Selve stikket er hurtigt overstået."
    ],
    [
      "Hvad sidder på armen efter besøget?",
      "Et plaster.",
      "Plasteret dækker det lille sted, hvor du blev stukket."
    ],
    [
      "Hvad går i 15 minutter efter stikket?",
      "Observationstiden.",
      "Observationstiden er den rolige ventetid efter vaccination."
    ]
  ],
  [
    [
      "Hvad husker uden at have en hjerne?",
      "Immunforsvaret.",
      "Immunforsvaret kan genkende ting, det har mødt eller øvet sig på."
    ],
    [
      "Hvad dufter rent før et stik?",
      "Håndsprit.",
      "Sprit hjælper med at gøre huden klar før vaccinationen."
    ],
    [
      "Hvad er lille, rund og viser tiden?",
      "Uret.",
      "Uret hjælper dig med at holde øje med ventetiden."
    ],
    [
      "Hvad booker du uden at lægge den i en bog?",
      "En vaccinationstid.",
      "En vaccinationstid er den aftale, du møder op til."
    ]
  ],
  [
    [
      "Hvad træner kroppen uden sportstøj?",
      "En vaccine.",
      "Vaccinen giver immunforsvaret noget at øve sig på."
    ],
    [
      "Hvad kan blive ømt, men stadig være din ven?",
      "Overarmen.",
      "Ømhed i armen kan forekomme efter vaccination."
    ],
    [
      "Hvad viser vej til vaccineaftalen?",
      "Vacciner.dk.",
      "Vacciner.dk bruges til at finde og booke vaccination."
    ],
    [
      "Hvad venter du i, men bor der ikke?",
      "Venteområdet.",
      "Venteområdet er stedet, hvor du bliver lidt efter stikket."
    ]
  ],
  [
    [
      "Hvad kan hjælpe mange ved at begynde med én?",
      "Vaccination.",
      "Vaccination handler både om den enkelte og om fælles forebyggelse."
    ],
    [
      "Hvad kommer før plasteret og efter 'klar'?",
      "Stikket.",
      "Stikket kommer, når armen er gjort klar."
    ],
    [
      "Hvad skal du sige, hvis du bliver svimmel?",
      "Til personalet.",
      "Sig til personalet med det samme, hvis du bliver utilpas."
    ],
    [
      "Hvad er ikke en paraply, men hjælper mod smitte?",
      "En vaccine.",
      "En vaccine kan hjælpe kroppen med at være bedre forberedt."
    ]
  ],
  [
    [
      "Hvad holder styr på 15 minutter?",
      "Observationen.",
      "Observationen er tiden, hvor du bliver i venteområdet efter stikket."
    ],
    [
      "Hvad får et lille prik og en stor opgave?",
      "Armen.",
      "Armen får stikket, mens kroppen gør arbejdet bagefter."
    ],
    [
      "Hvad bliver sprittet, men ikke drukket?",
      "Huden.",
      "Huden bliver sprittet før vaccinationen."
    ],
    [
      "Hvad er et tilbud, du kan booke?",
      "Vaccination.",
      "Vaccinationstilbud kan afhænge af målgruppe og helbred."
    ]
  ],
  [
    [
      "Hvad lærer kroppen at genkende?",
      "Vaccinen.",
      "Vaccinen hjælper immunforsvaret med at kende et bestemt signal."
    ],
    [
      "Hvad kan være ømt efter et stik?",
      "Indstiksstedet.",
      "Indstiksstedet kan være ømt, rødt eller hævet."
    ],
    [
      "Hvad er svaret på 'hvor booker jeg'?",
      "Vacciner.dk.",
      "Vacciner.dk er indgangen til booking."
    ],
    [
      "Hvad har nål, men syr ikke?",
      "Sprøjten.",
      "Sprøjten bruges til at give vaccinen."
    ]
  ],
  [
    [
      "Hvad kommer i en lille dosis med en stor idé?",
      "En vaccine.",
      "En vaccine gives i en lille mængde for at hjælpe kroppen med at forberede sig."
    ],
    [
      "Hvem står klar, hvis du får brug for hjælp?",
      "Personalet.",
      "Personalet er i nærheden, mens du venter."
    ],
    [
      "Hvad måler tiden siden din vaccine?",
      "Uret.",
      "Uret nederst på skærmen hjælper med observationstiden."
    ],
    [
      "Hvad kan beskytte uden at være tøj?",
      "Vaccination.",
      "Vaccination er en del af forebyggelse."
    ]
  ],
  [
    [
      "Hvad minder kroppen om at være klar?",
      "En vaccine.",
      "Vaccinen giver immunforsvaret en slags påmindelse."
    ],
    [
      "Hvad får du på armen ved en lille dråbe?",
      "Et plaster.",
      "Plasteret dækker det lille mærke efter stikket."
    ],
    [
      "Hvad hedder roen efter stikket?",
      "Observation.",
      "Observation er den rolige ventetid efter vaccination."
    ],
    [
      "Hvem spørger du, hvis du er i tvivl?",
      "Personalet.",
      "Personalet kan hjælpe med spørgsmål om vaccinationen."
    ]
  ],
  [
    [
      "Hvad er lille nok til et prik og vigtigt nok til en skærm?",
      "Vaccinen.",
      "Vaccinen fylder ikke meget, men er vigtig nok til information på skærmen."
    ],
    [
      "Hvad bruger du til at finde tid?",
      "Vacciner.dk.",
      "Vacciner.dk kan bruges til at finde og booke vaccination."
    ],
    [
      "Hvad bliver rent før nålen kommer?",
      "Huden.",
      "Huden bliver renset før stikket."
    ],
    [
      "Hvem står klar, hvis du får det dårligt?",
      "Personalet.",
      "Sig til personalet, hvis du får det dårligt."
    ]
  ],
  [
    [
      "Hvad øver immunforsvaret med?",
      "En vaccine.",
      "Vaccinen giver immunforsvaret noget at øve sig på."
    ],
    [
      "Hvad har en tid, men ingen kalender?",
      "Din vaccination.",
      "Din vaccination har en aftalt tid."
    ],
    [
      "Hvad kan være rødt efter besøget?",
      "Indstiksstedet.",
      "Rødme ved indstiksstedet kan forekomme."
    ],
    [
      "Hvor er det bedst at blive efter stikket?",
      "Venteområdet.",
      "Bliv i venteområdet, indtil observationstiden er gået."
    ]
  ],
  [
    [
      "Hvad kan give kroppen en huskeseddel?",
      "En vaccine.",
      "Vaccinen hjælper immunforsvaret med at huske et signal."
    ],
    [
      "Hvad er kort, skarpt og hurtigt overstået?",
      "Stikket.",
      "Selve stikket varer kun kort tid."
    ],
    [
      "Hvad lukker et lille mærke på armen?",
      "Plasteret.",
      "Plasteret dækker mærket efter stikket."
    ],
    [
      "Hvad tæller minutterne baglæns?",
      "Observationstiden.",
      "Observationstiden tæller ned, mens du venter."
    ]
  ],
  [
    [
      "Hvad hedder kroppens vagt?",
      "Immunforsvaret.",
      "Immunforsvaret hjælper kroppen med at reagere."
    ],
    [
      "Hvad kan bestilles før du møder op?",
      "En vaccinationstid.",
      "Vaccinationstiden er aftalen, du kommer til."
    ],
    [
      "Hvad spritter man uden at rengøre gulv?",
      "Huden.",
      "Huden sprittes før vaccinationen."
    ],
    [
      "Hvad viser, at ventetiden er gået?",
      "Uret.",
      "Når tiden passer, er observationstiden gået."
    ]
  ],
  [
    [
      "Hvad kan være influenza, covid eller pneumokok?",
      "Vaccinationen.",
      "Forskellige vaccinationer kan være relevante for forskellige målgrupper."
    ],
    [
      "Hvad tager kun et øjeblik i armen?",
      "Stikket.",
      "Stikket er den korte del af besøget."
    ],
    [
      "Hvem holder styr på, hvem der er næste?",
      "Personalet.",
      "Personalet hjælper med forløbet i klinikken."
    ],
    [
      "Hvad er stille tid efter vaccination?",
      "Observation.",
      "Observationen er den rolige tid efter stikket."
    ]
  ],
  [
    [
      "Hvad hjælper kroppen med at øve sig?",
      "Vaccinen.",
      "Vaccinen hjælper immunforsvaret med at øve genkendelse."
    ],
    [
      "Hvad sidder ikke fast længe, men dækker godt?",
      "Plasteret.",
      "Plasteret sidder kun midlertidigt på armen."
    ],
    [
      "Hvad kan du mærke i armen bagefter?",
      "Ømhed.",
      "Ømhed i armen kan forekomme efter vaccination."
    ],
    [
      "Hvad er et trygt sted at vente?",
      "Venteområdet.",
      "Venteområdet er tæt på personalet."
    ]
  ],
  [
    [
      "Hvad er ikke en alarm, men fortæller hvornår du må gå?",
      "Uret.",
      "Uret hjælper dig med at se, hvornår observationstiden er gået."
    ],
    [
      "Hvad har en nål, men laver ikke tøj?",
      "Sprøjten.",
      "Sprøjten bruges til vaccination."
    ],
    [
      "Hvad kan bookes på vacciner.dk?",
      "Vaccination.",
      "Vacciner.dk kan bruges til booking, når tilbuddet gælder dig."
    ],
    [
      "Hvem skal kende signalet, hvis sygdommen kommer?",
      "Immunforsvaret.",
      "Immunforsvaret er kroppens egen reaktion."
    ]
  ],
  [
    [
      "Hvad begynder med et prik og handler om forebyggelse?",
      "Vaccination.",
      "Vaccination er en del af forebyggelse."
    ],
    [
      "Hvad gør huden klar til stikket?",
      "Sprit.",
      "Sprit bruges til at rense huden før stikket."
    ],
    [
      "Hvad er en lille pause efter en stor opgave?",
      "Observation.",
      "Observationen giver tid til at holde øje med, hvordan du har det."
    ],
    [
      "Hvem hjælper med spørgsmål i venteområdet?",
      "Personalet.",
      "Personalet kan svare, hvis du er i tvivl."
    ]
  ],
  [
    [
      "Hvad hjælper kroppen med at huske en modstander?",
      "En vaccine.",
      "Vaccinen kan hjælpe immunforsvaret med at genkende noget senere."
    ],
    [
      "Hvad er lille, klæbende og ofte hudfarvet?",
      "Plasteret.",
      "Plasteret sidder på huden efter stikket."
    ],
    [
      "Hvad kalder man stedet, hvor nålen var?",
      "Indstiksstedet.",
      "Indstiksstedet er området, hvor du blev stukket."
    ],
    [
      "Hvad viser dagens vaccinationstid?",
      "Aftalen.",
      "Aftalen fortæller, hvornår du skal vaccineres."
    ]
  ],
  [
    [
      "Hvad kommer i armen, men arbejder i kroppen?",
      "Vaccinen.",
      "Vaccinen gives i armen og møder kroppens immunforsvar."
    ],
    [
      "Hvad skal du gøre ved åndenød eller udslæt?",
      "Sige til personalet.",
      "Kontakt personalet med det samme ved åndenød, udslæt eller utilpashed."
    ],
    [
      "Hvad kan findes og bookes online?",
      "Vaccination.",
      "Vaccination kan findes og bookes via vacciner.dk."
    ],
    [
      "Hvad varer kortere end en sang på radioen?",
      "Stikket.",
      "Stikket er hurtigt overstået."
    ]
  ],
  [
    [
      "Hvad gør kroppen mere forberedt?",
      "Vaccination.",
      "Vaccination hjælper kroppen med at være bedre forberedt."
    ],
    [
      "Hvad følger med 'vent 15 minutter'?",
      "Observation.",
      "Observationen er grunden til, at du bliver lidt efter stikket."
    ],
    [
      "Hvad bliver tørret rent før stikket?",
      "Armen.",
      "Armen bliver gjort klar før vaccination."
    ],
    [
      "Hvad kan du spørge om, hvis tilbuddet er uklart?",
      "Vaccinationen.",
      "Spørg personalet, hvis du er usikker på tilbuddet."
    ]
  ],
  [
    [
      "Hvad er ikke en nøgle, men kan åbne for beredskab?",
      "En vaccine.",
      "En vaccine kan hjælpe immunforsvaret med at være klar."
    ],
    [
      "Hvad er en lille prik på en stor dag?",
      "Stikket.",
      "Stikket er en lille del af vaccinationsbesøget."
    ],
    [
      "Hvad sidder på armen som en lille lap?",
      "Plasteret.",
      "Plasteret dækker området efter stikket."
    ],
    [
      "Hvad hjælper med at holde øje efter stikket?",
      "Observationstiden.",
      "Observationstiden giver personalet mulighed for at hjælpe hurtigt."
    ]
  ],
  [
    [
      "Hvad lærer uden tavle og blyant?",
      "Immunforsvaret.",
      "Immunforsvaret lærer at genkende bestemte signaler."
    ],
    [
      "Hvad kan være tilbudt efter alder eller risiko?",
      "Vaccination.",
      "Nogle vaccinationstilbud afhænger af alder, helbred eller risiko."
    ],
    [
      "Hvem hjælper, hvis du bliver utilpas?",
      "Personalet.",
      "Sig til personalet, hvis du bliver utilpas."
    ],
    [
      "Hvad viser, hvornår de 15 minutter er gået?",
      "Uret.",
      "Uret hjælper dig med at følge observationstiden."
    ]
  ],
  [
    [
      "Hvad er ikke et skjold, men kan beskytte?",
      "En vaccine.",
      "En vaccine kan hjælpe kroppen med at være bedre beskyttet."
    ],
    [
      "Hvad kommer før du går tilbage til hverdagen?",
      "Observation.",
      "Observationen er ventetiden, før du går videre."
    ],
    [
      "Hvad kan være ømt, rødt eller hævet?",
      "Indstiksstedet.",
      "Det kan ske ved området, hvor stikket blev givet."
    ],
    [
      "Hvad er din digitale indgang til booking?",
      "Vacciner.dk.",
      "Vacciner.dk bruges til at finde og booke vaccination."
    ]
  ],
  [
    [
      "Hvad er lille i mængde, men stor i betydning?",
      "Vaccinen.",
      "Vaccinen fylder lidt, men har en vigtig opgave."
    ],
    [
      "Hvad laver et prik, men ikke en tegning?",
      "Nålen.",
      "Nålen bruges kortvarigt ved stikket."
    ],
    [
      "Hvad er personalets bedste besked ved tvivl?",
      "Spørg os.",
      "Personalet vil gerne hjælpe, hvis du er i tvivl."
    ],
    [
      "Hvad er 15 rolige minutter?",
      "Observationstiden.",
      "Observationstiden foregår efter vaccinationen."
    ]
  ],
  [
    [
      "Hvad giver immunforsvaret et forhåndskig?",
      "En vaccine.",
      "Vaccinen kan give immunforsvaret et signal at genkende."
    ],
    [
      "Hvad bliver renset før en vaccination?",
      "Huden.",
      "Huden renses før stikket."
    ],
    [
      "Hvad er stedet efter stikket og før hjemturen?",
      "Venteområdet.",
      "Venteområdet bruges i observationstiden."
    ],
    [
      "Hvad er ikke en gave, men et tilbud?",
      "Vaccination.",
      "Vaccination kan være et offentligt tilbud til bestemte målgrupper."
    ]
  ],
  [
    [
      "Hvad kan hjælpe kroppen før sæsonen rammer?",
      "Vaccination.",
      "Vaccination kan hjælpe kroppen med at være bedre forberedt."
    ],
    [
      "Hvad er færdigt, før du næsten når at tælle til tre?",
      "Stikket.",
      "Stikket er hurtigt overstået."
    ],
    [
      "Hvad holder et lille prik rent bagefter?",
      "Plasteret.",
      "Plasteret dækker stedet efter stikket."
    ],
    [
      "Hvad kan du fortælle personalet med det samme?",
      "At du bliver utilpas.",
      "Sig straks til, hvis du føler dig dårlig."
    ]
  ],
  [
    [
      "Hvad er kroppens træningsmakker?",
      "Vaccinen.",
      "Vaccinen hjælper immunforsvaret med at øve sig."
    ],
    [
      "Hvad er et lille punkt på armen?",
      "Indstiksstedet.",
      "Indstiksstedet er området efter stikket."
    ],
    [
      "Hvad tæller ikke penge, men minutter?",
      "Uret.",
      "Uret hjælper med at tælle observationstiden."
    ],
    [
      "Hvad kan handle om influenza, covid og pneumokok?",
      "Vacciner.",
      "Forskellige vacciner kan være relevante for forskellige målgrupper."
    ]
  ],
  [
    [
      "Hvad kan du få i armen for at være bedre forberedt?",
      "En vaccine.",
      "Vaccinen gives typisk i armen."
    ],
    [
      "Hvem siger du til, hvis kroppen reagerer?",
      "Personalet.",
      "Kontakt personalet, hvis du får det dårligt."
    ],
    [
      "Hvad er stedet mellem stik og hjemtur?",
      "Venteområdet.",
      "Venteområdet er stedet, hvor du observeres efter vaccination."
    ],
    [
      "Hvad hjælper dig med at booke uden at ringe?",
      "Vacciner.dk.",
      "Vacciner.dk kan bruges til online booking."
    ]
  ],
  [
    [
      "Hvad er ikke lektier, men giver kroppen læring?",
      "En vaccine.",
      "Vaccinen kan hjælpe immunforsvaret med at lære genkendelse."
    ],
    [
      "Hvad tager personalet frem, når armen er klar?",
      "Sprøjten.",
      "Sprøjten bruges til at give vaccinen."
    ],
    [
      "Hvad er en lille hilsen fra stikket?",
      "Ømhed.",
      "Ømhed i armen kan være en almindelig reaktion."
    ],
    [
      "Hvad viser klokken for 15 minutter siden?",
      "Observationstiden.",
      "Hvis du blev vaccineret på det tidspunkt eller før, er ventetiden gået."
    ]
  ],
  [
    [
      "Hvad kan være en del af efterårets plan?",
      "Vaccination.",
      "Nogle vaccinationstilbud er sæsonbestemte."
    ],
    [
      "Hvad beskytter uden lynlås?",
      "En vaccine.",
      "Vaccinen er ikke tøj, men kan hjælpe kroppen med beskyttelse."
    ],
    [
      "Hvad dækker et prik, men ikke en bog?",
      "Plasteret.",
      "Plasteret dækker det lille mærke efter stikket."
    ],
    [
      "Hvad er bedst at gøre, hvis du er i tvivl?",
      "Spørge personalet.",
      "Personalet kan hjælpe dig videre."
    ]
  ],
  [
    [
      "Hvad er en aftale med både tid og sted?",
      "Vaccinationstiden.",
      "Vaccinationstiden fortæller, hvornår og hvor du skal møde op."
    ],
    [
      "Hvad får immunforsvaret til at øve sig?",
      "Vaccinen.",
      "Vaccinen giver immunforsvaret noget at genkende."
    ],
    [
      "Hvad bliver holdt øje med efter stikket?",
      "Hvordan du har det.",
      "Observationen handler om, hvordan du har det efter vaccinationen."
    ],
    [
      "Hvad går hurtigt, men huskes af armen?",
      "Stikket.",
      "Stikket er hurtigt, men armen kan godt mærke det lidt bagefter."
    ]
  ],
  [
    [
      "Hvad kan kroppen bruge som forberedelse?",
      "Vaccination.",
      "Vaccination kan hjælpe kroppen med at være forberedt."
    ],
    [
      "Hvad er ikke et mærkat, men sidder på armen?",
      "Plasteret.",
      "Plasteret sidder på armen efter stikket."
    ],
    [
      "Hvad kalder man tiden lige efter stikket?",
      "Observation.",
      "Observation er tiden, hvor du bliver i området efter vaccination."
    ],
    [
      "Hvad er sidste stop før du går hjem?",
      "Venteområdet.",
      "Venteområdet er stedet, hvor du afslutter observationstiden."
    ]
  ]
];

function getCopenhagenDateParts(date = new Date()) {
  const values = {};
  const parts = new Intl.DateTimeFormat("da-DK", {
    timeZone: DENMARK_TIME_ZONE,
    day: "numeric",
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
    month: values.month,
    year: values.year
  };
}

function getCopenhagenDateKey(date = new Date()) {
  const { day, month, year } = getCopenhagenDateParts(date);
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function getRiddleAnswersForDate(date = new Date()) {
  const { day } = getCopenhagenDateParts(date);
  const daySet = DAILY_RIDDLE_SETS[(day - 1) % DAILY_RIDDLE_SETS.length];

  return daySet.map(([question, answer, answerText], index) => ({
    id: `day-${String(day).padStart(2, "0")}-riddle-${index + 1}`,
    label: `Gåde ${index + 1}`,
    question,
    answer,
    answerText
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
let activeRiddleDateKey = getCopenhagenDateKey(initialRiddleDate);
let riddleAnswers = getRiddleAnswersForDate(initialRiddleDate);
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

function refreshDailyRiddles(now = new Date()) {
  const nextDateKey = getCopenhagenDateKey(now);

  if (nextDateKey === activeRiddleDateKey) {
    return false;
  }

  activeRiddleDateKey = nextDateKey;
  riddleAnswers = getRiddleAnswersForDate(now);
  carouselSlides = createCarouselSlides(riddleAnswers);
  carouselIndex = 0;
  nextRiddleAnswerIndex = 0;
  createCarouselDots();
  renderCarouselSlide();
  return true;
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
  const now = new Date();
  updateClock(now);
  if (refreshDailyRiddles(now)) {
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
    refreshDailyRiddles(now);
    scheduleCampaign();
    showCursorTemporarily();
  }
});

showCursorTemporarily();
