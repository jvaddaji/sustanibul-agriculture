// Government policies dataset (5 Key Policies with slugs, badges, and summaries)
const policies = [
  {
    slug: "nmsa",
    name: "National Mission for Sustainable Agriculture (NMSA)",
    badge: "Climate Resilience",
    description:
      "Promotes climate-resilient practices, integrated farming systems (IFS), and on-farm natural resource conservation."
  },
  {
    slug: "pkvy",
    name: "Paramparagat Krishi Vikas Yojana (PKVY)",
    badge: "Organic Farming",
    description:
      "Supports cluster-based chemical-free organic farming with Participatory Guarantee System (PGS-India) certification."
  },
  {
    slug: "pmksy",
    name: "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)",
    badge: "Water Conservation",
    description:
      "Expands irrigation access and maximizes water-use efficiency through micro-irrigation under 'Per Drop More Crop'."
  },
  {
    slug: "soil-health-card",
    name: "Soil Health Card Scheme",
    badge: "Soil Management",
    description:
      "Provides 12-parameter soil testing and tailored nutrient recommendations to support informed, balanced fertilizer use."
  },
  {
    slug: "natural-farming",
    name: "National Mission on Natural Farming (NMNF)",
    badge: "Chemical-Free Farming",
    description:
      "Encourages chemical-free agroecology utilizing indigenous cow formulations (Jeevamrit & Beejamrit) and in-situ biomass."
  }
];

// Sustainable farming practices dataset
const practices = [
  {
    name: "Crop Rotation",
    description: "Growing different crops in sequence to support soil health and break pest cycles."
  },
  {
    name: "Drip Irrigation",
    description: "Delivering water near plant roots to minimize evaporation and maximize water efficiency."
  },
  {
    name: "Composting",
    description: "Using decomposed organic material to improve soil biological activity and humus."
  },
  {
    name: "Integrated Pest Management",
    description: "Combining biological, cultural, and mechanical controls to manage pests safely."
  }
];

// Helper to determine destination URL for policy details
function getPolicyUrl(slug) {
  if (window.location.protocol === 'file:') {
    return `policy-detail.html?policy=${slug}`;
  }
  return `/policies/${slug}`;
}

// Render functions for policies and practices
function showPracticeCards(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map(item => `
    <article class="practice-card policy-card">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    </article>
  `).join("");
}

function showCards(items, containerId) {
  if (containerId === "practice-list") {
    showPracticeCards(items, containerId);
    return;
  }
  renderPolicies();
}

function renderPolicies(query = "") {
  const container = document.getElementById("policy-list");
  if (!container) return;

  const cleanQuery = query.toLowerCase().trim();
  const filtered = policies.filter(policy =>
    (policy.name + " " + policy.description + " " + policy.badge)
      .toLowerCase()
      .includes(cleanQuery)
  );

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-policies-found">
        <p>No government schemes found matching "<strong>${query}</strong>".</p>
        <p class="no-policies-tip">Try searching for keywords like <em>Soil</em>, <em>Water</em>, <em>Organic</em>, <em>Irrigation</em>, or <em>Climate</em>.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const detailUrl = getPolicyUrl(item.slug);
    return `
      <article class="policy-card clickable-policy-card" data-slug="${item.slug}" tabindex="0" role="link" aria-label="View details for ${item.name}">
        <div class="policy-card-top">
          <span class="policy-card-badge">${item.badge}</span>
        </div>
        <h3 class="policy-card-title">${item.name}</h3>
        <p class="policy-card-desc">${item.description}</p>
        <div class="policy-card-footer">
          <a href="${detailUrl}" class="view-details-btn" data-slug="${item.slug}">
            View Full Details &rarr;
          </a>
        </div>
      </article>
    `;
  }).join("");

  // Attach click and keyboard event listeners to each policy card
  const cards = container.querySelectorAll(".clickable-policy-card");
  cards.forEach(card => {
    const slug = card.getAttribute("data-slug");
    const targetUrl = getPolicyUrl(slug);

    // Click handler: entire card is clickable
    card.addEventListener("click", (e) => {
      // Allow default link navigation if clicking directly on link
      if (e.target.closest("a")) return;
      window.location.href = targetUrl;
    });

    // Keyboard accessibility: Enter or Space triggers navigation
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        window.location.href = targetUrl;
      }
    });
  });
}

renderPolicies();
showCards(practices, "practice-list");

const searchInput = document.getElementById("search");
if (searchInput) {
  searchInput.addEventListener(
    "input",
    event => renderPolicies(event.target.value)
  );
}

/* ==========================================================================
   INTERACTIVE QUIZ ENGINE - SUSTAINABLE AGRICULTURE IN INDIA
   ========================================================================== */

// 15 Multiple-Choice Questions covering Government Schemes & Sustainable Agriculture
const quizQuestionsData = [
  {
    question: "What is the primary overarching goal of sustainable agriculture?",
    options: [
      "Maximizing short-term crop output through heavy reliance on synthetic chemicals",
      "Meeting current food and textile needs without compromising the ability of future generations to meet theirs",
      "Completely replacing all mechanical farm equipment with manual labor",
      "Converting all diverse farmland exclusively into single-crop monocultures"
    ],
    correctIndex: 1,
    explanation: "Sustainable agriculture integrates environmental health, economic profitability, and social equity to produce food while conserving natural resources for future generations."
  },
  {
    question: "Under the Soil Health Card Scheme launched by the Government of India, what key benefit is provided to farmers?",
    options: [
      "Free distribution of synthetic chemical pesticides every cropping season",
      "Guaranteed purchase of all agricultural produce at fixed export rates",
      "A customized assessment of soil nutrient status along with dosage recommendations for balanced fertilizer use",
      "Interest-free personal loans for purchasing luxury farm vehicles"
    ],
    correctIndex: 2,
    explanation: "The Soil Health Card Scheme evaluates 12 crucial chemical and physical soil parameters, providing farmers with tailored guidance for balanced and cost-effective fertilizer use."
  },
  {
    question: "Which approach is central to promoting organic farming under the Paramparagat Krishi Vikas Yojana (PKVY)?",
    options: [
      "Cluster-based organic farming supported by Participatory Guarantee System (PGS-India) certification",
      "Subsidizing synthetic chemical insecticides for export cash crops",
      "Mandating the exclusive cultivation of imported genetically modified crops",
      "Establishing commercial hydroponic installations exclusively in metropolitan cities"
    ],
    correctIndex: 0,
    explanation: "PKVY supports organic farming by organizing farmers into clusters of 20 or more hectares and facilitating decentralized, affordable Participatory Guarantee System (PGS-India) certification."
  },
  {
    question: "What is the key motto and objective of the micro-irrigation component under Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)?",
    options: [
      "Maximum Water Flooding",
      "Har Khet Mein Chemical",
      "Unlimited Groundwater Extraction",
      "Per Drop More Crop"
    ],
    correctIndex: 3,
    explanation: "The 'Per Drop More Crop' component under PMKSY promotes water-efficient micro-irrigation technologies like drip and sprinkler systems to maximize crop productivity per unit of water."
  },
  {
    question: "The National Mission for Sustainable Agriculture (NMSA) is one of the key missions operating under which national policy framework?",
    options: [
      "National Action Plan on Climate Change (NAPCC)",
      "Digital India Programme",
      "National Urban Transport Mission",
      "Make in India Manufacturing Policy"
    ],
    correctIndex: 0,
    explanation: "NMSA is one of the eight missions under India's National Action Plan on Climate Change (NAPCC), focusing on climate-resilient practices, soil health, and water resource conservation."
  },
  {
    question: "Which core principle distinguishes the National Mission on Natural Farming (NMNF) from chemical-intensive agriculture?",
    options: [
      "Mandatory preventive spraying of synthetic chemical insecticides",
      "Eliminating all indigenous livestock from farming systems",
      "Practicing chemical-free farming utilizing on-farm cow-based formulations like Jeevamrit and Beejamrit",
      "Routine open-field burning of crop residues after harvest"
    ],
    correctIndex: 2,
    explanation: "Natural farming relies on livestock integration (especially indigenous cows), local bio-inputs like Jeevamrit and Beejamrit, and natural biological cycles without purchased synthetic fertilizers or pesticides."
  },
  {
    question: "Why does drip irrigation achieve significantly higher water conservation compared to surface flood irrigation?",
    options: [
      "It evaporates water into the air before it reaches the ground",
      "It delivers precise amounts of water directly to the crop root zone, minimizing evaporation and runoff",
      "It floods the entire field continuously to saturation",
      "It functions exclusively during heavy monsoon rainstorm events"
    ],
    correctIndex: 1,
    explanation: "Drip irrigation applies water slowly and directly at the plant roots, reducing surface runoff, weed germination, and evaporative water loss, saving up to 40%–60% of water."
  },
  {
    question: "What is a major environmental and agronomic risk of excessive and imbalanced application of synthetic urea (nitrogen)?",
    options: [
      "It stops crops from absorbing natural soil moisture entirely",
      "It permanently eliminates all weed species without any labor",
      "It ensures that crops will never require irrigation throughout the season",
      "Soil acidification, secondary nutrient deficiencies, and nitrate contamination of groundwater"
    ],
    correctIndex: 3,
    explanation: "Excessive urea application degrades soil microbial balance, increases soil acidity or salinity, inhibits uptake of other essential nutrients, and causes hazardous nitrate leaching into drinking water."
  },
  {
    question: "How does incorporating leguminous crops (such as pulses) into a crop rotation cycle naturally enhance soil fertility?",
    options: [
      "Legumes extract all nitrogen from the soil to stunt weed growth",
      "Legumes host symbiotic Rhizobium bacteria in their root nodules that fix atmospheric nitrogen into the soil",
      "Legumes secrete synthetic chemical herbicides that sterilize the topsoil",
      "Legumes prevent deep root penetration by subsequent seasonal crops"
    ],
    correctIndex: 1,
    explanation: "Legumes form a symbiotic partnership with Rhizobium bacteria, converting atmospheric nitrogen into plant-available soil nitrogen, naturally restoring fertility and breaking pest cycles."
  },
  {
    question: "What is the primary role of the Participatory Guarantee System for India (PGS-India) in sustainable agriculture?",
    options: [
      "Providing a peer-review, community-based organic certification framework that is accessible and affordable for farmer groups",
      "Enforcing a mandatory quota for importing chemical fertilizers",
      "Issuing maritime export licenses for industrial agricultural machinery",
      "Granting patent protection for commercial synthetic pesticide formulations"
    ],
    correctIndex: 0,
    explanation: "PGS-India is a decentralized, farmer-centric organic quality assurance and certification system implemented by the Ministry of Agriculture, reducing certification costs for smallholder groups."
  },
  {
    question: "Which of the following is a recognized climate-resilient agricultural practice for drought-prone regions in India?",
    options: [
      "Burning post-harvest crop stubble to clear land quickly",
      "Planting water-intensive crops without supplementary irrigation in arid zones",
      "Cultivating drought-tolerant, short-duration crop varieties alongside rainwater harvesting structures",
      "Deep plowing dry sandy topsoil during peak summer winds"
    ],
    correctIndex: 2,
    explanation: "Climate-resilient agriculture combines stress-tolerant seed varieties, farm ponds/rainwater harvesting, and conservation tillage to maintain farm productivity during erratic weather events."
  },
  {
    question: "What is the central strategy of Integrated Pest Management (IPM) in sustainable crop production?",
    options: [
      "Applying broad-spectrum chemical pesticides on a fixed daily schedule regardless of pest presence",
      "Combining biological control, cultural practices, and mechanical methods to keep pests below damaging levels with minimal chemical use",
      "Eradicating all insects from the farm including beneficial pollinators like honeybees",
      "Covering all open agricultural land with impermeable plastic sheets"
    ],
    correctIndex: 1,
    explanation: "IPM emphasizes monitoring, natural biological predators, trap crops, and cultural practices to manage pests responsibly while safeguarding pollinators, natural enemies, and the wider ecosystem."
  },
  {
    question: "How do sustainable practices such as on-farm composting and green manuring deliver economic benefits to small farmers?",
    options: [
      "By substantially lowering cash expenditures on expensive commercial synthetic fertilizers while sustaining soil productivity",
      "By forcing farmers to purchase patented chemical additives from foreign suppliers",
      "By eliminating the need to harvest, transport, or store agricultural produce",
      "By guaranteeing that open-market commodity prices never fluctuate"
    ],
    correctIndex: 0,
    explanation: "Producing organic manures and compost on the farm utilizes readily available biomass, cutting reliance on costly purchased synthetic inputs and reducing farmer debt burdens."
  },
  {
    question: "What is the primary agronomic benefit of applying organic mulch (such as straw or dry leaves) to the soil surface?",
    options: [
      "To accelerate evaporation of moisture from the topsoil during summer",
      "To prevent rainwater from infiltrating down into the root zone",
      "To bake the soil surface hard and eradicate earthworm populations",
      "To conserve soil moisture, regulate soil temperature, suppress weeds, and enrich soil organic matter"
    ],
    correctIndex: 3,
    explanation: "Organic mulching covers the soil, cutting evaporative water loss, moderating extreme soil temperatures, curbing weed germination, and enriching soil humus as organic material breaks down."
  },
  {
    question: "How does agroforestry (integrating trees and woody perennials into agricultural landscapes) support sustainability?",
    options: [
      "It depletes groundwater reserves and blocks all sunlight from reaching food crops",
      "It converts fertile arable fields into unproductive wasteland",
      "It enhances carbon sequestration, provides windbreaks, reduces soil erosion, and diversifies farm income",
      "It accelerates topsoil loss and increases net farm greenhouse gas emissions"
    ],
    correctIndex: 2,
    explanation: "Agroforestry traps carbon in tree biomass and soil, reduces wind and water erosion, improves microclimates, and provides farmers with supplementary revenue from fruit, fodder, and timber."
  }
];

// Option letter labels
const optionLetters = ["A", "B", "C", "D"];

// State variables for quiz session
let activeQuizQuestions = [];
let currentQuestionIndex = 0;
let userScore = 0;
let selectedOptionIndex = null;
let hasSubmittedCurrentQuestion = false;

// DOM Elements
const quizContainer = document.getElementById("quiz-container");
const quizResultsContainer = document.getElementById("quiz-results-container");
const quizProgressText = document.getElementById("quiz-progress-text");
const quizProgressFill = document.getElementById("quiz-progress-fill");
const quizProgressBar = document.getElementById("quiz-progressbar");
const quizScoreLive = document.getElementById("quiz-score-live");
const quizQuestionText = document.getElementById("quiz-question-text");
const quizOptionsContainer = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");
const feedbackStatus = document.getElementById("feedback-status");
const feedbackExplanation = document.getElementById("feedback-explanation");
const quizSubmitBtn = document.getElementById("quiz-submit-btn");
const quizNextBtn = document.getElementById("quiz-next-btn");
const quizRestartBtn = document.getElementById("quiz-restart-btn");
const resultsBadge = document.getElementById("results-badge");
const resultsScoreDisplay = document.getElementById("results-score-display");
const resultsMessage = document.getElementById("results-message");
const statCorrectVal = document.getElementById("stat-correct-val");
const statIncorrectVal = document.getElementById("stat-incorrect-val");
const statAccuracyVal = document.getElementById("stat-accuracy-val");

// Fisher-Yates shuffle algorithm: creates a shuffled copy without altering question data
function shuffleQuestions(array) {
  const shuffled = array.map(item => ({ ...item }));
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Result message generator matching requirements
function getResultMessage(score) {
  if (score >= 13) {
    return "Excellent! You have a strong understanding of sustainable agriculture.";
  } else if (score >= 10) {
    return "Great job! You understand the major policies and practices.";
  } else if (score >= 6) {
    return "Good effort! Review the policies to improve your knowledge.";
  } else {
    return "Keep learning! Explore the policy section and try again.";
  }
}

// Initialize and start a new quiz
function startQuiz() {
  activeQuizQuestions = shuffleQuestions(quizQuestionsData);
  currentQuestionIndex = 0;
  userScore = 0;
  selectedOptionIndex = null;
  hasSubmittedCurrentQuestion = false;

  if (quizResultsContainer) quizResultsContainer.style.display = "none";
  if (quizContainer) quizContainer.style.display = "block";

  renderCurrentQuestion();
}

// Render the current question
function renderCurrentQuestion() {
  if (!activeQuizQuestions || activeQuizQuestions.length === 0) return;

  const totalQuestions = activeQuizQuestions.length;
  const currentQuestion = activeQuizQuestions[currentQuestionIndex];

  selectedOptionIndex = null;
  hasSubmittedCurrentQuestion = false;

  // Update progress text and score
  if (quizProgressText) {
    quizProgressText.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
  }
  if (quizScoreLive) {
    quizScoreLive.textContent = `Score: ${userScore} / ${totalQuestions}`;
  }

  // Update progress bar
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  if (quizProgressFill) {
    quizProgressFill.style.width = `${progressPercentage}%`;
  }
  if (quizProgressBar) {
    quizProgressBar.setAttribute("aria-valuenow", currentQuestionIndex + 1);
  }

  // Set Question Text
  if (quizQuestionText) {
    quizQuestionText.textContent = currentQuestion.question;
  }

  // Render Options (Notice: answer key is NOT exposed in the DOM markup)
  if (quizOptionsContainer) {
    quizOptionsContainer.innerHTML = currentQuestion.options.map((opt, idx) => `
      <button type="button" class="quiz-option" data-index="${idx}" role="radio" aria-checked="false">
        <span class="option-letter">${optionLetters[idx]}</span>
        <span class="option-text">${opt}</span>
        <span class="option-icon" aria-hidden="true"></span>
      </button>
    `).join("");

    // Bind option click and keyboard events
    const optionButtons = quizOptionsContainer.querySelectorAll(".quiz-option");
    optionButtons.forEach(btn => {
      btn.addEventListener("click", () => handleSelectOption(btn));
      btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleSelectOption(btn);
        }
      });
    });
  }

  // Hide feedback container
  if (quizFeedback) {
    quizFeedback.style.display = "none";
  }

  // Reset submit and next buttons
  if (quizSubmitBtn) {
    quizSubmitBtn.style.display = "inline-block";
    quizSubmitBtn.disabled = true;
  }
  if (quizNextBtn) {
    quizNextBtn.style.display = "none";
  }
}

// Handle option selection
function handleSelectOption(selectedButton) {
  if (hasSubmittedCurrentQuestion) return;

  const clickedIndex = parseInt(selectedButton.getAttribute("data-index"), 10);
  selectedOptionIndex = clickedIndex;

  const allOptions = quizOptionsContainer.querySelectorAll(".quiz-option");
  allOptions.forEach(optBtn => {
    optBtn.classList.remove("selected");
    optBtn.setAttribute("aria-checked", "false");
  });

  selectedButton.classList.add("selected");
  selectedButton.setAttribute("aria-checked", "true");

  if (quizSubmitBtn) {
    quizSubmitBtn.disabled = false;
  }
}

// Handle Answer Submission
function handleSubmitAnswer() {
  if (selectedOptionIndex === null || hasSubmittedCurrentQuestion) return;

  hasSubmittedCurrentQuestion = true;
  const currentQuestion = activeQuizQuestions[currentQuestionIndex];
  const isCorrect = selectedOptionIndex === currentQuestion.correctIndex;

  // Disable all options to prevent re-submission or changing choices
  const optionButtons = quizOptionsContainer.querySelectorAll(".quiz-option");
  optionButtons.forEach(btn => {
    btn.disabled = true;
    const btnIndex = parseInt(btn.getAttribute("data-index"), 10);
    const iconSpan = btn.querySelector(".option-icon");

    if (btnIndex === currentQuestion.correctIndex) {
      btn.classList.add("correct");
      if (iconSpan) iconSpan.innerHTML = "&#10003;"; // Checkmark
    } else if (btnIndex === selectedOptionIndex) {
      btn.classList.add("incorrect");
      if (iconSpan) iconSpan.innerHTML = "&#10007;"; // Cross
    }
  });

  // Update Score if correct
  if (isCorrect) {
    userScore++;
    if (feedbackStatus) {
      feedbackStatus.innerHTML = `<span class="feedback-badge badge-correct">&#10003; Correct Answer</span>`;
    }
  } else {
    if (feedbackStatus) {
      feedbackStatus.innerHTML = `<span class="feedback-badge badge-incorrect">&#10007; Incorrect</span> <span class="feedback-hint">Correct: Option ${optionLetters[currentQuestion.correctIndex]}</span>`;
    }
  }

  // Update live score display
  if (quizScoreLive) {
    quizScoreLive.textContent = `Score: ${userScore} / ${activeQuizQuestions.length}`;
  }

  // Show short educational explanation
  if (feedbackExplanation) {
    feedbackExplanation.textContent = currentQuestion.explanation;
  }
  if (quizFeedback) {
    quizFeedback.style.display = "block";
  }

  // Toggle action buttons
  if (quizSubmitBtn) {
    quizSubmitBtn.style.display = "none";
  }
  if (quizNextBtn) {
    quizNextBtn.style.display = "inline-block";
    const isLastQuestion = currentQuestionIndex === activeQuizQuestions.length - 1;
    quizNextBtn.textContent = isLastQuestion ? "View Final Results" : "Next Question";
    quizNextBtn.focus();
  }
}

// Handle Next Question Navigation
function handleNextQuestion() {
  if (currentQuestionIndex < activeQuizQuestions.length - 1) {
    currentQuestionIndex++;
    renderCurrentQuestion();
  } else {
    showQuizResults();
  }
}

// Display final results screen
function showQuizResults() {
  if (quizContainer) quizContainer.style.display = "none";
  if (quizResultsContainer) quizResultsContainer.style.display = "block";

  const total = activeQuizQuestions.length;
  const percentage = Math.round((userScore / total) * 100);

  if (resultsScoreDisplay) {
    resultsScoreDisplay.innerHTML = `You scored <strong>${userScore}</strong> out of <strong>${total}</strong> (${percentage}%)`;
  }

  if (resultsMessage) {
    resultsMessage.textContent = getResultMessage(userScore);
  }

  if (resultsBadge) {
    if (userScore >= 13) {
      resultsBadge.textContent = "🏆";
    } else if (userScore >= 10) {
      resultsBadge.textContent = "🌟";
    } else if (userScore >= 6) {
      resultsBadge.textContent = "🌾";
    } else {
      resultsBadge.textContent = "📚";
    }
  }

  if (statCorrectVal) statCorrectVal.textContent = userScore;
  if (statIncorrectVal) statIncorrectVal.textContent = total - userScore;
  if (statAccuracyVal) statAccuracyVal.textContent = `${percentage}%`;

  if (quizRestartBtn) {
    quizRestartBtn.focus();
  }
}

// Event Listeners for Quiz Controls
if (quizSubmitBtn) {
  quizSubmitBtn.addEventListener("click", handleSubmitAnswer);
}
if (quizNextBtn) {
  quizNextBtn.addEventListener("click", handleNextQuestion);
}
if (quizRestartBtn) {
  quizRestartBtn.addEventListener("click", startQuiz);
}

// Compatibility helper if anything external queries checkAnswer
function checkAnswer(answer) {
  return answer === "water";
}

// Start Quiz on page load
if (quizContainer) {
  startQuiz();
}
