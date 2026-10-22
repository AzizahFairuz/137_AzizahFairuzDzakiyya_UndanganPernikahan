// Variabel Pemutar Musik
let isPlaying = false;
const audio = document.getElementById("wedding-audio");
const audioIcon = document.getElementById("audio-icon");
const audioControl = document.getElementById("audio-control");

// Elemen Tombol
const btnBuka = document.getElementById("btn-buka");
const heroCover = document.getElementById("hero-cover");
const btnCopy = document.getElementById("btn-copy");

// 1. Fungsi Toggle Putar / Henti Musik
function toggleAudio() {
  if (isPlaying) {
    audio.pause();
    audioIcon.className = "bi bi-disc fs-3";
  } else {
    audio.play();
    audioIcon.className = "bi bi-disc-fill fs-3 text-dark";
  }
  isPlaying = !isPlaying;
}

// Event Klik Tombol Musik
audioControl.addEventListener("click", toggleAudio);

// 2. Event Buka Undangan
btnBuka.addEventListener("click", function() {
  heroCover.classList.add("opened");
  toggleAudio();
});

// 3. Event Salin Rekening
if (btnCopy) {
  btnCopy.addEventListener("click", function() {
    const nomorRekening = "9876543210";
    navigator.clipboard.writeText(nomorRekening);
    alert("Nomor rekening berhasil disalin: " + nomorRekening);
  });
}