"use strict";(self.webpackChunkwebpack_react_tailwindcss=self.webpackChunkwebpack_react_tailwindcss||[]).push([[532],{950:(n,t,e)=>{e.d(t,{Z:()=>d});var r=e(8081),o=e.n(r),a=e(3645),i=e.n(a)()(o());i.push([n.id,"",""]);const d=i},1921:(n,t,e)=>{e.d(t,{Z:()=>d});var r=e(8081),o=e.n(r),a=e(3645),i=e.n(a)()(o());i.push([n.id,".n____header {\n  height: 68px;\n}\n\n.nb____content {\n  overflow-y: auto;\n}\n",""]);const d=i},1718:(n,t,e)=>{e.d(t,{Z:()=>d});var r=e(8081),o=e.n(r),a=e(3645),i=e.n(a)()(o());i.push([n.id,'.loader {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  position: relative;\n  animation: rotate 1s linear infinite;\n}\n.loader::before {\n  content: "";\n  box-sizing: border-box;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  border-radius: 50%;\n  /* border: 5px solid #fff; */\n  animation: prixClipFix 2s linear infinite;\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes prixClipFix {\n  0% {\n    -webkit-clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);\n            clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);\n  }\n  25% {\n    -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);\n            clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);\n  }\n  50% {\n    -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);\n            clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);\n  }\n  75% {\n    -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);\n            clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);\n  }\n  100% {\n    -webkit-clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);\n            clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);\n  }\n}\n',""]);const d=i},1383:(n,t,e)=>{e.d(t,{Z:()=>m});var r=e(8081),o=e.n(r),a=e(3645),i=e.n(a),d=e(1667),s=e.n(d),p=new URL(e(4052),e.b),l=new URL(e(952),e.b),c=i()(o()),b=s()(p),g=s()(l);c.push([n.id,`/*\n! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured \`sans\` font-family by default.\n5. Use the user's configured \`sans\` font-feature-settings by default.\n6. Use the user's configured \`sans\` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured \`mono\` font-family by default.\n2. Use the user's configured \`mono\` font-feature-settings by default.\n3. Use the user's configured \`mono\` font-variation-settings by default.\n4. Correct the odd \`em\` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to \`inherit\` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(58, 128, 235, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(58, 128, 235, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.left-0 {\n  left: 0px;\n}\n.top-0 {\n  top: 0px;\n}\n.z-10 {\n  z-index: 10;\n}\n.m-6 {\n  margin: 1.5rem;\n}\n.mx-1 {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.mx-6 {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n.mx-\\[10px\\] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-1 {\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n.my-3 {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.my-7 {\n  margin-top: 1.75rem;\n  margin-bottom: 1.75rem;\n}\n.my-\\[5px\\] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.my-\\[9px\\] {\n  margin-top: 9px;\n  margin-bottom: 9px;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n.mb-7 {\n  margin-bottom: 1.75rem;\n}\n.mb-8 {\n  margin-bottom: 2rem;\n}\n.me-7 {\n  margin-right: 1.75rem;\n}\n.ms-3 {\n  margin-left: 0.75rem;\n}\n.mt-0 {\n  margin-top: 0px;\n}\n.mt-12 {\n  margin-top: 3rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.mt-5 {\n  margin-top: 1.25rem;\n}\n.mt-6 {\n  margin-top: 1.5rem;\n}\n.mt-7 {\n  margin-top: 1.75rem;\n}\n.mt-\\[10px\\] {\n  margin-top: 10px;\n}\n.flex {\n  display: flex;\n}\n.h-20 {\n  height: 5rem;\n}\n.h-4 {\n  height: 1rem;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.h-7 {\n  height: 1.75rem;\n}\n.h-80 {\n  height: 20rem;\n}\n.h-\\[265px\\] {\n  height: 265px;\n}\n.h-\\[280px\\] {\n  height: 280px;\n}\n.h-\\[46px\\] {\n  height: 46px;\n}\n.h-\\[50px\\] {\n  height: 50px;\n}\n.h-\\[calc\\(100\\%_-_160px\\)\\] {\n  height: calc(100% - 160px);\n}\n.h-\\[calc\\(100vh_-_67px\\)\\] {\n  height: calc(100vh - 67px);\n}\n.h-full {\n  height: 100%;\n}\n.h-screen {\n  height: 100vh;\n}\n.max-h-80 {\n  max-height: 20rem;\n}\n.min-h-80 {\n  min-height: 20rem;\n}\n.\\!w-7 {\n  width: 1.75rem !important;\n}\n.\\!w-\\[22px\\] {\n  width: 22px !important;\n}\n.\\!w-full {\n  width: 100% !important;\n}\n.w-4 {\n  width: 1rem;\n}\n.w-40 {\n  width: 10rem;\n}\n.w-44 {\n  width: 11rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-\\[136px\\] {\n  width: 136px;\n}\n.w-\\[172px\\] {\n  width: 172px;\n}\n.w-\\[20\\%\\] {\n  width: 20%;\n}\n.w-\\[202px\\] {\n  width: 202px;\n}\n.w-\\[224px\\] {\n  width: 224px;\n}\n.w-\\[400px\\] {\n  width: 400px;\n}\n.w-\\[430px\\] {\n  width: 430px;\n}\n.w-\\[calc\\(100\\%_-_48px\\)\\] {\n  width: calc(100% - 48px);\n}\n.w-\\[calc\\(100\\%_-_92px\\)\\] {\n  width: calc(100% - 92px);\n}\n.w-full {\n  width: 100%;\n}\n.min-w-52 {\n  min-width: 13rem;\n}\n.min-w-\\[280px\\] {\n  min-width: 280px;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.items-start {\n  align-items: flex-start;\n}\n.\\!items-center {\n  align-items: center !important;\n}\n.items-center {\n  align-items: center;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-10 {\n  gap: 2.5rem;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.gap-6 {\n  gap: 1.5rem;\n}\n.gap-7 {\n  gap: 1.75rem;\n}\n.overflow-auto {\n  overflow: auto;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.rounded-2xl {\n  border-radius: 15px;\n}\n.rounded-\\[10px\\] {\n  border-radius: 10px;\n}\n.rounded-\\[15px\\] {\n  border-radius: 15px;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-se-2xl {\n  border-top-right-radius: 15px;\n}\n.rounded-ss-2xl {\n  border-top-left-radius: 15px;\n}\n.border {\n  border-width: 1px;\n}\n.border-0 {\n  border-width: 0px;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-e {\n  border-right-width: 1px;\n}\n.border-l {\n  border-left-width: 1px;\n}\n.border-red-600 {\n  --tw-border-opacity: 1;\n  border-color: rgba(220, 38, 38, 1);\n  border-color: rgba(220, 38, 38, var(--tw-border-opacity));\n}\n.border-white\\/20 {\n  border-color: rgba(255, 255, 255, 0.2);\n}\n.border-white\\/30 {\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.bg-black\\/15 {\n  background-color: rgba(0, 0, 0, 0.15);\n}\n.bg-black\\/50 {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.bg-inherit {\n  background-color: inherit;\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, 1);\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-white\\/30 {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.bg-white\\/50 {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.bg-gradient-to-b {\n  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));\n}\n.from-black\\/40 {\n  --tw-gradient-from: rgba(0, 0, 0, 0.4) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgba(0, 0, 0, 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-blue-950 {\n  --tw-gradient-from: rgba(58, 128, 235, 1) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgba(58, 128, 235, 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.to-lightblue-950 {\n  --tw-gradient-to: rgba(55, 183, 178, 1) var(--tw-gradient-to-position);\n}\n.to-transparent {\n  --tw-gradient-to: transparent var(--tw-gradient-to-position);\n}\n.to-100\\% {\n  --tw-gradient-to-position: 100%;\n}\n.\\!p-0 {\n  padding: 0px !important;\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-5 {\n  padding: 1.25rem;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.p-7 {\n  padding: 1.75rem;\n}\n.p-\\[14px\\] {\n  padding: 14px;\n}\n.p-\\[2px\\] {\n  padding: 2px;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.px-\\[38px\\] {\n  padding-left: 38px;\n  padding-right: 38px;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.py-\\[1px\\] {\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n.ps-4 {\n  padding-left: 1rem;\n}\n.pt-\\[22px\\] {\n  padding-top: 22px;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.\\!font-inter {\n  font-family: inter !important;\n}\n.font-body {\n  font-family: poppins;\n}\n.font-inter {\n  font-family: inter;\n}\n.\\!text-sm {\n  font-size: 0.875rem !important;\n  line-height: 1.25rem !important;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.\\!font-semibold {\n  font-weight: 600 !important;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-normal {\n  font-weight: 400;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.italic {\n  font-style: italic;\n}\n.leading-5 {\n  line-height: 1.25rem;\n}\n.leading-normal {\n  line-height: 1.5;\n}\n.leading-tight {\n  line-height: 1.25;\n}\n.\\!text-black {\n  --tw-text-opacity: 1 !important;\n  color: rgba(0, 0, 0, 1) !important;\n  color: rgba(0, 0, 0, var(--tw-text-opacity)) !important;\n}\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgba(55, 65, 81, 1);\n  color: rgba(55, 65, 81, var(--tw-text-opacity));\n}\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgba(239, 68, 68, 1);\n  color: rgba(239, 68, 68, var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, 1);\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.text-white\\/50 {\n  color: rgba(255, 255, 255, 0.5);\n}\n.shadow-sm {\n  --tw-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.05);;\n  --tw-shadow-colored: 0px 5px 5px 0px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0px 5px 5px 0px rgba(0, 0, 0, 0.05);;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\n.backdrop-blur-md {\n  --tw-backdrop-blur: blur(12px);\n  -webkit-backdrop-filter: blur(12px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n          backdrop-filter: blur(12px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n\n* {\n  line-height: normal;\n}\n\n@font-face {\n  font-family: poppins;\n  src: url(${b});\n}\n\n@font-face {\n  font-family: inter;\n  src: url(${g});\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\n.placeholder\\:text-white::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, 1);\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.placeholder\\:text-white::placeholder {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, 1);\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.before\\:h-\\[6px\\]::before {\n  content: var(--tw-content);\n  height: 6px;\n}\n\n.before\\:w-\\[6px\\]::before {\n  content: var(--tw-content);\n  width: 6px;\n}\n\n.before\\:rounded-full::before {\n  content: var(--tw-content);\n  border-radius: 9999px;\n}\n\n.before\\:border::before {\n  content: var(--tw-content);\n  border-width: 1px;\n}\n\n.before\\:border-4::before {\n  content: var(--tw-content);\n  border-width: 4px;\n}\n\n.before\\:border-blue-800::before {\n  content: var(--tw-content);\n  border-color: rgba(58, 128, 235, 0.8);\n}\n\n.before\\:bg-white\\/50::before {\n  content: var(--tw-content);\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n@media (min-width: 1280px) {\n\n  .xl\\:w-1\\/2 {\n    width: 50%;\n  }\n}\n\n@media (min-width: 1536px) {\n\n  .\\32xl\\:my-0 {\n    margin-top: 0px;\n    margin-bottom: 0px;\n  }\n\n  .\\32xl\\:flex-nowrap {\n    flex-wrap: nowrap;\n  }\n}\n`,""]);const m=c},4831:(n,t,e)=>{e.d(t,{Z:()=>b});var r=e(8081),o=e.n(r),a=e(3645),i=e.n(a),d=e(1667),s=e.n(d),p=new URL(e(1958),e.b),l=i()(o()),c=s()(p);l.push([n.id,`.bg-image {\n  background: url(${c}),\n    linear-gradient(168deg, #3a80eb 0%, #37b7b2 100%);\n  background-position: center;\n  width: 100%;\n  height: 100%;\n}\n`,""]);const b=l},4741:(n,t,e)=>{var r=e(3379),o=e.n(r),a=e(7795),i=e.n(a),d=e(569),s=e.n(d),p=e(3565),l=e.n(p),c=e(9216),b=e.n(c),g=e(4589),m=e.n(g),h=e(950),w={};w.styleTagTransform=m(),w.setAttributes=l(),w.insert=s().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=b(),o()(h.Z,w),h.Z&&h.Z.locals&&h.Z.locals},8463:(n,t,e)=>{var r=e(3379),o=e.n(r),a=e(7795),i=e.n(a),d=e(569),s=e.n(d),p=e(3565),l=e.n(p),c=e(9216),b=e.n(c),g=e(4589),m=e.n(g),h=e(1921),w={};w.styleTagTransform=m(),w.setAttributes=l(),w.insert=s().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=b(),o()(h.Z,w),h.Z&&h.Z.locals&&h.Z.locals},113:(n,t,e)=>{var r=e(3379),o=e.n(r),a=e(7795),i=e.n(a),d=e(569),s=e.n(d),p=e(3565),l=e.n(p),c=e(9216),b=e.n(c),g=e(4589),m=e.n(g),h=e(1718),w={};w.styleTagTransform=m(),w.setAttributes=l(),w.insert=s().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=b(),o()(h.Z,w),h.Z&&h.Z.locals&&h.Z.locals},4722:(n,t,e)=>{var r=e(3379),o=e.n(r),a=e(7795),i=e.n(a),d=e(569),s=e.n(d),p=e(3565),l=e.n(p),c=e(9216),b=e.n(c),g=e(4589),m=e.n(g),h=e(1383),w={};w.styleTagTransform=m(),w.setAttributes=l(),w.insert=s().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=b(),o()(h.Z,w),h.Z&&h.Z.locals&&h.Z.locals},1409:(n,t,e)=>{var r=e(3379),o=e.n(r),a=e(7795),i=e.n(a),d=e(569),s=e.n(d),p=e(3565),l=e.n(p),c=e(9216),b=e.n(c),g=e(4589),m=e.n(g),h=e(4831),w={};w.styleTagTransform=m(),w.setAttributes=l(),w.insert=s().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=b(),o()(h.Z,w),h.Z&&h.Z.locals&&h.Z.locals}}]);