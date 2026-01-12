// ======================
// AUDIO
// ======================
const soundBenar = new Audio("audio/benar.mp3");
const soundSalah = new Audio("audio/salah.mp3");

// Debug kalau audio tidak ketemu
soundBenar.onerror = () => console.log("Audio BENAR tidak ditemukan");
soundSalah.onerror = () => console.log("Audio SALAH tidak ditemukan");

// ======================
// JAWABAN BENAR
// ======================
function jawabanBenar() {
    const card = document.querySelector(".bg-white");

    soundBenar.currentTime = 0;
    soundBenar.play();

    card.classList.remove("animate-shake");
    card.classList.add("animate-pop");

    setTimeout(() => card.classList.remove("animate-pop"), 400);

    tampilkanPopup(
        "Jawaban Benar ✅",
        "Dalil ada pada QS. Thoha : 5 — “(Yaitu) Rabb Yang Maha Pemurah, Yang bersemayam di atas Arsy.”"
    );
}

// ======================
// JAWABAN SALAH
// ======================
function jawabanSalah() {
    const card = document.querySelector(".bg-white");

    soundSalah.currentTime = 0;
    soundSalah.play();

    card.classList.remove("animate-pop");
    card.classList.add("animate-shake");

    setTimeout(() => card.classList.remove("animate-shake"), 400);

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
