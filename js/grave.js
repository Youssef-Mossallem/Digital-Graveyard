function initializeGraveEvents() {
  const wind = new Audio("../Sounds/dark-wind-19785.mp3");
  const heartbeat = new Audio("../Sounds/heartbeat-sound-effect-111218.mp3");
  const dirt = new Audio("../Sounds/digging-with-shovel-63069.mp3");
  const crack = new Audio("../Sounds/footsteps-on-ice-chunks-22940.mp3");
  const graveSound = document.getElementById("graveSound");

  // إعداد الصوت
  wind.loop = true;
  wind.volume = 1.0;
  heartbeat.volume = 1.0;
  dirt.volume = 0.1;
  crack.volume = 0.15;
  graveSound.volume = 0.2;

  let audioStarted = false;

  const startAudio = () => {
    if (audioStarted) return;
    audioStarted = true;

    heartbeat.play().catch(console.warn);

    setTimeout(() => {
      heartbeat.pause();
      heartbeat.currentTime = 0;

      wind.play().catch(console.warn);
    }, 3000);
  };

  document.body.addEventListener("click", startAudio, { once: true });
  document.body.addEventListener("touchstart", startAudio, { once: true });

  // صوت الحفر عند مرور الماوس
  document.querySelectorAll(".grave-3d").forEach((grave) => {
    grave.addEventListener("mouseenter", () => {
      dirt.pause();
      dirt.currentTime = 0;
      dirt.play().catch(console.warn);
      setTimeout(() => {
        dirt.pause();
        dirt.currentTime = 0;
      }, 2500);
    });
  });

  // صوت الكسر عند مرور الماوس على RIP
  document.querySelectorAll(".rip").forEach((rip) => {
    rip.addEventListener("mouseenter", () => {
      crack.pause();
      crack.currentTime = 0;
      crack.play().catch(console.warn);
      setTimeout(() => {
        crack.pause();
        crack.currentTime = 0;
      }, 1800);
    });
  });

  // ✅ التمرير التلقائي
  setTimeout(() => {
    let autoScroll = setInterval(() => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 2
      ) {
        clearInterval(autoScroll);
        return;
      }
      window.scrollBy({ top: 1, behavior: "smooth" });
    }, 20);
  }, 3000);

  // ✅ ملاحظة ظهور القبور وتشغيل صوت
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          graveSound.play().catch(console.warn);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  document.querySelectorAll(".grave-3d").forEach((grave) => {
    observer.observe(grave);
  });

  // ✅ فتح المودال عند الضغط على القبر
  document.querySelectorAll(".grave-3d").forEach((grave) => {
    grave.addEventListener("click", () => {
      const title = grave.querySelector(".grave-title").textContent;
      const text = grave.querySelector(".engraved-text").innerHTML;
      openGraveModal(title, text);
    });
  });

  document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("grave-modal").classList.add("hidden");
  });
}

function openGraveModal(title, text) {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-text").innerHTML = text;
  document.getElementById("grave-modal").classList.remove("hidden");
}
window.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    fetch("../grave.json")
      .then((res) => {
        if (!res.ok) throw new Error("فشل تحميل ملف القبور");
        return res.json();
      })
      .catch((err) => {
        console.warn("grave.json غير موجود أو فيه مشكلة:", err.message);
        return []; // لو الملف مش موجود هنكمل بالباقي
      }),
    Promise.resolve(JSON.parse(localStorage.getItem("graves") || "[]")),
  ])
    .then(([jsonGraves, localGraves]) => {
      const allGraves = [...jsonGraves, ...localGraves];
      const container = document.getElementById("graveyard-gallery");

      allGraves.forEach((grave) => {
        const div = document.createElement("div");
        div.className = `grave-3d ${grave.type}`;
        div.setAttribute("data-aos", "fade-up");
        div.setAttribute("data-aos-delay", "200");
        div.innerHTML = `
          <div class="grave-title">${grave.title}</div>
          <div class="engraved-text">${grave.description}</div>
          <div class="rip">R.I.P</div>
          <div class="crack"></div>
          <div class="base"></div>
        `;
        container.appendChild(div);
      });

      document.getElementById(
        "grave-count"
      ).textContent = `عدد القبور: ${allGraves.length}`;

      initializeGraveEvents();
    })
    .catch((err) => {
      console.error("حدث خطأ أثناء تحميل القبور:", err);
    });
});
