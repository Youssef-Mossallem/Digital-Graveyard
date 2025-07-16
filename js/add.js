document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("add-grave-form");
  const titleInput = document.getElementById("grave-title");
  const textInput = document.getElementById("engraved-text");
  const typeSelect = document.getElementById("grave-type");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = titleInput.value.trim();
    const description = textInput.value.trim(); // ← استخدام description بدل text
    const type = typeSelect.value;

    if (!title || !description || !type) {
      alert("يرجى ملء جميع الحقول");
      return;
    }

    const newGrave = {
      id: Date.now(),
      title: title,
      description: description, // ← المفتاح الصحيح
      type: type,
    };

    let graves = JSON.parse(localStorage.getItem("graves")) || [];
    graves.push(newGrave);
    localStorage.setItem("graves", JSON.stringify(graves));

    form.reset();
    alert("تم إضافة القبر بنجاح 🪦");

    // ✅ الانتقال إلى صفحة المقبرة بعد الإضافة
    window.location.href = "graveyard.html"; // ← غيرها لو اسم الصفحة مختلف
  });
});
