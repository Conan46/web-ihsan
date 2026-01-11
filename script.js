function jawabanBenar() {
    document.getElementById("judul").innerHTML = "Jawaban Benar ✅";
    document.getElementById("teks").innerHTML =
        "Dalil ada pada QS. Thoha : 5 “(Yaitu) Rabb Yang Maha Pemurah, Yang bersemayam di atas Arsy.”";
}

function jawabanSalah() {
    document.getElementById("judul").innerHTML = "Jawaban Salah ❌";
    document.getElementById("teks").innerHTML =
        "Karena Allah tidak mungkin berada di tempat-tempat yang kotor (wal ‘iyadzubillah).";
}
