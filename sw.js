/* sw.js — Service Worker بسيط لتطبيق "عرابي"
   مفيش أي تخزين مؤقت (cache) هنا عمدًا، عشان أي تحديث بترفعه على index.html
   يظهر فورًا من غير ما تحتاج تعمل حذف بيانات المتصفح. الغرض الوحيد من الملف ده
   إنه يخلّي المتصفح (خصوصًا أندرويد/كروم) يعتبر عرابي تطبيق ويب حقيقي قابل
   للتثبيت (PWA/WebAPK) بدل ما يضيفه كـ"اختصار" عادي فيه شعار المتصفح.
*/
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// تمرير كل الطلبات للشبكة زي ما هي، من غير أي تخزين مؤقت
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
