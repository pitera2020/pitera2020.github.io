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
    "revision": "aeb2b69c7a923de00f03666ce8a62d5d"
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
    "url": "assets/js/12.3e13c370.js",
    "revision": "9eadd58d925ae4924dce61e1811b9ae0"
  },
  {
    "url": "assets/js/13.665ce0ec.js",
    "revision": "3130f6cea0515e294a4d8e3a6daf6239"
  },
  {
    "url": "assets/js/14.f1c8e62b.js",
    "revision": "f754bd440574752dde5184c5efa90116"
  },
  {
    "url": "assets/js/15.980eb426.js",
    "revision": "7b8054856375ad20b24dac641d4f4749"
  },
  {
    "url": "assets/js/16.b25d8f97.js",
    "revision": "15ffa534f0e33db227cd4ba62fa00f4e"
  },
  {
    "url": "assets/js/17.42482b2c.js",
    "revision": "75746639d352033c7a1a9a7ae69b7bb7"
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
    "url": "assets/js/app.cf525ada.js",
    "revision": "b6c2b60f9adf9792888191d267466a34"
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
    "revision": "0689b88a63fcdaa12cf05423c7d20338"
  },
  {
    "url": "categories/java/index.html",
    "revision": "6f1072637a9dab0418f46725ae380672"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "1dffbe5980ad8d80f94f1ecf5a1f2f78"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "b84777f9e241237c641894efa0d8b7b1"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "f7d7fddaa9dcb323901616e6f3e464d7"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "4ae64a439723bc5451151edfa3d51f3c"
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
    "revision": "a01316b39cc15203512d5b67004846d0"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "db580b9f201aee04b2492ca2e5ee1843"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "3762b9a11619f1d22b05f774fd3c60b0"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "1488e576f2637f9ccd6a66dc17f906b9"
  },
  {
    "url": "tags/js/index.html",
    "revision": "1307e8138f56add0cd83f8c34d97fdc1"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "428d22a6bfb67cdd23be4c88037d9be0"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "b8c744a69a903f737d47baae38201481"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "6a83c73950430040c942a123a8843ee1"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "6109dc9158b317b9548203ff1506921e"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "15518fb09ce41986e8d7d452404cd2d2"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "904443a74ecbdf5dab6a0e2471d4e478"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "67b909be5d06743645786607c359d12f"
  },
  {
    "url": "timeline/index.html",
    "revision": "bf87815b15cd9f8ef0baca33da81fb77"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "aff7fe4421a72e494ff07525d7f008da"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "5c0cb90860a56036c5847ee22e8b821d"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "925a1c02628d41aadbac011dfc3744af"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "28c2c367de3f24b91e1c9c5719582f27"
  },
  {
    "url": "生活分享/life.html",
    "revision": "47f12c13034f441c0a09d1ce0692a63f"
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
