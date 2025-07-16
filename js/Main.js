window.addEventListener("DOMContentLoaded", () => {
  const wind = new Audio("Sounds/dark-wind-19785.mp3");
  const heartbeat = new Audio("Sounds/heartbeat-sound-effect-111218.mp3");
  const dirt = new Audio("Sounds/digging-with-shovel-63069.mp3");
  const crack = new Audio("Sounds/footsteps-on-ice-chunks-22940.mp3");

  // إعداد الصوت
  wind.loop = true;
  wind.volume = 1.0;
  heartbeat.volume = 1.0;
  dirt.volume = 0.1;
  crack.volume = 0.15;

  let audioStarted = false;

  const startAudio = () => {
    if (audioStarted) return;
    audioStarted = true;

    // ✅ دقات القلب أولًا
    heartbeat.play().catch((err) => {
      console.warn("فشل تشغيل heartbeat:", err);
    });

    setTimeout(() => {
      heartbeat.pause();
      heartbeat.currentTime = 0;

      // ✅ بعد 3 ثواني: تشغيل صوت الرياح
      wind.play().catch((err) => {
        console.warn("فشل تشغيل wind:", err);
      });

      // تشغيل الرياح 10 ثواني
      setTimeout(() => {
        wind.pause();
        wind.currentTime = 0;
      }, 10000);
    }, 3000);
  };

  // ✅ السماح بالتفاعل مرة واحدة فقط بعد تحميل الصفحة بالكامل
  const allowInteraction = () => {
    console.log("🖱️ تم التفاعل - بدء تشغيل الصوت");
    startAudio();
    window.removeEventListener("click", allowInteraction);
    window.removeEventListener("touchstart", allowInteraction);
  };

  window.addEventListener("click", allowInteraction);
  window.addEventListener("touchstart", allowInteraction);

  // 🎧 صوت الحفر
  document.querySelectorAll(".grave-3d").forEach((grave) => {
    grave.addEventListener("mouseenter", () => {
      if (!dirt.paused) dirt.pause();
      dirt.currentTime = 0;
      dirt.play().catch((err) => {
        console.warn("فشل تشغيل dirt:", err);
      });

      setTimeout(() => {
        dirt.pause();
        dirt.currentTime = 0;
      }, 2500);
    });
  });

  // 🎧 صوت الكسر
  document.querySelectorAll(".rip").forEach((rip) => {
    rip.addEventListener("mouseenter", () => {
      if (!crack.paused) crack.pause();
      crack.currentTime = 0;
      crack.play().catch((err) => {
        console.warn("فشل تشغيل crack:", err);
      });

      setTimeout(() => {
        crack.pause();
        crack.currentTime = 0;
      }, 1800);
    });
  });
});
