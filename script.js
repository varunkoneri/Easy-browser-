let apps = [
  { name: "YouTube", url: "https://youtube.com" },
  { name: "Google", url: "https://google.com" },
  { name: "ChatGPT", url: "https://chat.openai.com" },
  { name: "Wikipedia", url: "https://wikipedia.org" },
  { name: "Calculator", url: "https://google.com/search?q=calculator" },

  // Extra websites
  { name: "Instagram", url: "https://instagram.com" },
  { name: "X (Twitter)", url: "https://x.com" },
  { name: "Spotify", url: "https://spotify.com" },
  { name: "Games (Poki)", url: "https://poki.com" },
  { name: "Gmail", url: "https://mail.google.com" },
  { name: "Google Maps", url: "https://maps.google.com" },
  { name: "Amazon", url: "https://amazon.in" },
  { name: "Flipkart", url: "https://flipkart.com" },
  { name: "Disney+ Hotstar", url: "https://www.hotstar.com" },
  { name: "JioCinema", url: "https://jiocinema.com" }
];

function loadApps() {
  let list = document.getElementById("appList");
  list.innerHTML = "";

  apps.forEach(app => {
    let box = document.createElement("div");
    box.className = "app";
    box.innerHTML = `
      <h3>${app.name}</h3>
      <button onclick="openApp('${app.url}')">Open</button>
    `;
    list.appendChild(box);
  });
}

function openApp(url) {
  window.open(url, "_blank");  
}

loadApps();
