/* ============================================================
   TERRAPULSE STS — Content data
   Single source of truth for articles, case studies, climate
   data, the preparedness quiz, references and the team.

   Editorial rule: every claim below is drawn from the source
   website / research summary (Chapters I–III) and the listed
   references. No invented statistics, dates or quotations.
   Where a claim cannot be verified from the source material,
   it is flagged inline with "[Flag for review]".
   ============================================================ */

/* ------------------------------------------------------------
   References (APA 7th)
   ------------------------------------------------------------ */
const referencesData = [
  { id: "biermann2024", text: "Biermann, F., & Möller, I. (2024). Rich man's solution? The governance and justice dilemmas of solar geoengineering. <i>Global Environmental Politics</i>, 24(1), 1–19." },
  { id: "bundnis2024", text: "Bündnis Entwicklung Hilft. (2024). <i>WorldRiskReport 2024: Focus on multiple crises</i>. Ruhr University Bochum – IFHV." },
  { id: "eriksen2021", text: "Eriksen, S., et al. (2021). Adaptation interventions and their effect on vulnerability in developing countries: Help, hindrance or irrelevance? <i>World Development</i>, 141, 105383." },
  { id: "holden2023", text: "Holden, W. N., Nadeau, K. M., & Porio, E. (2023). Climate change, disaster risk, and local governance in the Philippines. <i>Asian Journal of Social Science</i>, 51(3), 162–174." },
  { id: "idmc2024", text: "Internal Displacement Monitoring Centre. (2024). <i>Global report on internal displacement 2024</i>. Geneva, Switzerland." },
  { id: "ipcc2021", text: "IPCC. (2021). <i>Climate change 2021: The physical science basis</i>. Working Group I contribution to AR6. Cambridge University Press." },
  { id: "ipcc2023", text: "IPCC. (2023). <i>Climate change 2023: Synthesis report</i>. Contribution of Working Groups I, II and III to AR6. Geneva." },
  { id: "klinsky2023", text: "Klinsky, S., & Mavrogianni, A. (2023). Climate justice, debt distress, and the financial architecture of adaptation. <i>Climate Policy</i>, 23(7), 841–855." },
  { id: "lavina2024", text: "La Viña, T., Mesina, G., & Gamboa, J. R. (2024). <i>The Philippines' burden of hosting the board of the Fund for Responding to Loss and Damage</i>. Manila Observatory Policy Brief." },
  { id: "romanello2023", text: "Romanello, M., et al. (2023). The 2023 report of the Lancet Countdown on health and climate change. <i>The Lancet</i>, 402(10419), 2346–2394." },
  { id: "sultana2022", text: "Sultana, F. (2022). Critical climate justice. <i>The Geographical Journal</i>, 188(1), 118–124." },
  { id: "thomas2021", text: "Thomas, K., et al. (2021). Explaining differential vulnerability to climate change: A social science review. <i>Climate and Development</i>, 13(2), 85–94." }
];

/* ------------------------------------------------------------
   Articles
   ------------------------------------------------------------ */
const articlesData = [
  {
    id: "beyond-rising-temperatures",
    title: "Beyond Rising Temperatures: Why Climate Change Is a Human Crisis",
    subtitle: "Melting ice and carbon graphs are accurate — but they are not the emergency already unfolding in homes, wages and food supply.",
    category: "Human crisis",
    topics: ["human", "justice"],
    featured: true,
    order: 1,
    readingTime: 8,
    cover: "https://images.unsplash.com/photo-1704865417501-8706260f9365?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Outrigger bangka boats resting on a shoreline at dusk.",
    coverCaption: "Outrigger <em>bangka</em> boats at dusk. Small-craft fishing is among the Philippine livelihoods most exposed to the typhoon season. Illustrative stock photograph via Unsplash.",
    excerpt: "How a physical process becomes a social crisis — traced through poverty, employment, food security, housing and human rights.",
    sections: [
      { id: "number-not-story", title: "The number is not the whole story", html: "<p>Enter almost any science classroom and a lecture on climate change begins with melting ice and carbon-concentration graphs. Those figures are accurate. The IPCC (2023) places global warming at roughly 1.1°C above pre-industrial levels. But a temperature is not an emergency by itself, and in Science, Technology &amp; Society the real question is what that number does to people.</p><p>This report treats climate change as both an environmental and a social crisis. The physical process is the starting point; the subject is what happens afterwards — to households, to livelihoods, and to the ability of a community to recover.</p>" },
      { id: "warmer-to-poverty", title: "How a warmer climate becomes poverty", html: "<p>Extreme weather does not stay in the atmosphere. It arrives as hunger, lost income, damaged housing and preventable illness. A flooded road is a missed market day for a farmer. A destroyed boat is a lost season for a fisher. A collapsed wall is a family moving in with relatives.</p><p>In the Philippine context, these pressures stack on top of one another. Farming and fishing — sectors that together employ a large share of the workforce — depend directly on weather that is becoming less predictable. When one season fails, the losses ripple through food prices, household debt and local employment.</p>" },
      { id: "risk-not-shared", title: "The risk is not shared equally", html: "<p>A storm is a shared event, but its consequences are sorted by wealth, infrastructure and debt. Thomas et al. (2021) show that vulnerability to climate change is produced by social conditions — income, housing quality, access to services — as much as by exposure to the hazard itself.</p><p>That is why this investigation compares not only weather but the capacity of nations to absorb it. Two communities can face the same storm and emerge with very different futures.</p>" },
      { id: "question-of-rights", title: "A question of rights", html: "<p>Framing climate change as a human crisis also reframes it as a question of justice. Sultana (2022) argues that climate justice is inseparable from existing inequalities of class, gender and geography, and that adaptation cannot be separated from the politics of who decides.</p><p>Health data point the same way. Romanello et al. (2023) document how heat, disease patterns and disrupted food systems press hardest on the people with the fewest resources to adapt — turning a global physical trend into a deeply unequal human one.</p><p class=\"cite\">(IPCC, 2023; Romanello et al., 2023; Sultana, 2022; Thomas et al., 2021)</p>" }
    ],
    keyFindings: [
      "The IPCC (2023) places warming at roughly 1.1°C above pre-industrial levels — the baseline this report works from.",
      "Vulnerability is produced socially: income, housing and access to services shape who recovers (Thomas et al., 2021).",
      "Health and food pressures from climate change fall hardest on low-income households (Romanello et al., 2023).",
      "The STS frame turns climate from a physical-science topic into a question about who carries risk and who pays for it."
    ],
    references: ["ipcc2023", "romanello2023", "sultana2022", "thomas2021"]
  },
  {
    id: "capacity-gap",
    title: "The Capacity Gap: Why Some Countries Recover Faster",
    subtitle: "Two nations can be hit by the same storm and recover at wildly different speeds. The difference is rarely the weather.",
    category: "Capacity & finance",
    topics: ["capacity"],
    featured: false,
    order: 2,
    readingTime: 7,
    cover: "https://images.unsplash.com/photo-1558206648-2af255207f73?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Terraced rice fields cut into a green mountainside.",
    coverCaption: "Terraced hillside agriculture. Farming remains a major employer in developing economies, where recovery after a disaster is often financed from household savings. Illustrative stock photograph via Unsplash.",
    excerpt: "Financial reserves, debt distress and private insurance create very different recovery speeds between the Global North and the Global South.",
    sections: [
      { id: "one-storm-two-recoveries", title: "One storm, two recoveries", html: "<p>Weather does not check a nation's balance sheet before it makes landfall. Yet the aftermath of a disaster follows the fault lines of wealth. Industrialised nations have grown wealthy over more than a century of fossil-fuel use; today those reserves help them rebuild quickly, while developing states carry the same hazard on thinner margins.</p><p>The gap is not about the severity of the storm. It is about the resources available on the morning after.</p>" },
      { id: "fiscal-space-debt", title: "Fiscal space and debt", html: "<p>Klinsky &amp; Mavrogianni (2023) describe how debt distress constrains adaptation. A government servicing heavy foreign debt has little fiscal room left for the large, slow investments that reduce risk — sea walls, drainage, reinforced evacuation centres — and less cash on hand when an emergency arrives.</p><p>The result is a cycle: borrowing to recover from one disaster reduces the capacity to prepare for the next.</p>" },
      { id: "infrastructure-warning", title: "Infrastructure and early warning", html: "<p>Recovery speed also depends on how much damage is prevented in the first place. Automated radar, reinforced sea walls and deep stormwater systems reduce losses before they occur. Holden et al. (2023) contrast these with the makeshift evacuation centres, unpaved riverbanks and fragile power grids found in many Philippine municipalities.</p><p>Early-warning systems matter for the same reason. The earlier a community can move, the less it has to rebuild.</p>" },
      { id: "insurance-aid-market", title: "Insurance, aid and the private market", html: "<p>Private insurance is one of the quietest parts of the capacity gap. Where insurance markets are deep, households and businesses can transfer risk; where they are thin or absent, losses fall directly on families.</p><p>Foreign aid can narrow the gap, but not reliably. Eriksen et al. (2021) caution that adaptation interventions can help, hinder, or even be irrelevant to vulnerability depending on how they are designed — a warning that money alone is not the answer.</p><p class=\"cite\">(Eriksen et al., 2021; Holden et al., 2023; Klinsky &amp; Mavrogianni, 2023)</p>" }
    ],
    keyFindings: [
      "Recovery speed is set by fiscal reserves, debt and insurance — not by the severity of the storm alone.",
      "Debt distress reduces the fiscal space available for long-term adaptation (Klinsky & Mavrogianni, 2023).",
      "Prevented damage is cheaper than rebuilt damage: defences and early warning lower the bill (Holden et al., 2023).",
      "Adaptation finance is not automatically effective — design determines whether it helps or hinders (Eriksen et al., 2021)."
    ],
    references: ["eriksen2021", "holden2023", "klinsky2023"]
  },
  {
    id: "ground-zero",
    title: "Ground Zero: Understanding the Philippines' Climate Risks",
    subtitle: "Inside the Pacific typhoon belt, geography and inequality compound the danger.",
    category: "Philippines risk",
    topics: ["risk"],
    featured: false,
    order: 3,
    readingTime: 8,
    cover: "https://images.unsplash.com/photo-1698099843370-990862ece606?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Small boats anchored in shallow water near an island shore.",
    coverCaption: "Small craft at anchor near an island shore. Exposed coastlines are a defining feature of the Philippine risk profile. Illustrative stock photograph via Unsplash.",
    excerpt: "Why the Philippines ranked first on the WorldRiskIndex for three consecutive years, with an index score of 46.91.",
    sections: [
      { id: "typhoon-belt", title: "Inside the typhoon belt", html: "<p>The Philippines sits directly inside the Pacific typhoon belt. On average, roughly twenty tropical cyclones enter the Philippine Area of Responsibility each year (PAGASA). No other factor explains the country's risk profile as clearly as this: a high frequency of intense storms crossing a densely settled archipelago.</p><p>Frequency matters as much as severity. When storms arrive one after another, communities have less time to recover between them — and recovery time is itself a form of protection.</p>" },
      { id: "coastal-hazards", title: "Coastal hazards and the rising sea", html: "<p>Much of the population lives near the coast, where storm surge, flooding and erosion do their damage. The IPCC (2021) documents rising sea levels and increasingly intense precipitation as effects that intensify coastal hazards.</p><p>Low-lying coastlines and island communities face these risks first, and with the least room to retreat inland.</p>" },
      { id: "infrastructure-limits", title: "Infrastructure limits", html: "<p>Holden et al. (2023) point to infrastructure as a decisive variable. Where drainage is limited, evacuation centres are makeshift, and power grids are fragile, a storm's consequences are magnified. Damage compounds: a failed power supply disrupts water, communications and health services at the moment they are needed most.</p>" },
      { id: "community-vulnerability", title: "Community vulnerability", html: "<p>Risk is not evenly distributed within the country either. Thomas et al. (2021) show that the same hazard produces different outcomes depending on income, housing and access to services. Coastal and island communities, outdoor workers, and households without savings carry the heaviest burden.</p>" },
      { id: "ranked-first", title: "Ranked first in the world", html: "<p>The combined picture places the Philippines at the top of the WorldRiskIndex, with an index score of 46.91 for three consecutive years (2022–2024) according to Bündnis Entwicklung Hilft (2024). That ranking reflects both exposure to hazards and the vulnerability of the systems that must absorb them.</p><p class=\"cite\">(Bündnis Entwicklung Hilft, 2024; Holden et al., 2023; IPCC, 2021; Thomas et al., 2021)</p>" }
    ],
    keyFindings: [
      "Roughly twenty tropical cyclones enter the Philippine Area of Responsibility each year (PAGASA).",
      "The Philippines ranked #1 on the WorldRiskIndex with a score of 46.91 for three consecutive years, 2022–2024 (Bündnis Entwicklung Hilft, 2024).",
      "Coastal location and rising seas intensify storm surge, flooding and erosion (IPCC, 2021).",
      "Fragile infrastructure turns a hazard into a longer emergency (Holden et al., 2023)."
    ],
    references: ["bundnis2024", "holden2023", "ipcc2021", "thomas2021"]
  },
  {
    id: "paying-the-bill",
    title: "Paying the Bill: Who Should Pay for Climate Damage?",
    subtitle: "The Philippines emits under 0.4% of global CO₂ yet absorbs outsized damage — the case for climate finance.",
    category: "Climate justice",
    topics: ["justice", "capacity"],
    featured: true,
    order: 4,
    readingTime: 9,
    cover: "https://images.unsplash.com/photo-1758021893193-c8c738b82be6?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "A small building fitted with solar panels on a green hillside.",
    coverCaption: "Small-scale rooftop solar. Climate finance is intended to fund adaptation and recovery in the countries least responsible for emissions. Illustrative stock photograph via Unsplash.",
    excerpt: "Climate justice, historical emissions, international climate finance, and the Loss and Damage Fund the Philippines now hosts.",
    sections: [
      { id: "justice-case", title: "The justice case", html: "<p>Climate justice begins with a simple asymmetry: the countries that contributed least to greenhouse-gas emissions often suffer the most from the consequences. The Philippines produces less than 0.4% of global emissions, set against the damage it absorbs (IPCC, 2023; La Viña et al., 2024).</p><p>Historical responsibility sharpens the point. The majority of cumulative emissions since the industrial era originated in today's wealthy nations. If damage and responsibility are both unequal, the question of who pays becomes a question of fairness.</p>" },
      { id: "cop-to-fund", title: "From COP27 to the Loss and Damage Fund", html: "<p>That argument reached the negotiating table. At COP27 and COP28, parties agreed that wealthy polluters must help fund rebuilding in vulnerable nations, establishing and starting to operationalise the Loss and Damage Fund.</p><p>The fund is significant because it addresses something adaptation finance historically did not: irreversible loss that cannot be adapted away. Rebuilding after a storm is not the same as building a wall before one.</p>" },
      { id: "philippines-hosts", title: "The Philippines hosts the board", html: "<p>In July 2024, the Philippines was selected to host the board of the Loss and Damage Fund — a decision reinforced by Republic Act No. 12019 (La Viña et al., 2024). Hosting the board places the country at the centre of the mechanism designed to compensate nations like it.</p><p class=\"cite\">(La Viña et al., 2024)</p>" },
      { id: "what-finance-can-fix", title: "What finance can and cannot fix", html: "<p>Money is necessary but not sufficient. Eriksen et al. (2021) show that adaptation interventions can help, hinder or be irrelevant to vulnerability depending on their design and governance. Finance that ignores local context can reproduce the very inequality it claims to address.</p><p>The harder question is not only how much is owed, but how it is delivered — and who decides.</p><p class=\"cite\">(Eriksen et al., 2021; IPCC, 2023; La Viña et al., 2024)</p>" }
    ],
    keyFindings: [
      "The Philippines produces under 0.4% of global emissions while absorbing disproportionate damage (IPCC, 2023; La Viña et al., 2024).",
      "Cumulative historical emissions are concentrated in today's wealthy nations, shaping responsibility.",
      "In July 2024 the Philippines was selected to host the board of the Loss and Damage Fund (La Viña et al., 2024).",
      "Finance alone does not reduce vulnerability — design and governance determine whether it helps (Eriksen et al., 2021)."
    ],
    references: ["eriksen2021", "ipcc2023", "lavina2024"]
  },
  {
    id: "nowhere-to-go",
    title: "Nowhere to Go: Communities Displaced by Climate Disasters",
    subtitle: "More than 20 million people are displaced by weather disasters each year — and no treaty recognises 'climate refugees'.",
    category: "Displacement",
    topics: ["displacement", "justice"],
    featured: false,
    order: 5,
    readingTime: 7,
    cover: "https://images.unsplash.com/photo-1650509010045-70888b02ffa8?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Aerial view of a thin strip of land surrounded by ocean.",
    coverCaption: "A low-lying atoll seen from the air. Island nations of this kind have a mean elevation of only a few metres. Illustrative stock photograph via Unsplash.",
    excerpt: "Weather-related displacement, its social consequences, and the international protection gap that leaves people without legal status.",
    sections: [
      { id: "displacement-numbers", title: "Displacement by the numbers", html: "<p>Displacement is one of the clearest ways climate change becomes a human crisis. In 2023, weather disasters displaced more than 20 million people worldwide (IDMC, 2024). The figure represents people who left home — often suddenly, often temporarily, and sometimes permanently.</p><p>Unlike conflict displacement, weather displacement is driven by hazards that are becoming both more frequent and more intense.</p>" },
      { id: "what-displacement-does", title: "What displacement does to a community", html: "<p>Displacement is not only a loss of shelter. Livelihoods break when a boat or a field is destroyed; schooling stops; health care is interrupted; and social networks that provide informal support are scattered. Recovery becomes harder the longer displacement lasts.</p><p>For communities that return, the risk is often unchanged — the same coastline, the same exposure — so displacement can repeat.</p>" },
      { id: "protection-gap", title: "The protection gap", html: "<p>Here the law lags behind the reality. People displaced across borders by climate impacts have no international status. The 1951 refugee definition was built for persecution, not sea-level rise, so there is no binding protection for someone whose island becomes uninhabitable.</p><p>The IPCC (2021) and Sultana (2022) both describe the resulting gap: populations exposed to loss of territory with no clear legal pathway, and governments experimenting with measures such as preserving records and culture in anticipation of a future without land.</p><p class=\"cite\">(IPCC, 2021; Sultana, 2022)</p>" },
      { id: "keeping-people-home", title: "Adaptation that keeps people in place", html: "<p>Where possible, the priority is to make staying safe. The STS literature favours accessible, low-maintenance technology — SMS early warnings, solar-powered emergency radios, salt-tolerant crop varieties — that helps communities endure rather than flee.</p><p>Displacement is sometimes unavoidable. Reducing it, however, is a choice that depends on investment made long before the storm.</p><p class=\"cite\">(IDMC, 2024)</p>" }
    ],
    keyFindings: [
      "Weather disasters displaced more than 20 million people worldwide in 2023 (IDMC, 2024).",
      "Displacement damages livelihoods, schooling and health, not only shelter.",
      "No binding international status exists for people displaced across borders by climate impacts.",
      "Low-cost, locally maintainable technology can reduce the need to leave (IPCC, 2021; Sultana, 2022)."
    ],
    references: ["idmc2024", "ipcc2021", "sultana2022"]
  },
  {
    id: "green-technology",
    title: "The Hidden Price of Green Technology",
    subtitle: "The clean-energy transition runs on minerals — and the cost of extracting them is not shared fairly.",
    category: "Technology",
    topics: ["technology", "justice"],
    featured: false,
    order: 6,
    readingTime: 7,
    cover: "https://images.unsplash.com/photo-1758021893193-c8c738b82be6?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Rooftop solar panels on a building under a clear sky.",
    coverCaption: "Rooftop solar. Clean-energy technologies require minerals such as nickel, cobalt and lithium, largely extracted in the Global South. Illustrative stock photograph via Unsplash.",
    excerpt: "The environmental and social impacts of extracting the minerals behind electric vehicles, batteries and power grids.",
    sections: [
      { id: "minerals-transition", title: "The minerals behind the transition", html: "<p>Clean-transition technologies — electric vehicles, battery storage and modern power grids — depend on large quantities of minerals: nickel, cobalt and lithium among them. Demand for these materials rises with every commitment to decarbonise.</p><p>That demand is not itself a problem. The problem is where and how the minerals are obtained, and who absorbs the cost.</p>" },
      { id: "extraction-watershed", title: "Extraction at the watershed", html: "<p>Extraction often takes place in the Global South, where mining can degrade watersheds, displace communities and damage the lands of indigenous peoples. The ecological and social costs of extraction frequently fall on populations that benefit least from the technology being built.</p><p>The result is an ethical conflict at the heart of the green transition: a solution to one environmental problem that creates another.</p>" },
      { id: "conflict-inside-transition", title: "A conflict inside the transition", html: "<p>Sultana (2022) frames this as a justice problem, not a technical one. A transition that reproduces existing patterns of extraction and inequality is not fully just, however low its emissions may be. The question of who benefits and who bears the cost applies to clean technology as much as to fossil fuels.</p>" },
      { id: "two-answers", title: "Two answers to the same problem", html: "<p>Technology can be pursued in very different ways. At one extreme, Biermann &amp; Möller (2024) warn that solar geoengineering — spraying aerosols into the stratosphere to reflect sunlight — could disrupt South Asian monsoons and threaten crop yields for hundreds of millions of farmers, who would have had no say in the decision.</p><p>At the other, STS frameworks favour appropriate technology that communities can build and maintain themselves. The test is not novelty but whether people can keep it running.</p><p class=\"cite\">(Biermann &amp; Möller, 2024; Sultana, 2022)</p>" }
    ],
    keyFindings: [
      "Electric vehicles, batteries and grids depend on nickel, cobalt and lithium — largely extracted in the Global South.",
      "Extraction can degrade watersheds and the lands of indigenous communities.",
      "A transition that reproduces extractive inequality is not fully just (Sultana, 2022).",
      "High-risk interventions such as solar geoengineering raise governance and justice dilemmas (Biermann & Möller, 2024)."
    ],
    references: ["biermann2024", "sultana2022"]
  }
];

/* ------------------------------------------------------------
   Case studies
   ------------------------------------------------------------ */
const caseStudiesData = [
  {
    id: "odette",
    title: "Farmers and fisherfolk after Super Typhoon Odette",
    place: "Local focus · Visayas & Mindanao",
    source: "Holden et al. (2023)",
    lede: "When Super Typhoon Odette struck in December 2021, coastal and agricultural communities across the Visayas and Mindanao lost both homes and income. Recovery was slow — and the reason was not the storm alone.",
    image: "https://images.unsplash.com/photo-1698099843370-990862ece606?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Small boats anchored in shallow water near an island shore.",
    imageCaption: "Small craft at anchor near an island shore. Fishers in many coastal towns rebuild their own boats after a storm. Illustrative stock photograph via Unsplash.",
    findings: [
      "Smallholder coconut and rice farmers took more than 24 months to return to baseline yields.",
      "Fisherfolk rebuilt wooden <em>bangkas</em> using high-interest informal loans.",
      "Municipal aid stopped at immediate food relief, without long-term capital replacement."
    ],
    reading: "Recovery was shaped by the capacity gap from Chapter II: limited fiscal space, thin insurance, and aid that addressed immediate needs but not the capital required to rebuild a livelihood. The lesson is that disaster response and long-term recovery are different problems needing different funding."
  },
  {
    id: "atolls",
    title: "Displacement and sovereignty in low-lying atolls",
    place: "Global focus · Pacific",
    source: "IPCC (2021); Sultana (2022)",
    lede: "For low-lying Pacific states, sea-level rise is not only an environmental problem. It raises legal and political questions that international law has never had to answer before.",
    image: "https://images.unsplash.com/photo-1650509010045-70888b02ffa8?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Aerial view of a thin strip of land surrounded by ocean.",
    imageCaption: "A low-lying atoll seen from the air. Island nations of this kind have a mean elevation of only a few metres. Illustrative stock photograph via Unsplash.",
    findings: [
      "Saltwater intrusion damages groundwater and traditional taro cultivation.",
      "Governments are pursuing \"digital statehood\" to preserve records and culture.",
      "No binding protection exists for citizens who lose sovereign territory."
    ],
    reading: "This case shows displacement as a matter not just of movement but of statehood, culture and legal identity. It connects directly to the protection gap in Article 05 — the absence of an international status for people displaced by climate impacts."
  }
];

/* ------------------------------------------------------------
   Climate data (schematic, based on the Chapter II table)
   Values are qualitative 0–5 indicators, clearly labelled as
   illustrative in the UI. They are NOT measured percentages.
   ------------------------------------------------------------ */
const capacityData = {
  note: "Schematic comparison of structural recovery factors discussed in Chapter II. The 0–5 scale is illustrative and drawn from the qualitative source table — it is not a measured index.",
  rows: [
    { indicator: "Financial rebuilding power", dev: 5, ph: 1, source: "Klinsky & Mavrogianni (2023)" },
    { indicator: "Infrastructure defences", dev: 5, ph: 2, source: "Holden et al. (2023)" },
    { indicator: "Early-warning systems", dev: 4, ph: 2, source: "Thomas et al. (2021)" },
    { indicator: "Insurance coverage", dev: 5, ph: 1, source: "Klinsky & Mavrogianni (2023)" }
  ]
};

const emissionsData = {
  philippines: "<0.4%",
  note: "The Philippines produces less than 0.4% of global CO₂ emissions, while the majority of cumulative emissions since 1850 originated in today's wealthy nations (IPCC, 2023; La Viña et al., 2024)."
};

const livelihoodData = [
  { label: "Outdoor dependence (farming, fishing)", level: "High", detail: "Subsistence and smallholder work is directly exposed to storms and season shifts.", source: "Thomas et al. (2021)" },
  { label: "Indoor insulation (service, technology)", level: "Low", detail: "Service and technology work is comparatively insulated from weather events.", source: "Thomas et al. (2021)" }
];

/* ------------------------------------------------------------
   Timeline — documented dates only
   ------------------------------------------------------------ */
const timelineData = [
  { date: "November 2013", title: "Typhoon Haiyan (Yolanda)", text: "One of the strongest tropical cyclones to make landfall, it demonstrated the scale of damage the typhoon belt can produce." },
  { date: "December 2021", title: "Super Typhoon Odette (Rai)", text: "Coastal and agricultural communities across the Visayas and Mindanao lost homes and livelihoods (Holden et al., 2023)." },
  { date: "2022", title: "COP27 agrees to establish a Loss and Damage Fund", text: "Parties agreed that wealthy polluters must help fund rebuilding in vulnerable nations." },
  { date: "2022–2024", title: "Philippines ranks #1 on the WorldRiskIndex", text: "Index score 46.91 for three consecutive years (Bündnis Entwicklung Hilft, 2024)." },
  { date: "2023", title: "COP28 begins operationalising the fund", text: "The Loss and Damage Fund moves from agreement toward delivery." },
  { date: "July 2024", title: "Philippines selected to host the fund's board", text: "A decision reinforced by Republic Act No. 12019 (La Viña et al., 2024)." }
];

/* ------------------------------------------------------------
   Preparedness quiz
   Preserves the original five questions and answer weights.
   ------------------------------------------------------------ */
const quizQuestions = [
  {
    q: "Does your local barangay have a permanent concrete evacuation centre with independent power?",
    opts: [
      { text: "Yes, fully equipped with solar backup and sanitation.", pts: 20 },
      { text: "Makeshift shelter (e.g., a covered basketball court or school).", pts: 10 },
      { text: "No designated evacuation facility nearby.", pts: 0 }
    ]
  },
  {
    q: "How does your community receive disaster warnings during typhoons?",
    opts: [
      { text: "Automated real-time SMS and early-warning sirens.", pts: 20 },
      { text: "Megaphone broadcasts or social-media updates.", pts: 10 },
      { text: "Word of mouth — no systematic alert system.", pts: 0 }
    ]
  },
  {
    q: "Are local drainage and riverbanks reinforced in your municipality?",
    opts: [
      { text: "Deep stormwater tunnels and dredged river canals.", pts: 20 },
      { text: "Partial, unpaved drainage that is prone to overflow.", pts: 10 },
      { text: "Clogged or non-existent drainage systems.", pts: 0 }
    ]
  },
  {
    q: "What emergency supplies does your household maintain in a go-bag?",
    opts: [
      { text: "72-hour food, water purification, radio and a solar power bank.", pts: 20 },
      { text: "Basic canned food and a flashlight.", pts: 10 },
      { text: "No emergency kit prepared in advance.", pts: 0 }
    ]
  },
  {
    q: "Does your local government provide income-recovery programmes for outdoor workers after a storm?",
    opts: [
      { text: "Permanent micro-grants and crop-insurance replacement.", pts: 20 },
      { text: "Short-term relief packs (canned goods and rice).", pts: 10 },
      { text: "No economic safety nets are provided.", pts: 0 }
    ]
  }
];

const resultDescriptions = [
  {
    minScore: 80,
    title: "High resilience",
    description: "Your community shows strong adaptive capacity: structured infrastructure, systematic warnings and household preparedness. The priority now is maintenance — keeping these systems funded and tested.",
    recommendations: [
      "Run a yearly drill so evacuation routes and centres stay familiar.",
      "Document and share what works with neighbouring barangays.",
      "Stress-test backup power and water for a multi-day outage."
    ]
  },
  {
    minScore: 50,
    title: "Moderate resilience",
    description: "Your community has basic emergency measures, but relies on temporary relief rather than structural protection. The gap is usually in permanent infrastructure and long-term income recovery.",
    recommendations: [
      "Push for permanent evacuation centres with independent power.",
      "Formalise early warning into automated SMS or sirens where possible.",
      "Help households build 72-hour go-bags before the season starts."
    ]
  },
  {
    minScore: 0,
    title: "Vulnerable capacity",
    description: "Your community has a high-risk profile. The most urgent needs are permanent evacuation facilities, a reliable warning system and drainage that can handle intense rainfall.",
    recommendations: [
      "Prioritise a durable evacuation centre with backup power and sanitation.",
      "Establish a systematic early-warning channel with the municipal DRRM office.",
      "Combine household go-bags with a community stockpile of food and water."
    ]
  }
];

/* ------------------------------------------------------------
   Editorial team
   ------------------------------------------------------------ */
const teamData = {
  leads: [
    { role: "Lead researcher & writer", name: "Serrano, Jeffrey Jr. M.", desc: "Lead author, research synthesis, web development." },
    { role: "Web developer", name: "Lloren, Jerwin C.", desc: "Front-end architecture and design implementation." },
    { role: "Web developer", name: "Rivas, Eduardo Jr. A.", desc: "Interactive features and data integration." }
  ],
  researchers: [
    "Bactat, Kurt Russel B.",
    "Belanigue, Mhel John",
    "Buban, Demiel Jared Shane",
    "Enabe, RJ. T.",
    "Francisco, John Louise",
    "Laurito, Trishan F.",
    "Mines, Manzor M.",
    "Porras, John Kenneth S.",
    "Porras, Jorizon"
  ]
};

/* ------------------------------------------------------------
   Node export for tests (browser-safe)
   ------------------------------------------------------------ */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    referencesData,
    articlesData,
    caseStudiesData,
    capacityData,
    emissionsData,
    livelihoodData,
    timelineData,
    quizQuestions,
    resultDescriptions,
    teamData
  };
}
