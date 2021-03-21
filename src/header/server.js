#!/usr/bin/env node

const fs = require('fs');
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');

const bundleRenderer = createBundleRenderer(
  // Load the SSR bundle with require.
  require('../../dist/header/vue-ssr-bundle.json'),
  {
    // Yes, I know, readFileSync is bad practice. It's just shorter to read here.
    template: fs.readFileSync('./src/header/index.html', 'utf-8')
  }
);

// Create the express app.
const app = express();

// Serve static assets from ./dist on the /dist route.
app.use('/dist/header', express.static('dist/header'));

// Render all other routes with the bundleRenderer.
app.get('*', (req, res) => {
  bundleRenderer
    // Renders directly to the response stream.
    // The argument is passed as "context" to main.server.js in the SSR bundle.
    .renderToStream({url: req.path})
    .pipe(res);
});

const port = 3001

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
