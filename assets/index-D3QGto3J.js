(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();const m=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),N=(s,t,e)=>m((s-t)/(e-t)),G=s=>s*s*(3-2*s),l=(s,t,e)=>G(N(s,t,e));function d(s,{id:t,kind:e="cold",w:a=14,cls:r=""}={}){const i=Math.max(2,Math.round(a/4)),c=-Math.round(a/5),o=Math.max(3,Math.round(a/3));return`<g class="pipe ${e} ${r}" data-pipe="${t}"><path class="pw" d="${s}" style="stroke-width:${a+8}px"/><path class="pf" d="${s}" style="stroke-width:${a}px"/><path class="ph" d="${s}" style="stroke-width:${i}px" transform="translate(${c} ${c})"/><path class="pflow" d="${s}" style="stroke-width:${o}px"/></g>`}const T=new WeakMap;function x(s,t,e){const a=s.querySelector(`[data-pipe="${t}"]`);if(!a)return;let r=T.get(a);if(!r){try{r=a.querySelector(".pf").getTotalLength()}catch{r=0}if(!r)return;T.set(a,r)}const i=a.querySelectorAll(".pw,.pf,.ph");if(e>=.999)i.forEach(c=>{c.style.strokeDasharray="none",c.style.strokeDashoffset="0",c.style.opacity=""}),a.style.setProperty("--done",1);else{const c=r+2;i.forEach(o=>{o.style.strokeDasharray=`${c} ${c}`,o.style.strokeDashoffset=String(c*(1-e)),o.style.opacity=e<=.002?"0":""}),a.style.setProperty("--done",0)}}function b(s,t){for(const e in t)s.style.setProperty("--"+e,t[e])}function M(s,t,e){const a=e*.72;return`<g class="wheel" style="transform-origin:${s}px ${t}px">
    <circle cx="${s}" cy="${t}" r="${e}" class="w-o"/>
    <circle cx="${s}" cy="${t}" r="${e}" class="w-b"/>
    <path d="M${s-e} ${t}H${s+e}M${s} ${t-e}V${t+e}" class="w-sp-o"/>
    <path d="M${s-e} ${t}H${s+e}M${s} ${t-e}V${t+e}" class="w-sp"/>
    <circle cx="${s}" cy="${t}" r="${Math.round(e*.3)}" class="s f-brass"/>
    <circle cx="${(s+a).toFixed(1)}" cy="${(t-a).toFixed(1)}" r="${Math.round(e*.2)}" class="s f-brassd"/>
  </g>`}function q(s,t,e,a=13,r=-120,i=120){let c="";for(let o=0;o<a;o++){const n=(r+o*(i-r)/(a-1))*Math.PI/180,h=o%3===0,p=e-(h?16:9);c+=`<line x1="${(s+Math.sin(n)*e).toFixed(1)}" y1="${(t-Math.cos(n)*e).toFixed(1)}" x2="${(s+Math.sin(n)*p).toFixed(1)}" y2="${(t-Math.cos(n)*p).toFixed(1)}" stroke-width="${h?4:2.5}"/>`}return`<g class="ticks">${c}</g>`}const Q=()=>`
<svg class="hero-svg" viewBox="-340 0 1300 760" preserveAspectRatio="xMaxYMax meet" aria-hidden="true" focusable="false">
  <defs>
    <pattern id="h-tile" width="26" height="26" patternUnits="userSpaceOnUse">
      <rect width="26" height="26" fill="#d6e8f2"/><path d="M26 0V26H0" fill="none" stroke="#a9cade" stroke-width="2"/>
    </pattern>
    <pattern id="h-pebble" width="46" height="38" patternUnits="userSpaceOnUse">
      <circle cx="8" cy="9" r="2.4" fill="#2f6180"/><circle cx="30" cy="24" r="3.2" fill="#2f6180"/>
      <circle cx="40" cy="6" r="1.8" fill="#2f6180"/><path d="M12 31q6 -5 12 0" fill="none" stroke="#2f6180" stroke-width="2"/>
    </pattern>
    <linearGradient id="h-cyl" x1="0" x2="1">
      <stop offset="0" stop-color="#8fa6b3"/><stop offset=".38" stop-color="#f1f7fa"/><stop offset="1" stop-color="#9db3c0"/>
    </linearGradient>
    <linearGradient id="h-warm" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#e4572e"/><stop offset="1" stop-color="#ffb347"/>
    </linearGradient>
    <clipPath id="h-cylclip"><rect x="790" y="262" width="80" height="208" rx="34"/></clipPath>
  </defs>

  <!-- ground -->
  <rect x="-3000" y="486" width="6000" height="900" class="soil"/>
  <rect x="-3000" y="486" width="6000" height="900" fill="url(#h-pebble)" opacity=".55"/>
  <rect x="-3000" y="470" width="6000" height="16" class="s f-steel"/>

  <!-- room cutaway -->
  <rect x="410" y="70" width="520" height="400" class="s f-paper"/>
  <rect x="520" y="170" width="240" height="224" fill="url(#h-tile)" class="s s-thin"/>
  <rect x="410" y="450" width="520" height="20" class="s f-steel"/>
  <rect x="580" y="84" width="120" height="58" rx="12" class="s f-brass"/><rect x="588" y="92" width="104" height="42" rx="7" class="s s-thin" fill="#bfe3f5"/><path d="M604 126L628 100M632 128L652 108" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".75"/><path d="M796 112H904" class="s n"/><rect x="800" y="116" width="46" height="62" rx="4" class="s f-blue"/><path d="M810 116V178M822 116V178M834 116V178" stroke="#fff" stroke-opacity=".5" stroke-width="3"/><circle cx="796" cy="112" r="5" class="s f-brass"/><circle cx="904" cy="112" r="5" class="s f-brass"/>

  <!-- valve box in the footpath -->
  <rect x="298" y="470" width="64" height="170" class="s f-deep"/>
  <rect x="290" y="448" width="80" height="12" rx="3" class="s f-lid" transform="rotate(-13 330 454)"/>
  <rect x="326" y="574" width="8" height="64" class="s f-brass"/>

  <!-- pipes -->
  ${d("M-900 650H330",{id:"m1",kind:"cold",w:18})}
  ${d("M330 650H830",{id:"m2",kind:"cold",w:18,cls:"down"})}
  ${d("M470 650V215H598",{id:"m3",kind:"cold",w:18,cls:"down"})}
  ${d("M830 650V440",{id:"m4",kind:"cold",w:18,cls:"down"})}
  ${d("M830 270V215H682",{id:"h1",kind:"hot",w:18,cls:"down"})}

  <!-- meter -->
  <rect x="178" y="606" width="24" height="26" class="s f-brass"/>
  <rect x="158" y="632" width="64" height="38" rx="7" class="s f-brass"/>
  <circle cx="190" cy="582" r="34" class="s f-brassd"/>
  <circle cx="190" cy="582" r="27" class="s f-paper"/>
  <g class="h-ticks">${q(190,582,24,9,-130,130)}</g>
  <g class="needle" style="transform-origin:190px 582px"><line x1="190" y1="582" x2="190" y2="562" class="s" stroke-width="3.5"/></g>
  <circle cx="190" cy="582" r="4" class="s f-ink"/>
  <rect x="158" y="632" width="64" height="38" rx="7" class="n s"/>

  <!-- main stop valve body and wheel -->
  <rect x="310" y="632" width="40" height="36" rx="6" class="s f-brass"/>
  <g class="h-wheel">${M(330,538,32)}</g>
  <circle cx="330" cy="538" r="46" class="hint-ring"/>
  <circle cx="330" cy="538" r="50" class="hit"/>

  <!-- hot water cylinder -->
  <rect x="772" y="462" width="116" height="9" rx="2" class="s f-steel"/>
  <rect x="790" y="262" width="80" height="208" rx="34" fill="url(#h-cyl)" class="s"/>
  <g clip-path="url(#h-cylclip)">
    <rect class="warm" x="790" y="262" width="80" height="208" fill="url(#h-warm)"/>
    <path d="M790 316H870M790 420H870" class="s s-thin n"/>
  </g>
  <rect x="790" y="262" width="80" height="208" rx="34" class="s n"/>
  <rect x="814" y="252" width="32" height="14" rx="3" class="s f-brass"/>
  <circle cx="830" cy="368" r="13" class="s f-brass"/>
  <path d="M830 368l7 -8" class="s n" stroke-width="3"/>
  <rect x="868" y="300" width="24" height="14" rx="3" class="s f-brass"/>
  <path d="M892 307h14" class="s n"/>

  <!-- basin -->
  <rect x="626" y="432" width="28" height="32" class="s f-paper"/>
  <rect x="602" y="460" width="76" height="10" rx="3" class="s f-paper"/>
  <path d="M535 394C535 440 600 454 640 454C680 454 745 440 745 394Z" class="s f-paper"/>
  <ellipse cx="640" cy="394" rx="106" ry="20" class="s f-paper"/>
  <ellipse cx="640" cy="397" rx="90" ry="13" class="s f-water"/>
  <g class="ripples">
    <ellipse class="rip r1" cx="640" cy="397" rx="30" ry="5"/>
    <ellipse class="rip r2" cx="640" cy="397" rx="30" ry="5"/>
    <ellipse class="rip r3" cx="640" cy="397" rx="30" ry="5"/>
  </g>

  <!-- tap -->
  <rect x="606" y="198" width="68" height="34" rx="9" class="s f-brass"/>
  <rect x="610" y="170" width="18" height="30" rx="6" class="s f-brass"/>
  <rect x="652" y="170" width="18" height="30" rx="6" class="s f-brass"/>
  <circle cx="619" cy="160" r="9" class="s f-blue"/>
  <circle cx="661" cy="160" r="9" class="s f-hot"/>
  <path d="M640 232V270" class="spout-o"/>
  <path d="M640 232V270" class="spout-b"/>
  <rect x="626" y="266" width="28" height="14" rx="4" class="s f-brassd"/>

  <!-- water falling from the tap -->
  <g class="stream">
    <path d="M640 282V398" class="st-o"/>
    <path d="M640 282V398" class="st-f"/>
    <path d="M640 282V398" class="st-flow"/>
  </g>
  <g class="drip-g"><path d="M640 286q-6 10 0 14q6 -4 0 -14z" class="s f-water drip" stroke-width="2.5"/></g>

  <!-- labels (keep inside desktop crop viewBox x≈250–970) -->
  <text x="290" y="700" class="lbl lbl-w">WATERMAIN</text>
  <text x="290" y="722" class="lbl lbl-w" style="font-size:12px">UNDER THE STREET</text>
  <text x="420" y="700" class="lbl lbl-w" text-anchor="middle">METER</text>
  <text x="372" y="520" class="lbl lbl-b" style="font-size:13px">MAIN STOP</text>
  <text x="372" y="540" class="lbl lbl-b hint-txt" style="font-size:13px">TURN IT</text>
  <text x="858" y="506" class="lbl lbl-w" text-anchor="middle">HOT WATER</text>
  <text x="858" y="524" class="lbl lbl-w" text-anchor="middle">CYLINDER</text>
</svg>`,B=[["m1",0,.3],["m2",.22,.5],["m3",.42,.82],["m4",.5,.68],["h1",.7,.98]];function z(s,{reduce:t}){var A;s.innerHTML=Q();const e=s.querySelector("svg"),a=window.matchMedia("(max-width: 859px)"),r=()=>{e.setAttribute("viewBox",a.matches?"255 60 715 700":"250 40 720 720"),e.setAttribute("preserveAspectRatio",(a.matches,"xMidYMid meet"))};r(),(A=a.addEventListener)==null||A.call(a,"change",r);const i=f=>B.forEach(([k,g,$])=>x(e,k,l(f,g,$))),c=document.querySelector("[data-valve]"),o=document.querySelector("[data-valve-label]");let n=!0;function h(f){n=f,e.classList.toggle("on",n),e.classList.toggle("off",!n),e.style.setProperty("--valve",n?0:1),c&&(c.setAttribute("aria-pressed",String(n)),c.classList.toggle("is-off",!n)),o&&(o.textContent=n?"Water is on. Shut the main off.":"Water is off. Turn it back on."),e.classList.add("touched")}const p=e.querySelector(".hit");p.addEventListener("click",()=>h(!n)),p.addEventListener("keydown",f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),h(!n))}),c==null||c.addEventListener("click",()=>h(!n)),e.style.setProperty("--valve",0);const F=()=>{e.classList.add("live","on"),c&&(c.hidden=!1)};if(t)i(1),F();else{i(0);const f=performance.now()+250,k=2800,g=$=>{const P=Math.min(1,Math.max(0,($-f)/k));i(P),P<1?requestAnimationFrame(g):F()};requestAnimationFrame(g)}}const Z=[[-70,120,1],[-45,160,2],[-22,190,3],[-5,210,4],[18,195,5],[42,165,6],[66,125,7],[-58,80,8],[54,85,9]].map(([s,t,e])=>`<circle class="spl" cx="400" cy="283" r="5" style="--dx:${s}px;--h:${t}px;--fall:${200+e%3*6}px;animation-delay:${-(e*.17).toFixed(2)}s"/>`).join(""),W=()=>`
<svg class="scene" viewBox="0 0 800 560" role="img" aria-label="A burst pipe sprays water while the meter runs. A valve is shut, the split section is cut out, a new section and brass couplers go in, and the pipe runs dry." focusable="false">
  <defs>
    <pattern id="l-wall" width="60" height="30" patternUnits="userSpaceOnUse">
      <path d="M0 29.5H60M30 0V29.5" fill="none" stroke="#c9dbe6" stroke-width="2"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="800" height="490" fill="url(#l-wall)"/>
  <rect x="-4" y="490" width="808" height="74" class="s f-steel"/>
  <ellipse class="puddle" cx="400" cy="498" rx="150" ry="11"/>

  <!-- dripping tap, top left -->
  <path d="M96 100H132V130" class="spout-o" style="stroke-width:20px"/>
  <path d="M96 100H132V130" class="spout-b" style="stroke-width:12px"/>
  <rect x="58" y="84" width="46" height="32" rx="8" class="s f-brass"/>
  <rect x="68" y="62" width="26" height="24" rx="6" class="s f-brass"/>
  <path d="M60 192H190L174 230H76Z" class="s f-paper"/>
  <path d="M80 214H170" stroke="#7fd3f7" stroke-width="6" stroke-linecap="round"/>
  <g class="tapdrip"><path class="s f-water dripd" d="M132 138q-6 10 0 14q6 -4 0 -14z" stroke-width="2.5"/></g>
  <text x="124" y="262" class="lbl" text-anchor="middle">DRIPPING TAP</text>

  <!-- supply line -->
  ${d("M-10 300H378",{id:"L1",kind:"cold",w:26})}
  ${d("M422 300H810",{id:"L2",kind:"cold",w:26})}

  <!-- stop valve -->
  <rect x="254" y="248" width="12" height="36" class="s f-brass"/>
  <rect x="238" y="280" width="44" height="40" rx="7" class="s f-brass"/>
  ${M(260,218,28)}
  <text x="260" y="170" class="lbl" text-anchor="middle">STOP VALVE</text><path d="M120 322v14M520 322v14M680 322v14" class="s n" stroke-width="10"/><path d="M104 336h32M504 336h32M664 336h32" class="s n" stroke-width="6"/>

  <!-- the damaged section -->
  <g class="dmg" style="transform-origin:400px 300px">
    <rect x="376" y="283" width="48" height="34" class="s" fill="#8a6b4d"/>
    <path d="M388 283l9 9 -8 8 11 9 -7 8" class="s n" stroke-width="3"/>
    <circle cx="414" cy="297" r="2.5" fill="#5a3f28"/><circle cx="384" cy="309" r="2.5" fill="#5a3f28"/>
  </g>

  <!-- new section and brass couplers -->
  <g class="newp" style="transform-origin:400px 300px">
    <rect x="376" y="283" width="48" height="34" class="s f-blue"/>
    <path d="M382 291H418" stroke="#fff" stroke-opacity=".4" stroke-width="4" stroke-linecap="round"/>
  </g>
  <g class="cpl" style="transform-origin:400px 300px">
    <rect x="360" y="274" width="26" height="52" rx="5" class="s f-brass"/>
    <rect x="414" y="274" width="26" height="52" rx="5" class="s f-brass"/>
    <circle cx="373" cy="285" r="3" class="s f-brassd" stroke-width="2"/><circle cx="373" cy="315" r="3" class="s f-brassd" stroke-width="2"/>
    <circle cx="427" cy="285" r="3" class="s f-brassd" stroke-width="2"/><circle cx="427" cy="315" r="3" class="s f-brassd" stroke-width="2"/>
  </g>

  <!-- the spray -->
  <g class="spray" style="transform-origin:400px 283px">
    <path d="M400 283Q398 220 400 140" class="jet-o"/><path d="M400 283Q396 222 352 176" class="jet-o"/><path d="M400 283Q404 222 448 176" class="jet-o"/>
    <path d="M400 283Q398 220 400 140" class="jet"/><path d="M400 283Q396 222 352 176" class="jet"/><path d="M400 283Q404 222 448 176" class="jet"/>
    ${Z}
  </g>

  <!-- water meter -->
  <circle cx="640" cy="130" r="94" class="s f-brass"/>
  <circle cx="640" cy="130" r="80" class="s f-paper"/>
  <g class="m-ticks">${q(640,130,72)}</g>
  <text x="640" y="196" class="lbl" text-anchor="middle" style="display:none">m3</text>
  <g class="needle" style="transform-origin:640px 130px"><line x1="640" y1="130" x2="640" y2="70" class="s" stroke-width="5"/></g>
  <circle cx="640" cy="130" r="9" class="s f-ink"/>
  <rect x="588" y="160" width="104" height="28" rx="4" class="s f-ink"/>
  <text class="odo" x="640" y="181" text-anchor="middle">04720</text>
  <text x="640" y="26" class="lbl" text-anchor="middle">WATER METER</text>

  <!-- stamp -->
  <g class="stamp" style="transform-origin:610px 430px">
    <rect x="540" y="400" width="140" height="58" rx="10" class="stamp-box"/>
    <text x="610" y="443" text-anchor="middle" class="stamp-txt">DRY</text>
  </g>
</svg>`;function O(s){return .88*(1-l(s,.26,.4))+.1*l(s,.86,.95)+.03}let R="";const Y={markup:W,update(s,t){const e=1-l(t,.26,.38),a=l(t,.25,.38)-l(t,.82,.92),r=m(1-l(t,.24,.3)+l(t,.84,.9)),i=(.3+.7*N(t,0,.25))*(1-l(t,.55,.85));b(s,{spray:e.toFixed(3),valve:a.toFixed(3),flow:r.toFixed(3),puddle:i.toFixed(3),needle:O(t).toFixed(3),drop:l(t,.45,.55).toFixed(3),ins:l(t,.52,.65).toFixed(3),cpl:l(t,.62,.72).toFixed(3),drip:(1-l(t,.76,.84)).toFixed(3),stamp:l(t,.9,.98).toFixed(3)}),x(s,"L1",1),x(s,"L2",1);let c=0;const o=30;for(let h=0;h<o;h++)c+=O(t*(h+.5)/o)*(t/o);const n=String(4720+Math.round(c*420)).padStart(5,"0");if(n!==R){R=n;const h=s.querySelector(".odo");h&&(h.textContent=n)}}},K=()=>`
<svg class="scene" viewBox="0 0 800 560" role="img" aria-label="A worn hot water cylinder is drained and carried out, a new one slides in, cold in and hot out are connected with a relief valve piped to a drain, and a thermometer climbs as it heats." focusable="false">
  <defs>
    <pattern id="c-wall" width="60" height="30" patternUnits="userSpaceOnUse">
      <path d="M0 29.5H60M30 0V29.5" fill="none" stroke="#c9dbe6" stroke-width="2"/>
    </pattern>
    <linearGradient id="c-body" x1="0" x2="1">
      <stop offset="0" stop-color="#8fa6b3"/><stop offset=".4" stop-color="#f1f7fa"/><stop offset="1" stop-color="#9db3c0"/>
    </linearGradient>
    <linearGradient id="c-old" x1="0" x2="1">
      <stop offset="0" stop-color="#6e7b82"/><stop offset=".4" stop-color="#b3bcc0"/><stop offset="1" stop-color="#6b777e"/>
    </linearGradient>
    <linearGradient id="c-warm" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#e4572e"/><stop offset="1" stop-color="#ffb347"/>
    </linearGradient>
    <clipPath id="c-win"><rect x="348" y="196" width="104" height="244" rx="40"/></clipPath>
    <clipPath id="c-owin"><rect x="348" y="196" width="104" height="244" rx="40"/></clipPath>
  </defs>
  <rect x="0" y="0" width="800" height="496" fill="url(#c-wall)"/>
  <rect x="-4" y="496" width="808" height="70" class="s f-steel"/>
  <ellipse class="c-puddle" cx="260" cy="504" rx="110" ry="9" style="transform-origin:260px 504px"/>

  <!-- cold in (left), hot out (top, right) -->
  ${d("M-10 440H350",{id:"cold",kind:"cold",w:22})}
  ${d("M400 150V70H810",{id:"hot",kind:"hot",w:22,cls:"hotflow"})}
  ${d("M480 208H560V490",{id:"relief",kind:"waste",w:12})}

  <!-- isolation valve -->
  <rect x="195" y="402" width="10" height="30" class="s f-brass"/>
  <rect x="180" y="426" width="40" height="28" rx="6" class="s f-brass"/>
  ${M(200,376,26)}
  <text x="40" y="410" class="lbl">COLD IN</text>
  <text x="740" y="52" class="lbl" text-anchor="end">HOT OUT</text>

  <!-- old cylinder -->
  <g class="oldc">
    <rect x="300" y="494" width="200" height="10" rx="2" class="s f-steel"/>
    <rect x="320" y="146" width="160" height="350" rx="64" fill="url(#c-old)" class="s"/>
    <g clip-path="url(#c-owin)">
      <rect class="o-water" x="348" y="196" width="104" height="244" fill="#8fc7e3"/>
    </g>
    <rect x="348" y="196" width="104" height="244" rx="40" class="s n"/>
    <path d="M336 300q10 30 4 60M470 250q-8 40 -2 80M352 120" class="rust"/>
    <rect x="380" y="132" width="40" height="16" rx="3" class="s" fill="#7d6a52"/>
    <circle cx="400" cy="470" r="3" fill="#5a3f28"/><circle cx="440" cy="470" r="3" fill="#5a3f28"/>
    <path d="M466 498q-6 12 0 16q6 -4 0 -16z" class="s f-water" stroke-width="2.5"/>
  </g>

  <!-- new cylinder -->
  <g class="newc">
    <rect x="300" y="494" width="200" height="10" rx="2" class="s f-steel"/>
    <rect x="320" y="146" width="160" height="350" rx="64" fill="url(#c-body)" class="s"/>
    <g clip-path="url(#c-win)">
      <rect x="348" y="196" width="104" height="244" fill="#7fd3f7"/>
      <rect class="c-warm" x="348" y="196" width="104" height="244" fill="url(#c-warm)"/>
      <path d="M356 420H440M356 420q-8 0 -8 -10t8 -10H444q8 0 8 -10t-8 -10H356q-8 0 -8 -10t8 -10H444" class="coil"/>
    </g>
    <rect x="348" y="196" width="104" height="244" rx="40" class="s n"/>
    <rect x="378" y="132" width="44" height="18" rx="3" class="s f-brass"/>
    <rect x="480" y="194" width="40" height="28" rx="5" class="s f-brass"/>
    <path d="M520 208h14" class="s n"/>
    <circle cx="400" cy="468" r="11" class="s f-brass"/>
    <path d="M400 468l6 -6" class="s n" stroke-width="3"/>
  </g>
  <g class="unions">
    <rect x="334" y="428" width="24" height="24" rx="5" class="s f-brass"/>
    <rect x="388" y="136" width="24" height="26" rx="5" class="s f-brass"/>
  </g>
  <text x="590" y="176" class="lbl" style="display:none">RELIEF</text>

  <!-- thermometer -->
  <rect x="624" y="150" width="30" height="256" rx="15" class="s f-paper"/>
  <rect class="merc" x="631" y="168" width="16" height="230" rx="8" fill="#e4572e" style="transform-origin:639px 398px"/>
  <circle cx="639" cy="424" r="26" class="s f-hot"/>
  <path d="M660 190H674M660 230H674M660 270H674M660 310H674M660 350H674" class="s n" stroke-width="3"/>
  <rect x="660" y="116" width="118" height="42" rx="6" class="s f-ink"/>
  <text class="temp" x="719" y="148" text-anchor="middle">15°</text>
</svg>`,_={markup:K,update(s,t){const e=m(1-l(t,.04,.1)+l(t,.84,.9)),a=l(t,.04,.14)-l(t,.84,.94),r=l(t,.8,.98);b(s,{flow:e.toFixed(3),flowh:l(t,.9,.97).toFixed(3),valve:a.toFixed(3),drain:(1-l(t,.08,.22)).toFixed(3),cpud:(l(t,.08,.22)*(1-l(t,.6,.8))).toFixed(3),oldx:(l(t,.24,.42)*-620).toFixed(1),newx:((1-l(t,.44,.62))*620).toFixed(1),un:l(t,.66,.74).toFixed(3),heat:r.toFixed(3)}),x(s,"cold",1),x(s,"hot",1),x(s,"relief",l(t,.72,.84));const i=s.querySelector(".temp");if(i){const c=Math.round(15+r*45)+"°";i.textContent!==c&&(i.textContent=c)}}},X=()=>`
<svg class="scene" viewBox="0 0 800 560" role="img" aria-label="A burst watermain sprays through the footpath. The water is shut off, a digger opens a trench, a new main is laid and joined with brass couplers up to the house, and water runs to the garden tap." focusable="false">
  <defs>
    <pattern id="w-pebble" width="46" height="38" patternUnits="userSpaceOnUse">
      <circle cx="8" cy="9" r="2.4" fill="#34657f"/><circle cx="30" cy="24" r="3.2" fill="#34657f"/>
      <circle cx="40" cy="6" r="1.8" fill="#34657f"/><path d="M12 31q6 -5 12 0" fill="none" stroke="#34657f" stroke-width="2"/>
    </pattern>
  </defs>

  <path d="M120 70q-4 -20 18 -22q8 -18 34 -10q22 -12 36 8q22 2 18 24z" class="s f-paper"/><path d="M380 44q-3 -14 14 -15q6 -13 24 -7q16 -8 26 6q16 1 13 16z" class="s f-paper"/>
  <!-- house -->
  <path d="M566 74L685 10L804 74Z" class="s f-blue"/>
  <rect x="580" y="74" width="212" height="116" class="s f-paper"/>
  <rect x="598" y="128" width="42" height="62" class="s f-brass"/>
  <rect x="710" y="94" width="58" height="40" class="s f-water"/>
  <path d="M739 94V134M710 114H768" class="s n" stroke-width="2.5"/>

  <!-- ground -->
  <rect x="-4" y="190" width="808" height="374" class="soil"/>
  <rect x="-4" y="190" width="808" height="374" fill="url(#w-pebble)" opacity=".6"/>
  <rect x="-4" y="178" width="808" height="14" class="s f-steel"/>
  <path d="M-4 340q80 -14 160 0t160 0t160 0t160 0t160 0M-4 420q90 14 180 0t180 0t180 0t120 0" class="strata"/>

  <!-- meter box in the footpath -->
  <rect x="106" y="178" width="48" height="76" class="s f-deep"/>
  <circle cx="130" cy="220" r="15" class="s f-brass"/>
  <path d="M130 235V292" class="s n" stroke-width="3"/>

  <!-- trench -->
  <rect class="trench" x="70" y="262" width="590" height="60" style="transform-origin:70px 292px"/>
  <ellipse class="wet" cx="330" cy="262" rx="46" ry="60"/>

  <!-- the old, burst main -->
  <g class="oldmain">
    ${d("M70 292H312",{id:"o1",kind:"old",w:18})}
    ${d("M348 292H660V196",{id:"o2",kind:"old",w:18})}
    <path d="M312 282l6 10 -7 7 8 7M348 282l-6 10 7 7 -8 7" class="s n" stroke-width="3"/>
  </g>

  <!-- geyser -->
  <g class="gey" style="transform-origin:330px 292px">
    <path d="M330 288V188" class="jet-o" style="stroke-width:20px"/>
    <path d="M330 288V188" class="jet" style="stroke-width:12px"/>
    <path d="M330 190Q328 110 330 40M330 190Q324 120 288 84M330 190Q336 120 372 84" class="jet-o"/>
    <path d="M330 190Q328 110 330 40M330 190Q324 120 288 84M330 190Q336 120 372 84" class="jet"/>
    <circle class="spl" cx="330" cy="190" r="5" style="--dx:-60px;--h:150px;--fall:0px;animation-delay:-.1s"/>
    <circle class="spl" cx="330" cy="190" r="5" style="--dx:-24px;--h:190px;--fall:0px;animation-delay:-.5s"/>
    <circle class="spl" cx="330" cy="190" r="5" style="--dx:22px;--h:176px;--fall:0px;animation-delay:-.3s"/>
    <circle class="spl" cx="330" cy="190" r="5" style="--dx:62px;--h:150px;--fall:0px;animation-delay:-.7s"/>
  </g>
  <ellipse class="w-puddle" cx="330" cy="186" rx="84" ry="8" style="transform-origin:330px 186px"/>

  <!-- the new main -->
  ${d("M70 292H660V120H592",{id:"n1",kind:"cold",w:20})}
  <g class="couplers">
    <rect x="186" y="272" width="16" height="40" rx="4" class="s f-brass cp" data-at="0.14"/>
    <rect x="316" y="272" width="16" height="40" rx="4" class="s f-brass cp" data-at="0.3"/>
    <rect x="446" y="272" width="16" height="40" rx="4" class="s f-brass cp" data-at="0.46"/>
    <rect x="576" y="272" width="16" height="40" rx="4" class="s f-brass cp" data-at="0.62"/>
  </g>
  <g class="cn" style="transform-origin:130px 292px">
    <rect x="118" y="270" width="24" height="44" rx="5" class="s f-brass"/>
    <rect x="652" y="112" width="16" height="16" rx="3" class="s f-brass" transform="translate(-0 0)"/>
  </g>

  <!-- garden tap on the house wall -->
  <path d="M584 120H562V138" class="spout-o" style="stroke-width:18px"/>
  <path d="M584 120H562V138" class="spout-b" style="stroke-width:10px"/>
  <rect x="580" y="108" width="12" height="24" rx="3" class="s f-brass"/>
  <g class="stream gstream" style="transform-origin:562px 144px">
    <path d="M562 142V186" class="st-o" style="stroke-width:12px"/>
    <path d="M562 142V186" class="st-f" style="stroke-width:6px"/>
    <path d="M562 142V186" class="st-flow"/>
  </g>
  <text x="484" y="104" class="lbl" text-anchor="middle">GARDEN TAP</text>

  <!-- digger -->
  <g class="digger">
    <rect x="-52" y="-24" width="104" height="24" rx="12" class="s f-deepbrass"/>
    <circle cx="-34" cy="-12" r="7" class="s f-steel"/><circle cx="0" cy="-12" r="7" class="s f-steel"/><circle cx="34" cy="-12" r="7" class="s f-steel"/>
    <rect x="-42" y="-62" width="78" height="40" rx="6" class="s f-brass"/>
    <path d="M-36 -62V-94H-2L12 -62Z" class="s f-paper"/>
    <path d="M-28 -88H-6L2 -68H-28Z" class="s f-water" stroke-width="2.5"/>
    <path d="M14 -58L50 -92" class="s n" stroke-width="7"/>
    <path d="M30 -54L70 -108L124 30" class="arm-o"/>
    <path d="M30 -54L70 -108L124 30" class="arm-b"/>
    <path d="M108 28L148 36L152 68L114 72Z" class="s f-deepbrass"/>
  </g>
</svg>`,v=[],J={markup:X,update(s,t){const e=l(t,.22,.45),a=l(t,.46,.7),r=1-l(t,.16,.26);b(s,{gey:r.toFixed(3),dig:e.toFixed(3),og:l(t,.42,.52).toFixed(3),dv:(Math.min(1,e*10)*(1-l(t,.66,.74))).toFixed(3),flow:l(t,.86,.92).toFixed(3),cn:l(t,.7,.8).toFixed(3),puddle:(r*.9+.1*(1-l(t,.4,.6))).toFixed(3)}),x(s,"o1",1),x(s,"o2",1),x(s,"n1",a),v.length||s.querySelectorAll(".cp").forEach(i=>v.push([i,Number(i.dataset.at)])),v.forEach(([i,c])=>i.classList.toggle("in",a>=c+.04))}},tt=12,st=Array.from({length:tt},(s,t)=>`<rect class="stud" x="${56+t*60}" y="104" width="14" height="384" />`).join(""),et=Array.from({length:7},(s,t)=>{const e=213+(t-3)*8,a=(t-3)*5;return`<path class="rain" d="M${e-a} 200L${e+a*1.2} 466" style="animation-delay:${-(t*.13).toFixed(2)}s"/>`}).join(""),at=()=>`
<svg class="scene" viewBox="0 0 800 560" role="img" aria-label="A timber frame goes up. Cold and hot lines are run through it, waste pipes and fixtures follow, a pressure gauge tests the lines, then water runs from the shower, basin and kitchen tap." focusable="false">
  <defs>
    <pattern id="n-tile" width="24" height="24" patternUnits="userSpaceOnUse">
      <rect width="24" height="24" fill="#d6e8f2"/><path d="M24 0V24H0" fill="none" stroke="#a9cade" stroke-width="2"/>
    </pattern>
    <linearGradient id="n-cyl" x1="0" x2="1">
      <stop offset="0" stop-color="#8fa6b3"/><stop offset=".4" stop-color="#f1f7fa"/><stop offset="1" stop-color="#9db3c0"/>
    </linearGradient>
  </defs>

  <!-- slab -->
  <rect x="-4" y="500" width="808" height="64" class="s f-steel"/>
  <path d="M-4 530H810" class="s s-thin n"/>

  <!-- frame -->
  <g class="frame">${st}</g>
  <rect class="plate-top" x="48" y="90" width="696" height="16" style="transform-origin:48px 98px"/>
  <rect class="plate-bot" x="48" y="486" width="696" height="16" style="transform-origin:48px 494px"/>

  <!-- waste under the slab -->
  ${d("M165 480V516H588V480",{id:"w1",kind:"waste",w:12})}
  ${d("M370 482V516",{id:"w2",kind:"waste",w:12})}

  <!-- cold and hot runs, then branches -->
  ${d("M30 560V455H700",{id:"c0",kind:"cold",w:14})}
  ${d("M700 425H182",{id:"h0",kind:"hot",w:14})}
  ${d("M148 455V256",{id:"cb1",kind:"cold",w:14})}
  ${d("M182 425V256",{id:"hb1",kind:"hot",w:14})}
  ${d("M350 455V302",{id:"cb2",kind:"cold",w:14})}
  ${d("M390 425V302",{id:"hb2",kind:"hot",w:14})}
  ${d("M560 455V290",{id:"cb3",kind:"cold",w:14})}
  ${d("M600 425V290",{id:"hb3",kind:"hot",w:14})}

  <!-- hot water cylinder -->
  <g class="fx fx-cyl">
    <rect x="676" y="326" width="68" height="168" rx="30" fill="url(#n-cyl)" class="s"/>
    <rect x="696" y="316" width="28" height="14" rx="3" class="s f-brass"/>
  </g>

  <!-- shower -->
  <g class="fx fx-shower">
    <rect x="92" y="250" width="148" height="236" fill="url(#n-tile)" class="s s-thin" opacity=".9"/>
    <rect x="96" y="470" width="150" height="16" rx="3" class="s f-steel"/>
  </g>
  <rect x="136" y="236" width="58" height="34" rx="9" class="s f-brass fx fx-shower"/>
  <circle cx="165" cy="253" r="9" class="s f-blue fx fx-shower"/>
  <g class="fx fx-shower">
    <path d="M165 238V176H208" class="spout-o" style="stroke-width:16px"/>
    <path d="M165 238V176H208" class="spout-b" style="stroke-width:8px"/>
    <path d="M194 174H232L246 196H180Z" class="s f-steel"/>
    <path d="M190 190h4m10 0h4m10 0h4m10 0h4" stroke="#06141f" stroke-width="3" stroke-linecap="round"/>
  </g>
  <g class="shower-rain">${et}</g>

  <!-- basin -->
  <g class="fx fx-basin">
    <rect x="360" y="396" width="20" height="90" class="s f-paper"/>
    <rect x="344" y="478" width="52" height="8" rx="3" class="s f-paper"/>
    <path d="M300 372C300 412 340 426 370 426C400 426 440 412 440 372Z" class="s f-paper"/>
    <ellipse cx="370" cy="372" rx="72" ry="14" class="s f-paper"/>
    <ellipse cx="370" cy="374" rx="58" ry="9" class="s f-water"/>
    <rect x="346" y="288" width="48" height="26" rx="8" class="s f-brass"/>
    <path d="M370 312V332" class="spout-o" style="stroke-width:20px"/>
    <path d="M370 312V332" class="spout-b" style="stroke-width:12px"/>
    <g class="stream nstream" style="transform-origin:370px 372px"><path d="M370 336V374" class="st-o" style="stroke-width:12px"/><path d="M370 336V374" class="st-f" style="stroke-width:6px"/></g>
  </g>

  <!-- kitchen -->
  <g class="fx fx-sink">
    <rect x="500" y="344" width="160" height="142" class="s f-paper"/>
    <path d="M580 344V486" class="s s-thin n"/>
    <rect x="494" y="330" width="172" height="16" rx="3" class="s f-steel"/>
    <ellipse cx="580" cy="331" rx="44" ry="6" class="s f-water" stroke-width="2.5"/>
    <rect x="556" y="272" width="48" height="26" rx="8" class="s f-brass"/>
    <path d="M580 274V240Q580 216 604 216V244" class="spout-o" style="stroke-width:22px"/>
    <path d="M580 274V240Q580 216 604 216V244" class="spout-b" style="stroke-width:14px"/>
    <g class="stream nstream" style="transform-origin:604px 328px"><path d="M604 250V330" class="st-o" style="stroke-width:12px"/><path d="M604 250V330" class="st-f" style="stroke-width:6px"/></g>
  </g>

  <!-- pressure gauge -->
  <g class="fx fx-gauge">
    <circle cx="456" cy="166" r="44" class="s f-brass"/>
    <circle cx="456" cy="166" r="36" class="s f-paper"/>
    <g class="g-ticks">${q(456,166,32,9)}</g>
+

    <g class="needle" style="transform-origin:456px 166px"><line x1="456" y1="166" x2="456" y2="138" class="s" stroke-width="4"/></g>
    <circle cx="456" cy="166" r="5" class="s f-ink"/>
    <text x="456" y="232" class="lbl" text-anchor="middle">PRESSURE TEST</text>
  </g>
</svg>`,rt=[["c0",.2,.32],["h0",.27,.4],["cb1",.38,.46],["hb1",.4,.48],["cb2",.4,.48],["hb2",.42,.5],["cb3",.42,.5],["hb3",.44,.5],["w1",.5,.58],["w2",.52,.58]];let E=null;const ct={markup:at,update(s,t){E||(E=[...s.querySelectorAll(".stud")]),E.forEach((e,a)=>{e.style.transform=`scaleY(${l(t,a*.009,.1+a*.008).toFixed(3)})`}),b(s,{pt:l(t,.1,.19).toFixed(3),cylp:l(t,.14,.2).toFixed(3),fxs:l(t,.54,.6).toFixed(3),fxb:l(t,.58,.64).toFixed(3),fxk:l(t,.62,.68).toFixed(3),fxg:l(t,.68,.74).toFixed(3),needle:(.12+.62*l(t,.72,.82)+.04*Math.sin(t*60)*l(t,.8,.86)).toFixed(3),flow:l(t,.86,.91).toFixed(3),on:l(t,.88,.95).toFixed(3)}),rt.forEach(([e,a,r])=>x(s,e,l(t,a,r)))}},C=[["r1","M40 210H480",0],["r2","M130 210V90",.1],["r3","M350 210V70",.18],["r3b","M350 130H450",.3],["r4","M200 210V340",.14],["r5","M410 210V330",.22]],lt=[[40,210],[480,210],[130,90],[350,70],[450,130],[200,340],[410,330]];function it(s,{reduce:t}){s.innerHTML=`
<svg viewBox="0 0 520 440" role="img" aria-label="Glendene at the centre with pipes running out across the Auckland area." focusable="false">
  <circle class="ar" cx="270" cy="210" r="70"/><circle class="ar" cx="270" cy="210" r="130"/><circle class="ar" cx="270" cy="210" r="190"/>
  ${C.map(([c,o])=>d(o,{id:c,kind:"cold",w:12})).join("")}
  ${lt.map(([c,o],n)=>`<g class="cap" style="--i:${n};transform-origin:${c}px ${o}px"><circle cx="${c}" cy="${o}" r="13" class="s f-brass"/><path d="M${c} ${o-6}q-5 8 0 11q5 -3 0 -11z" class="s f-water" stroke-width="2"/></g>`).join("")}
  ${M(270,210,34)}
  <text x="270" y="278" class="lbl" text-anchor="middle">GLENDENE</text><text x="400" y="420" class="lbl" text-anchor="middle">AUCKLAND AREA</text>
</svg>`;const e=s.querySelector("svg"),a=c=>{C.forEach(([o,,n])=>x(e,o,l(c,n,n+.55))),e.style.setProperty("--caps",l(c,.7,1).toFixed(3))};if(t)return a(1);a(0);let r=!1;new IntersectionObserver(c=>{if(r||!c.some(h=>h.isIntersecting))return;r=!0;const o=performance.now(),n=h=>{const p=Math.min(1,(h-o)/2200);a(p),p<1&&requestAnimationFrame(n)};requestAnimationFrame(n)},{threshold:.35}).observe(s)}const y=window.matchMedia("(prefers-reduced-motion: reduce)").matches,U=document.documentElement;U.classList.add("js");y&&U.classList.add("rm");function ot(){const s=new Intl.DateTimeFormat("en-NZ",{timeZone:"Pacific/Auckland",weekday:"short",hour:"numeric",minute:"numeric",hour12:!1}).formatToParts(new Date),t=c=>{var o;return(o=s.find(n=>n.type===c))==null?void 0:o.value},a=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].indexOf(t("weekday")),r=Number(t("hour"))%24,i=Number(t("minute"));return{day:a,mins:r*60+i}}function j(){const{day:s,mins:t}=ot(),e=s>=0&&s<=4;let a="closed",r="Plumber, West Auckland",i="Mon to Fri, 8.00am to 5.30pm";e&&t>=480&&t<1050?(a="on",r="Phones answered now",i="Phones answered now. Mon to Fri, 8.00am to 5.30pm"):e&&t>=1050&&t<1140?(a="after",r="Emergency in Glendene area, until 7.00pm",i="Emergency in Glendene area? Call until 7.00pm tonight"):i=`Office closed. Back ${s===4&&t>=1050||s>=5?"Monday":e&&t<480?"today":"tomorrow"} at 8.00am. Leave a message below`,document.querySelectorAll("[data-status]").forEach(c=>c.textContent=r),document.querySelectorAll("[data-status-long]").forEach(c=>c.textContent=i),document.querySelectorAll("[data-status-dot]").forEach(c=>{c.classList.toggle("on",a==="on"),c.classList.toggle("after",a==="after")})}j();setInterval(j,6e4);const I=document.querySelector("[data-hero]");I&&z(I,{reduce:y});const D=document.querySelector("[data-area]");D&&it(D,{reduce:y});const nt={leak:Y,cylinder:_,watermain:J,newbuild:ct},dt=64,H=[...document.querySelectorAll(".chapter")].map(s=>{const t=nt[s.dataset.scene],e=s.querySelector("[data-stage]");e.innerHTML=t.markup();const a=e.querySelector("svg"),r=[...s.querySelectorAll(".steps li")];return r.forEach((i,c)=>i.dataset.n=String(c+1)),{el:s,scene:t,svg:a,steps:r,at:r.map(i=>Number(i.dataset.at)),scrub:s.querySelector(".scrub"),inner:s.querySelector(".scrub-in"),prog:s.querySelector(".prog i"),lastP:-1,lastStep:-1}});function V(s,t){s.scene.update(s.svg,t),s.prog.style.transform=`scaleX(${t.toFixed(3)})`;let e=0;s.at.forEach((a,r)=>{t>=a-1e-4&&(e=r)}),e!==s.lastStep&&(s.lastStep=e,s.steps.forEach((a,r)=>{a.classList.toggle("on",r===e),a.classList.toggle("done",r<e)}))}let L=!1;function ht(){L=!1;const s=window.innerHeight;H.forEach(t=>{const e=t.scrub.getBoundingClientRect();if(e.bottom<-300||e.top>s+300)return;const a=Math.max(1,e.height-t.inner.offsetHeight),r=m((dt-e.top)/a);Math.abs(r-t.lastP)<6e-4||(t.lastP=r,V(t,r))})}function w(){L||(L=!0,requestAnimationFrame(ht))}y?H.forEach(s=>{V(s,1),s.steps.forEach(t=>t.classList.add("done"))}):(H.forEach(s=>V(s,0)),window.addEventListener("scroll",w,{passive:!0}),window.addEventListener("resize",w),window.addEventListener("load",w),w());const S=document.querySelectorAll(".section-head, .chap-intro, .more, .about-plate, .about-copy, .about-map, .contact-call, .drip-art, .hours, .where, .msg, .review, .creds-in");S.forEach(s=>s.classList.add("reveal"));if(y)S.forEach(s=>s.classList.add("in"));else{const s=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(e.target.classList.add("in"),s.unobserve(e.target))})},{threshold:.12,rootMargin:"0px 0px -6% 0px"});S.forEach(t=>s.observe(t))}const u=document.getElementById("msg-form");u&&u.addEventListener("submit",s=>{s.preventDefault();const t=u.querySelector("[data-form-note]"),e=new FormData(u),a=(e.get("name")||"").toString().trim(),r=(e.get("phone")||"").toString().trim(),i=(e.get("what")||"").toString().trim();if(!a||!r||!i){t.textContent="Add your name, phone and what's going on.";return}const c=encodeURIComponent(`Plumbing job from ${a}`),o=encodeURIComponent(`Name: ${a}
Phone: ${r}

${i}`);t.textContent="Opening your email app. In a hurry? Call 021 750 967.",window.location.href=`mailto:barnardplumbingltd@gmail.com?subject=${c}&body=${o}`});document.querySelectorAll('a[href^="#"]').forEach(s=>{s.addEventListener("click",t=>{const e=s.getAttribute("href");if(!e||e==="#")return;const a=document.querySelector(e);a&&(t.preventDefault(),a.scrollIntoView({behavior:y?"auto":"smooth",block:"start"}))})});
