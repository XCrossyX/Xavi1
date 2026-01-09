// ===== PRZEGLĄDARKA =====
function openBrowser() {
    window.open("https://www.google.com", "_blank");
}

// ===== YOUTUBE =====
function openYouTube() {
    window.open("https://www.youtube.com", "_blank");
}

// ===== CHATGPT =====
function openChatGPT() {
    window.open("https://chat.openai.com", "_blank");
}

// ===== USTAWIENIA =====
function openSettings() {
    window.location.href = "settings.html";
}

// ===== KONTAKTY =====
function openContacts() {
    window.location.href = "contacts.html";
}

// ===== WIADOMOŚCI =====
function openMessages() {
    window.location.href = "messages.html";
}

// ===== APARAT =====
function openCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            const video = document.createElement("video");
            video.srcObject = stream;
            video.autoplay = true;
            video.style.width = "100%";
            video.style.height = "100%";

            const screen = document.querySelector(".screen");
            screen.innerHTML = "";
            screen.appendChild(video);
        })
        .catch(error => {
            alert("Brak dostępu do aparatu");
        });
}

