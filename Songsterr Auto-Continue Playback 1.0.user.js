// ==UserScript==
// @name         Songsterr Auto-Continue Playback
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically clicks "continue playback" popup on Songsterr
// @match        https://www.songsterr.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Observe DOM changes for dynamically added popup
    const observer = new MutationObserver(() => {
        const btn = Array.from(document.querySelectorAll('a')).find(a => a.textContent.trim() === "continue playback");
        if (btn) {
            btn.click();
            console.log('Clicked "continue playback"');
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
