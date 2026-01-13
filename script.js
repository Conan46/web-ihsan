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

// ======================
// JAWABAN BENAR
// ======================
function jawabanBenar(event) {
    const btn = document.getElementById("btnBenar");
    const card = document.getElementById("card");

    // ripple tombol
    createRipple(event, btn, "ripple-green");

    // glow CARD
    card.classList.remove("animate-glow-card");
    void card.offsetWidth; // reset animasi
    card.classList.add("animate-glow-card");

    setTimeout(() => {
        tampilkanPopup(
            "Jawaban Benar ✅",
            "Dalil ada pada QS. Thoha : 5 — “(Yaitu) Rabb Yang Maha Pemurah, Yang bersemayam di atas Arsy.”"
        );
    }, 300);
}



// ======================
// JAWABAN SALAH
// ======================
function jawabanSalah(event) {
    const btn = document.getElementById("btnSalah");
    const body = document.body;

    createRipple(event, btn, "ripple-red");

    body.classList.remove("shake-screen");
    void body.offsetWidth;
    body.classList.add("shake-screen");

    setTimeout(() => {
        tampilkanPopup(
            "Jawaban Salah ❌",
            "Allah tidak berada di mana-mana. Allah Maha Tinggi dan bersemayam di atas Arsy sesuai dengan kebesaran-Nya."
        );
    }, 300);
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
