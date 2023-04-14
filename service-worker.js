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
    "revision": "8a345daa794d332bb0d1664f43905852"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.73dc42e5.js",
    "revision": "30e828c146c3447f6cbf728cdd82e925"
  },
  {
    "url": "assets/js/10.f90154aa.js",
    "revision": "2d186e0b80e993bf73e697cd6f792bb4"
  },
  {
    "url": "assets/js/11.e8633219.js",
    "revision": "c6b1a8edcabf36b3249cd03c29f993dd"
  },
  {
    "url": "assets/js/12.06ef4276.js",
    "revision": "05b38751e842897cc6c68a24d7c5732c"
  },
  {
    "url": "assets/js/13.b9771bf6.js",
    "revision": "e5a5ae4e374b0c7ac5b4dc09d0ab8947"
  },
  {
    "url": "assets/js/14.3ff36ed1.js",
    "revision": "730e4139a30d67ea051dc58189e3abeb"
  },
  {
    "url": "assets/js/15.50a7b002.js",
    "revision": "4af495968cb4e72dfefdb55963743c7f"
  },
  {
    "url": "assets/js/16.60f506c7.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
  },
  {
    "url": "assets/js/17.4d1b88c1.js",
    "revision": "9e03087b3f532f65b42b9202be0e7af8"
  },
  {
    "url": "assets/js/18.ce4df536.js",
    "revision": "d694268519b57a4802a37a1900aa9515"
  },
  {
    "url": "assets/js/4.d94921b7.js",
    "revision": "6a9061b507f12ee2770b1f19b8e3d4da"
  },
  {
    "url": "assets/js/5.aafec39e.js",
    "revision": "1689296e32236e06547752a56f9265f6"
  },
  {
    "url": "assets/js/6.fcea16c6.js",
    "revision": "4719502381b5c3d6ac6a2e6d590b4322"
  },
  {
    "url": "assets/js/7.7fcc8b8f.js",
    "revision": "c38484adcb3f89dd39a62f70a7b1ea62"
  },
  {
    "url": "assets/js/8.8dfc7fd6.js",
    "revision": "09cca6c7b2202fa0a4d063836f72e2dd"
  },
  {
    "url": "assets/js/9.e8364819.js",
    "revision": "05c8a35278c075892025e2714a299d64"
  },
  {
    "url": "assets/js/app.5b024d12.js",
    "revision": "90763a6b16ee8f68d0a2bf555280d8df"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.6ecfa24c.js",
    "revision": "0914943e5101085e2068a7393195effe"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "99697717516cd592a66066d66590da88"
  },
  {
    "url": "categories/java/index.html",
    "revision": "f10ed5a02fb8f31756d79274e2911238"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "1bcda870c95cfc98388cb707c38d3f67"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "b0a293c5c97ffe6399f7aa2d4e8217ec"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "ed69d86ee2e548a3f4a2749c46eb8fba"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "84d52a4d2b9a7ac6dfa86f46e5d7953f"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "72a5f73704616d1025ff155990f74027"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "53d8f4c6d4700618656937347e302d19"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "7b3c80310d1d6711962006cac464893e"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "db4e52511de1e2505523dd3c33c124ce"
  },
  {
    "url": "tags/js/index.html",
    "revision": "d97ad135bbcde06342a10332563e77dc"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "54db88688598d30572bf115a0654583f"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "04360a26d11e696442fe1119d6da6543"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "27c9d6fe06fa8c9e57dd8a37440db09a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "841a072de9afdd70f3f69ebe771f69d0"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "84bc7889717922cec848e25da63a0920"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "779bc8a38d12ba2606d54730b5f86f5f"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "d9b44d0d5851bccb44ccfb6993478b7d"
  },
  {
    "url": "timeline/index.html",
    "revision": "4c7c4295d52976bf6e34cfaaef711b8a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "acf8d0d63ee1cd922ae58ba78826b5af"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "8512fc38e9ea766aed74ca7d2677127a"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "036d5ce5d79fe4571fc4c6c4194718a8"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "810de6815c8072415fcf95510c93feaf"
  },
  {
    "url": "生活分享/life.html",
    "revision": "808805b8f3b872911d7f5b4d3bd2336a"
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
