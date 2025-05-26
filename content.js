const websitesToBlock = [
    "cathedralresearch.com"
];

// chrome.webRequest.onBeforeRequest.addListener(
//   function(details) {
//     for (const site of blockedSites) {
//       if (details.url.includes(site)) {
//         return { redirectUrl: chrome.runtime.getURL("index.html") };
//       }
//     }
//   },
//   { urls: ["<all_urls>"] },
//   ["blocking"]
// );

// let focusTime = true;

// const blockBadSites = async () => {
//     if (focusTime === true) {
//         for (const domain of websitesToBlock) {
//             if (window.location.hostname.includes(domain)) {
//                 let newNode = document.createElement("div");
//                 newNode.id = "test12345";
//                 newNode.style.cssText = "position:absolute;width=100%;height=100%;z-index=100;background-color=blue;"
//                 newNode.innerHTML = `<div style="color:white;display:flex;"> get to work </div>`;
//                 document.body.style.overflow = "hidden";
//                 document.body.appendChild(newNode);
//             }
//         }
//     }
// };

// const unblockBadSites = async () => {

// };

// blockBadSites();

// chrome.runtime.onMessage.addListener((message) => {

// });