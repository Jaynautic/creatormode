const offButton = document.getElementById("off-button");
const timeoutButton = document.getElementById("timeout-button");
const testText = document.getElementById("test-text");
const rulesetId = "ruleset_1";

function updateUI(isBlocked) {
  testText.textContent = isBlocked ? "🔒 Sites Blocked" : "✅ Sites Unblocked";
  offButton.textContent = isBlocked ? "Unblock" : "Block";
}

function setBlockState(isBlocked) {
  chrome.storage.local.set({ isBlocked });
  chrome.declarativeNetRequest.updateEnabledRulesets({
    enableRulesetIds: isBlocked ? [rulesetId] : [],
    disableRulesetIds: isBlocked ? [] : [rulesetId]
  }, () => {
    if (chrome.runtime.lastError) {
      console.error("DNR update failed:", chrome.runtime.lastError);
    }
  });
}

offButton.addEventListener('click', function() {
    chrome.storage.local.get("isBlocked", (data) => {
        const newState = !data.isBlocked;
        updateUI(newState);
        setBlockState(newState);
    });
});

timeoutButton.addEventListener('click', function() {
    chrome.storage.local.get("isBlocked", (data) => {
        const newState = !data.isBlocked;
        updateUI(newState);
        setBlockState(newState);
    });

    setTimeout(() => {
        chrome.storage.local.get("isBlocked", (data) => {
            const newState = !data.isBlocked;
            updateUI(newState);
            setBlockState(newState);
        });
    }, "10000");
});

chrome.storage.local.get("isBlocked", (data) => {
  const currentState = !!data.isBlocked;
  updateUI(currentState);
});