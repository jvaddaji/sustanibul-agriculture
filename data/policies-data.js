/**
 * TEAM AQUA - Government Policies for Sustainable Agriculture in India and Their Impact
 * Centralized, structured data store for all featured government policies.
 * 
 * Supports both CommonJS (Node.js/Express) and Browser environments.
 */

const policiesData = {
  "nmsa": {
    id: "nmsa",
    slug: "nmsa",
    name: "National Mission for Sustainable Agriculture (NMSA)",
    shortName: "National Mission for Sustainable Agriculture",
    tagline: "Climate-Resilient Agriculture, Soil Health & Integrated Resource Conservation",
    heroImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Lush green agricultural fields in India representing climate-resilient farming",
    responsibleEntity: "Department of Agriculture & Farmers Welfare (DA&FW), Ministry of Agriculture & Farmers Welfare, Government of India",
    policyFramework: "One of the eight core National Missions under the National Action Plan on Climate Change (NAPCC)",
    launchContext: "Formulated to address the emerging threats of climate volatility, erratic rainfall, and land degradation on Indian food security.",
    
    about: {
      summary: "The National Mission for Sustainable Agriculture (NMSA) is a flagship national initiative designed to make Indian agriculture more productive, sustainable, remunerative, and climate-resilient. It fosters location-specific integrated farming systems, soil-moisture conservation, and comprehensive natural resource management.",
      whyIntroduced: "Traditional monoculture and high-input farming have heightened vulnerability to climate shocks, such as recurring droughts, sudden unseasonal rainfall, and deteriorating soil organic matter. NMSA was instituted to pivot agricultural policy from input-intensive exploitation toward climate adaptation, ecosystem balance, and long-term farmer security.",
      keyObjectives: [
        "Promote Integrated Farming Systems (IFS) encompassing crop diversification, agroforestry, livestock integration, and farm ponds to buffer smallholders against crop failures.",
        "Conserve critical natural resources through on-farm water management, land contouring, and conservation agriculture practices.",
        "Enhance soil organic carbon storage and mitigate greenhouse gas emissions through organic soil amendments and tree cover.",
        "Establish climate-resilient model village demonstrations and strengthen local agricultural capacity in rainfed zones."
      ],
      intendedBeneficiaries: "Small and marginal farmers, rainfed farming communities, Farmer Producer Organisations (FPOs), and agricultural self-help groups in vulnerable agro-climatic zones.",
      coreComponents: [
        {
          title: "Rainfed Area Development (RAD)",
          description: "Focuses on Integrated Farming Systems (IFS) that combine agriculture with horticulture, livestock, fishery, and agroforestry to maximize farm income stability."
        },
        {
          title: "On-Farm Water Management (OFWM)",
          description: "Supports micro-water harvesting structures, farm ponds, contour trenches, and soil moisture retention techniques."
        },
        {
          title: "Soil Health Management (SHM)",
          description: "Enhances soil fertility through site-specific nutrient recommendations, soil conditioning, and organic input infrastructure."
        },
        {
          title: "Climate Change and Sustainable Agriculture (CCSAMN)",
          description: "Pilots climate-adaptation models, capacity building, and regional climate vulnerability mapping."
        }
      ]
    },

    benefits: [
      {
        icon: "🛡️",
        title: "Risk Diversification",
        description: "By integrating livestock, fruit trees, and seasonal crops, farmers retain dependable income sources even when erratic weather harms one specific crop."
      },
      {
        icon: "💧",
        title: "Enhanced Water Security",
        description: "Farm ponds and micro-catchment structures harvest monsoon runoff to provide life-saving supplementary irrigation during mid-season dry spells."
      },
      {
        icon: "🌱",
        title: "Soil Moisture & Carbon Retention",
        description: "Agroforestry and conservation tillage build up soil humus, allowing the ground to absorb and hold rainwater longer during severe heatwaves."
      },
      {
        icon: "📉",
        title: "Lower Input Expenditure",
        description: "Integrating livestock manure and on-farm biomass cuts reliance on expensive commercial chemicals, lowering cash investment per season."
      }
    ],

    howToAccess: [
      {
        step: 1,
        title: "Verify District & Block Eligibility",
        description: "Check whether your village or block falls within a designated Rainfed Area Development (RAD) or NMSA implementation cluster. State agricultural departments notify priority blocks based on rainfall patterns."
      },
      {
        step: 2,
        title: "Visit the District / Block Agriculture Office",
        description: "Approach the Block Agriculture Officer (BAO) or District Agriculture Officer (DAO) to inquire about ongoing cluster projects and available IFS assistance schemes."
      },
      {
        step: 3,
        title: "Join or Form a Farmer Interest Group",
        description: "Many NMSA components (such as community water harvesting ponds and farm equipment sharing) are implemented through farmer clusters, Self-Help Groups (SHGs), or Water User Associations."
      },
      {
        step: 4,
        title: "Submit Farm Details & Proposed Plan",
        description: "Provide your land records, Aadhaar, and a simple proposal outlining your planned integrated farming setup (e.g., adding fruit trees, fodder grass, or a farm pond)."
      },
      {
        step: 5,
        title: "Engage with Krishi Vigyan Kendra (KVK)",
        description: "Participate in local training camps and demonstration field days conducted by KVK agronomists to learn suitable crop-livestock-tree combinations."
      },
      {
        step: 6,
        title: "Field Inspection & Benefit Disbursement",
        description: "Extension officials verify field adoption before disbursing capital assistance or input support via Direct Benefit Transfer (DBT) in accordance with state guidelines."
      },
      {
        step: 7,
        title: "Offline & In-Person Assistance",
        description: "Farmers without internet access can directly consult their Village Agriculture Assistant (Kisan Mitra / Gram Sevak) or visit the nearest KVK helpdesk for full paperwork facilitation."
      }
    ],

    documents: [
      "Aadhaar Card or recognized Government Photo ID",
      "Land ownership record (Khasra, Khatauni, or updated land possession certificate)",
      "Bank passbook photocopy showing active account number and IFSC (Aadhaar-linked)",
      "Active mobile number for verification and SMS updates",
      "Cluster / Self-Help Group membership documentation (where applicable)",
      "Soil Health Card copy (recommended for integrated planning)"
    ],

    realLifeExample: {
      title: "Ramesh's Transition to Climate-Resilient Integrated Farming",
      context: "Ramesh is a smallholder farmer in a semi-arid rainfed block who previously relied entirely on rainfed pearl millet and suffered heavy losses during erratic monsoons.",
      action: "Through his local Block Agriculture Office, Ramesh enrolled in a Rainfed Area Development (RAD) cluster under NMSA. With technical guidance from the Krishi Vigyan Kendra (KVK), he excavated a farm pond to trap monsoon runoff and planted nitrogen-fixing subabul trees along field boundaries.",
      outcome: "When a four-week mid-season dry spell struck, the stored pond water provided two critical protective irrigations, saving his pulse crop, while the boundary trees provided fresh fodder for his dairy goats.",
      disclaimer: "Illustrative Scenario — For Educational Demonstration"
    },

    impact: {
      summary: "NMSA bridges the gap between scientific climate adaptation and smallholder farm realities, creating resilient ecological buffer zones across Indian farmlands.",
      soilHealth: "Rebuilds organic matter, prevents topsoil erosion via cover cropping, and restores biological activity.",
      waterConservation: "Captures surplus monsoon rainwater on-farm, recharging shallow aquifers and cutting groundwater extraction.",
      climateResilience: "Buffers rural families against extreme weather through multi-enterprise farming models.",
      livelihoodImpact: "Shields smallholders from total crop loss and creates diverse, continuous revenue throughout the agricultural year.",
      flowSteps: [
        "Government Climate Mission (NMSA Guidelines)",
        "Cluster Mobilization via DAO & KVK Training",
        "Integrated Farming Systems & Rainwater Ponds",
        "Multi-Enterprise Income & Climate-Resilient Crops"
      ]
    },

    officialLinks: [
      {
        title: "Official NMSA National Portal",
        url: "https://nmsa.dac.gov.in",
        type: "portal",
        note: "Official dashboard and operational guidelines by DA&FW"
      },
      {
        title: "Ministry of Agriculture & Farmers Welfare",
        url: "https://agricoop.gov.in",
        type: "ministry",
        note: "Apex Ministry portal for sustainable agriculture divisions"
      },
      {
        title: "National Action Plan on Climate Change (NAPCC)",
        url: "https://moef.gov.in",
        type: "guidance",
        note: "National climate framework under MoEFCC"
      }
    ],

    faqs: [
      {
        question: "Who is eligible to benefit from the NMSA Rainfed Area Development scheme?",
        answer: "Small and marginal farmers holding land in officially designated rainfed and vulnerable blocks are prioritized. Women farmers and members of Self-Help Groups or FPOs receive special encouragement."
      },
      {
        question: "Is financial assistance guaranteed to every applicant under NMSA?",
        answer: "Assistance is subject to approved annual state action plans, fund availability, and cluster guidelines. Benefits are implemented through prioritized farmer groups rather than individual open-ended subsidies."
      },
      {
        question: "What is an Integrated Farming System (IFS) promoted under NMSA?",
        answer: "IFS is a sustainable farming approach that combines crops with complementary enterprises like livestock, poultry, horticulture, bee-keeping, and agroforestry so waste from one enterprise serves as input for another."
      },
      {
        question: "Can an individual farmer apply directly online for NMSA support?",
        answer: "Most states handle NMSA enrollment through state agriculture DBT portals or via cluster mobilization through the District Agriculture Office and local Krishi Vigyan Kendra (KVK)."
      },
      {
        question: "Where can a farmer get offline help if they lack internet access?",
        answer: "Farmers can visit their Block Agriculture Office, District Agriculture Officer, or nearest Krishi Vigyan Kendra (KVK). Local Village Agriculture Assistants (Kisan Mitra / Gram Sevak) also provide direct guidance."
      }
    ]
  },

  "pkvy": {
    id: "pkvy",
    slug: "pkvy",
    name: "Paramparagat Krishi Vikas Yojana (PKVY)",
    shortName: "Paramparagat Krishi Vikas Yojana",
    tagline: "Revitalizing Traditional Knowledge & Chemical-Free Organic Farming via Farmer Clusters",
    heroImage: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Farmers inspecting healthy organically cultivated crops in a diverse agricultural farm",
    responsibleEntity: "Integrated Nutrient Management (INM) Division, Department of Agriculture & Farmers Welfare, Ministry of Agriculture & Farmers Welfare, Government of India",
    policyFramework: "A sub-scheme of Soil Health Management under the National Mission for Sustainable Agriculture / Rashtriya Krishi Vikas Yojana (RKVY)",
    launchContext: "Launched in 2015 to support traditional chemical-free farming, rebuild soil biology, and provide cost-effective certification for smallholder groups.",

    about: {
      summary: "Paramparagat Krishi Vikas Yojana (PKVY) is an extended component of the Soil Health Management scheme aimed at promoting organic farming among small and marginal farmers. It adopts a cluster-based approach and utilizes the Participatory Guarantee System for India (PGS-India) to provide accessible, community-driven organic certification.",
      whyIntroduced: "Excessive application of chemical pesticides and synthetic fertilizers has degraded soil biological diversity, contaminated groundwater, and inflated cultivation costs. PKVY was launched to revive indigenous sustainable farming wisdom, eliminate hazardous agrochemicals, and connect farmers directly with high-value organic markets.",
      keyObjectives: [
        "Promote chemical-free organic farming through traditional knowledge and locally available bio-resources.",
        "Mobilize farmers into organic clusters covering 20 or more hectares to facilitate shared logistics and certification.",
        "Enable affordable, decentralized organic certification through the Participatory Guarantee System for India (PGS-India).",
        "Empower farmers to market certified organic produce directly to consumers and retailers through the national Jaivik Kheti portal."
      ],
      intendedBeneficiaries: "Smallholder farmers, organic farmer groups, tribal farming communities, women farmer collectives, and Farmer Producer Companies (FPCs).",
      coreComponents: [
        {
          title: "Model Organic Cluster Demonstration",
          description: "Formation of contiguous clusters of 20 to 50 farmers covering a minimum of 20 hectares (50 acres)."
        },
        {
          title: "On-Farm Input Production",
          description: "Assistance for constructing vermicompost units, bio-fertilizer production, botanical pest repellent preparation, and green manuring."
        },
        {
          title: "PGS-India Certification",
          description: "Capacity building for participatory peer appraisal, record keeping, and issue of official PGS-India Green and Organic certificates."
        },
        {
          title: "Branding, Packaging & Market Linkages",
          description: "Support for organic packaging, cluster branding, transport assistance, and marketing on the Jaivik Kheti e-marketplace."
        }
      ]
    },

    benefits: [
      {
        icon: "🧪",
        title: "Zero Synthetic Chemical Residues",
        description: "Produces nutritious, chemical-free food crops, protecting farmers from toxic pesticide exposure and providing consumers with wholesome food."
      },
      {
        icon: "💰",
        title: "Lower Input Expenditure",
        description: "Utilizing on-farm vermicompost, cow dung formulations, and green manure eliminates costly dependence on commercial synthetic chemicals."
      },
      {
        icon: "🪱",
        title: "Rejuvenated Soil Biology",
        description: "Organic matter feeds earthworms and beneficial microbial flora, restoring soil crumb structure, porosity, and nutrient cycling."
      },
      {
        icon: "🏷️",
        title: "Premium Market Opportunities",
        description: "PGS-India certification enables clusters to command premium prices at dedicated organic haats and e-commerce portals."
      }
    ],

    howToAccess: [
      {
        step: 1,
        title: "Form a Local Farmer Cluster",
        description: "Gather 20 to 50 interested farmers in your village with contiguous land plots totaling at least 20 hectares (50 acres) to establish an organic cluster."
      },
      {
        step: 2,
        title: "Contact District Agriculture Office or Regional Council",
        description: "Approach the District Agriculture Officer or an authorized Regional Council (RC) registered under the PGS-India network."
      },
      {
        step: 3,
        title: "Register on the PGS-India Portal",
        description: "The cluster registers on the national PGS-India portal (pgsindia-ncof.gov.in) with the assistance of the Regional Council or local extension officer."
      },
      {
        step: 4,
        title: "Cease Synthetic Inputs & Adopt Organic Practices",
        description: "Follow the mandated conversion schedule by eliminating synthetic fertilizers, weedicides, and chemical insecticides, adopting vermicomposting and bio-inputs."
      },
      {
        step: 5,
        title: "Conduct Participatory Peer Reviews",
        description: "Cluster members inspect each other's fields during growing seasons to verify adherence to organic standards and maintain official peer-review records."
      },
      {
        step: 6,
        title: "Obtain PGS-India Certification",
        description: "Following the prescribed conversion period, the National Centre of Organic and Natural Farming (NCONF) issues PGS-Green and PGS-Organic certificates."
      },
      {
        step: 7,
        title: "List on the Jaivik Kheti Marketplace",
        description: "Register your certified produce on the Government of India Jaivik Kheti e-commerce portal (jaivikkheti.in) for direct domestic sales."
      }
    ],

    documents: [
      "Aadhaar Cards of all participating cluster farmer members",
      "Land possession papers (Khasra, Khatauni) showing contiguous farm locations",
      "Cluster bank account details (or individual accounts for direct financial support)",
      "Cluster resolution / consent agreement signed by all group members",
      "Baseline soil testing report (recommended to document organic transition progress)",
      "Pledge to adhere strictly to PGS-India chemical-free organic standards"
    ],

    realLifeExample: {
      title: "Sita Devi's Women Farmer Group Earning Organic Certification",
      context: "Sita Devi and 24 fellow women farmers in Madhya Pradesh cultivated wheat and soybean with high expenditure on commercial chemical fertilizers and sprays.",
      action: "With guidance from a local Regional Council under PKVY, the women mobilized a 25-hectare cluster. They built vermicompost pits, prepared neem-based botanical sprays, and held seasonal peer reviews to inspect each other's fields under PGS-India guidelines.",
      outcome: "After completing the mandated conversion cycle, their cluster received official PGS-India Organic Certification. By listing their crop on the Jaivik Kheti portal and local organic fairs, they earned an 18% price premium while eliminating chemical expenses.",
      disclaimer: "Illustrative Scenario — For Educational Demonstration"
    },

    impact: {
      summary: "PKVY proves that traditional organic agriculture can be modernized into an economically viable, certified commercial model for Indian smallholders.",
      soilHealth: "Multiplies microbial populations, enriches humus, and prevents soil crusting and salinization.",
      waterConservation: "Organic-rich soils hold significantly more moisture, decreasing irrigation frequency and run-off.",
      climateResilience: "Eliminates synthetic nitrogen manufacture footprints and sequesters carbon directly in agricultural soil.",
      livelihoodImpact: "Curbs farmer debt cycles by eliminating purchased chemical inputs and establishing direct consumer market access.",
      flowSteps: [
        "Farmer Cluster Mobilization (20+ Hectares)",
        "On-Farm Bio-Inputs & Vermicomposting",
        "PGS-India Participatory Peer Appraisal",
        "Certified Organic Produce & Premium Market Sales"
      ]
    },

    officialLinks: [
      {
        title: "PGS-India National Organic Portal",
        url: "https://pgsindia-ncof.gov.in",
        type: "portal",
        note: "Official Participatory Guarantee System certification portal"
      },
      {
        title: "Jaivik Kheti E-Marketplace",
        url: "https://www.jaivikkheti.in",
        type: "portal",
        note: "Official government direct marketing platform for organic produce"
      },
      {
        title: "Ministry of Agriculture - INM Division",
        url: "https://agricoop.gov.in",
        type: "ministry",
        note: "Integrated Nutrient Management policy guidelines"
      }
    ],

    faqs: [
      {
        question: "Can an individual farmer with one acre join PKVY independently?",
        answer: "PKVY is structured around contiguous clusters of at least 20 hectares (around 20 to 50 farmers). Individual farmers can participate by joining or forming a local village cluster with neighboring farmers."
      },
      {
        question: "What is the difference between PGS-India and third-party organic certification?",
        answer: "Third-party certification (NPOP) relies on commercial inspection bodies and can be costly for smallholders. PGS-India is a decentralized peer-review system supported by the government that is cost-effective and farmer-friendly."
      },
      {
        question: "How long does it take for a farm to become fully certified organic under PKVY?",
        answer: "Under PGS-India, farms transition through a conversion phase (usually 2 to 3 years depending on previous chemical history). During conversion, produce is labeled 'PGS-Green', graduating to full 'PGS-Organic' upon meeting standards."
      },
      {
        question: "Is financial assistance provided directly to individual farmers?",
        answer: "Financial assistance is allocated for cluster mobilization, input procurement, vermicompost units, and packaging. Portions of the assistance are disbursed via DBT or through cluster implementing agencies."
      },
      {
        question: "Where can farmers get offline training for preparing bio-fertilizers?",
        answer: "Farmers can attend field workshops conducted by their local Krishi Vigyan Kendra (KVK), Regional Council, or District Agriculture Office."
      }
    ]
  },

  "pmksy": {
    id: "pmksy",
    slug: "pmksy",
    name: "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)",
    shortName: "Pradhan Mantri Krishi Sinchayee Yojana",
    tagline: "Expanding Cultivable Area & Maximizing Water-Use Efficiency Under 'Per Drop More Crop'",
    heroImage: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Precision drip irrigation system delivering water directly to crop roots",
    responsibleEntity: "Inter-Ministerial Implementation: Ministry of Agriculture & Farmers Welfare (Per Drop More Crop), Ministry of Jal Shakti (AIBP & HKKP), and Ministry of Rural Development (Watershed)",
    policyFramework: "Comprehensive national irrigation scheme launched in 2015 uniting major irrigation, watershed management, and precision micro-irrigation.",
    launchContext: "Formulated with the dual visions of 'Har Khet Ko Pani' (water to every field) and 'Per Drop More Crop' (precision water conservation).",

    about: {
      summary: "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) is India's principal national irrigation umbrella scheme. While its major components expand canal and watershed infrastructure, its 'Per Drop More Crop' (PDMC) component specifically supports farmers in adopting water-conserving micro-irrigation systems such as drip and sprinkler irrigation.",
      whyIntroduced: "Over 80% of India's available freshwater is consumed by agriculture, predominantly through inefficient surface flood irrigation that wastes 50% or more of water to evaporation and runoff. PMKSY was introduced to improve farm-level water-use efficiency, conserve diminishing groundwater, and ensure equitable irrigation access.",
      keyObjectives: [
        "Achieve convergence of investments in irrigation at the field level and expand cultivable land under assured irrigation.",
        "Improve on-farm water-use efficiency through drip and sprinkler technologies under the 'Per Drop More Crop' component.",
        "Promote water harvesting, watershed structures, and traditional water body restoration to recharge depleted aquifers.",
        "Enable precise fertigation (delivering fertilizers through drip tubes) to optimize nutrient uptake and cut input costs."
      ],
      intendedBeneficiaries: "All categories of farmers across India, with preferential financial support for small, marginal, women, and SC/ST farmers.",
      coreComponents: [
        {
          title: "Per Drop More Crop (PDMC)",
          description: "Subsidies for installing drip and sprinkler systems, precision irrigation demonstrations, and water-use training."
        },
        {
          title: "Har Khet Ko Pani (HKKP)",
          description: "Creation of new water sources, rejuvenation of traditional water bodies, and command area distribution."
        },
        {
          title: "Accelerated Irrigation Benefit Programme (AIBP)",
          description: "Expedited completion of ongoing major and medium national irrigation and canal projects."
        },
        {
          title: "Watershed Development",
          description: "Soil and moisture conservation, check dams, and contour bunding managed by the Department of Land Resources."
        }
      ]
    },

    benefits: [
      {
        icon: "💧",
        title: "30% to 60% Water Conservation",
        description: "Drip irrigation applies water slowly and directly at the plant root zone, eliminating wasteful evaporation and runoff."
      },
      {
        icon: "🌾",
        title: "20% to 35% Yield Increase",
        description: "Crops receive steady, uniform moisture and aeration, preventing water stress during critical flowering and fruiting cycles."
      },
      {
        icon: "🧪",
        title: "Precise Fertigation Capability",
        description: "Water-soluble nutrients are injected directly into irrigation pipes, ensuring fertilizer reaches roots without leaching into groundwater."
      },
      {
        icon: "⚡",
        title: "Energy & Pumping Savings",
        description: "Lower water volume requirements reduce electricity and diesel fuel consumption for tube-wells and agricultural pump sets."
      }
    ],

    howToAccess: [
      {
        step: 1,
        title: "Check Your State Micro-Irrigation Portal",
        description: "Most states administer PMKSY Per Drop More Crop through their state agriculture or horticulture department portal (e.g., e-MIP, DBT Agriculture portals)."
      },
      {
        step: 2,
        title: "Verify Water Source & Land Requirements",
        description: "Ensure you possess a functional agricultural water source (such as an open well, tubewell, farm pond, or canal access) and valid land ownership papers."
      },
      {
        step: 3,
        title: "Submit an Online Application",
        description: "Register on your state's official horticulture/agriculture DBT portal. Select 'Micro-Irrigation (Drip/Sprinkler)' and upload your land and identity credentials."
      },
      {
        step: 4,
        title: "Select an Empaneled Micro-Irrigation Vendor",
        description: "Choose an authorized manufacturer/vendor from the state government's approved empanelment list."
      },
      {
        step: 5,
        title: "Field Survey & Technical Quotation",
        description: "A vendor engineer conducts a GPS-tagged farm survey, creates an irrigation layout, and submits an estimated cost quotation for departmental approval."
      },
      {
        step: 6,
        title: "Installation & Verification Inspection",
        description: "Following department sanction, the vendor installs the drip or sprinkler equipment. Government agricultural officers inspect the installation in the field."
      },
      {
        step: 7,
        title: "Disbursement of Subsidy",
        description: "Financial assistance is disbursed via Direct Benefit Transfer (DBT) to the farmer's account or directly to the manufacturer as per state protocol."
      },
      {
        step: 8,
        title: "Offline Application Route",
        description: "Farmers unable to apply online can visit the Block Horticulture Officer (BHO), District Horticulture Office, or Krishi Vigyan Kendra (KVK) for assisted offline submission."
      }
    ],

    documents: [
      "Aadhaar Card of the applicant farmer",
      "Land possession document (7/12, Khasra, Khatauni, or updated land title)",
      "Proof of assured water source (electricity bill of pump, well certificate, or canal authorization)",
      "Aadhaar-linked bank account passbook copy with visible IFSC code",
      "Passport-sized photographs and active mobile number",
      "Caste certificate (for SC/ST smallholders qualifying for enhanced subsidy slabs)"
    ],

    realLifeExample: {
      title: "Anand Rao's Shift to Micro-Irrigation During Groundwater Scarcity",
      context: "Anand Rao, a vegetable cultivator in Andhra Pradesh, struggled with receding borewell water levels that threatened his chilli and tomato crop during peak summer.",
      action: "He applied for a drip irrigation system under the PMKSY Per Drop More Crop scheme through the state horticulture portal. Following a field survey, an authorized vendor installed a drip lateral network with sand and disc filters.",
      outcome: "Anand irrigated his entire 2-acre plot using only 45% of the water his old flood channels required. Through fertigation, his vegetable yield expanded by 22% while weed growth between rows dropped dramatically.",
      disclaimer: "Illustrative Scenario — For Educational Demonstration"
    },

    impact: {
      summary: "PMKSY's Per Drop More Crop component represents a vital defense against groundwater depletion, protecting agricultural production in drought-prone regions.",
      soilHealth: "Prevents soil compaction, surface crusting, and topsoil erosion associated with heavy surface flood irrigation.",
      waterConservation: "Saves billions of liters of groundwater annually and protects water tables from rapid depletion.",
      climateResilience: "Enables farmers to sustain crop yields even when drought conditions reduce available irrigation water.",
      livelihoodImpact: "Permits farmers to expand irrigated acreage with the same water volume, raising net seasonal household income.",
      flowSteps: [
        "Farmer Application on State DBT Portal",
        "Technical Survey & Empaneled Vendor Installation",
        "Targeted Root-Zone Micro-Irrigation & Fertigation",
        "40–60% Water Savings & Increased Crop Productivity"
      ]
    },

    officialLinks: [
      {
        title: "National PMKSY Portal",
        url: "https://pmksy.gov.in",
        type: "portal",
        note: "Apex portal for Pradhan Mantri Krishi Sinchayee Yojana"
      },
      {
        title: "Per Drop More Crop (PDMC) Portal",
        url: "https://perdropmorecrop.gov.in",
        type: "portal",
        note: "Department of Agriculture micro-irrigation management portal"
      },
      {
        title: "Ministry of Jal Shakti",
        url: "https://jalshakti.gov.in",
        type: "ministry",
        note: "Department of Water Resources, River Development and Ganga Rejuvenation"
      }
    ],

    faqs: [
      {
        question: "What percentage of subsidy is provided for drip irrigation under PMKSY?",
        answer: "Subsidy rates vary by state policy and farmer category. Typically, small and marginal farmers receive higher support (up to 55%), while other farmers receive around 45% of benchmark cost, subject to state top-ups."
      },
      {
        question: "Is having an existing water source mandatory to apply for drip irrigation?",
        answer: "Yes. Drip and sprinkler systems require an active water source (such as an open well, tubewell, farm pond, or canal outlet) to connect the pump and filtration units."
      },
      {
        question: "Which crops are best suited for drip irrigation?",
        answer: "Drip irrigation is ideal for wide-spaced crops, horticulture (fruits and vegetables), sugarcane, cotton, and oilseeds. Sprinklers are commonly used for pulses, cereals, and groundnuts."
      },
      {
        question: "Who maintains the drip irrigation system after installation?",
        answer: "Empaneled vendors are mandated to provide warranty coverage, user training, and maintenance support for a specified period (typically 3 years) as part of scheme guidelines."
      },
      {
        question: "Where can farmers get help if they face delays in subsidy disbursement?",
        answer: "Farmers can contact the District Horticulture Officer (DHO) or check grievance redressal tracking on their state micro-irrigation DBT portal."
      }
    ]
  },

  "soil-health-card": {
    id: "soil-health-card",
    slug: "soil-health-card",
    name: "Soil Health Card (SHC) Scheme",
    shortName: "Soil Health Card Scheme",
    tagline: "Scientific Soil Nutrient Profiling & Site-Specific Guidance for Balanced Fertiliser Use",
    heroImage: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Farmer holding rich, dark, fertile soil following balanced nutrient management",
    responsibleEntity: "Integrated Nutrient Management (INM) Division, Department of Agriculture & Farmers Welfare, Ministry of Agriculture & Farmers Welfare, Government of India",
    policyFramework: "Nationwide agricultural scheme launched on 19 February 2015 in Suratgarh, Rajasthan.",
    launchContext: "Initiated to counteract decades of unbalanced fertilizer application, rampant urea overuse, and declining crop responses.",

    about: {
      summary: "The Soil Health Card (SHC) Scheme is a nationwide program designed to assist every farmer in evaluating the nutrient status of their agricultural soil. It issues printed and digital Soil Health Cards every three years detailing 12 essential chemical, physical, and biological parameters alongside customized dosage recommendations for fertilizers and soil amendments.",
      whyIntroduced: "Excessive application of subsidized urea (nitrogen) without considering other nutrients led to severe soil acidification, secondary nutrient exhaustion (zinc, sulfur, boron), and declining crop yield responses per unit of chemical applied. The SHC scheme was introduced to provide scientific diagnosis so farmers apply only what their soil genuinely requires.",
      keyObjectives: [
        "Issue customized Soil Health Cards to all landholding farmers across India on a periodic cycle.",
        "Systematically assess 12 parameters: Macronutrients (N, P, K), Secondary nutrients (S), Micronutrients (Zn, Fe, Cu, Mn, Bo), and Physical indicators (pH, EC, Organic Carbon).",
        "Provide crop-specific dosage recommendations for balanced chemical, organic, and bio-fertilizer application.",
        "Strengthen the national network of district, block, and village-level Soil Testing Laboratories (STLs)."
      ],
      intendedBeneficiaries: "All agricultural landholders, tenant cultivators, and farming families across every state and union territory in India.",
      coreComponents: [
        {
          title: "Systematic Grid Soil Sampling",
          description: "Collection of GPS-referenced soil samples on a grid basis (2.5 ha for irrigated land, 10 ha for rainfed land)."
        },
        {
          title: "Comprehensive 12-Parameter Testing",
          description: "Rigorous laboratory testing in accredited district, university, and private soil laboratories."
        },
        {
          title: "Customized Recommendation Matrix",
          description: "Automated generation of fertilizer dosage charts tailored to specific crops chosen by the farmer."
        },
        {
          title: "Digital National Database",
          description: "Online archiving on the national Soil Health Portal allowing farmers to view and reprint cards anywhere."
        }
      ]
    },

    benefits: [
      {
        icon: "📉",
        title: "Reduced Fertilizer Expenses",
        description: "Eliminates blind application of excess urea and DAP, saving farmers between ₹1,500 and ₹3,500 per acre in unnecessary chemical purchases."
      },
      {
        icon: "⚖️",
        title: "Balanced Soil Chemistry",
        description: "Addresses hidden micronutrient deficiencies (such as zinc and sulfur) that frequently bottleneck crop yields despite heavy nitrogen application."
      },
      {
        icon: "🌾",
        title: "Improved Yields & Crop Quality",
        description: "Providing plants with balanced nutrition strengthens crop tillering, root development, and pest resistance, improving grain weight and market value."
      },
      {
        icon: "🛡️",
        title: "Environmental Protection",
        description: "Curtails nitrate leaching into village groundwater and minimizes agricultural runoff into surrounding streams and ponds."
      }
    ],

    howToAccess: [
      {
        step: 1,
        title: "Participate in Village Grid Sampling",
        description: "Agricultural extension workers or Village Agriculture Assistants collect soil samples following crop harvests according to village grid schedules."
      },
      {
        step: 2,
        title: "Submit a Voluntary Soil Sample",
        description: "If your plot has not been sampled recently, you can collect a representative composite soil sample yourself (0–15 cm depth from 8-10 points across your field, mixed thoroughly)."
      },
      {
        step: 3,
        title: "Deliver to Nearest Soil Testing Laboratory",
        description: "Submit 500 grams of the clean, dry sample to your nearest District Soil Testing Lab, Krishi Vigyan Kendra (KVK), or designated agricultural college."
      },
      {
        step: 4,
        title: "Provide Land and Crop Details",
        description: "Provide your Aadhaar number, contact details, Khasra plot number, and list the crops you intend to grow in the upcoming Kharif and Rabi seasons."
      },
      {
        step: 5,
        title: "Laboratory Chemical Analysis",
        description: "Accredited lab technicians evaluate the 12 prescribed parameters using spectrophotometry, flame photometry, and atomic absorption."
      },
      {
        step: 6,
        title: "Receive Your Printed or Digital Card",
        description: "Obtain your physical Soil Health Card during Gram Sabha distributions or download it directly from the national portal (soilhealth.dac.gov.in)."
      },
      {
        step: 7,
        title: "Consult Extension Experts for Implementation",
        description: "Review the card's fertilizer dosage table with your Village Agriculture Officer or KVK scientist to adjust fertilizer purchases accordingly."
      }
    ],

    documents: [
      "Farmer Name, Father's Name, and Aadhaar Number",
      "Active Mobile Number for status SMS alerts",
      "Land ownership record (Khasra number, Village, Block, District)",
      "GPS location or survey grid identifier (recorded during official sampling)",
      "List of previous crops cultivated and planned seasonal crops",
      "Nominal soil testing fee receipt (in states where voluntary non-scheme tests have a nominal fee)"
    ],

    realLifeExample: {
      title: "Harpreet Singh's Soil Health Card Discovery in Punjab",
      context: "Harpreet Singh, a wheat and paddy farmer, applied heavy doses of urea and DAP each season, yet his wheat yields had stagnated over five consecutive years.",
      action: "During a grid collection campaign, agriculture department staff sampled his field and issued a Soil Health Card. The test revealed that his soil already possessed ample phosphorus, was deficient in zinc, and suffered from low organic carbon.",
      outcome: "Following the card's crop recommendation, Harpreet lowered his DAP purchase by 30%, introduced zinc sulfate, and applied green manure. He saved ₹2,800 per acre in fertilizer costs while achieving healthier tillering and zero lodging.",
      disclaimer: "Illustrative Scenario — For Educational Demonstration"
    },

    impact: {
      summary: "The Soil Health Card Scheme converts soil nutrition from guesswork into precision science, restoring soil vitality across millions of agricultural acres.",
      soilHealth: "Prevents toxic salt accumulation, neutralizes pH imbalances, and stimulates beneficial microbial activity.",
      waterConservation: "Balanced soil structure improves water absorption capacity and reduces irrigation runoff.",
      climateResilience: "Reduces synthetic nitrogen application, curbing agricultural nitrous oxide emissions.",
      livelihoodImpact: "Directly improves net farm margins by cutting unneeded fertilizer expenditures while optimizing crop yields.",
      flowSteps: [
        "Grid Soil Sample Collection (12 Parameters)",
        "Laboratory Testing & Digital Card Generation",
        "Site-Specific Balanced Fertilizer Application",
        "Rebalanced Soil Nutrition & Lower Production Costs"
      ]
    },

    officialLinks: [
      {
        title: "National Soil Health Card Portal",
        url: "https://soilhealth.dac.gov.in",
        type: "portal",
        note: "Official portal to download digital Soil Health Cards and locate STLs"
      },
      {
        title: "Ministry of Agriculture & Farmers Welfare",
        url: "https://agricoop.gov.in",
        type: "ministry",
        note: "Department of Agriculture and Farmers Welfare portal"
      },
      {
        title: "Soil Health Management Guidelines",
        url: "https://agricoop.gov.in",
        type: "guidance",
        note: "Official operational guidelines and testing manuals"
      }
    ],

    faqs: [
      {
        question: "How often are Soil Health Cards issued to farmers?",
        answer: "Under national scheme guidelines, Soil Health Cards are re-issued to farmers on a three-year cycle to track changes in soil fertility over time."
      },
      {
        question: "How can I download my Soil Health Card online?",
        answer: "Visit soilhealth.dac.gov.in, navigate to 'Farmer Corner' or 'Track Your Sample', select your State, District, and enter your Farmer Name or Khasra Number."
      },
      {
        question: "What are the 12 parameters tested on the Soil Health Card?",
        answer: "Macronutrients (Nitrogen, Phosphorus, Potassium), Secondary nutrient (Sulfur), Micronutrients (Zinc, Iron, Copper, Manganese, Boron), and Physical parameters (pH, Electrical Conductivity, and Organic Carbon)."
      },
      {
        question: "Does the Soil Health Card recommend organic alternatives?",
        answer: "Yes. Soil Health Cards provide recommendations for farmyard manure (FYM), vermicompost, bio-fertilizers, and soil conditioners (like gypsum or lime) alongside chemical nutrients."
      },
      {
        question: "Who can help me understand the fertilizer doses on my card?",
        answer: "Your local Village Agriculture Assistant (Kisan Mitra / Gram Sevak), Block Agriculture Officer, or scientists at the nearest Krishi Vigyan Kendra (KVK) provide free guidance on reading your card."
      }
    ]
  },

  "natural-farming": {
    id: "natural-farming",
    slug: "natural-farming",
    name: "National Mission on Natural Farming (NMNF)",
    shortName: "National Mission on Natural Farming",
    tagline: "Chemical-Free Agroecology Based on Indigenous Livestock, In-Situ Biomass & Biological Harmony",
    heroImage: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Farmer tending crops naturally in a diverse chemical-free agroecological field",
    responsibleEntity: "Natural Farming Division, Department of Agriculture & Farmers Welfare, Ministry of Agriculture & Farmers Welfare, Government of India",
    policyFramework: "Expanded from Bhartiya Prakritik Krishi Paddhati (BPKP) into a standalone National Mission on Natural Farming.",
    launchContext: "Instituted to promote cost-free, regenerative agriculture that eliminates chemical inputs, rebuilds living soils, and enhances farmer autonomy.",

    about: {
      summary: "The National Mission on Natural Farming (NMNF) is a dedicated national initiative that promotes chemical-free, non-synthetic agricultural systems grounded in agroecology, indigenous livestock integration, and in-situ biomass recycling. It empowers farmers to replace purchased commercial inputs with natural biological formulations produced right on the farm.",
      whyIntroduced: "Escalating prices of synthetic fertilizers, chemical insecticides, and hybrid seeds have increased rural debt and depleted endemic soil microbiota. NMNF was introduced to institutionalize a regenerative farming methodology that eliminates reliance on external commercial inputs, safeguards biodiversity, and provides clean, poison-free food.",
      keyObjectives: [
        "Promote chemical-free farming across prioritized agricultural landscapes, particularly in river basin corridors and rainfed blocks.",
        "Integrate indigenous cattle (desi cow) into farming systems to utilize native dung and urine for on-farm microbial concoctions.",
        "Eliminate all synthetic fertilizers, chemical weedicides, and chemical insecticides from agricultural ecosystems.",
        "Establish model Gram Panchayat demonstration farms and train Master Trainers (Krishi Sakhis / Community Resource Persons).",
        "Enhance soil organic carbon, water retention, and ecological resistance against weather volatility."
      ],
      intendedBeneficiaries: "Small and marginal farmers, women Self-Help Group (SHG) members, tribal farming communities, and agricultural households in ecologically sensitive corridors.",
      coreComponents: [
        {
          title: "Model Demonstration Plots",
          description: "Establishment of 1-hectare demonstration farms in participating Gram Panchayats to showcase living proofs of natural farming."
        },
        {
          title: "Bio-Input Resource Centers (BRCs)",
          description: "Community-operated centers producing Jeevamrit, Beejamrit, and botanical repellents for farmers who do not own indigenous cows."
        },
        {
          title: "Farmer Master Trainers & Krishi Sakhis",
          description: "Capacity building of community champion farmers who provide continuous, practical peer mentoring in villages."
        },
        {
          title: "Certification & Direct Value Chains",
          description: "Simplified natural farming certification protocols and local marketing linkages for chemical-free produce."
        }
      ]
    },

    benefits: [
      {
        icon: "🚫",
        title: "Zero Expenditure on Synthetic Chemicals",
        description: "All inputs (microbial inoculants, seed treatments, pest repellents) are made on-farm using cow dung, urine, pulse flour, and local leaves."
      },
      {
        icon: "🪱",
        title: "Rebound of Earthworms & Soil Microbes",
        description: "Formulations like Jeevamrit deliver millions of beneficial microorganisms that revitalize dormant soil biology and attract native earthworms."
      },
      {
        icon: "💧",
        title: "Whapasa (Soil Moisture & Aeration)",
        description: "Organic mulching combined with natural microbial action improves soil aeration, reducing overall irrigation water requirements by 30%–50%."
      },
      {
        icon: "🩺",
        title: "Clean, Healthy & Residue-Free Food",
        description: "100% chemical-free produce protects farm families from occupational health risks and guarantees safe food for consumers."
      }
    ],

    howToAccess: [
      {
        step: 1,
        title: "Identify Enrolled Gram Panchayat Clusters",
        description: "Inquire at your Gram Panchayat or Block Agriculture Office whether your village is part of the National Mission on Natural Farming cluster program."
      },
      {
        step: 2,
        title: "Attend Village Training & Demonstration Days",
        description: "Participate in hands-on workshops conducted by Krishi Sakhis, Community Resource Persons (CRPs), or local Krishi Vigyan Kendra (KVK) trainers."
      },
      {
        step: 3,
        title: "Start with a Small Pilot Plot",
        description: "Extension agronomists strongly advise starting on a 0.5 to 1-acre test plot to master preparation of bio-formulations before converting your entire farm."
      },
      {
        step: 4,
        title: "Master Core Bio-Formulation Protocols",
        description: "Learn to prepare Beejamrit (seed treatment), Jeevamrit (liquid microbial culture), Ghanjeevamrit (solid manure), and botanical pest repellents (Neemastra)."
      },
      {
        step: 5,
        title: "Access Local Bio-Input Resource Centers (BRCs)",
        description: "If you lack native cows, visit the nearest village Bio-Input Resource Center to obtain prepared formulations at nominal community charges."
      },
      {
        step: 6,
        title: "Register on the National Natural Farming Portal",
        description: "Enroll on naturalfarming.dac.gov.in to access verified manuals, participate in natural farming certification, and track scheme benefits."
      },
      {
        step: 7,
        title: "Seek Offline Guidance",
        description: "Contact your Village Agriculture Assistant, Women SHG Federation, or nearest KVK for in-person support and free training brochures."
      }
    ],

    documents: [
      "Aadhaar Card or recognized Government Photo ID",
      "Land ownership record (Khasra, Khatauni, or land possession certificate)",
      "Aadhaar-linked bank account passbook copy (for training stipends / DBT assistance)",
      "Active mobile number",
      "Self-declaration expressing commitment to chemical-free natural farming",
      "Gram Panchayat cluster registration form"
    ],

    realLifeExample: {
      title: "Lakshmi Bai's Shift to Natural Farming in Bundelkhand",
      context: "Lakshmi Bai, a smallholder farmer in Uttar Pradesh, faced recurring debt from purchasing chemical fertilizers and pesticide sprays for her two-acre chickpea crop.",
      action: "Guided by a local Krishi Sakhi under the National Mission on Natural Farming, she attended a three-day village demonstration. She set aside one acre for natural farming, treated her seeds with Beejamrit, and applied Jeevamrit made with dung and urine from her indigenous cow.",
      outcome: "She saved ₹4,200 on chemical purchases, and her chickpea plot showed high resistance to pod borer attack. Seeing superior soil moisture and equal yields, she converted her entire holding the following season.",
      disclaimer: "Illustrative Scenario — For Educational Demonstration"
    },

    impact: {
      summary: "NMNF decouples smallholder farmers from chemical input dependency, restoring living agroecosystems that flourish in balance with nature.",
      soilHealth: "Multiplies mycorrhizae and soil bacteria, enriches organic humus, and restores native earthworm activity.",
      waterConservation: "Mulching and Whapasa drastically reduce evaporation losses, cutting irrigation requirements by up to 50%.",
      climateResilience: "Eliminates petrochemical-derived fertilizers, lowering the farm's carbon footprint while bolstering drought resistance.",
      livelihoodImpact: "Eliminates input debt, restores farmer dignity and autonomy, and creates local rural enterprises around bio-input resource centers.",
      flowSteps: [
        "Gram Panchayat Mobilization & KVK Demonstration",
        "On-Farm Concoctions (Jeevamrit, Beejamrit & Mulching)",
        "Microbial Soil Rebound & Whapasa Aeration",
        "Zero Chemical Debt & Thriving Living Agroecosystem"
      ]
    },

    officialLinks: [
      {
        title: "National Natural Farming Portal",
        url: "https://naturalfarming.dac.gov.in",
        type: "portal",
        note: "Official dashboard, guidelines, and resource library for NMNF"
      },
      {
        title: "Ministry of Agriculture & Farmers Welfare",
        url: "https://agricoop.gov.in",
        type: "ministry",
        note: "Department of Agriculture and Farmers Welfare portal"
      },
      {
        title: "National Centre for Organic and Natural Farming",
        url: "https://pgsindia-ncof.gov.in",
        type: "guidance",
        note: "Apex technical body for natural and organic farming standards"
      }
    ],

    faqs: [
      {
        question: "How does Natural Farming differ from conventional Organic Farming?",
        answer: "While organic farming often uses off-farm purchased organic fertilizers and commercial bio-inputs, Natural Farming eliminates purchased inputs altogether, relying strictly on on-farm livestock recycling, Jeevamrit, and in-situ mulching."
      },
      {
        question: "Can a farmer practice Natural Farming without owning an indigenous cow?",
        answer: "Yes. Villages enrolled in the mission establish community Bio-Input Resource Centers (BRCs) where farmers can purchase freshly prepared Jeevamrit and Beejamrit at nominal community rates."
      },
      {
        question: "Does switching to Natural Farming cause an immediate drop in crop yield?",
        answer: "Transitioning soils that are degraded by chemicals may experience a brief adjustment period. Extension experts recommend starting with a pilot plot (0.5 to 1 acre) while building soil humus and microbial activity."
      },
      {
        question: "What are the core components of natural formulations like Jeevamrit?",
        answer: "Jeevamrit is prepared using fresh indigenous cow dung, cow urine, jaggery (organic sugar), pulse flour (besan), and a handful of undisturbed living forest soil, fermented with water for 48–72 hours."
      },
      {
        question: "Where can farmers get certified in Natural Farming?",
        answer: "The Ministry of Agriculture has initiated a dedicated natural farming certification framework accessible through the national portal (naturalfarming.dac.gov.in) and local state agriculture departments."
      }
    ]
  }
};

// Helper methods for easy querying
function getPolicyBySlug(slug) {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().trim();
  return policiesData[cleanSlug] || null;
}

function getAllPolicies() {
  return Object.values(policiesData);
}

// Universal export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    policiesData,
    getPolicyBySlug,
    getAllPolicies
  };
}

if (typeof window !== 'undefined') {
  window.policiesData = policiesData;
  window.getPolicyBySlug = getPolicyBySlug;
  window.getAllPolicies = getAllPolicies;
}
