import styleText from "data-text:~/contents/overlay.scss";
import type {
  PlasmoCSConfig,
  PlasmoGetInlineAnchor,
  PlasmoGetStyle
} from "plasmo"
import { ThemeProvider } from "~theme"
import "@mantine/core/styles.css";
//see https://github.com/PlasmoHQ/plasmo/issues/776#issuecomment-1811072653
import "~styles/mantine-override.css";

import { setMantineColorScheme } from "~utils";

export const config: PlasmoCSConfig = {
  matches: ["https://www.linkedin.com/*"],
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => ({
  element: document.querySelector(".pv-top-card-v2-ctas__custom"),
  insertPosition: "afterend"
})

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

function PlasmoOverlay() {
  setMantineColorScheme("light")
  return (
    <ThemeProvider>
      <button className="button">Add to FeedBuilder</button>
    </ThemeProvider>
  )
}

export default PlasmoOverlay
