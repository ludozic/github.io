// script.js

// Get the current path
const path = window.location.pathname;

// Set the iframe source based on the current path
const targetUrl = `https://ldeos-tech-solutions-mefpgm9.gamma.site${path}`;
const iframe = document.getElementById('contentFrame');

// Set the iframe source
iframe.src = targetUrl;

// Check if the iframe loads successfully
iframe.onload = function() {
    console.log("Iframe loaded: " + targetUrl);
};

iframe.onerror = function() {
    console.error("Error loading: " + targetUrl);
};