'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "72c67c4c7c774dad80bc96b04e61628c",
".git/config": "837e1324f37ebbb6997e053b99f480f2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "982797575f0cc3a9fdd4081f4126bd76",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e41454d81d31cb6ce0b1a955751b53d8",
".git/logs/refs/heads/gh-pages": "e41454d81d31cb6ce0b1a955751b53d8",
".git/logs/refs/remotes/origin/gh-pages": "0e30b0ab55f6bc824956906760c59cae",
".git/objects/03/b1cd58d18ff58ab4fc8b272c8dab91886f4ade": "6739bba05484ea3e8b124f4e1f56c01f",
".git/objects/07/0f6230083f349873910077984e994675d2e5cd": "7368af0a4d007ed0fbec95ccf1f7a8f4",
".git/objects/11/585601938dc9eb511bbfe0ac1558b3d8c2b178": "1d759c4f681f0bef5cacd6e2219df88c",
".git/objects/13/9c769da79bf5cab18cc90b2acbdace910689cf": "4c408f136985a7d2cdb431c03a0b6ff2",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1f/b25659716ab7a6fc35b05d92719f47fb989f36": "678b0394a1d74d7991ef5a1700cae754",
".git/objects/1f/d5b586b38e7b2b1cc78156c39bc298c2cda8cb": "58dd958cfd34bcb6edf5941635827e6e",
".git/objects/2a/0878a48e6c2890c61bf3a610d704d8dd72a06a": "4f4af01cbdefc9b8530915063dec1166",
".git/objects/2e/d63e792b3a398f4f6d3efb0c30477410a897c3": "7a30f46324d20eca95878b2757435269",
".git/objects/2e/ef798f6aa694f4e3b94af1c3d5f27695387694": "314926ad30c6cbc1bdd40e447bf7d5dd",
".git/objects/2f/4e75c342647b049afdc2bb9acb8774f53b3425": "39e74b8362bb184aa3fc59f8a9654d42",
".git/objects/3f/cd83b3de978a039c76548e29878dd7539b11f0": "c5e5ac3a230e6c007224a8576e80708b",
".git/objects/40/213f9c2378d97d3a960bf2836e3c8903719c6c": "806192347aaaf8caf744c280616d0001",
".git/objects/43/010381c24f7bb9fde7fcaeb100de8ba27d2e81": "5ad052a57628e056d9b9150154a339e2",
".git/objects/43/6b1bf37092a3389b0c065b7bf3b2eb91afe6b3": "792fa8a5acf2f63ca5bee50105ffd2fd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/c2c4e9a502dbb94ab55dd99606b8716d9343ee": "5d8f088af9c6d360866af96e64d0c530",
".git/objects/4a/80fede6a701531eff18a017f1cdc1f8bf96007": "ef58cbacb89f56d746c3c2efc7a10c63",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/53/43f2950d00d41fb9a2f8df931f41954cf5c4bd": "292cd3dd01a1bcaa308a6538706ae876",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/7a/f0cd54c612481676ac7b1f0fa4f65acd3041ee": "9f0110ca824a88f08d9fcd944f025f0e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a4/a94fc836d6dff0119d3a159a30645967d6cf51": "7e784584d8852d8de85dfca174321a9e",
".git/objects/a7/50943c75b93d151de873972c5de4f657ca13f1": "aca47586e48dd06cbe0f0dfa8d88fe54",
".git/objects/ab/7c556d3b1b0341ea62d4f6ee20db2fef39d8bb": "863860a0ddc966472c1d458f2fc7e22e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bb/61bf6cec05986bb673a6e2e0cb3a5c03532c6d": "b39a7a3a28f28ca8ccd43f9b0a54c559",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/7f1b7dd0707c71e6f49d2ab23034cb005c791c": "fc87eb193bb42ce03d5aad15afe30ae0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/c4d2855840915852d57e8d7c360602fded4c14": "9efaeb60578e6c66ca6201ce1bfc2b91",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/0e62b43df6e3fbf733ae53dbe06cb68c11701a": "97053a85a2f183bff3aa03cf8e447844",
".git/objects/f5/13c274b0d59537fc49261282794832a75d2d48": "b3a29170d14464f2a62fcf6251a57a96",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/f1c44b1aad0c2ec504f3e69111dc7f3efa1817": "87d760bbbcf26b0de1995ae9abb5abf2",
".git/objects/f7/8fa4004ff9c96ddee3105e16389059c737aea3": "76e0a63e7c09e430cbda2dbdc2a701f2",
".git/objects/f9/1e9450be49d653a2feab4aa11f43b74d93a526": "d84eb14c04d80bf996ebeadeebc8c98d",
".git/objects/fa/f723beaad0c1a64f77b51d9123d993e34058d3": "28c88f9c47513867098b01158aa47ad7",
".git/refs/heads/gh-pages": "74cb31518bb2361e32b73ca5cd35860f",
".git/refs/remotes/origin/gh-pages": "74cb31518bb2361e32b73ca5cd35860f",
"assets/AssetManifest.bin": "059a0b505546e44006c76d7d71b0260a",
"assets/AssetManifest.bin.json": "30ce25a44a529a3fec6f5b216495e557",
"assets/AssetManifest.json": "3e8570fc656f30d5709994f56855fd30",
"assets/assets/icon/icon.png": "538f86a4959c6e12a6aae95cce23358c",
"assets/assets/sounds/drop.mp3": "844c71e270cb21595d12b912a75ec151",
"assets/assets/sounds/gameover.mp3": "2b25b90aabcbacec0b4cfd2172f4dae1",
"assets/assets/splash/logo.png": "b441c5c65ea4f2b082e185d2298b948e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "68a530911d2b799aa3926a9815a376b6",
"assets/NOTICES": "05ff5f247d6fcf7d2909e2163908c40a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "a98670e1e34db2df67cf6e8e3f5bdc47",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "beb1fd49b3a0339a2904604663df0e37",
"/": "beb1fd49b3a0339a2904604663df0e37",
"main.dart.js": "e76fe7b39b5a519316fcdbaa5f0cbafd",
"manifest.json": "ef826f278bb0002812fd15fc04c945d9",
"splash/img/dark-1x.png": "350df99874136cbb9180648b5836a9ac",
"splash/img/dark-2x.png": "80cd407d8f4cafea5241626ce1cfae97",
"splash/img/dark-3x.png": "a7d15531317046d37231bc2bfdddeae9",
"splash/img/dark-4x.png": "3304840219284ca322bd013695062e16",
"splash/img/light-1x.png": "350df99874136cbb9180648b5836a9ac",
"splash/img/light-2x.png": "80cd407d8f4cafea5241626ce1cfae97",
"splash/img/light-3x.png": "a7d15531317046d37231bc2bfdddeae9",
"splash/img/light-4x.png": "3304840219284ca322bd013695062e16",
"version.json": "3753b5fb0830a559fa5a26ecee743b65"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
