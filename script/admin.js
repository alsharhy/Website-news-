
document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logoutBtn");
    const previewBtn = document.getElementById("previewBtn");
    const addSectionForm = document.getElementById("addSectionForm");
    const addNewsForm = document.getElementById("addNewsForm");
    const newsCategorySelect = document.getElementById("newsCategory");
    const sectionNotification = document.getElementById("sectionNotification");
    const newsNotification = document.getElementById("newsNotification");
  
    // تحميل الأقسام من localStorage أو تعيين الافتراضي
    let sections = JSON.parse(localStorage.getItem("sections")) || ["محلية", "اقتصادية", "رياضية", "وثائقية", "عاجلة"];
  
    // تحديث قائمة الأقسام في select الأخبار
    function updateCategoryOptions() {
      newsCategorySelect.innerHTML = "";
      sections.forEach(sec => {
        const option = document.createElement("option");
        option.value = sec;
        option.textContent = sec;
        newsCategorySelect.appendChild(option);
      });
    }
  
    updateCategoryOptions();
  
    // إضافة قسم جديد
    addSectionForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newSection = document.getElementById("newSection").value.trim();
  
      if (newSection && !sections.includes(newSection)) {
        sections.push(newSection);
        localStorage.setItem("sections", JSON.stringify(sections));
        sectionNotification.textContent = `تم إضافة القسم: ${newSection}`;
        sectionNotification.style.color = "green";
        updateCategoryOptions();
      } else {
        sectionNotification.textContent = "القسم موجود بالفعل أو غير صالح.";
        sectionNotification.style.color = "red";
      }
    }); 
    // إضافة خبر جديد
    addNewsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("newsTitle").value.trim();
      const content = document.getElementById("newsContent").value.trim();
      const category = newsCategorySelect.value;
      const videoURL = document.getElementById("videoURL").value.trim();
  
      if (title && content) {
        const newsItem = { title, content, category, videoURL };
        let news = JSON.parse(localStorage.getItem("news")) || [];
        news.push(newsItem);
        localStorage.setItem("news", JSON.stringify(news));
        newsNotification.textContent = `تم إضافة الخبر: ${title}`;
        newsNotification.style.color = "green";
      } else {
        newsNotification.textContent = "يرجى ملء جميع الحقول.";
        newsNotification.style.color = "red";
      }
    });
   
  
    // زر إضافة قسم جديد
    const addSectionBtn = document.getElementById("addSectionBtn");
    addSectionBtn.addEventListener("click", () => {
      const newSection = document.getElementById("newSection").value.trim();
      if (newSection && !sections.includes(newSection)) {
        sections.push(newSection);
        localStorage.setItem("sections", JSON.stringify(sections));
        sectionNotification.textContent = `تم إضافة القسم: ${newSection}`;
        sectionNotification.style.color = "green";
        updateCategoryOptions();
      } else {
        sectionNotification.textContent = "القسم موجود بالفعل أو غير صالح.";
        sectionNotification.style.color = "red";
      }
    });

  
    // // زر تسجيل الخروج
    // logoutBtn.addEventListener("click", () => {
    //   localStorage.removeItem("userRole");
    //   window.location.href = "../pages/login.html";
    // });
  
    // زر معاينة الصفحة الرئيسية في نافذة جديدة
    previewBtn.addEventListener("click", () => {
      window.open("../index.html", "_blank");
    });
  });