if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,r,a)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const f={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return i;case"module":return f;default:return e(s)}}))).then((e=>{const s=a(...e);return i.default||(i.default=s),i}))})))}}define("./service_worker.js",["./workbox-f6829f63"],(function(e){"use strict";e.setCacheNameDetails({prefix:"blockbench"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"aa7bcd1aaae6536b09def1a3e697270d"},{url:"favicon.png",revision:"bb17c5c284076fc17e3399860df472d7"},{url:"js/animations/animation.js",revision:"1fc4236b9540eb4178ae049337e6ea81"},{url:"js/animations/keyframe.js",revision:"a66c014d79c882c4666ccac64a4e24c9"},{url:"js/animations/timeline.js",revision:"cc7dd779fc9befd574af73daba8ff761"},{url:"js/api.js",revision:"2c7e4bb44a29e9053bc19f913bb8dcfc"},{url:"js/blockbench.js",revision:"ef295e69f0eb341d53c6d1f3e3854af0"},{url:"js/boot_loader.js",revision:"bb296115b56010d7428a60281e0b41e1"},{url:"js/copy_paste.js",revision:"39bc5da4e15d8557a49b99562fced83e"},{url:"js/desktop.js",revision:"8e80b60f0c9e59e42f2bd79d00429366"},{url:"js/display_mode.js",revision:"e8ff5aaac11c9156f7c485a94a37c813"},{url:"js/edit_sessions.js",revision:"d465a247a8e8c5dd888ed69a89d7122e"},{url:"js/file_system.js",revision:"79a66bf18e0a3fde7078391fda7850bb"},{url:"js/interface/actions.js",revision:"0a3c21d5ff40b19f9c0a844e722f9a33"},{url:"js/interface/dialog.js",revision:"e7fb8f12bc735fa495478045f92d127a"},{url:"js/interface/interface.js",revision:"045d6bff20312cfc529bb1796592ea2e"},{url:"js/interface/keyboard.js",revision:"3babb09c7b2017a44a236e442efe3794"},{url:"js/interface/menu.js",revision:"60326360c6c5e6ddd57f6ecb1579babe"},{url:"js/interface/panels.js",revision:"a80b9082797ce7373cba8873fd03e77d"},{url:"js/interface/settings.js",revision:"c60395574b63fb08a65350b088d52593"},{url:"js/interface/themes.js",revision:"f00e4ded5213ae649d3f939c4f574cf3"},{url:"js/io/codec.js",revision:"90ffac0fbfc9dfde9f1ab14a0b85e2d4"},{url:"js/io/format.js",revision:"71993e42c2b9cf6225bce295aedcf4fb"},{url:"js/io/formats/bbmodel.js",revision:"8a5456a6bf2e697056535bd43bf57f37"},{url:"js/io/formats/bedrock_old.js",revision:"bb9d5916c9dac7ddace8bd1bd4e7a770"},{url:"js/io/formats/bedrock.js",revision:"2d40a1f30a8ce3731ea03ec3dc2cb266"},{url:"js/io/formats/gltf.js",revision:"97164aadb717eb0b7f390cfb3359e3ca"},{url:"js/io/formats/java_block.js",revision:"c87015b921e1240837bdfafeda6bafdb"},{url:"js/io/formats/modded_entity.js",revision:"e9788450abe6d7321f524992ff2d27ae"},{url:"js/io/formats/obj.js",revision:"b4cf3142aee8e669f6412b23883b452f"},{url:"js/io/formats/optifine_jem.js",revision:"238e80871c16bf35625396236a7eec6a"},{url:"js/io/formats/optifine_jpm.js",revision:"9787b52d1d66246133b514e227198156"},{url:"js/io/formats/skin.js",revision:"153a1b53a79bb06dc9c836827008b536"},{url:"js/io/io.js",revision:"4320007f80311bf7d7f17b6eae5c284b"},{url:"js/io/project.js",revision:"6ae57b943579260acec0418b901f7813"},{url:"js/modes.js",revision:"0725ae1f97995439f9141b7d0bb11fab"},{url:"js/outliner/cube.js",revision:"9260c50ceaf5811827417fbe6498fc2f"},{url:"js/outliner/group.js",revision:"560c1fb80f3fd74be983cadc7a6a2c9a"},{url:"js/outliner/locator.js",revision:"b4521d53fbfa592bb7a20936c5e1a882"},{url:"js/outliner/null_object.js",revision:"5e4451e7f8e264a45d94498cd591264f"},{url:"js/outliner/outliner.js",revision:"cf48beb48d39db705bea57e2440f2a12"},{url:"js/plugin_loader.js",revision:"950f2765e2b2e8caf2c95fc978a26e60"},{url:"js/preview/canvas.js",revision:"c9c2b48ecb396cbd8ff9e6e1b2582aaa"},{url:"js/preview/OrbitControls.js",revision:"9b4ca79587c2db6843d54723898b46e2"},{url:"js/preview/preview.js",revision:"82ef00fbfb927de026ab0b6a3d58f459"},{url:"js/preview/transformer.js",revision:"04de8b0ec1c65c2e50d0bd55229f0a8f"},{url:"js/property.js",revision:"63d106853fedc6e65267897fe5b732d1"},{url:"js/texturing/color.js",revision:"4afde5486e27e8f34245f7300e65f06b"},{url:"js/texturing/painter.js",revision:"a1361bd0060aae43b353ee94d4c246b4"},{url:"js/texturing/texture_generator.js",revision:"9fe23666b69f535b1c15116dc9888ed0"},{url:"js/texturing/textures.js",revision:"239df8f88c58640315acd2c904bdbc4c"},{url:"js/texturing/uv.js",revision:"637b129c956f413dd84e14bc1284afbd"},{url:"js/transform.js",revision:"b30206ef81db260770aa8134dcee05d0"},{url:"js/undo.js",revision:"d44f0f292a4c17cb6320bbbdcfc17086"},{url:"js/util.js",revision:"19a0419cc7d78b29df2e711d0f0fcab1"},{url:"js/web.js",revision:"20a45b554a9d37b2747a6242a92d4a70"},{url:"js/webpack/bundle.js",revision:"cc1b85bee1307dca678782a04d11cfb9"},{url:"lib/CanvasFrame.js",revision:"af677de11b513f6c8c8ff96e31e59acd"},{url:"lib/fik.min.js",revision:"9985a46a1107966f2375d0c61241c689"},{url:"lib/FileSaver.js",revision:"547422b2d7a739f14eefa1fc1c59c658"},{url:"lib/gif.js",revision:"6760f4c06414ceb8b3d30e14d3a59c69"},{url:"lib/gif.worker.js",revision:"d8cc71ca8334b5002e4481497802c2ac"},{url:"lib/GLTFExporter.js",revision:"2f55ecd5ed9cb7cb6c27cee6ef26497b"},{url:"lib/jimp.min.js",revision:"44fc5c9cee92b9d0d7738f21353297b9"},{url:"lib/jquery-ui.min.js",revision:"f7275ece7d6dea2aec3c23457415695c"},{url:"lib/jquery.js",revision:"3e4bb227fb55271bfe9c9d4a09147bd8"},{url:"lib/jszip.min.js",revision:"9927b911fee8d35162919d3790c7d492"},{url:"lib/lzutf8.js",revision:"37d1ff3b0710ba8961bcdc2c560baa17"},{url:"lib/marked.min.js",revision:"589a61c766b709a5767f76b05176459a"},{url:"lib/molang-prism-syntax.js",revision:"b0f1fa782ca08a1dfc4c4ee43ee3e88b"},{url:"lib/molang.umd.js",revision:"6530030ea8c274b4e1ad8e342cada449"},{url:"lib/peer.min.js",revision:"0ef81b5aaa05038637b792d78cf822cb"},{url:"lib/prism.js",revision:"f60031ca28963cd4f765111f42cbf615"},{url:"lib/spectrum.js",revision:"e768b31f35e9aa6eab2973a9e909639a"},{url:"lib/targa.js",revision:"17c5ce65af686baa97294748f929541e"},{url:"lib/three_custom.js",revision:"c3c35c6307d21f4565795d9ea1158432"},{url:"lib/three.min.js",revision:"5b5ab140f46a6c4b78449c23332ed78a"},{url:"lib/vue_sortable.js",revision:"87cfedd91d600fb8d44668a0e83d4101"},{url:"lib/vue.min.js",revision:"f121238864e2a9ff7e97bf60b159feb0"},{url:"lib/VuePrismEditor.min.js",revision:"8f5640c24ff4b75b71d04772a23a1f5d"},{url:"lib/wintersky.umd.js",revision:"48a2e1a15296d915785b119909b10730"},{url:"css/dialogs.css",revision:"7b339f264d3c35d34cfb0988940aafc0"},{url:"css/fontawesome.css",revision:"c495d61f0f4ac5620822edc1eb6c669e"},{url:"css/general.css",revision:"c75afe4331788f99925947d84378b983"},{url:"css/jquery-ui.min.css",revision:"db778110650dea1e4533cd09f75533a2"},{url:"css/panels.css",revision:"11d3e7086da8cff937429f6e64d39851"},{url:"css/prism.css",revision:"d67816ad66eac995b77611057f3df62f"},{url:"css/setup.css",revision:"b2903ee8a67fccee61cc3f66bb161e91"},{url:"css/spectrum.css",revision:"e098bfc3ebe7f872cff980de8c3ef07f"},{url:"css/w3.css",revision:"129107477d8b94bf3177ac5a4178242d"},{url:"css/window.css",revision:"2cc509392538310fc04d33944122196f"},{url:"assets/armor_stand.png",revision:"3df02c489fe7757dab55113d4fc057fd"},{url:"assets/brush.png",revision:"b6a28bb79f9dea063d7a2ac620a3236a"},{url:"assets/hud.png",revision:"049320fa871e4fbe54978dd6043acd8c"},{url:"assets/inventory_full.png",revision:"430fc3c0627f04302d457eead5e1fa16"},{url:"assets/inventory_nine.png",revision:"28cc307e3f2ee4570532fe6ee01a6131"},{url:"assets/item_frame.png",revision:"08eaa797bfb1ceb3784b6fa04ce77387"},{url:"assets/logo_cutout.svg",revision:"1a2b2e5db76846d910af304e87605aee"},{url:"assets/logo_text_white.svg",revision:"021abc358f6fd915b2ad77d548bb1954"},{url:"assets/missing.png",revision:"a1f4bd77899273e5327e1e206aca4065"},{url:"assets/north.png",revision:"d6c44f75fe7a6dd16927b9b8d8d0e9c2"},{url:"assets/player_skin.png",revision:"785a0d44aa606a2518465a883e6b7b8c"},{url:"assets/zombie.png",revision:"648e846e49c7563eb2625f39b76155b2"},{url:"font/Assistant-Bold.ttf",revision:"d582391da9a68daf10a2ed2514c33826"},{url:"font/Assistant-ExtraBold.ttf",revision:"f2bbc6bae2ee3ce641adc1bb1a655371"},{url:"font/Assistant-ExtraLight.ttf",revision:"5e4d348ae3eca48143c0274a3124a9c0"},{url:"font/Assistant-Light.ttf",revision:"5415f395c1567a5c19efc1dc2892927a"},{url:"font/Assistant-Regular.ttf",revision:"e2b46dd69f54e57767ceef1d5fc8e688"},{url:"font/Assistant-SemiBold.ttf",revision:"d6759edb35ac7f29a029caa1192c010d"},{url:"font/fa-brands-400.woff2",revision:"5e2f92123d241cabecf0b289b9b08d4a"},{url:"font/fa-regular-400.woff2",revision:"e6257a726a0cf6ec8c6fec22821c055f"},{url:"font/fa-solid-900.woff2",revision:"418dad87601f9c8abd0e5798c0dc1feb"},{url:"font/icomoon.ttf",revision:"6c533223c54e6efaff1e3bd2cf997750"},{url:"font/icomoon.woff",revision:"edb58213d61e108e1c28f396aec82691"},{url:"font/MaterialIcons-Regular.ttf",revision:"8ef52a15e44481b41e7db3c7eaf9bb83"}],{})}));
