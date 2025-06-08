self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
});

self.addEventListener('fetch', function(event) {
  // Aquí podrías agregar funcionalidad offline en el futuro
});
