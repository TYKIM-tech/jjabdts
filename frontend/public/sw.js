const CACHE_NAME = 'mdts-cache-v1';

// 캐싱할 정적 자산 목록 (오프라인 환경에서도 로드되어야 할 에셋들)
const STATIC_ASSETS = [
  '/',
  '/first-aid',
  '/manifest.json',
  '/globals.css',
  // 실제 아이콘 파일이 추가되면 아래 주석 해제
  // '/icons/icon-192x192.png',
  // '/icons/icon-512x512.png'
];

// Install Event: 서비스 워커 설치 및 정적 자산 캐싱
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching App Shell...');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting(); // 즉시 활성화
});

// Activate Event: 새로운 서비스 워커 활성화 시 이전 버전 캐시 정리
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event: 오프라인 지원 (Cache First, Network Fallback 전략)
self.addEventListener('fetch', (event) => {
  // API 요청은 캐싱하지 않고 무조건 네트워크 사용
  if (event.request.url.includes('/api/') || event.request.url.includes('/ws/')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 1. 캐시에 자산이 있으면 반환 (오프라인 시 작동)
      if (cachedResponse) {
        return cachedResponse;
      }
      
      // 2. 캐시에 없으면 네트워크로 요청
      return fetch(event.request).catch(() => {
        // 네트워크마저 끊겼을 때, 사용자가 페이지를 이동하려 한다면 Fallback 제공 가능
        if (event.request.mode === 'navigate') {
          // 예: 오프라인 에러 페이지를 미리 캐싱해두고 반환
          return caches.match('/'); 
        }
      });
    })
  );
});
