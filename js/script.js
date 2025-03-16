async function fetchVersion() {
    try {
        // JSOn file fetch karo
        let response = await fetch("https://urnjoya.github.io/pwacloud/json/version.json");
        // response ko json mein convert karo
        let data = await response.json();

        document.getElementById("version-info").innerHTML = `Version: ${data.version} last update: ${data.last_update}`;
    }
    catch (error) {
        console.log("Version fetch failed:", error);
    }
}

// Page load hone par version fetch karo
window.onload = fetchVersion;
