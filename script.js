// ======================
// AUDIO
// ======================
const soundBenar = new Audio("audio/benar.mp3");
const soundSalah = new Audio("audio/salah.mp3");

soundBenar.onerror = () => console.log("Audio BENAR tidak ditemukan");
soundSalah.onerror = () => console.log("Audio SALAH tidak ditemukan");

function createRipple(event, element, color) {
    const rect = element.getBoundingClientRect();
    const circle = document.createElement("span");
    const size = Math.max(rect.width, rect.height);

    const x = (event.touches ? event.touches[0].clientX : event.clientX) - rect.left - size / 2;
    const y = (event.touches ? event.touches[0].clientY : event.clientY) - rect.top - size / 2;

    circle.style.width = circle.style.height = `${size}px`;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    circle.className = `ripple ${color}`;

    element.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
}

function showMasyaAllah() {
    const card = document.getElementById("card");
    const text = document.createElement("div");

    text.innerText = "MasyaAllah";
    text.className = "masyaallah";

    card.appendChild(text);

    setTimeout(() => text.remove(), 1200);
}


// ======================
// JAWABAN BENAR
// ======================
function jawabanBenar(event) {
    const btn = document.getElementById("btnBenar");
    const card = document.getElementById("card");

    soundBenar.currentTime = 0;
    soundBenar.play();

    // Ripple
    createRipple(event, btn, "ripple-green");

    // Glow ke CARD
    card.classList.remove("animate-glow");
    void card.offsetWidth;
    card.classList.add("animate-glow");

    // MasyaAllah
    showMasyaAllah();

    tampilkanPopup(
        "Jawaban Benar ✅",
        "Dalil ada pada QS. Thoha : 5 — “(Yaitu) Rabb Yang Maha Pemurah, Yang bersemayam di atas Arsy.”"
    );
}






// ======================
// JAWABAN SALAH
// ======================
function jawabanSalah(event) {
    const btn = document.getElementById("btnSalah");

    soundSalah.currentTime = 0;
    soundSalah.play();

    createRipple(event, btn, "ripple-red");

    tampilkanPopup(
        "Jawaban Salah ❌",
        "Allah tidak berada di mana-mana. Allah Maha Tinggi dan bersemayam di atas Arsy sesuai dengan kebesaran-Nya."
    );
}




// ======================
// POPUP
// ======================
function tampilkanPopup(judul, teks) {
    document.getElementById("popupTitle").innerText = judul;
    document.getElementById("popupText").innerText = teks;
    document.getElementById("popup").classList.remove("hidden");
    document.getElementById("popup").classList.add("flex");
}

function tutupPopup() {
    document.getElementById("popup").classList.add("hidden");
    document.getElementById("popup").classList.remove("flex");
}

// ======================
// DARK MODE
// ======================
function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
}
