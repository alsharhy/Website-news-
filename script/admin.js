// admin.js

// جلب عناصر الواجهة
const addNewsBtn = document.getElementById('addNewsBtn');
const previewBtn = document.getElementById('previewBtn');
const notification = document.getElementById('notification');

// دالة إضافة خبر جديد وحفظه في localStorage
function addNews() {
  // مثال بيانات الخبر (يمكن تعديلها لتأخذ من حقول إدخال حقيقية)
  const newsSection = document.getElementById('newsSection').value; // قسم الخبر مثل 'local-news'
  const newsTitle = document.getElementById('newsTitle').value; // عنوان الخبر
  const newsVideo = document.getElementById('newsVideo').value; // رابط الفيديو

  if (!newsSection || !newsTitle || !newsVideo) {
    alert('يرجى ملء جميع الحقول');
    return;
  }

  // جلب الأخبار المخزنة أو إنشاء مصفوفة جديدة
  let newsList = JSON.parse(localStorage.getItem('news')) || [];

  // إضافة الخبر الجديد
  newsList.push({
    section: newsSection,
    title: newsTitle,
    video: newsVideo
  });

  // حفظ الأخبار المحدثة
  localStorage.setItem('news', JSON.stringify(newsList));

  // إظهار إشعار النجاح
  notification.textContent = 'تم رفع الخبر بنجاح!';
  notification.style.display = 'block';

  // إخفاء الإشعار بعد 3 ثواني
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);

  // تنظيف الحقول بعد الإضافة (اختياري)
  document.getElementById('newsSection').value = '';
  document.getElementById('newsTitle').value = '';
  document.getElementById('newsVideo').value = '';
}

// وظيفة زر معاينة الصفحة الرئيسية
function previewHome() {
  // تأكد من مسار الصفحة الرئيسية الصحيح
  window.open('../index.html', '_blank');
}

// ربط الأحداث مع الأزرار
addNewsBtn.addEventListener('click', addNews);
previewBtn.addEventListener('click', previewHome);