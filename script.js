const bmiForm = document.getElementById("bmi-form");
const bmiResult = document.getElementById("bmi-result");
const waterForm = document.getElementById("water-form");
const waterResult = document.getElementById("water-result");
const tipsBtn = document.getElementById("tips-btn");
const tipsResult = document.getElementById("tips-result");
const contactForm = document.getElementById("contact-form");
const contactResult = document.getElementById("contact-result");

const tips = [
  "Mulai hari dengan segelas air hangat dan lemon.",
  "Lakukan peregangan ringan setiap 60 menit bekerja.",
  "Utamakan sayuran berdaun hijau dalam setiap porsi makan.",
  "Tidur cukup minimal 7 jam per malam untuk regenerasi tubuh.",
  "Batasi konsumsi gula tambahan hingga 25 gram per hari.",
  "Gunakan tangga dibanding lift untuk aktivitas fisik ringan.",
  "Latih pernapasan 4-7-8 untuk menurunkan stres.",
  "Konsumsi buah kaya serat seperti apel atau pir setiap hari."
];

function formatNumber(value) {
  return Number(value).toFixed(1);
}

function interpretBMI(bmi) {
  if (bmi < 18.5) return "Kurus (butuh peningkatan berat badan)";
  if (bmi < 24.9) return "Normal (pertahankan pola hidup sehat)";
  if (bmi < 29.9) return "Berat badan berlebih (mulai defisit kalori)";
  return "Obesitas (konsultasikan dengan dokter)";
}

if (bmiForm) {
  bmiForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;

    if (!weight || !height) {
      bmiResult.textContent = "Mohon isi berat dan tinggi badan dengan benar.";
      return;
    }

    const bmi = weight / (height * height);
    bmiResult.textContent = `BMI Anda ${formatNumber(bmi)} • ${interpretBMI(bmi)}`;
  });
}

if (waterForm) {
  waterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const goal = parseFloat(document.getElementById("goal-water").value);
    const current = parseFloat(document.getElementById("current-water").value);

    if (goal <= 0) {
      waterResult.textContent = "Target harus lebih dari 0 liter.";
      return;
    }

    const remaining = goal - current;
    if (remaining <= 0) {
      waterResult.textContent = "Luar biasa! Target hidrasi sudah tercapai.";
    } else {
      waterResult.textContent = `Butuh ${formatNumber(remaining)} L lagi untuk capai target.`;
    }
  });
}

if (tipsBtn) {
  tipsBtn.addEventListener("click", () => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    tipsResult.textContent = randomTip;
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email) {
      contactResult.textContent = "Nama dan email wajib diisi.";
      contactResult.style.color = "#dc2626";
      return;
    }

    contactResult.textContent = `Terima kasih ${name}, kami akan merespons ke ${email}.`;
    contactResult.style.color = "#16a34a";
    contactForm.reset();
  });
}

