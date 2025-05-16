 document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();  // منع إعادة تحميل الصفحة

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('userRole', 'admin');
      window.location.href = '../pages/admin.html'; // توجيه إلى لوحة التحكم
    } else if (username === 'user' && password === 'user') {
      localStorage.setItem('userRole', 'user');
      window.location.href = '../home.html'; // توجيه إلى الصفحة الرئيسية
    } else {
      alert('اسم المستخدم أو كلمة المرور غير صحيحة');
    }
  });

 