import"./modulepreload-polyfill-3cfb730f.js";const y=document.getElementById("Single"),b=document.getElementById("Multi"),f=document.getElementById("Quit");document.getElementById("backgroundAudio");const e=document.getElementById("miscAudio");var c;let l=[],o=2,d=0,i;window.onload=()=>{s(),localStorage.removeItem("Controllers"),localStorage.removeItem("Characters"),localStorage.removeItem("Mode"),typeof window.electronAPI>"u"&&(f.innerText="Download"),addEventListener("keydown",n=>{switch(n.keyCode){case 74:e.currentTime=0,e.src="./resources/Audios/menu-click-89198.mp3",e.play(),k();break;case 65:o>1&&(o--,s(),e.currentTime=0,e.src="./resources/Audios/menu-button-88360.mp3",e.play());break;case 37:o>1&&(o--,s(),e.currentTime=0,e.src="./resources/Audios/menu-button-88360.mp3",e.play());break;case 68:o<3&&(o++,s(),e.currentTime=0,e.src="./resources/Audios/menu-button-88360.mp3",e.play());break;case 39:o<3&&(o++,s(),e.currentTime=0,e.src="./resources/Audios/menu-button-88360.mp3",e.play());break}}),addEventListener("gamepadconnected",n=>{let t=n.gamepad.index;l.push(t)}),addEventListener("gamepaddisconnected",n=>{let t=n.gamepad.index;l=l.filter(a=>a!==t)}),h()};function h(){d++,l.forEach(n=>{let t=navigator.getGamepads()[n];var a=g(t.axes[0],.25),r=g(t.axes[9],.25);if(Math.abs(d-i)>10||i===void 0){t.buttons.map(p=>p.pressed).forEach((p,w)=>{if(p)switch(console.log(w),w){case 1:(Math.abs(d-i)>10||i===void 0)&&(e.currentTime=0),e.src="./resources/Audios/menu-click-89198.mp3",e.play(),k();break}});let u,m;if(t.buttons[14]&&t.buttons[15]?(u=t.buttons[14].pressed||r>0&&r<=1,m=t.buttons[15].pressed||r<0&&r>-.9):(u=r>0&&r<=1,m=r<0&&r>-.9),a<0||u){i=d,o>1&&(o--,s(),e.currentTime=0,e.src="./resources/Audios/menu-button-88360.mp3",e.play());return}if(a>0||m){i=d,o<3&&(o++,s(),e.currentTime=0,e.src="./resources/Audios/menu-button-88360.mp3",e.play());return}}}),requestAnimationFrame(h)}function s(){switch(y.style.textShadow="",b.style.textShadow="",f.style.textShadow="",o){case 1:b.style.textShadow=" 0.75rem 0.5rem 2px rgba(0, 0, 0, 1)";break;case 2:y.style.textShadow=" 0.75rem 0.5rem 2px rgba(0, 0, 0, 1)";break;case 3:f.style.textShadow=" 0.75rem 0.5rem 2px rgba(0, 0, 0, 1)";break}}function k(){switch(o){case 1:c="Multi Player",localStorage.setItem("Mode",c),setTimeout(()=>{typeof window.electronAPI<"u"?window.electronAPI.navigateTo("SelectController/index.html"):window.location.pathname="../SelectController/"},500);break;case 2:c="Single Player",localStorage.setItem("Mode",c),setTimeout(()=>{typeof window.electronAPI<"u"?window.electronAPI.navigateTo("SelectController/index.html"):window.location.pathname="../SelectController/"},500);break;case 3:typeof app<"u"?app.window.close():window.open("https://drive.google.com/uc?export=download&id=1-1neaJA5uBaN5lILdYu1WZBof6EitEAF","_blank");break}}function g(n,t,a){return a=(Math.abs(n)-t)/(1-t),a<0&&(a=0),a*(n>0?1:-1)}
