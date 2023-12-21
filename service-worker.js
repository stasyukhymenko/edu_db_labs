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
    "revision": "955dac2c3f82bf5279e52745909e5f73"
  },
  {
    "url": "assets/css/0.styles.f730c823.css",
    "revision": "e1fe8e49396e157106a91e2e6551fd00"
  },
  {
    "url": "assets/img/delete_1.f5290e77.png",
    "revision": "f5290e77d6712715d411c5cc0a158130"
  },
  {
    "url": "assets/img/delete_2.62edb436.png",
    "revision": "62edb436671f57bb302daf2728308113"
  },
  {
    "url": "assets/img/delete_payments_1.f9fc9eb4.png",
    "revision": "f9fc9eb4370ececa35a7de27bc5c8b15"
  },
  {
    "url": "assets/img/delete_payments_2.61c322d5.png",
    "revision": "61c322d5c5061b078936af291ec83f7e"
  },
  {
    "url": "assets/img/delete_proj_1.bde9f4bc.png",
    "revision": "bde9f4bc86758a9806ce2a7c575f2620"
  },
  {
    "url": "assets/img/delete_proj_2.53f9e9e5.png",
    "revision": "53f9e9e5541ca0040bb86b0cd25bf571"
  },
  {
    "url": "assets/img/get_payments_id.dd71acf6.png",
    "revision": "dd71acf6aafe0808e5b0b519e0aa28f5"
  },
  {
    "url": "assets/img/get_payments.e6ca7007.png",
    "revision": "e6ca70073fce5a7846ee417ae0426493"
  },
  {
    "url": "assets/img/get_proj_id.d86665a7.png",
    "revision": "d86665a7977844026d69e9616f0a718c"
  },
  {
    "url": "assets/img/get_proj.9d993eb5.png",
    "revision": "9d993eb5d6d013e6822b8255931e81cf"
  },
  {
    "url": "assets/img/get_user_id.5a04762f.png",
    "revision": "5a04762f2e373ed5a52b42a45058a4a4"
  },
  {
    "url": "assets/img/get_users.08130f8b.png",
    "revision": "08130f8bb888bdbbc23cb949ca372c48"
  },
  {
    "url": "assets/img/post_payments.e0e019f4.png",
    "revision": "e0e019f429ac3036dc5d09570de2670f"
  },
  {
    "url": "assets/img/post_proj.af1b6c7c.png",
    "revision": "af1b6c7ca8de7bc7abdcdf2697e8f75a"
  },
  {
    "url": "assets/img/post_users.0fc7cd87.png",
    "revision": "0fc7cd873dda1a342190c34a343b0c7d"
  },
  {
    "url": "assets/img/put_payments.ac1de51b.png",
    "revision": "ac1de51b4b19d66817ebfa06b7a48167"
  },
  {
    "url": "assets/img/put_proj.765d4ec4.png",
    "revision": "765d4ec429aedc81b61cf600d69ceb70"
  },
  {
    "url": "assets/img/put_test.6dd06692.png",
    "revision": "6dd0669252708dfde2ef21f998fc1bce"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/server_start.87612e6e.png",
    "revision": "87612e6e1d13e163d4be69fcb39a7468"
  },
  {
    "url": "assets/js/10.b11b939c.js",
    "revision": "0de4a12d71f6e03e68f215cb7b6cc840"
  },
  {
    "url": "assets/js/11.562b90e6.js",
    "revision": "ab77aa910913461872b3e4892b8e1e15"
  },
  {
    "url": "assets/js/12.4aa8a9b1.js",
    "revision": "17908eab97d23d48aa6301f93285b659"
  },
  {
    "url": "assets/js/13.6d6cb854.js",
    "revision": "e12a49ecbb176e1442191d5861ea22c8"
  },
  {
    "url": "assets/js/14.46124ad7.js",
    "revision": "335a1552befe2f3fad24fc93ad7009f0"
  },
  {
    "url": "assets/js/15.9e81eff7.js",
    "revision": "dab43a16b15277411b1c1303f66baa83"
  },
  {
    "url": "assets/js/16.c02b3c25.js",
    "revision": "e19b2d3125f142d4183739ff9d07d3da"
  },
  {
    "url": "assets/js/17.bace2e5b.js",
    "revision": "8563484544df08ba19923895a46f9a84"
  },
  {
    "url": "assets/js/18.9761504e.js",
    "revision": "96000a801ed1e61d172f21ff479c6d44"
  },
  {
    "url": "assets/js/19.4b50488a.js",
    "revision": "7a6d704e4a3a9c40a6563df3364d5d7b"
  },
  {
    "url": "assets/js/2.89053e6e.js",
    "revision": "12bff251cab42e766f954575620ddc39"
  },
  {
    "url": "assets/js/20.7b361d51.js",
    "revision": "a2322d8795ab7d4d56104295fef01032"
  },
  {
    "url": "assets/js/21.cb38c435.js",
    "revision": "7bbb25f0c3340b3a95e1d1a6c9baf4a2"
  },
  {
    "url": "assets/js/22.a52c1c02.js",
    "revision": "6f4ec575b1f6f4572e6fe6fa4c8d23df"
  },
  {
    "url": "assets/js/23.d9997dfa.js",
    "revision": "f29460a50feba416f9e4d54ca6a04ca9"
  },
  {
    "url": "assets/js/24.3f1f0bd6.js",
    "revision": "3e4e6cd6dcf604e998d438165677dce5"
  },
  {
    "url": "assets/js/26.5cb5bd10.js",
    "revision": "8e1e3e5bde6b1481ca5b7ac091fece3c"
  },
  {
    "url": "assets/js/3.9d025ed0.js",
    "revision": "af517ce64df92fed5b9c1becf48e9e65"
  },
  {
    "url": "assets/js/4.466fffba.js",
    "revision": "fce616349f1fabba03ef8567b5ff6c30"
  },
  {
    "url": "assets/js/5.16120207.js",
    "revision": "3b80e273ae0e8a5636017da8c1b65d93"
  },
  {
    "url": "assets/js/6.a08a9b5c.js",
    "revision": "beb34d13afffb79ad9866120dfdcab82"
  },
  {
    "url": "assets/js/7.e44a82b8.js",
    "revision": "ac4cb3545e7909bd56d55be4c5327011"
  },
  {
    "url": "assets/js/8.857af815.js",
    "revision": "ed39d65ba2375d4aaeecc61b79a5dcb1"
  },
  {
    "url": "assets/js/9.5e7900cf.js",
    "revision": "951c7db388ded42c442f08f7726d7227"
  },
  {
    "url": "assets/js/app.2510d8ff.js",
    "revision": "a3c9f0e2008e82996f5d3779b30ee578"
  },
  {
    "url": "conclusion/index.html",
    "revision": "3773bf9b7a09b881343717f821f58442"
  },
  {
    "url": "design/index.html",
    "revision": "65ae1928ef9a2b2b939e117d1d1a86dc"
  },
  {
    "url": "index.html",
    "revision": "d50ca3dbdcf9f680a5874598a55dee44"
  },
  {
    "url": "intro/index.html",
    "revision": "8119a3ac191ce209cb10c5274c1795c0"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "ebc93bab31e96e135244c10a1fbb2404"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "3690d38cc7ad43860bfe9438328a7da8"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "27d95bec4a48643b59bb6a46b3052e0f"
  },
  {
    "url": "software/index.html",
    "revision": "f53c332a8605702d66283c17d65097b2"
  },
  {
    "url": "test/index.html",
    "revision": "2069fc17d68e4bcb57fe641c3af78cb1"
  },
  {
    "url": "use cases/index.html",
    "revision": "dc6f8cfb862108bd8088ba20665bbf5e"
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
