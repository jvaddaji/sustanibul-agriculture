const fs = require('fs');
const path = require('path');
const http = require('http');

console.log("====================================================");
console.log("🧪 RUNNING COMPREHENSIVE AUTOMATED TEST SUITE");
console.log("   TEAM AQUA - Sustainable Agriculture Policies");
console.log("====================================================\n");

// 1. DATA VALIDATION: Test data/policies-data.js
const { policiesData, getPolicyBySlug, getAllPolicies } = require('../data/policies-data.js');

const expectedSlugs = ['nmsa', 'pkvy', 'pmksy', 'soil-health-card', 'natural-farming'];

console.log("1. Validating Policies Dataset:");
if (Object.keys(policiesData).length !== 5) {
  throw new Error(`Expected exactly 5 policies, found ${Object.keys(policiesData).length}`);
}

expectedSlugs.forEach(slug => {
  const policy = getPolicyBySlug(slug);
  if (!policy) {
    throw new Error(`Missing policy for slug: ${slug}`);
  }
  
  // Verify mandatory fields
  if (!policy.name || !policy.shortName || !policy.tagline || !policy.heroImage) {
    throw new Error(`Missing core header fields for: ${slug}`);
  }

  // Verify About section
  if (!policy.about || !policy.about.summary || !policy.about.whyIntroduced || !policy.about.keyObjectives || policy.about.keyObjectives.length === 0) {
    throw new Error(`Invalid about section for: ${slug}`);
  }

  // Verify Benefits section
  if (!Array.isArray(policy.benefits) || policy.benefits.length === 0) {
    throw new Error(`Missing benefits for: ${slug}`);
  }

  // Verify How to Access steps
  if (!Array.isArray(policy.howToAccess) || policy.howToAccess.length === 0) {
    throw new Error(`Missing howToAccess steps for: ${slug}`);
  }

  // Verify Documents Checklist
  if (!Array.isArray(policy.documents) || policy.documents.length === 0) {
    throw new Error(`Missing documents checklist for: ${slug}`);
  }

  // Verify Real-Life Example
  if (!policy.realLifeExample || !policy.realLifeExample.title || !policy.realLifeExample.context || !policy.realLifeExample.action || !policy.realLifeExample.outcome) {
    throw new Error(`Incomplete real-life example for: ${slug}`);
  }
  if (!policy.realLifeExample.disclaimer.includes("Illustrative Scenario")) {
    throw new Error(`Missing required illustrative disclaimer on example for: ${slug}`);
  }

  // Verify Impact section
  if (!policy.impact || !policy.impact.soilHealth || !policy.impact.waterConservation || !policy.impact.climateResilience || !policy.impact.livelihoodImpact || !policy.impact.flowSteps) {
    throw new Error(`Incomplete impact section for: ${slug}`);
  }

  // Verify Official Links
  if (!Array.isArray(policy.officialLinks) || policy.officialLinks.length === 0) {
    throw new Error(`Missing official links for: ${slug}`);
  }
  policy.officialLinks.forEach(link => {
    if (!link.url || (!link.url.includes('.gov.in') && !link.url.includes('.nic.in') && !link.url.includes('jaivikkheti.in'))) {
      throw new Error(`Non-verified official domain link in ${slug}: ${link.url}`);
    }
  });

  // Verify FAQ section (at least 5 FAQs)
  if (!Array.isArray(policy.faqs) || policy.faqs.length < 5) {
    throw new Error(`Policy ${slug} has ${policy.faqs ? policy.faqs.length : 0} FAQs; at least 5 required`);
  }

  console.log(`  ✓ Policy "${policy.shortName}" (${slug}): All 9 sections verified.`);
});

console.log("✓ All 5 policies passed structured data verification.\n");

// 2. FILE SYSTEM & STATIC FALLBACK VALIDATION
console.log("2. Validating Project Files & Static Hosting Fallbacks:");
const requiredFiles = [
  'index.html',
  'style.css',
  'script.js',
  'server.js',
  'package.json',
  'policy-detail.html',
  '404.html',
  'policies/nmsa/index.html',
  'policies/pkvy/index.html',
  'policies/pmksy/index.html',
  'policies/soil-health-card/index.html',
  'policies/natural-farming/index.html',
  'policies/index.html'
];

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required file: ${file}`);
  }
  console.log(`  ✓ File exists: ${file}`);
});

console.log("✓ File structure and static deployment fallbacks verified.\n");

// 3. EXPRESS SERVER ROUTING TESTS
console.log("3. Testing Express Backend Routes:");
const { app, server } = require('../server.js');

function testRoute(routePath, expectedStatus) {
  return new Promise((resolve, reject) => {
    const port = server.address().port;
    const req = http.get(`http://localhost:${port}${routePath}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode === expectedStatus) {
          console.log(`  ✓ Route: ${routePath} -> Status ${res.statusCode} (Expected ${expectedStatus})`);
          resolve(data);
        } else {
          reject(new Error(`Route ${routePath} returned status ${res.statusCode}, expected ${expectedStatus}`));
        }
      });
    });
    req.on('error', err => reject(err));
  });
}

async function runServerTests() {
  try {
    // Test Home
    await testRoute('/', 200);

    // Test Redirect
    await testRoute('/policies', 302);

    // Test 5 Policy Detail Routes
    for (const slug of expectedSlugs) {
      const html = await testRoute(`/policies/${slug}`, 200);
      if (!html.includes('id="policy-name"')) {
        throw new Error(`Policy route /policies/${slug} did not return policy-detail template!`);
      }
    }

    // Test Unknown Policy Route (should return 404)
    const notFoundHtml = await testRoute('/policies/unknown-scheme-xyz', 404);
    if (!notFoundHtml.includes('404 - Policy or Page Not Found')) {
      throw new Error("Unknown policy did not return 404 page!");
    }

    // Test Unknown General Route (should return 404)
    await testRoute('/non-existent-page-123', 404);

    // Test API: All policies
    const apiAllStr = await testRoute('/api/policies', 200);
    const apiAll = JSON.parse(apiAllStr);
    if (!apiAll.success || apiAll.count !== 5) {
      throw new Error("API /api/policies failed count check!");
    }
    console.log("  ✓ API: /api/policies returned 5 policies successfully.");

    // Test API: Single policy
    const apiSingleStr = await testRoute('/api/policies/nmsa', 200);
    const apiSingle = JSON.parse(apiSingleStr);
    if (!apiSingle.success || apiSingle.data.slug !== 'nmsa') {
      throw new Error("API /api/policies/nmsa failed!");
    }
    console.log("  ✓ API: /api/policies/nmsa returned NMSA details successfully.");

    // Test API: 404 policy
    const api404Str = await testRoute('/api/policies/invalid-fake-slug', 404);
    const api404 = JSON.parse(api404Str);
    if (api404.success !== false) {
      throw new Error("API /api/policies/invalid-fake-slug should return success: false!");
    }
    console.log("  ✓ API: /api/policies/invalid-fake-slug returned 404 JSON error successfully.");

    console.log("\n====================================================");
    console.log("🎉 ALL TESTS PASSED! APPLICATION 100% VERIFIED!");
    console.log("====================================================");

    server.close(() => {
      process.exit(0);
    });
  } catch (err) {
    console.error("✗ Server Test Error:", err.message);
    server.close(() => {
      process.exit(1);
    });
  }
}

runServerTests();
