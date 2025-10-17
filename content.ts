import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.linkedin.com/*"],
  all_frames: true
}

let lastUrl = location.href

function onNavigationChange(callback: (url: string) => void) {
  // Hook pushState
  const pushState = history.pushState
  history.pushState = function (...args) {
    pushState.apply(this, args)
    callback(location.href)
  }

  // Hook replaceState
  const replaceState = history.replaceState
  history.replaceState = function (...args) {
    replaceState.apply(this, args)
    callback(location.href)
  }

  // Hook popstate (Back/Forward)
  window.addEventListener("popstate", () => callback(location.href))

  // Optional: Observe DOM to catch async view loads (like profile content)
  const observer = new MutationObserver(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href
      callback(location.href)
    }
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true
  })
}

function initOverlay(url: string) {
  // Deine Initialisierung hier
  console.log("🔁 URL change detected:", url)
  // Hier z. B. neue URN holen oder Overlay rendern
}

// Direkt beim Start aufrufen
onNavigationChange((url) => {
  initOverlay(url)
})