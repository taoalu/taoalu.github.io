'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c6860d0ff65668c90eb741bcf8c5b433",
"assets/AssetManifest.bin.json": "6bee25759c90382293abc1c4a4f1ee90",
"assets/AssetManifest.json": "479899eb8efaa99d456f48f80adbbbfa",
"assets/assets/images/ui/class/archer.png": "9cf52ed6d075b6af4b8fd0357e062d9d",
"assets/assets/images/ui/class/assassin.png": "a2e6d699036f35a150b8085b27664694",
"assets/assets/images/ui/class/ass_card.jpg": "295e557230e213c2d7265d3fa3af3b07",
"assets/assets/images/ui/class/as_card.jpg": "98e31e67dcc25d75e40b0beb3a0aa9b2",
"assets/assets/images/ui/class/atalanta.png": "bfbdf7b9fa21bf5183bd0b3f6ec6f315",
"assets/assets/images/ui/class/ats_card.jpg": "c70d2c806392f19ffe565e0770803b34",
"assets/assets/images/ui/class/brawler.png": "6fdc2f9cb8f894916dbfcca1b09175f5",
"assets/assets/images/ui/class/bs_card.jpg": "18a109f32863fe53a5d5af5df02eb493",
"assets/assets/images/ui/class/fighter.png": "ed76a99af5d75287bd64adfbbbea6f71",
"assets/assets/images/ui/class/fs_card.jpg": "e8862f8f984ee75267796d2ac4b22e95",
"assets/assets/images/ui/class/knight.png": "5563a66e1126b705a807430b72fd5c8f",
"assets/assets/images/ui/class/ks_card.jpg": "662d622906d22f5543910317de45e8fa",
"assets/assets/images/ui/class/magician.png": "f45a7fc971f10b694b18645565a402f4",
"assets/assets/images/ui/class/mechanician.png": "98559b260b79b988d05d4e95616257cc",
"assets/assets/images/ui/class/mgs_card.jpg": "c2bf346458275bf36e3ff8f3be5b82d7",
"assets/assets/images/ui/class/ms_card.jpg": "6a1cc4422af635916f63bdfebc92dc83",
"assets/assets/images/ui/class/pikeman.png": "249542fe11b97814a47e84179079b284",
"assets/assets/images/ui/class/priestess.png": "87bdf19ca2dce31f5d0a01639d23f91e",
"assets/assets/images/ui/class/prs_card.jpg": "6bfd1505938f359d1c2491fca9efce73",
"assets/assets/images/ui/class/ps_card.jpg": "b97062ea97e3c05595ca42db82e6be2d",
"assets/assets/images/ui/class/shaman.png": "e4ea74a84fb3502eafb3d4c72f294efa",
"assets/assets/images/ui/class/ss_card.jpg": "f936b3a8cdffc9df663cfa0fda7f3079",
"assets/assets/images/ui/country/br.png": "212e06f365f273135beb8381b413fb7d",
"assets/assets/images/ui/country/cn.png": "025257f911b9b7dce5166b13ffc9d0fb",
"assets/assets/images/ui/country/es.png": "ff6ae7ce44895f25686ce34014d545b9",
"assets/assets/images/ui/country/us.png": "524f6467e399a4a621cee9b0986e50a2",
"assets/assets/images/ui/country/vn.png": "8ac41533a848b0ddfa3de8d0b34c84c4",
"assets/assets/images/ui/logo.png": "8f0277f9b36c18d93447efdb8e637771",
"assets/assets/images/ui/ranking/bc.png": "7a771c19e78b70863f5f1e29253b6a95",
"assets/assets/images/ui/ranking/bc.svg": "73803064f68c37a9e566c6c843d714d9",
"assets/assets/images/ui/ranking/bc1.png": "602b1717366468552c81d99124877e69",
"assets/assets/images/ui/ranking/bc2.png": "9ca91c3a24d324ef20e6a9afa7352944",
"assets/assets/images/ui/ranking/bc3.png": "45bc21b2aa25d295a1dc7f0251dab817",
"assets/assets/images/ui/ranking/bcdef.jpg": "72a47d02f85ca7f60e3b64b6f1019b4d",
"assets/assets/images/ui/ranking/bcdef.png": "130b67627a6c38e106d571bb9080eb72",
"assets/assets/images/ui/ranking/bg.png": "08a00a7bd2b2c84125c7ae91352c4ce8",
"assets/assets/images/ui/ranking/bg.svg": "7d5c92fa2aa5514d9c43b3adabed259b",
"assets/assets/images/ui/ranking/ffa.png": "f9ddeb399b0da49fe12a087a5eeb6aa5",
"assets/assets/images/ui/ranking/fishing.png": "70234ebac4cd83588e450a44456931f4",
"assets/assets/images/ui/ranking/fishing.svg": "b6791356b618a0c36641d49febeef8cf",
"assets/assets/images/ui/ranking/fishing1.png": "55fea7d0afee634026674037db7e23cd",
"assets/assets/images/ui/ranking/fishing2.png": "3b54dc32d5977e9724897bb335999b7c",
"assets/assets/images/ui/ranking/fishing3.png": "2759950b04c1931cd22b3316568473cb",
"assets/assets/images/ui/ranking/herbalism.png": "977e3295ac7bef8d19caf8519f7e6a38",
"assets/assets/images/ui/ranking/herbalism.svg": "7125de4093f374ccb6ab70dbe5a1b7a1",
"assets/assets/images/ui/ranking/herbalism1.png": "7d280a20e73cca595fb678f557d21bdb",
"assets/assets/images/ui/ranking/herbalism2.png": "3080e79235fb41d289c88d43dbd4e5df",
"assets/assets/images/ui/ranking/herbalism3_.png": "a0455ce82b8bd04b0c5518cab2efe076",
"assets/assets/images/ui/ranking/hg.png": "7e1fd71b55d96b93d090565268819586",
"assets/assets/images/ui/ranking/hg.svg": "ebad0b312a857a222271887cd1973f8d",
"assets/assets/images/ui/ranking/hg1.png": "1b7de92ab07d781f86919fda0fa99584",
"assets/assets/images/ui/ranking/hg10.png": "adf45b2dfc0a5be06419a9b32740ea0d",
"assets/assets/images/ui/ranking/hg2.png": "414b26493525ad750dba282a3e6ee700",
"assets/assets/images/ui/ranking/hg3.png": "75ebe95ae1fb98c87e3309da647522c3",
"assets/assets/images/ui/ranking/hg4.png": "38792140f371f0ac0b2e651f1a9d0b69",
"assets/assets/images/ui/ranking/hg5.png": "7ce60be424fa7ee6a967a20febbf2eb0",
"assets/assets/images/ui/ranking/hg6.png": "0a9c1462610bcb40a177d1a2258eeda0",
"assets/assets/images/ui/ranking/hg7.png": "c3d11932864cd4e10b5b4b3f0047ca03",
"assets/assets/images/ui/ranking/hg8.png": "998e9e89404234d386ce30bcf2780f6d",
"assets/assets/images/ui/ranking/hg9.png": "94b4e76748dc17d65dc2ae7acb50bec3",
"assets/assets/images/ui/ranking/mining.png": "ec2b4d7193f9dac6f275def2ccbd64d4",
"assets/assets/images/ui/ranking/mining.svg": "264d9b8d86df5ba34c8442a3cb821dbe",
"assets/assets/images/ui/ranking/mining1.png": "5cb8a5dbce1b5c15818ebf6543d3b6bd",
"assets/assets/images/ui/ranking/mining2.png": "4ac99b019bb35aeeed8005b69920a94d",
"assets/assets/images/ui/ranking/mining3.png": "8e5186370a9ebce13dc788d9693a80c3",
"assets/assets/images/ui/ranking/pvp.png": "5be4c989faeeefb7e5a5c70ae74f9a5c",
"assets/assets/images/ui/ranking/pvp.svg": "e5c4cc7851dc317cc082ce7e73243b65",
"assets/assets/images/ui/ranking/seal_bag.png": "bc869b8f1403eb9e3ccb0ca31011d92c",
"assets/assets/images/ui/ranking/seal_freeze.png": "3db6fa2e1b625aaeb73621e05944f205",
"assets/assets/images/ui/ranking/seal_gs.png": "0374ee2d91ea519e99606c9cf9d88531",
"assets/assets/images/ui/ranking/seal_quake.png": "57d1f3fa67accf6c71ac72d13f5a2e0b",
"assets/assets/images/ui/ranking/seal_rabie.png": "81e41477f7aac04f3d2c18ca02ac6b41",
"assets/assets/images/ui/ranking/seal_stun.png": "aad59dad433efc3482d675438155bc30",
"assets/assets/images/ui/ranking/seal_stygian.png": "5c0d67a404de298f5f93c14b12f9b020",
"assets/assets/images/ui/ranking/sod.png": "f726bf18b5e1a9cb1ab157c3b03fabc0",
"assets/assets/images/ui/ranking/sod.svg": "5b5fb78a9f75b321df3463be777b81e7",
"assets/assets/images/ui/ranking/sod1.png": "cc803966648b72fe1ab6700de533b6e1",
"assets/assets/images/ui/ranking/sod2.png": "afbd4d7708c26fbc9bf5a31209e3b878",
"assets/assets/images/ui/ranking/sod3.png": "3be7f0cebd28e5b93adf94fa92680b36",
"assets/assets/images/ui/ranking/sot.png": "8bcc579265e18ed81a31ebd3d79019ea",
"assets/assets/images/ui/ranking/sot.svg": "f85f7866fa9c26cc2ddaa33a0096ad10",
"assets/assets/images/ui/ranking/top1.png": "c3c3e02a03d5a7f1b05818b6c114342c",
"assets/assets/images/ui/ranking/top2.png": "dfddcb48502c2b1900188c2718f6e0ec",
"assets/assets/images/ui/ranking/top3.png": "3aa70a77322419a03305859d67e9b9e4",
"assets/assets/images/ui/ranking/toplevel.png": "3b94e16b9becb412f4d17a1ba2b47f09",
"assets/assets/images/ui/ranking/toplevel.svg": "7f40fb22585b0b9cbe8d8311b3a3bcde",
"assets/assets/langagues/en-US.json": "0ebb1e6f95ef8ef8c18dbac5c47b26d6",
"assets/assets/langagues/es-ES.json": "c075cb9cf47af40e91d48a9d143296d8",
"assets/assets/langagues/pt-BR.json": "92070ce143198f30d8dcb4da832f425f",
"assets/assets/langagues/vi.json": "557b1ce76cad0667e0e513396136ed0c",
"assets/assets/langagues/zh-CN.json": "b4e945b81f24ac77fa99c7879aeed5ea",
"assets/assets/lottie/alert.json": "8121ea2b292d30d2c2e035966551624b",
"assets/assets/lottie/answer.json": "2d837a11958b1be6fc5be7604bc2d2cc",
"assets/assets/lottie/cloud.json": "8b72ff07801f609cc5d9a87b6a76069c",
"assets/assets/lottie/datacentercolor.json": "8066cada0ef6784a2473407b728df1b5",
"assets/assets/lottie/empty.json": "2530d08c306171eb59931cc88a4fdc01",
"assets/assets/lottie/engrenagem.json": "1da8ad137bd061072ccc7a23456471d6",
"assets/assets/lottie/error.json": "6446320de35101972432ba80949a5555",
"assets/assets/lottie/live.json": "365e3eba6e7ce3368f5d8c5e5deee9f2",
"assets/assets/lottie/loading.json": "83de4c4632bc588a3088c226c07bbecb",
"assets/assets/lottie/moreboss.json": "50feb50225e12252e105216006c98b4a",
"assets/assets/lottie/nodata.json": "7f6ae4e26e9bfef5ca5bd584b3aa49d3",
"assets/assets/lottie/questionmark.json": "85a7021a791d8ad1098d0ad7fb65cc4c",
"assets/assets/lottie/recoverypw.json": "4ff8b09789ab2a76d6c9e979055e8400",
"assets/assets/lottie/searching.json": "5d0fdf5492fec8a8ebd0ea556aee89ab",
"assets/assets/lottie/server.json": "b85d6bd080da7c91a51ee26107de79e8",
"assets/assets/lottie/success.json": "5013dbfc9e6470678970c06ba2bfb025",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "9f68a2f9a57d60136fe305e5ea11b4be",
"assets/NOTICES": "82f8151dfa061e8d303755168dba55bf",
"assets/packages/localization/test/assets/lang/en_US.json": "18804652fbce3b62aacb6cce6f572f3c",
"assets/packages/localization/test/assets/lang/pt_BR.json": "f999b93065fe17d355d1ac5dcc1ff830",
"assets/packages/localization/test/assets/lang2/en_US.json": "b389499c34b7ee2ec98c62fe49e08fa0",
"assets/packages/localization/test/assets/lang2/pt_BR.json": "08e9b784a138126822761beec7614524",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c35c43670c33d520442fdcfb94f6f149",
"/": "c35c43670c33d520442fdcfb94f6f149",
"main.dart.js": "5610851ae474b808bb0d993f5e0fc408",
"manifest.json": "178b0d54798734477d1ff9752b303a5e",
"version.json": "098e9440e2be28184ecefacc2c93cde6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
