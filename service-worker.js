/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d784b23e16417a34f7fd947eb536a217"
  },
  {
    "url": "assets/css/0.styles.ef7c1100.css",
    "revision": "128c29f5da40abedd12918911ad2c540"
  },
  {
    "url": "assets/img/search.77214953.svg",
    "revision": "7721495388609799a2917d9392789f58"
  },
  {
    "url": "assets/js/10.c9c3991f.js",
    "revision": "f11e26fbfc53c845d9c57180b233c35f"
  },
  {
    "url": "assets/js/11.07fda955.js",
    "revision": "81eb91e3df2f209c57a710586053bbf8"
  },
  {
    "url": "assets/js/12.6774ace0.js",
    "revision": "3dd7bb464770a77c134a8244512ef496"
  },
  {
    "url": "assets/js/13.727883c4.js",
    "revision": "3ff83a93896cc6edc7bd650389a85108"
  },
  {
    "url": "assets/js/14.f1eaaeaa.js",
    "revision": "1a97754051f939160693d94c418cd94e"
  },
  {
    "url": "assets/js/2.71590575.js",
    "revision": "aa38bf98d6e4666fa73437eeef301bf1"
  },
  {
    "url": "assets/js/3.f315c520.js",
    "revision": "b849bbe32fc64d18a742cbed38dc47e8"
  },
  {
    "url": "assets/js/4.711bb00c.js",
    "revision": "0cb03b5a031ec0dd25c61140c1d35e44"
  },
  {
    "url": "assets/js/5.451542b9.js",
    "revision": "b22da5b5fc814d5d760995eb12c316b2"
  },
  {
    "url": "assets/js/6.fb802bde.js",
    "revision": "03c31c20405eb7fb8d311671dbefab8f"
  },
  {
    "url": "assets/js/7.57dacdcd.js",
    "revision": "0ebc00c9725f2f691e043158fea1e139"
  },
  {
    "url": "assets/js/8.1e5540b3.js",
    "revision": "5247be460ff07c1cee669a9b9f2bdf6c"
  },
  {
    "url": "assets/js/9.cc93f602.js",
    "revision": "da45ea82c9de0d2431ad3e161a27b1a2"
  },
  {
    "url": "assets/js/app.8c7f8016.js",
    "revision": "6f453abe2560f038ff49da8e1622a830"
  },
  {
    "url": "en/contribute/index.html",
    "revision": "397ff6eb36e95de3d2726b530db2cb10"
  },
  {
    "url": "en/guide/index.html",
    "revision": "eec9bf789f4fdc8b58268ae483ef9752"
  },
  {
    "url": "en/index.html",
    "revision": "1abc08538505526cfea871785ed60b8a"
  },
  {
    "url": "index.html",
    "revision": "b1ba73b6a5d5af244023c1169b26c18c"
  },
  {
    "url": "zh/contribute/index.html",
    "revision": "3987850bed5fbcc44d4e954ba13a1012"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "1a436b7bc1e64b192bfccadc720d0e60"
  },
  {
    "url": "zh/index.html",
    "revision": "f0876e45106f5528227a69a3b2126ad1"
  },
  {
    "url": "zh/note/ubuntu.html",
    "revision": "4d955cea4c019d465c254ebe61f5877d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
