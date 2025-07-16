function calculateWaste() {
  const daily = parseFloat(document.getElementById("dailyHours").value);
  const years = parseFloat(document.getElementById("years").value);
  const selectedType = document.getElementById("fieldType").value;
  const result = document.getElementById("result");

  if (isNaN(daily) || isNaN(years) || daily <= 0 || years <= 0) {
    result.textContent = "من فضلك ادخل أرقام صحيحة.";
    return;
  }
  const fields = [
    {
      name: "برمجة Front-End",
      stage1: "HTML/CSS",
      stage2: "JavaScript + React",
      time: 300,
      income: 900,
      type: "برمجة",
    },
    {
      name: "برمجة Back-End",
      stage1: "Node.js",
      stage2: "APIs + Databases",
      time: 400,
      income: 1200,
      type: "برمجة",
    },
    {
      name: "Full-Stack Web",
      stage1: "Front + Back",
      stage2: "Deployment + Projects",
      time: 600,
      income: 1800,
      type: "برمجة",
    },
    {
      name: "تطبيقات موبايل",
      stage1: "Flutter Basics",
      stage2: "Advanced + نشر",
      time: 450,
      income: 1500,
      type: "برمجة",
    },
    {
      name: "Android Native",
      stage1: "Java",
      stage2: "Kotlin + Firebase",
      time: 500,
      income: 1600,
      type: "برمجة",
    },
    {
      name: "iOS",
      stage1: "Swift Basics",
      stage2: "iOS APIs",
      time: 500,
      income: 1800,
      type: "برمجة",
    },
    {
      name: "DevOps",
      stage1: "Linux + Git",
      stage2: "CI/CD + Docker",
      time: 450,
      income: 1600,
      type: "برمجة",
    },
    {
      name: "سايبر سكيوريتي",
      stage1: "أساسيات الشبكات",
      stage2: "Ethical Hacking",
      time: 500,
      income: 2000,
      type: "أمن سيبراني",
    },
    {
      name: "Bug Bounty",
      stage1: "Recon + XSS",
      stage2: "Exploits + Reporting",
      time: 400,
      income: 2200,
      type: "أمن سيبراني",
    },
    {
      name: "Digital Forensics",
      stage1: "Data Recovery",
      stage2: "Malware Analysis",
      time: 450,
      income: 1800,
      type: "أمن سيبراني",
    },
    {
      name: "الذكاء الاصطناعي",
      stage1: "Python + ML",
      stage2: "Deep Learning",
      time: 600,
      income: 2500,
      type: "ذكاء اصطناعي",
    },
    {
      name: "الروبوتات",
      stage1: "Arduino",
      stage2: "أنظمة ذكية",
      time: 500,
      income: 2000,
      type: "ذكاء اصطناعي",
    },
    {
      name: "Data Science",
      stage1: "Python + Pandas",
      stage2: "ML Models",
      time: 500,
      income: 2300,
      type: "بيانات",
    },
    {
      name: "تحليل البيانات",
      stage1: "Excel + SQL",
      stage2: "Power BI",
      time: 450,
      income: 1500,
      type: "بيانات",
    },
    {
      name: "Machine Learning",
      stage1: "Supervised",
      stage2: "Unsupervised",
      time: 500,
      income: 2400,
      type: "ذكاء اصطناعي",
    },
    {
      name: "NLP",
      stage1: "Text Preprocessing",
      stage2: "Language Models",
      time: 400,
      income: 2100,
      type: "ذكاء اصطناعي",
    },
    {
      name: "Computer Vision",
      stage1: "OpenCV",
      stage2: "CNN Models",
      time: 500,
      income: 2300,
      type: "ذكاء اصطناعي",
    },
    {
      name: "Game Development",
      stage1: "Unity Basics",
      stage2: "2D/3D Projects",
      time: 600,
      income: 2000,
      type: "برمجة",
    },
    {
      name: "Unreal Engine",
      stage1: "Blueprints",
      stage2: "C++ Scripting",
      time: 700,
      income: 2200,
      type: "برمجة",
    },
    {
      name: "UI/UX Design",
      stage1: "Figma + مبادئ",
      stage2: "Wireframes + Prototypes",
      time: 300,
      income: 1000,
      type: "تصميم",
    },
    {
      name: "مونتاج فيديو",
      stage1: "Premiere",
      stage2: "تأثيرات وسرد",
      time: 250,
      income: 900,
      type: "تصميم",
    },
    {
      name: "موشن جرافيك",
      stage1: "After Effects",
      stage2: "Real Projects",
      time: 350,
      income: 1300,
      type: "تصميم",
    },
    {
      name: "تصميم جرافيك",
      stage1: "Photoshop",
      stage2: "Illustrator + Brand",
      time: 300,
      income: 1200,
      type: "تصميم",
    },
    {
      name: "تصميم ثلاثي الأبعاد",
      stage1: "Blender",
      stage2: "Animation",
      time: 500,
      income: 1500,
      type: "تصميم",
    },
    {
      name: "اللغة الإنجليزية",
      stage1: "A2",
      stage2: "C1",
      time: 250,
      income: 1000,
      type: "لغات",
    },
    {
      name: "اللغة الألمانية",
      stage1: "A1",
      stage2: "B2",
      time: 300,
      income: 1200,
      type: "لغات",
    },
    {
      name: "اللغة اليابانية",
      stage1: "N5",
      stage2: "N3",
      time: 400,
      income: 1400,
      type: "لغات",
    },
    {
      name: "تعليق صوتي",
      stage1: "تدريب",
      stage2: "تسجيل وبيع",
      time: 200,
      income: 700,
      type: "صوت",
    },
    {
      name: "الكتابة",
      stage1: "مقالات",
      stage2: "روايات",
      time: 300,
      income: 900,
      type: "كتابة",
    },
    {
      name: "التسويق",
      stage1: "سوشيال ميديا",
      stage2: "إعلانات وتحليل",
      time: 350,
      income: 1200,
      type: "تسويق",
    },
    {
      name: "SEO",
      stage1: "On-page",
      stage2: "Backlinks + Audit",
      time: 250,
      income: 1000,
      type: "تسويق",
    },
    {
      name: "ترجمة",
      stage1: "عامة",
      stage2: "احترافية",
      time: 250,
      income: 900,
      type: "لغات",
    },
    {
      name: "فريلانس",
      stage1: "حسابات",
      stage2: "عملاء + تسعير",
      time: 250,
      income: 900,
      type: "فريلانس",
    },
    {
      name: "التعليم الذاتي",
      stage1: "كورسات",
      stage2: "مشاريع واقعية",
      time: 300,
      income: 1000,
      type: "تعليم ذاتي",
    },
    {
      name: "اليوتيوب",
      stage1: "فكرة ومونتاج",
      stage2: "نشر + نمو القناة",
      time: 400,
      income: 1500,
      type: "صناعة المحتوى",
    },
    {
      name: "البودكاست",
      stage1: "تسجيل",
      stage2: "تسويق ونشر",
      time: 250,
      income: 800,
      type: "صناعة المحتوى",
    },
    {
      name: "البث المباشر",
      stage1: "Setup + صوت",
      stage2: "مشاهد وتفاعل",
      time: 300,
      income: 1100,
      type: "صناعة المحتوى",
    },
    {
      name: "التمثيل الصوتي",
      stage1: "تمارين",
      stage2: "أداء ومشاريع",
      time: 250,
      income: 1000,
      type: "صوت",
    },
    {
      name: "نقد فني",
      stage1: "تحليل قصص",
      stage2: "تقديم مراجعات",
      time: 200,
      income: 800,
      type: "ترفيه",
    },
    {
      name: "التغذية",
      stage1: "أساسيات",
      stage2: "تدريب شخصي",
      time: 250,
      income: 800,
      type: "صحة ولياقة",
    },
    {
      name: "الرياضة",
      stage1: "برامج",
      stage2: "Coaching",
      time: 300,
      income: 900,
      type: "صحة ولياقة",
    },
    {
      name: "التدريب الذهني",
      stage1: "Meditation",
      stage2: "Coaching",
      time: 200,
      income: 700,
      type: "كوتشنج",
    },
    {
      name: "ريادة الأعمال",
      stage1: "فكرة",
      stage2: "نمو وربح",
      time: 600,
      income: 3000,
      type: "إدارة",
    },
    {
      name: "إدارة مشاريع",
      stage1: "أساسيات",
      stage2: "Agile + أدوات",
      time: 400,
      income: 1700,
      type: "إدارة",
    },
    {
      name: "MBA مصغر",
      stage1: "Business Basics",
      stage2: "Strategy + Finance",
      time: 600,
      income: 3200,
      type: "إدارة",
    },
    {
      name: "Blockchain",
      stage1: "أساسيات",
      stage2: "Smart Contracts",
      time: 400,
      income: 2200,
      type: "برمجة",
    },
    {
      name: "العملات الرقمية",
      stage1: "Trading",
      stage2: "Risk & Analysis",
      time: 300,
      income: 1800,
      type: "استثمار",
    },
    {
      name: "تحليل فني للأسواق",
      stage1: "الشموع",
      stage2: "Patterns",
      time: 350,
      income: 1500,
      type: "استثمار",
    },
    {
      name: "برمجة C++",
      stage1: "Syntax",
      stage2: "OOP + STL",
      time: 400,
      income: 1600,
      type: "برمجة",
    },
    {
      name: "Python Advanced",
      stage1: "OOP",
      stage2: "Modules + APIs",
      time: 350,
      income: 1500,
      type: "برمجة",
    },
    {
      name: "SQL",
      stage1: "Queries",
      stage2: "Optimization",
      time: 250,
      income: 1200,
      type: "برمجة",
    },
    {
      name: "MongoDB",
      stage1: "Basics",
      stage2: "Aggregation",
      time: 200,
      income: 1100,
      type: "برمجة",
    },
    {
      name: "Firebase",
      stage1: "Auth + DB",
      stage2: "Functions + Hosting",
      time: 300,
      income: 1200,
      type: "برمجة",
    },
    {
      name: "WordPress",
      stage1: "Themes",
      stage2: "Plugins",
      time: 200,
      income: 1000,
      type: "برمجة",
    },
    {
      name: "Shopify",
      stage1: "Store Setup",
      stage2: "Products + Ads",
      time: 300,
      income: 1300,
      type: "برمجة",
    },
    {
      name: "الطباعة 3D",
      stage1: "تصميم",
      stage2: "إنتاج",
      time: 400,
      income: 1500,
      type: "روبوتات",
    },
    {
      name: "التحكم الصناعي",
      stage1: "PLC",
      stage2: "SCADA",
      time: 500,
      income: 2400,
      type: "روبوتات",
    },
    {
      name: "AutoCAD",
      stage1: "2D",
      stage2: "3D + مخططات",
      time: 300,
      income: 1000,
      type: "تصميم",
    },
    {
      name: "أنميشن",
      stage1: "Storyboard",
      stage2: "تحريك",
      time: 400,
      income: 1500,
      type: "تصميم",
    },
    {
      name: "تحليل شخصية",
      stage1: "MBTI",
      stage2: "أنماط متقدمة",
      time: 200,
      income: 800,
      type: "كوتشنج",
    },
  ];
const totalDays = Math.floor(years * 365);
const wastedHours = Math.floor(daily * totalDays);
const totalMinutes = wastedHours * 60;
const totalSeconds = wastedHours * 3600;
const months = Math.floor(years * 12);
const weeks = Math.floor(totalDays / 7);
const days = totalDays;

let possibleFields = [];
let remainingTime = wastedHours;

fields
  .filter((f) => selectedType === "الكل" || f.type === selectedType)
  .forEach((f) => {
    if (f.time <= remainingTime) {
      possibleFields.push(f);
      remainingTime -= f.time;
    }
  });

let graves = JSON.parse(localStorage.getItem("graves")) || [];
let gravesAdded = [];

// لو فيه تخصصات ممكن تتعمل
if (possibleFields.length > 0) {
  // دفن التخصصات الجديدة
  possibleFields.forEach((f) => {
    const graveId = `calc-${f.name}`;
    const alreadyExists = graves.some((g) => g.id === graveId);

    if (!alreadyExists) {
      const grave = {
        id: graveId,
        title: f.name,
        description: `كان ممكن أوصله لو استغليت وقتي. المستوى: ${f.stage2}، والدخل: $${f.income}`,
        type: f.type,
      };
      graves.push(grave);
      gravesAdded.push(f.name);
    }
  });

  if (gravesAdded.length > 0) {
    localStorage.setItem("graves", JSON.stringify(graves));
  }

  // جدول التخصصات
  let comparisonTable = `<table><tr><th>المجال</th><th>المستوى المتوقع</th><th>الدخل المتوقع</th><th>المدة المطلوبة</th></tr>`;
  possibleFields.forEach((f) => {
    comparisonTable += `<tr><td>${f.name}</td><td>${f.stage2}</td><td>$${f.income}</td><td>${f.time} ساعة</td></tr>`;
  });
  comparisonTable += `</table>`;

  // عرض النتيجة
  result.innerHTML = `
    ⏳ على مدار ${years.toFixed(
      2
    )} سنة، كنت بتضيع يوميًا حوالي ${daily} ساعة.<br><br>
    <b>المجموع:</b><br>
    - ${wastedHours.toLocaleString()} ساعة<br>
    - ${totalMinutes.toLocaleString()} دقيقة<br>
    - ${totalSeconds.toLocaleString()} ثانية<br><br>
    🔥 كنت ممكن تخلص التخصصات دي في الوقت ده:<br>${comparisonTable}
    <br><br>
    ${
      gravesAdded.length > 0
        ? `💀 <b>تم دفن ${
            gravesAdded.length
          } تخصص في المقبرة:</b><br>${gravesAdded
            .map((name) => `- ${name}`)
            .join("<br>")}`
        : `✅ كل التخصصات دي مدفونة بالفعل، مفيش حاجة جديدة اندفنت النهارده.`
    }
    <br><br>
    <button onclick="window.location.href='graveyard.html'">شوف القبر اللي اندفن دلوقتي</button>
     <button onclick="window.location.href='final.html'">🔮 واجه نفسك في المرآة</button>
  `;
} else {
  // لو مفيش تخصص ينفع يتعمل
  result.innerHTML = `
    ⏳ على مدار ${years.toFixed(2)} سنة، كنت بتضيع يوميًا حوالي ${daily} ساعة.<br><br>
    <b>المجموع:</b><br>
    - ${wastedHours.toLocaleString()} ساعة<br>
    - ${totalMinutes.toLocaleString()} دقيقة<br>
    - ${totalSeconds.toLocaleString()} ثانية<br><br>
    ⚠️ للأسف، الوقت ده مش كافي تخلص حتى تخصص واحد كامل.
  `;
}
}
