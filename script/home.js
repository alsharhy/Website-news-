 // عرض القسم المطلوب وإخفاء البقية
    function showSection(sectionId) {
      document.querySelectorAll(".news-section").forEach(sec => {
        sec.style.display = "none";
      });
      document.getElementById(sectionId).style.display = "block";
    }

    // تحميل الأخبار من localStorage حسب الأقسام
    function loadNews() {
      const news = JSON.parse(localStorage.getItem("news")) || [];

      news.forEach(item => {
        let sectionId = "";
        switch (item.category) {
          case "محلية": sectionId = "local-news"; break;
          case "اقتصادية": sectionId = "economic-news"; break;
          case "رياضية": sectionId = "sports-news"; break;
          case "وثائقية": sectionId = "documentary-news"; break;
          case "عاجلة": sectionId = "breaking-news"; break;
          default: return;
        }

        const section = document.getElementById(sectionId);
        if (section) {
          const newsItem = document.createElement("div");
          newsItem.className = "news-item";

          if (item.videoURL) {
            const video = document.createElement("video");
            video.width = 320;
            video.height = 240;
            video.controls = true;

            const source = document.createElement("source");
            source.src = item.videoURL;
            source.type = "video/mp4";

            video.appendChild(source);
            newsItem.appendChild(video);
          }

          const title = document.createElement("h3");
          title.textContent = item.title;
          newsItem.appendChild(title);

          const content = document.createElement("p");
          content.textContent = item.content;
          newsItem.appendChild(content);

          section.appendChild(newsItem);
        }
      });
    }

    // تحميل الأخبار عند فتح الصفحة
    window.onload = loadNews;
  