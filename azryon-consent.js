(function () {
  'use strict';
  var STORAGE_KEY = 'azryon-cookie-consent-v1';
  var VALIDITY_MS = 180 * 24 * 60 * 60 * 1000;
  var GTM_ID = 'GTM-MMNMFP83';
  var banner = document.getElementById('az-cookie-banner');
  var loaded = false;

  function readChoice() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var record = JSON.parse(raw);
      if (!record || (record.choice !== 'accepted' && record.choice !== 'essential')) return null;
      var when = Number(record.updatedAt || 0);
      if (!when || Date.now() - when > VALIDITY_MS) return null;
      return record;
    } catch (error) {
      return null;
    }
  }

  function saveChoice(choice) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        choice: choice,
        updatedAt: Date.now(),
        version: 1
      }));
    } catch (error) {
      // The choice still applies to this page view if browser storage is unavailable.
    }
  }

  function pushConsentState(granted) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied',
      security_storage: 'granted'
    });
    if (granted) {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted',
        functionality_storage: 'granted',
        personalization_storage: 'granted',
        security_storage: 'granted'
      });
    }
  }

  function loadTagManager() {
    if (loaded || document.querySelector('script[data-azryon-gtm]')) return;
    pushConsentState(true);
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var firstScript = document.getElementsByTagName('script')[0];
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(GTM_ID);
    script.setAttribute('data-azryon-gtm', 'true');
    if (firstScript && firstScript.parentNode) firstScript.parentNode.insertBefore(script, firstScript);
    else document.head.appendChild(script);
    loaded = true;
  }

  function showBanner() {
    if (!banner) return;
    banner.hidden = false;
  }

  function hideBanner() {
    if (banner) banner.hidden = true;
  }

  function setChoice(choice) {
    var previous = readChoice();
    saveChoice(choice);
    if (choice === 'accepted') {
      loadTagManager();
      hideBanner();
      return;
    }
    // Signal withdrawal to Google tags before the next navigation/reload.
    if (window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
        analytics_storage: 'denied', functionality_storage: 'denied',
        personalization_storage: 'denied', security_storage: 'granted'
      });
    }
    hideBanner();
    if ((previous && previous.choice === 'accepted') || loaded) window.location.reload();
  }

  document.addEventListener('DOMContentLoaded', function () {
    var stored = readChoice();
    if (stored && stored.choice === 'accepted') loadTagManager();
    if (!stored) showBanner();

    document.querySelectorAll('[data-az-cookie-settings]').forEach(function (button) {
      button.addEventListener('click', showBanner);
    });
    if (banner) {
      var accept = banner.querySelector('[data-az-cookie-accept]');
      var essential = banner.querySelector('[data-az-cookie-essential]');
      if (accept) accept.addEventListener('click', function () { setChoice('accepted'); });
      if (essential) essential.addEventListener('click', function () { setChoice('essential'); });
    }
  });
})();
