import { init, trackEvent } from "@aptabase/web";

init("A-US-3601586863");

const appStoreButton = document.getElementById("app-store");

if (appStoreButton) {
  appStoreButton.onclick = () => {
    trackEvent("clicked app store");
  };
}
