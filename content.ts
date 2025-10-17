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

const getLinkedInMemberId = (url: string): string | null | void => {
  const profilePublicId = url.split("/in/")[1]?.split("/")[0]
  console.log('profilePublicId:', profilePublicId)

  const codeEls = [...document.querySelectorAll("code")]
  console.log('codeEls:', codeEls)

/*
  const target = codeEls.find((el) =>
    el.textContent.includes("fs_miniProfile")
  )
  if (!target) return null

  try {
    const json = JSON.parse(target.textContent)
    const included = json?.included ?? []

    const profile = included.find(
      (p) =>
        p.publicIdentifier === profilePublicId &&
        p.entityUrn?.startsWith("urn:li:fs_miniProfile:")
    )

    return profile?.entityUrn?.split(":").pop() || null
  } catch {
    return null
  }*/
}

function initOverlay(url: string) {
  // Deine Initialisierung hier
  console.log("🔁 URL change detected:", url)

  const memberId = getLinkedInMemberId(url)
}

// Direkt beim Start aufrufen
onNavigationChange((url) => {
  initOverlay(url)
})

// Also apply when DOM is ready (backup)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Use the same safe approach
  })
}
