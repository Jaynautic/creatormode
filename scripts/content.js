if (location.hostname.includes("x.com") || location.hostname.includes("pinterest.com")) {
  chrome.storage.local.get("isBlocked", (result) => {
        if (result.isBlocked) { location.replace(chrome.runtime.getURL("redirect.html")) }
    });
};

// if (location.hostname.includes("x.com") || location.hostname.includes("pinterest.com")) {
//   location.replace(chrome.runtime.getURL("redirect.html"));
// }
