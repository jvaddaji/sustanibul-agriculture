
const policies = [
  {
    name: "Soil Health Card Scheme",
    description:
      "Soil testing and nutrient recommendations to support informed fertilizer use."
  },
  {
    name: "Paramparagat Krishi Vikas Yojana",
    description:
      "Supports organic farming through eligible farmer groups and related activities."
  },
  {
    name: "Pradhan Mantri Krishi Sinchayee Yojana",
    description:
      "Promotes better irrigation and efficient water use."
  },
  {
    name: "National Mission for Sustainable Agriculture",
    description:
      "Promotes sustainable practices and climate-resilient agriculture."
  }
];

const practices = [
  {
    name: "Crop Rotation",
    description: "Growing different crops in sequence to support soil health."
  },
  {
    name: "Drip Irrigation",
    description: "Delivering water near plant roots to improve water efficiency."
  },
  {
    name: "Composting",
    description: "Using decomposed organic material to improve soil."
  },
  {
    name: "Integrated Pest Management",
    description: "Combining suitable methods to manage crop pests."
  }
];

function showCards(items, containerId) {
  const container = document.getElementById(containerId);

  container.innerHTML = items.map(item => `
    <article class="policy-card">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    </article>
  `).join("");
}

function renderPolicies(query = "") {
  const filtered = policies.filter(policy =>
    (policy.name + " " + policy.description)
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  showCards(filtered, "policy-list");
}

renderPolicies();
showCards(practices, "practice-list");

document.getElementById("search").addEventListener(
  "input",
  event => renderPolicies(event.target.value)
);

function checkAnswer(answer) {
  const result = document.getElementById("quiz-result");

  result.textContent = answer === "water"
    ? "Correct! Drip irrigation can improve water-use efficiency."
    : "Try again! Think about the resource delivered to plant roots.";
}
