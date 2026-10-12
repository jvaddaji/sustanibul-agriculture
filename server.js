/**
 * TEAM AQUA - Government Policies for Sustainable Agriculture in India and Their Impact
 * Express.js Backend Server
 */

const express = require('express');
const path = require('path');
const fs = require('fs');
const { policiesData, getPolicyBySlug, getAllPolicies } = require('./data/policies-data.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable JSON middleware
app.use(express.json());

// Route: Redirect /policies and /policies/ to the policies section on the homepage
app.get(['/policies', '/policies/'], (req, res) => {
  res.redirect('/#policies');
});

// Route: API - Get all policies summary
app.get('/api/policies', (req, res) => {
  res.json({
    success: true,
    count: getAllPolicies().length,
    data: getAllPolicies().map(p => ({
      id: p.id,
      slug: p.slug,
      name: p.name,
      shortName: p.shortName,
      tagline: p.tagline,
      responsibleEntity: p.responsibleEntity,
      heroImage: p.heroImage
    }))
  });
});

// Route: API - Get single policy details by slug
app.get('/api/policies/:slug', (req, res) => {
  const policy = getPolicyBySlug(req.params.slug);
  if (policy) {
    res.json({ success: true, data: policy });
  } else {
    res.status(404).json({ success: false, error: 'Policy not found', requestedSlug: req.params.slug });
  }
});

// Route: Policy Detail Page (/policies/:slug) - Checked BEFORE static directory middleware
app.get(['/policies/:slug', '/policies/:slug/'], (req, res, next) => {
  const slug = req.params.slug ? req.params.slug.toLowerCase().trim() : '';
  const policy = getPolicyBySlug(slug);

  if (policy) {
    res.sendFile(path.join(__dirname, 'policy-detail.html'));
  } else {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
  }
});

// Route: Home Page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve static assets from project root
app.use(express.static(__dirname));

// Serve static assets when accessed via /policies/:slug path
app.use('/policies', express.static(__dirname));

// 404 Middleware for any unknown routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Start Express Server
const server = app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🌱 TEAM AQUA - Sustainable Agriculture in India`);
  console.log(`🚀 Express server running at: http://localhost:${PORT}`);
  console.log(`📖 Policy explorer available at: http://localhost:${PORT}/#policies`);
  console.log(`====================================================`);
});

module.exports = { app, server };
