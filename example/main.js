/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var F={320:(F,t)=>{function e(F){if(!Number.isSafeInteger(F)||F<0)throw new Error(`Wrong positive integer: ${F}`)}function C(F){if("boolean"!=typeof F)throw new Error(`Expected boolean, not ${F}`)}function A(F,...t){if(!(F instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(F.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${F.length}`)}function E(F){if("function"!=typeof F||"function"!=typeof F.create)throw new Error("Hash should be wrapped by utils.wrapConstructor");e(F.outputLen),e(F.blockLen)}function B(F,t=!0){if(F.destroyed)throw new Error("Hash instance has been destroyed");if(t&&F.finished)throw new Error("Hash#digest() has already been called")}function D(F,t){A(F);const e=t.outputLen;if(F.length<e)throw new Error(`digestInto() expects output buffer of length at least ${e}`)}Object.defineProperty(t,"__esModule",{value:!0}),t.output=t.exists=t.hash=t.bytes=t.bool=t.number=void 0,t.number=e,t.bool=C,t.bytes=A,t.hash=E,t.exists=B,t.output=D;const r={number:e,bool:C,bytes:A,hash:E,exists:B,output:D};t.default=r},505:(F,t,e)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SHA2=void 0;const C=e(320),A=e(89);class E extends A.Hash{constructor(F,t,e,C){super(),this.blockLen=F,this.outputLen=t,this.padOffset=e,this.isLE=C,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(F),this.view=(0,A.createView)(this.buffer)}update(F){C.default.exists(this);const{view:t,buffer:e,blockLen:E}=this,B=(F=(0,A.toBytes)(F)).length;for(let C=0;C<B;){const D=Math.min(E-this.pos,B-C);if(D!==E)e.set(F.subarray(C,C+D),this.pos),this.pos+=D,C+=D,this.pos===E&&(this.process(t,0),this.pos=0);else{const t=(0,A.createView)(F);for(;E<=B-C;C+=E)this.process(t,C)}}return this.length+=F.length,this.roundClean(),this}digestInto(F){C.default.exists(this),C.default.output(F,this),this.finished=!0;const{buffer:t,view:e,blockLen:E,isLE:B}=this;let{pos:D}=this;t[D++]=128,this.buffer.subarray(D).fill(0),this.padOffset>E-D&&(this.process(e,0),D=0);for(let F=D;F<E;F++)t[F]=0;!function(F,t,e,C){if("function"==typeof F.setBigUint64)return F.setBigUint64(t,e,C);const A=BigInt(32),E=BigInt(4294967295),B=Number(e>>A&E),D=Number(e&E),r=C?4:0,o=C?0:4;F.setUint32(t+r,B,C),F.setUint32(t+o,D,C)}(e,E-8,BigInt(8*this.length),B),this.process(e,0);const r=(0,A.createView)(F),o=this.outputLen;if(o%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const n=o/4,s=this.get();if(n>s.length)throw new Error("_sha2: outputLen bigger than state");for(let F=0;F<n;F++)r.setUint32(4*F,s[F],B)}digest(){const{buffer:F,outputLen:t}=this;this.digestInto(F);const e=F.slice(0,t);return this.destroy(),e}_cloneInto(F){F||(F=new this.constructor),F.set(...this.get());const{blockLen:t,buffer:e,length:C,finished:A,destroyed:E,pos:B}=this;return F.length=C,F.pos=B,F.finished=A,F.destroyed=E,C%t&&F.buffer.set(e),F}}t.SHA2=E},945:(F,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.crypto=void 0,t.crypto="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0},61:(F,t,e)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.sha224=t.sha256=void 0;const C=e(505),A=e(89),E=(F,t,e)=>F&t^F&e^t&e,B=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),D=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),r=new Uint32Array(64);class o extends C.SHA2{constructor(){super(64,32,8,!1),this.A=0|D[0],this.B=0|D[1],this.C=0|D[2],this.D=0|D[3],this.E=0|D[4],this.F=0|D[5],this.G=0|D[6],this.H=0|D[7]}get(){const{A:F,B:t,C:e,D:C,E:A,F:E,G:B,H:D}=this;return[F,t,e,C,A,E,B,D]}set(F,t,e,C,A,E,B,D){this.A=0|F,this.B=0|t,this.C=0|e,this.D=0|C,this.E=0|A,this.F=0|E,this.G=0|B,this.H=0|D}process(F,t){for(let e=0;e<16;e++,t+=4)r[e]=F.getUint32(t,!1);for(let F=16;F<64;F++){const t=r[F-15],e=r[F-2],C=(0,A.rotr)(t,7)^(0,A.rotr)(t,18)^t>>>3,E=(0,A.rotr)(e,17)^(0,A.rotr)(e,19)^e>>>10;r[F]=E+r[F-7]+C+r[F-16]|0}let{A:e,B:C,C:D,D:o,E:n,F:s,G:i,H:c}=this;for(let F=0;F<64;F++){const t=c+((0,A.rotr)(n,6)^(0,A.rotr)(n,11)^(0,A.rotr)(n,25))+((h=n)&s^~h&i)+B[F]+r[F]|0,u=((0,A.rotr)(e,2)^(0,A.rotr)(e,13)^(0,A.rotr)(e,22))+E(e,C,D)|0;c=i,i=s,s=n,n=o+t|0,o=D,D=C,C=e,e=t+u|0}var h;e=e+this.A|0,C=C+this.B|0,D=D+this.C|0,o=o+this.D|0,n=n+this.E|0,s=s+this.F|0,i=i+this.G|0,c=c+this.H|0,this.set(e,C,D,o,n,s,i,c)}roundClean(){r.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class n extends o{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}t.sha256=(0,A.wrapConstructor)((()=>new o)),t.sha224=(0,A.wrapConstructor)((()=>new n))},89:(F,t,e)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.randomBytes=t.wrapXOFConstructorWithOpts=t.wrapConstructorWithOpts=t.wrapConstructor=t.checkOpts=t.Hash=t.concatBytes=t.toBytes=t.utf8ToBytes=t.asyncLoop=t.nextTick=t.hexToBytes=t.bytesToHex=t.isLE=t.rotr=t.createView=t.u32=t.u8=void 0;const C=e(945),A=F=>F instanceof Uint8Array;if(t.u8=F=>new Uint8Array(F.buffer,F.byteOffset,F.byteLength),t.u32=F=>new Uint32Array(F.buffer,F.byteOffset,Math.floor(F.byteLength/4)),t.createView=F=>new DataView(F.buffer,F.byteOffset,F.byteLength),t.rotr=(F,t)=>F<<32-t|F>>>t,t.isLE=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0],!t.isLE)throw new Error("Non little-endian hardware is not supported");const E=Array.from({length:256},((F,t)=>t.toString(16).padStart(2,"0")));function B(F){if("string"!=typeof F)throw new Error("utf8ToBytes expected string, got "+typeof F);return new Uint8Array((new TextEncoder).encode(F))}function D(F){if("string"==typeof F&&(F=B(F)),!A(F))throw new Error("expected Uint8Array, got "+typeof F);return F}t.bytesToHex=function(F){if(!A(F))throw new Error("Uint8Array expected");let t="";for(let e=0;e<F.length;e++)t+=E[F[e]];return t},t.hexToBytes=function(F){if("string"!=typeof F)throw new Error("hex string expected, got "+typeof F);const t=F.length;if(t%2)throw new Error("padded hex string expected, got unpadded hex of length "+t);const e=new Uint8Array(t/2);for(let t=0;t<e.length;t++){const C=2*t,A=F.slice(C,C+2),E=Number.parseInt(A,16);if(Number.isNaN(E)||E<0)throw new Error("Invalid byte sequence");e[t]=E}return e},t.nextTick=async()=>{},t.asyncLoop=async function(F,e,C){let A=Date.now();for(let E=0;E<F;E++){C(E);const F=Date.now()-A;F>=0&&F<e||(await(0,t.nextTick)(),A+=F)}},t.utf8ToBytes=B,t.toBytes=D,t.concatBytes=function(...F){const t=new Uint8Array(F.reduce(((F,t)=>F+t.length),0));let e=0;return F.forEach((F=>{if(!A(F))throw new Error("Uint8Array expected");t.set(F,e),e+=F.length})),t},t.Hash=class{clone(){return this._cloneInto()}},t.checkOpts=function(F,t){if(void 0!==t&&("object"!=typeof t||(e=t,"[object Object]"!==Object.prototype.toString.call(e)||e.constructor!==Object)))throw new Error("Options should be object or undefined");var e;return Object.assign(F,t)},t.wrapConstructor=function(F){const t=t=>F().update(D(t)).digest(),e=F();return t.outputLen=e.outputLen,t.blockLen=e.blockLen,t.create=()=>F(),t},t.wrapConstructorWithOpts=function(F){const t=(t,e)=>F(e).update(D(t)).digest(),e=F({});return t.outputLen=e.outputLen,t.blockLen=e.blockLen,t.create=t=>F(t),t},t.wrapXOFConstructorWithOpts=function(F){const t=(t,e)=>F(e).update(D(t)).digest(),e=F({});return t.outputLen=e.outputLen,t.blockLen=e.blockLen,t.create=t=>F(t),t},t.randomBytes=function(F=32){if(C.crypto&&"function"==typeof C.crypto.getRandomValues)return C.crypto.getRandomValues(new Uint8Array(F));throw new Error("crypto.getRandomValues must be defined")}},666:(F,t,e)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.IdToColor=void 0;const C=e(61),A=e(89);t.IdToColor=class{constructor(){this.maxP=65536}palleteColor(F){const t=(0,A.bytesToHex)((0,C.sha256)(F)),e=parseInt(t.slice(0,4),16)/this.maxP*this.palleteSize,E=Math.round(e);return this.pallete[E]}noPalleteColor(F){return`#${(0,A.bytesToHex)((0,C.sha256)(F)).slice(0,6)}`}setPallete(F){return this.pallete=F,this.palleteSize=F.length,this}get(F){return this.palleteSize?this.palleteColor(F):this.noPalleteColor(F)}}},796:function(F,t,e){var C=this&&this.__importDefault||function(F){return F&&F.__esModule?F:{default:F}};Object.defineProperty(t,"__esModule",{value:!0});const A=e(666),E=C(e(301));let B="user";const D=document.querySelector("#container"),r=document.querySelector("#input");r.value=B,r?.addEventListener("change",(F=>{B=F.target.value}));const o=document.querySelector("#restart");o?.addEventListener("click",(()=>{i()}));const n=(F,t)=>{const e=document.createElement("div");e.style.display="flex",e.style.alignItems="center",e.style.gap="10px";const C=document.createElement("div");C.innerText=t,e.appendChild(C);const A=(F=>{const t=document.createElement("div");return t.style.height="50px",t.style.width="50px",t.style.backgroundColor=F,t})(F);return e.appendChild(A),e},s=()=>{for(let F=1;F<901;F++){const t=`${B}-${F+99}`,e=(new A.IdToColor).setPallete(E.default).get(t);D&&D.appendChild(n(e,t))}},i=()=>{for(;D?.firstChild;)D.removeChild(D.lastChild);s()};s()},301:F=>{F.exports=JSON.parse('["#0048BA","#B0BF1A","#7CB9E8","#C9FFE5","#B284BE","#5D8AA8","#00308F","#72A0C1","#AF002A","#F2F0E6","#F0F8FF","#84DE02","#E32636","#C46210","#EFDECD","#E52B50","#9F2B68","#F19CBB","#AB274F","#D3212D","#3B7A57","#00C4B0","#FFBF00","#FF7E00","#FF033E","#9966CC","#A4C639","#F2F3F4","#CD9575","#665D1E","#915C83","#841B2D","#FAEBD7","#008000","#8DB600","#FBCEB1","#00FFFF","#7FFFD4","#D0FF14","#4B5320","#3B444B","#8F9779","#E9D66B","#B2BEB5","#87A96B","#FF9966","#A52A2A","#FDEE00","#6E7F80","#568203","#FF2052","#C39953","#007FFF","#F0FFFF","#F0FFFF","#DBE9F4","#89CFF0","#A1CAF1","#F4C2C2","#FEFEFA","#FF91AF","#21ABCD","#FAE7B5","#FFE135","#006A4E","#E0218A","#7C0A02","#1DACD6","#848482","#98777B","#BCD4E6","#9F8170","#FA6E79","#F5F5DC","#2E5894","#9C2542","#E88E5A","#FFE4C4","#3D2B1F","#967117","#CAE00D","#BFFF00","#FE6F5E","#BF4F51","#000000","#3D0C02","#54626F","#253529","#3B3C36","#BFAFB2","#FFEBCD","#A57164","#318CE7","#ACE5EE","#FAF0BE","#0000FF","#1F75FE","#0093AF","#0087BD","#0018A8","#333399","#0247FE","#A2A2D0","#00B9FB","#6699CC","#0D98BA","#5DADEC","#ACE5EE","#553592","#126180","#8A2BE2","#5072A7","#4F86F7","#1C1CF0","#DE5D83","#79443B","#0095B6","#E3DAC9","#DDE26A","#CC0000","#006A4E","#873260","#0070FF","#B5A642","#CB4154","#1DACD6","#66FF00","#BF94E4","#D891EF","#C32148","#1974D2","#FF007F","#08E8DE","#D19FE8","#FFAA1D","#3399FF","#F4BBFF","#FF55A3","#FB607F","#004225","#CD7F32","#737000","#964B00","#A52A2A","#6B4423","#AF6E4D","#cc9966","#1B4D3E","#FFC1CC","#E7FEFF","#7BB661","#F0DC82","#480607","#800020","#DEB887","#A17A74","#CC5500","#E97451","#8A3324","#24A0ED","#BD33A4","#702963","#536872","#5F9EA0","#91A3B0","#006B3C","#ED872D","#E30022","#FFF600","#A67B5B","#4B3621","#1E4D2B","#A3C1AD","#C19A6B","#EFBBCC","#78866B","#FFFF99","#FFEF00","#FF0800","#E4717A","#00BFFF","#592720","#C41E3A","#00CC99","#960018","#D70040","#EB4C42","#FF0038","#FFA6C9","#B31B1B","#56A0D3","#ED9121","#00563F","#062A78","#703642","#C95A49","#92A1CF","#ACE1AF","#007BA7","#2F847C","#B2FFFF","#4997D0","#DE3163","#EC3B83","#007BA7","#2A52BE","#6D9BC3","#007AA5","#E03C31","#A0785A","#F7E7CE","#F1DDCF","#36454F","#232B2B","#E68FAC","#DFFF00","#7FFF00","#DE3163","#FFB7C5","#954535","#DE6FA1","#A8516E","#AA381E","#856088","#4AFF00","#7B3F00","#D2691E","#FFA700","#98817B","#E34234","#D2691E","#CD607E","#E4D00A","#9FA91F","#7F1734","#FBCCE7","#0047AB","#D2691E","#965A3E","#6F4E37","#C4D8E2","#F88379","#002E63","#8C92AC","#B87333","#DA8A67","#AD6F69","#CB6D51","#996666","#FF3800","#FF7F50","#F88379","#FF4040","#FD7C6E","#893F45","#FBEC5D","#B31B1B","#6495ED","#FFF8DC","#2E2D88","#FFF8E7","#81613C","#FFBCD9","#FFFDD0","#DC143C","#BE0032","#990000","#F5F5F5","#00FFFF","#4E82B4","#4682BF","#28589C","#188BC2","#00B7EB","#58427C","#FFD300","#F56FA1","#FFFF31","#F0E130","#00008B","#666699","#654321","#88654E","#5D3954","#A40000","#08457E","#986960","#CD5B45","#008B8B","#536878","#B8860B","#A9A9A9","#013220","#006400","#1F262A","#00416A","#00147E","#1A2421","#BDB76B","#483C32","#734F96","#534B4F","#543D37","#8B008B","#A9A9A9","#003366","#4A5D23","#556B2F","#FF8C00","#9932CC","#779ECB","#03C03C","#966FD6","#C23B22","#E75480","#003399","#4F3A3C","#301934","#872657","#8B0000","#E9967A","#560319","#8FBC8F","#3C1414","#8CBED6","#483D8B","#2F4F4F","#177245","#918151","#FFA812","#483C32","#CC4E5C","#00CED1","#D1BEA8","#9400D3","#9B870C","#00703C","#555555","#D70A53","#40826D","#A9203E","#EF3038","#E9692C","#DA3287","#FAD6A5","#B94E48","#704241","#C154C1","#056608","#0E7C61","#004B49","#333366","#F5C71A","#9955BB","#CC00CC","#820000","#D473D4","#355E3B","#FFCBA4","#FF1493","#A95C68","#850101","#843F5B","#FF9933","#00BFFF","#4A646C","#556B2F","#7E5E60","#66424D","#330066","#BA8759","#1560BD","#2243B6","#669999","#C19A6B","#EDC9AF","#EA3C53","#B9F2FF","#696969","#C53151","#9B7653","#1E90FF","#FEF65B","#D71868","#85BB65","#828E84","#664C28","#967117","#00009C","#E5CCC9","#EFDFBB","#E1A95F","#555D50","#C2B280","#1B1B1B","#614051","#F0EAD6","#1034A6","#7DF9FF","#FF003F","#00FFFF","#00FF00","#6F00FF","#F4BBFF","#CCFF00","#BF00FF","#3F00FF","#8F00FF","#FFFF33","#50C878","#6C3082","#1B4D3E","#B48395","#AB4B52","#CC474B","#563C5C","#96C8A2","#44D7A8","#C19A6B","#801818","#B53389","#DE5285","#F400A1","#E5AA70","#4D5D53","#FDD5B1","#4F7942","#FF2800","#6C541E","#FF5470","#B22222","#CE2029","#E25822","#FC8EAC","#6B4423","#F7E98E","#EEDC82","#A2006D","#FFFAF0","#FFBF00","#FF1493","#CCFF00","#FF004F","#014421","#228B22","#A67B5B","#856D4D","#0072BB","#FD3F92","#86608E","#9EFD38","#D473D4","#FD6C9E","#811453","#4E1609","#C72C48","#F64A8A","#77B5FE","#8806CE","#AC1E44","#A6E7FF","#E936A7","#FF00FF","#C154C1","#FF77FF","#CC397B","#C74375","#E48400","#CC6666","#DCDCDC","#E49B0F","#996600","#FFDF46","#007F66","#F8F8FF","#B05C52","#FE5A1D","#B06500","#6082B6","#E6E8FA","#AB92B3","#00AB66","#D4AF37","#FFD700","#85754E","#996515","#FCC200","#FFDF00","#DAA520","#676767","#A8E4A0","#6F2DA8","#808080","#808080","#BEBEBE","#465945","#8C92AC","#00FF00","#1CAC78","#008000","#00A877","#009F6B","#00AD43","#00A550","#66B032","#1164B4","#009966","#A7F432","#6EAEA1","#ADFF2F","#885818","#A99A86","#00FF7F","#2a3439","#663854","#446CCF","#5218FA","#E9D66B","#3FFF00","#46CB18","#C90016","#DA9100","#808000","#FF7A00","#960018","#DF73FF","#AA98A9","#AA00BB","#F400A1","#F0FFF0","#006DB0","#49796B","#FF1DCE","#FF69B4","#355E3B","#71A6D2","#FCF75E","#71BC78","#319177","#602F6B","#002395","#66023C","#ED2939","#B2EC5D","#4C516D","#138808","#CD5C5C","#E3A857","#4B0082","#091F92","#4B0082","#FF496C","#360CCC","#002FA7","#FF4F00","#BA160C","#C0362C","#5A4FCF","#B3446C","#F4F0EC","#009000","#B2FFFF","#FFFFF0","#00A86B","#9D2933","#264348","#5B3256","#F8DE7E","#D73B3E","#A50B5E","#DA614E","#343434","#F4CA16","#8AB9F1","#BDDA57","#29AB87","#4CBB17","#7C1C05","#3AB09E","#E8F48C","#C3B091","#F0E68C","#8EE53F","#882D17","#E79FC4","#6B4423","#354230","#512888","#E8000D","#087830","#D6CADD","#26619C","#FFFF66","#A9BA9D","#CF1020","#B57EDC","#E6E6FA","#CCCCFF","#FFF0F5","#C4C3D0","#9457EB","#EE82EE","#E6E6FA","#FBAED2","#967BB6","#FBA0E3","#7CFC00","#FFF700","#FFFACD","#CCA01D","#FDFF00","#E3FF00","#F6EABE","#FFF44F","#1A1110","#545AA7","#FDD5B1","#ADD8E6","#B5651D","#E66771","#88ACE0","#F08080","#93CCEA","#F56991","#E0FFFF","#FF5CCD","#C8AD7F","#F984EF","#FAFAD2","#D3D3D3","#CC99CC","#90EE90","#FFB3DE","#F0E68C","#D39BCB","#ADDFAD","#FED8B1","#E6A8D7","#B19CD9","#FFB6C1","#E97451","#FFA07A","#FF9999","#20B2AA","#87CEFA","#778899","#B0C4DE","#B38B6D","#E68FAC","#FFFFE0","#C8A2C8","#AE98AA","#BFFF00","#00FF00","#32CD32","#9DC209","#195905","#FAF0E6","#15F2FD","#DE6FA1","#6CA0DC","#674C47","#B86D29","#6C2E1F","#987456","#6699CC","#FFE4CD","#E62020","#001C3D","#FFBD88","#CC3336","#FF00FF","#FF55A3","#CA1F7B","#D0417E","#FF0090","#9F4576","#CC338B","#AAF0D1","#FF4466","#F8F4FF","#C04000","#FBEC5D","#6050DC","#0BDA51","#979AAA","#F37A48","#FF8243","#74C365","#880085","#EAA221","#C32148","#800000","#B03060","#E0B0FF","#915F6D","#EF98AA","#47ABCC","#30BFBF","#ACACE6","#5E8C31","#D9E650","#733380","#D92121","#A63A79","#FAFA37","#F2BA49","#4C9141","#73C2FB","#E5B73B","#66DDAA","#0000CD","#E2062C","#AF4035","#F3E5AB","#035096","#1C352D","#DDA0DD","#BA55D3","#0067A5","#9370DB","#BB3385","#AA4069","#3CB371","#80DAEB","#7B68EE","#C9DC87","#00FA9A","#674C47","#48D1CC","#79443B","#D9603B","#C71585","#F8B878","#F8DE7E","#FDBCB4","#0A7E8C","#9C7C38","#E4007C","#7ED4E6","#8DD9CC","#8B72BE","#210837","#4D8C57","#ACBF60","#D982B5","#E58E73","#A55353","#FFEB00","#ECB176","#702670","#191970","#004953","#FFC40C","#FDFFF5","#FFDAE9","#E3F988","#36747D","#F5E050","#3EB489","#F5FFFA","#98FF98","#BBB477","#FFE4E1","#FAEBD7","#967117","#73A9C2","#AE0C00","#8DA399","#8A9A5B","#30BA8F","#997A8D","#18453B","#306030","#C54B8C","#828E84","#FFDB58","#317873","#D65282","#AD4379","#F6ADC6","#2A8000","#FADA5E","#FFDEAD","#000080","#9457EB","#FFA343","#FE4164","#39FF14","#214FC6","#D7837F","#727472","#A4DDED","#059033","#E9FFDB","#4F42B5","#0077BE","#48BF91","#CC7722","#008000","#FD5240","#43302E","#CFB53B","#563C5C","#FDF5E6","#796878","#673147","#867E36","#C08081","#848482","#808000","#6B8E23","#3C341F","#9AB973","#353839","#B784A7","#FF7F00","#FF7538","#FF5800","#FB9902","#FFA500","#FF9F00","#FF4500","#FA5B3D","#F8D568","#DA70D6","#F2BDCD","#FB4F14","#654321","#414A4C","#FF6E4A","#002147","#990000","#1CA9C9","#006600","#273BE2","#682860","#BCD4E6","#AFEEEE","#987654","#AF4035","#9BC4E2","#DDADAF","#DA8A67","#ABCDEF","#87D3F8","#E6BE8A","#EEE8AA","#98FB98","#DCD0FF","#F984E5","#FF99CC","#FADADD","#DDA0DD","#DB7093","#96DED1","#C9C0BB","#ECEBBD","#BC987E","#AFEEEE","#CC99FF","#DB7093","#6F9940","#78184A","#009B7D","#FFEFD5","#E63E62","#50C878","#D998A0","#AEC6CF","#836953","#CFCFC4","#77DD77","#F49AC2","#FFB347","#DEA5A4","#B39EB5","#FF6961","#CB99C9","#FDFD96","#800080","#536878","#FFE5B4","#FFCBA4","#FFCC99","#FFDAB9","#FADFAD","#D1E231","#EAE0C8","#88D8C0","#B768A2","#E6E200","#CCCCFF","#E12C2C","#1C39BB","#00A693","#32127A","#D99058","#F77FBE","#701C1C","#CC3333","#FE28A2","#EC5800","#CD853F","#8BA8B7","#DF00FF","#000F89","#123524","#45B1E8","#C30B4E","#FDDDE6","#01796F","#563C0D","#FFC0CB","#D74894","#FC74FD","#FFDDF4","#D8B2D1","#FF9966","#E7ACCF","#980036","#F78FA7","#93C572","#391285","#E5E4E2","#8E4585","#DDA0DD","#5946B2","#5DA493","#86608E","#BE4F62","#FF5A36","#B0E0E6","#FF85CF","#F58025","#701C1C","#003153","#DF00FF","#CC8899","#722F37","#644117","#3B331C","#FF7518","#800080","#9F00C5","#A020F0","#69359C","#9678B6","#4E5180","#FE4EDA","#9C51B6","#50404D","#9A4EAE","#51484F","#436B95","#E8CCD7","#A6A6A6","#8E3A59","#5D8AA8","#FF355E","#242124","#FBAB60","#E30B5D","#915F6D","#E25098","#B3446C","#D68A59","#826644","#FF33CC","#E3256B","#8D4E85","#663399","#FF0000","#EE204D","#F2003C","#C40233","#ED2939","#ED1C24","#FE2712","#A52A2A","#860111","#FF5349","#E40078","#FD3A4A","#C71585","#A45A52","#522D80","#000000","#002387","#777696","#004040","#010B13","#010203","#F1A7FE","#D70040","#0892D0","#A76BCF","#B666D2","#B03060","#444C38","#704241","#00CCCC","#8A7F80","#838996","#FF007F","#F9429E","#9E5E6F","#674846","#B76E79","#E32636","#FF66CC","#AA98A9","#C21E56","#905D5D","#AB4E52","#65000B","#D40000","#BC8F8F","#0038A8","#002366","#4169E1","#CA2C92","#7851A9","#FADA5E","#CE4676","#D10056","#E0115F","#9B111E","#FF0028","#BB6528","#E18E96","#A81C07","#80461B","#679267","#32174D","#B7410E","#DA2C43","#00563F","#8B4513","#FF7800","#FF6700","#EED202","#F4C430","#BCB88A","#23297A","#FA8072","#FF91A4","#C2B280","#967117","#ECD540","#F4A460","#FDD9B5","#967117","#92000A","#507D2A","#0F52BA","#0067A5","#FF4681","#CBA135","#FF2400","#FD0E35","#FF91AF","#FFD800","#66FF66","#006994","#9FE2BF","#2E8B57","#4BC7CF","#59260B","#FFF5EE","#FFBA00","#704214","#8A795D","#778BA5","#FFCFF1","#009E60","#8FD400","#D98695","#5FA778","#FC0FC0","#FF6FFF","#882D17","#C0C0C0","#ACACAC","#5D89BA","#C4AEAD","#BFC1C2","#CB410B","#FF3855","#FFDB00","#007474","#87CEEB","#CF71AF","#6A5ACD","#708090","#003399","#299617","#FF6D3A","#C84186","#738276","#832A0D","#100C08","#933D41","#FFFAFA","#CEC8EF","#893843","#757575","#9E1316","#1D2951","#807532","#0070B8","#D10047","#E51A4C","#989898","#009150","#E86100","#F7BFBE","#E60026","#00FFFF","#4C2882","#007F5C","#8B5f4D","#0FC0FC","#A7FC00","#87FF2A","#00FF7F","#007BB8","#4682B4","#CC33CC","#5F8A8B","#FADA5E","#990000","#4F666A","#E4D96F","#FC5A8D","#914E75","#FF404C","#FFCC33","#F2F27A","#E3AB57","#FAD6A5","#FD5E53","#CF6BA9","#A83731","#D2B48C","#F94D00","#F28500","#FFCC00","#E4717A","#FB4D46","#483C32","#8B8589","#D0F0C0","#F88379","#F4C2C2","#008080","#367588","#99E6B3","#00827F","#CF3476","#CD5700","#E2725B","#D8BFD8","#DE6FA1","#FC89AC","#0ABAB5","#E08D3C","#DBD7D2","#EEE600","#FF6347","#746CC0","#FFC87C","#FD0E35","#808080","#00755E","#CDA4DE","#0073CF","#3E8EDE","#FF878D","#DEAA88","#B57281","#40E0D0","#00FFEF","#A0D6B4","#00C5CD","#8A9A5B","#FAD6A5","#6F4E37","#7C4848","#A67B5B","#C09999","#8A496B","#66023C","#0033AA","#D9004C","#8878C3","#536895","#FFB300","#3CD070","#3F00FF","#4166F5","#FF6FFF","#FC6C85","#635147","#FFDDCA","#5B92E5","#B78727","#FFFF66","#014421","#7B1113","#AE2029","#E1AD21","#004F98","#990000","#FFCC00","#F77F00","#D3003F","#664228","#F3E5AB","#F38FA9","#C5B358","#C80815","#43B3AE","#E34234","#D9381E","#A020F0","#74BBFB","#6666FF","#64E986","#FFB077","#FFDFBF","#FFFFBF","#8F00FF","#7F00FF","#8601AF","#EE82EE","#324AB2","#F75394","#40826D","#009698","#7C9ED9","#CC9900","#922724","#9F1D35","#DA1D81","#00AAEE","#CC0033","#FF9900","#A6D608","#00CC33","#B80CE3","#FF5F00","#FFA000","#CC00FF","#FF006C","#F70D1A","#DF6124","#00CCFF","#F07427","#FFA089","#E56024","#9F00FF","#FFE302","#CEFF00","#34B233","#004242","#A4F4F9","#7C98AB","#645452","#F5DEB3","#FFFFFF","#F5F5F5","#A2ADD0","#D470A2","#FF43A4","#FC6C85","#FD5800","#A75502","#722F37","#673147","#FF007C","#A0E6FF","#56887D","#C9A0DC","#C19A6B","#738678","#0F4D92","#1C2841","#FFFF00","#FCE883","#EFCC00","#FFD300","#FEDF00","#FFEF00","#FEFE33","#9ACD32","#FFAE42","#FFF000","#FFF700","#0014A8","#2C1608","#39A78E"]')}},t={};!function e(C){var A=t[C];if(void 0!==A)return A.exports;var E=t[C]={exports:{}};return F[C].call(E.exports,E,E.exports,e),E.exports}(796)})();