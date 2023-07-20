(()=>{"use strict";var F={666:(F,C,A)=>{Object.defineProperty(C,"__esModule",{value:!0}),C.IdToColor=void 0;const E=A(680);C.IdToColor=class{constructor(){this.maxP=65536}paletteColor(F){const C=(0,E.crc32)(F),A=parseInt(C.slice(0,4),16)/this.maxP*(this.palette?.length-1e-6),B=parseInt(A.toString());return this.palette[B]}noPaletteColor(F){return`#${(0,E.crc32)(F).slice(0,6)}`}setPalette(F){return this.palette=F,this}get(F){return this.palette?.length?this.paletteColor(F):this.noPaletteColor(F)}}},680:(F,C)=>{Object.defineProperty(C,"__esModule",{value:!0}),C.crc32=void 0;const A=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];C.crc32=F=>{let C=4294967295;for(let E=0;E<F.length;++E)C=A[255&(C^F.charCodeAt(E))]^C>>8&16777215;return Math.abs(4294967295^C).toString(16)}},796:function(F,C,A){var E=this&&this.__importDefault||function(F){return F&&F.__esModule?F:{default:F}};Object.defineProperty(C,"__esModule",{value:!0});const B=A(666),D=E(A(441));let e="user";const t=document.querySelector("#container"),r=document.querySelector("#input");r.value=e,r?.addEventListener("change",(F=>{e=F.target.value}));const o=document.querySelector("#restart");o?.addEventListener("click",(()=>{s()}));const n=(F,C)=>{const A=document.createElement("div");A.style.display="flex",A.style.alignItems="center",A.style.gap="10px";const E=document.createElement("div");E.innerText=C,A.appendChild(E);const B=(F=>{const C=document.createElement("div");return C.style.height="50px",C.style.width="50px",C.style.backgroundColor=F,C})(F);return A.appendChild(B),A},l=()=>{for(let F=1;F<901;F++){const C=`${e}-${F+99}`,A=(new B.IdToColor).setPalette(D.default).get(C);t&&t.appendChild(n(A,C))}},s=()=>{for(;t?.firstChild;)t.removeChild(t.lastChild);l()};l()},441:F=>{F.exports=JSON.parse('["#0048BA","#B0BF1A","#7CB9E8","#C9FFE5","#B284BE","#5D8AA8","#00308F","#72A0C1","#AF002A","#F2F0E6","#F0F8FF","#84DE02","#E32636","#C46210","#EFDECD","#E52B50","#9F2B68","#F19CBB","#AB274F","#D3212D","#3B7A57","#00C4B0","#FFBF00","#FF7E00","#FF033E","#9966CC","#A4C639","#F2F3F4","#CD9575","#665D1E","#915C83","#841B2D","#FAEBD7","#008000","#8DB600","#FBCEB1","#00FFFF","#7FFFD4","#D0FF14","#4B5320","#3B444B","#8F9779","#E9D66B","#B2BEB5","#87A96B","#FF9966","#A52A2A","#FDEE00","#6E7F80","#568203","#FF2052","#C39953","#007FFF","#F0FFFF","#F0FFFF","#DBE9F4","#89CFF0","#A1CAF1","#F4C2C2","#FEFEFA","#FF91AF","#21ABCD","#FAE7B5","#FFE135","#006A4E","#E0218A","#7C0A02","#1DACD6","#848482","#98777B","#BCD4E6","#9F8170","#FA6E79","#F5F5DC","#2E5894","#9C2542","#E88E5A","#FFE4C4","#3D2B1F","#967117","#CAE00D","#BFFF00","#FE6F5E","#BF4F51","#000000","#3D0C02","#54626F","#253529","#3B3C36","#BFAFB2","#FFEBCD","#A57164","#318CE7","#ACE5EE","#FAF0BE","#0000FF","#1F75FE","#0093AF","#0087BD","#0018A8","#333399","#0247FE","#A2A2D0","#00B9FB","#6699CC","#0D98BA","#5DADEC","#ACE5EE","#553592","#126180","#8A2BE2","#5072A7","#4F86F7","#1C1CF0","#DE5D83","#79443B","#0095B6","#E3DAC9","#DDE26A","#CC0000","#006A4E","#873260","#0070FF","#B5A642","#CB4154","#1DACD6","#66FF00","#BF94E4","#D891EF","#C32148","#1974D2","#FF007F","#08E8DE","#D19FE8","#FFAA1D","#3399FF","#F4BBFF","#FF55A3","#FB607F","#004225","#CD7F32","#737000","#964B00","#A52A2A","#6B4423","#AF6E4D","#cc9966","#1B4D3E","#FFC1CC","#E7FEFF","#7BB661","#F0DC82","#480607","#800020","#DEB887","#A17A74","#CC5500","#E97451","#8A3324","#24A0ED","#BD33A4","#702963","#536872","#5F9EA0","#91A3B0","#006B3C","#ED872D","#E30022","#FFF600","#A67B5B","#4B3621","#1E4D2B","#A3C1AD","#C19A6B","#EFBBCC","#78866B","#FFFF99","#FFEF00","#FF0800","#E4717A","#00BFFF","#592720","#C41E3A","#00CC99","#960018","#D70040","#EB4C42","#FF0038","#FFA6C9","#B31B1B","#56A0D3","#ED9121","#00563F","#062A78","#703642","#C95A49","#92A1CF","#ACE1AF","#007BA7","#2F847C","#B2FFFF","#4997D0","#DE3163","#EC3B83","#007BA7","#2A52BE","#6D9BC3","#007AA5","#E03C31","#A0785A","#F7E7CE","#F1DDCF","#36454F","#232B2B","#E68FAC","#DFFF00","#7FFF00","#DE3163","#FFB7C5","#954535","#DE6FA1","#A8516E","#AA381E","#856088","#4AFF00","#7B3F00","#D2691E","#FFA700","#98817B","#E34234","#D2691E","#CD607E","#E4D00A","#9FA91F","#7F1734","#FBCCE7","#0047AB","#D2691E","#965A3E","#6F4E37","#C4D8E2","#F88379","#002E63","#8C92AC","#B87333","#DA8A67","#AD6F69","#CB6D51","#996666","#FF3800","#FF7F50","#F88379","#FF4040","#FD7C6E","#893F45","#FBEC5D","#B31B1B","#6495ED","#FFF8DC","#2E2D88","#FFF8E7","#81613C","#FFBCD9","#FFFDD0","#DC143C","#BE0032","#990000","#F5F5F5","#00FFFF","#4E82B4","#4682BF","#28589C","#188BC2","#00B7EB","#58427C","#FFD300","#F56FA1","#FFFF31","#F0E130","#00008B","#666699","#654321","#88654E","#5D3954","#A40000","#08457E","#986960","#CD5B45","#008B8B","#536878","#B8860B","#A9A9A9","#013220","#006400","#1F262A","#00416A","#00147E","#1A2421","#BDB76B","#483C32","#734F96","#534B4F","#543D37","#8B008B","#A9A9A9","#003366","#4A5D23","#556B2F","#FF8C00","#9932CC","#779ECB","#03C03C","#966FD6","#C23B22","#E75480","#003399","#4F3A3C","#301934","#872657","#8B0000","#E9967A","#560319","#8FBC8F","#3C1414","#8CBED6","#483D8B","#2F4F4F","#177245","#918151","#FFA812","#483C32","#CC4E5C","#00CED1","#D1BEA8","#9400D3","#9B870C","#00703C","#555555","#D70A53","#40826D","#A9203E","#EF3038","#E9692C","#DA3287","#FAD6A5","#B94E48","#704241","#C154C1","#056608","#0E7C61","#004B49","#333366","#F5C71A","#9955BB","#CC00CC","#820000","#D473D4","#355E3B","#FFCBA4","#FF1493","#A95C68","#850101","#843F5B","#FF9933","#00BFFF","#4A646C","#556B2F","#7E5E60","#66424D","#330066","#BA8759","#1560BD","#2243B6","#669999","#C19A6B","#EDC9AF","#EA3C53","#B9F2FF","#696969","#C53151","#9B7653","#1E90FF","#FEF65B","#D71868","#85BB65","#828E84","#664C28","#967117","#00009C","#E5CCC9","#EFDFBB","#E1A95F","#555D50","#C2B280","#1B1B1B","#614051","#F0EAD6","#1034A6","#7DF9FF","#FF003F","#00FFFF","#00FF00","#6F00FF","#F4BBFF","#CCFF00","#BF00FF","#3F00FF","#8F00FF","#FFFF33","#50C878","#6C3082","#1B4D3E","#B48395","#AB4B52","#CC474B","#563C5C","#96C8A2","#44D7A8","#C19A6B","#801818","#B53389","#DE5285","#F400A1","#E5AA70","#4D5D53","#FDD5B1","#4F7942","#FF2800","#6C541E","#FF5470","#B22222","#CE2029","#E25822","#FC8EAC","#6B4423","#F7E98E","#EEDC82","#A2006D","#FFFAF0","#FFBF00","#FF1493","#CCFF00","#FF004F","#014421","#228B22","#A67B5B","#856D4D","#0072BB","#FD3F92","#86608E","#9EFD38","#D473D4","#FD6C9E","#811453","#4E1609","#C72C48","#F64A8A","#77B5FE","#8806CE","#AC1E44","#A6E7FF","#E936A7","#FF00FF","#C154C1","#FF77FF","#CC397B","#C74375","#E48400","#CC6666","#DCDCDC","#E49B0F","#996600","#FFDF46","#007F66","#F8F8FF","#B05C52","#FE5A1D","#B06500","#6082B6","#E6E8FA","#AB92B3","#00AB66","#D4AF37","#FFD700","#85754E","#996515","#FCC200","#FFDF00","#DAA520","#676767","#A8E4A0","#6F2DA8","#808080","#808080","#BEBEBE","#465945","#8C92AC","#00FF00","#1CAC78","#008000","#00A877","#009F6B","#00AD43","#00A550","#66B032","#1164B4","#009966","#A7F432","#6EAEA1","#ADFF2F","#885818","#A99A86","#00FF7F","#2a3439","#663854","#446CCF","#5218FA","#E9D66B","#3FFF00","#46CB18","#C90016","#DA9100","#808000","#FF7A00","#960018","#DF73FF","#AA98A9","#AA00BB","#F400A1","#F0FFF0","#006DB0","#49796B","#FF1DCE","#FF69B4","#355E3B","#71A6D2","#FCF75E","#71BC78","#319177","#602F6B","#002395","#66023C","#ED2939","#B2EC5D","#4C516D","#138808","#CD5C5C","#E3A857","#4B0082","#091F92","#4B0082","#FF496C","#360CCC","#002FA7","#FF4F00","#BA160C","#C0362C","#5A4FCF","#B3446C","#F4F0EC","#009000","#B2FFFF","#FFFFF0","#00A86B","#9D2933","#264348","#5B3256","#F8DE7E","#D73B3E","#A50B5E","#DA614E","#343434","#F4CA16","#8AB9F1","#BDDA57","#29AB87","#4CBB17","#7C1C05","#3AB09E","#E8F48C","#C3B091","#F0E68C","#8EE53F","#882D17","#E79FC4","#6B4423","#354230","#512888","#E8000D","#087830","#D6CADD","#26619C","#FFFF66","#A9BA9D","#CF1020","#B57EDC","#E6E6FA","#CCCCFF","#FFF0F5","#C4C3D0","#9457EB","#EE82EE","#E6E6FA","#FBAED2","#967BB6","#FBA0E3","#7CFC00","#FFF700","#FFFACD","#CCA01D","#FDFF00","#E3FF00","#F6EABE","#FFF44F","#1A1110","#545AA7","#FDD5B1","#ADD8E6","#B5651D","#E66771","#88ACE0","#F08080","#93CCEA","#F56991","#E0FFFF","#FF5CCD","#C8AD7F","#F984EF","#FAFAD2","#D3D3D3","#CC99CC","#90EE90","#FFB3DE","#F0E68C","#D39BCB","#ADDFAD","#FED8B1","#E6A8D7","#B19CD9","#FFB6C1","#E97451","#FFA07A","#FF9999","#20B2AA","#87CEFA","#778899","#B0C4DE","#B38B6D","#E68FAC","#FFFFE0","#C8A2C8","#AE98AA","#BFFF00","#00FF00","#32CD32","#9DC209","#195905","#FAF0E6","#15F2FD","#DE6FA1","#6CA0DC","#674C47","#B86D29","#6C2E1F","#987456","#6699CC","#FFE4CD","#E62020","#001C3D","#FFBD88","#CC3336","#FF00FF","#FF55A3","#CA1F7B","#D0417E","#FF0090","#9F4576","#CC338B","#AAF0D1","#FF4466","#F8F4FF","#C04000","#FBEC5D","#6050DC","#0BDA51","#979AAA","#F37A48","#FF8243","#74C365","#880085","#EAA221","#C32148","#800000","#B03060","#E0B0FF","#915F6D","#EF98AA","#47ABCC","#30BFBF","#ACACE6","#5E8C31","#D9E650","#733380","#D92121","#A63A79","#FAFA37","#F2BA49","#4C9141","#73C2FB","#E5B73B","#66DDAA","#0000CD","#E2062C","#AF4035","#F3E5AB","#035096","#1C352D","#DDA0DD","#BA55D3","#0067A5","#9370DB","#BB3385","#AA4069","#3CB371","#80DAEB","#7B68EE","#C9DC87","#00FA9A","#674C47","#48D1CC","#79443B","#D9603B","#C71585","#F8B878","#F8DE7E","#FDBCB4","#0A7E8C","#9C7C38","#E4007C","#7ED4E6","#8DD9CC","#8B72BE","#210837","#4D8C57","#ACBF60","#D982B5","#E58E73","#A55353","#FFEB00","#ECB176","#702670","#191970","#004953","#FFC40C","#FDFFF5","#FFDAE9","#E3F988","#36747D","#F5E050","#3EB489","#F5FFFA","#98FF98","#BBB477","#FFE4E1","#FAEBD7","#967117","#73A9C2","#AE0C00","#8DA399","#8A9A5B","#30BA8F","#997A8D","#18453B","#306030","#C54B8C","#828E84","#FFDB58","#317873","#D65282","#AD4379","#F6ADC6","#2A8000","#FADA5E","#FFDEAD","#000080","#9457EB","#FFA343","#FE4164","#39FF14","#214FC6","#D7837F","#727472","#A4DDED","#059033","#E9FFDB","#4F42B5","#0077BE","#48BF91","#CC7722","#008000","#FD5240","#43302E","#CFB53B","#563C5C","#FDF5E6","#796878","#673147","#867E36","#C08081","#848482","#808000","#6B8E23","#3C341F","#9AB973","#353839","#B784A7","#FF7F00","#FF7538","#FF5800","#FB9902","#FFA500","#FF9F00","#FF4500","#FA5B3D","#F8D568","#DA70D6","#F2BDCD","#FB4F14","#654321","#414A4C","#FF6E4A","#002147","#990000","#1CA9C9","#006600","#273BE2","#682860","#BCD4E6","#AFEEEE","#987654","#AF4035","#9BC4E2","#DDADAF","#DA8A67","#ABCDEF","#87D3F8","#E6BE8A","#EEE8AA","#98FB98","#DCD0FF","#F984E5","#FF99CC","#FADADD","#DDA0DD","#DB7093","#96DED1","#C9C0BB","#ECEBBD","#BC987E","#AFEEEE","#CC99FF","#DB7093","#6F9940","#78184A","#009B7D","#FFEFD5","#E63E62","#50C878","#D998A0","#AEC6CF","#836953","#CFCFC4","#77DD77","#F49AC2","#FFB347","#DEA5A4","#B39EB5","#FF6961","#CB99C9","#FDFD96","#800080","#536878","#FFE5B4","#FFCBA4","#FFCC99","#FFDAB9","#FADFAD","#D1E231","#EAE0C8","#88D8C0","#B768A2","#E6E200","#CCCCFF","#E12C2C","#1C39BB","#00A693","#32127A","#D99058","#F77FBE","#701C1C","#CC3333","#FE28A2","#EC5800","#CD853F","#8BA8B7","#DF00FF","#000F89","#123524","#45B1E8","#C30B4E","#FDDDE6","#01796F","#563C0D","#FFC0CB","#D74894","#FC74FD","#FFDDF4","#D8B2D1","#FF9966","#E7ACCF","#980036","#F78FA7","#93C572","#391285","#E5E4E2","#8E4585","#DDA0DD","#5946B2","#5DA493","#86608E","#BE4F62","#FF5A36","#B0E0E6","#FF85CF","#F58025","#701C1C","#003153","#DF00FF","#CC8899","#722F37","#644117","#3B331C","#FF7518","#800080","#9F00C5","#A020F0","#69359C","#9678B6","#4E5180","#FE4EDA","#9C51B6","#50404D","#9A4EAE","#51484F","#436B95","#E8CCD7","#A6A6A6","#8E3A59","#5D8AA8","#FF355E","#242124","#FBAB60","#E30B5D","#915F6D","#E25098","#B3446C","#D68A59","#826644","#FF33CC","#E3256B","#8D4E85","#663399","#FF0000","#EE204D","#F2003C","#C40233","#ED2939","#ED1C24","#FE2712","#A52A2A","#860111","#FF5349","#E40078","#FD3A4A","#C71585","#A45A52","#522D80","#000000","#002387","#777696","#004040","#010B13","#010203","#F1A7FE","#D70040","#0892D0","#A76BCF","#B666D2","#B03060","#444C38","#704241","#00CCCC","#8A7F80","#838996","#FF007F","#F9429E","#9E5E6F","#674846","#B76E79","#E32636","#FF66CC","#AA98A9","#C21E56","#905D5D","#AB4E52","#65000B","#D40000","#BC8F8F","#0038A8","#002366","#4169E1","#CA2C92","#7851A9","#FADA5E","#CE4676","#D10056","#E0115F","#9B111E","#FF0028","#BB6528","#E18E96","#A81C07","#80461B","#679267","#32174D","#B7410E","#DA2C43","#00563F","#8B4513","#FF7800","#FF6700","#EED202","#F4C430","#BCB88A","#23297A","#FA8072","#FF91A4","#C2B280","#967117","#ECD540","#F4A460","#FDD9B5","#967117","#92000A","#507D2A","#0F52BA","#0067A5","#FF4681","#CBA135","#FF2400","#FD0E35","#FF91AF","#FFD800","#66FF66","#006994","#9FE2BF","#2E8B57","#4BC7CF","#59260B","#FFF5EE","#FFBA00","#704214","#8A795D","#778BA5","#FFCFF1","#009E60","#8FD400","#D98695","#5FA778","#FC0FC0","#FF6FFF","#882D17","#C0C0C0","#ACACAC","#5D89BA","#C4AEAD","#BFC1C2","#CB410B","#FF3855","#FFDB00","#007474","#87CEEB","#CF71AF","#6A5ACD","#708090","#003399","#299617","#FF6D3A","#C84186","#738276","#832A0D","#100C08","#933D41","#FFFAFA","#CEC8EF","#893843","#757575","#9E1316","#1D2951","#807532","#0070B8","#D10047","#E51A4C","#989898","#009150","#E86100","#F7BFBE","#E60026","#00FFFF","#4C2882","#007F5C","#8B5f4D","#0FC0FC","#A7FC00","#87FF2A","#00FF7F","#007BB8","#4682B4","#CC33CC","#5F8A8B","#FADA5E","#990000","#4F666A","#E4D96F","#FC5A8D","#914E75","#FF404C","#FFCC33","#F2F27A","#E3AB57","#FAD6A5","#FD5E53","#CF6BA9","#A83731","#D2B48C","#F94D00","#F28500","#FFCC00","#E4717A","#FB4D46","#483C32","#8B8589","#D0F0C0","#F88379","#F4C2C2","#008080","#367588","#99E6B3","#00827F","#CF3476","#CD5700","#E2725B","#D8BFD8","#DE6FA1","#FC89AC","#0ABAB5","#E08D3C","#DBD7D2","#EEE600","#FF6347","#746CC0","#FFC87C","#FD0E35","#808080","#00755E","#CDA4DE","#0073CF","#3E8EDE","#FF878D","#DEAA88","#B57281","#40E0D0","#00FFEF","#A0D6B4","#00C5CD","#8A9A5B","#FAD6A5","#6F4E37","#7C4848","#A67B5B","#C09999","#8A496B","#66023C","#0033AA","#D9004C","#8878C3","#536895","#FFB300","#3CD070","#3F00FF","#4166F5","#FF6FFF","#FC6C85","#635147","#FFDDCA","#5B92E5","#B78727","#FFFF66","#014421","#7B1113","#AE2029","#E1AD21","#004F98","#990000","#FFCC00","#F77F00","#D3003F","#664228","#F3E5AB","#F38FA9","#C5B358","#C80815","#43B3AE","#E34234","#D9381E","#A020F0","#74BBFB","#6666FF","#64E986","#FFB077","#FFDFBF","#FFFFBF","#8F00FF","#7F00FF","#8601AF","#EE82EE","#324AB2","#F75394","#40826D","#009698","#7C9ED9","#CC9900","#922724","#9F1D35","#DA1D81","#00AAEE","#CC0033","#FF9900","#A6D608","#00CC33","#B80CE3","#FF5F00","#FFA000","#CC00FF","#FF006C","#F70D1A","#DF6124","#00CCFF","#F07427","#FFA089","#E56024","#9F00FF","#FFE302","#CEFF00","#34B233","#004242","#A4F4F9","#7C98AB","#645452","#F5DEB3","#FFFFFF","#F5F5F5","#A2ADD0","#D470A2","#FF43A4","#FC6C85","#FD5800","#A75502","#722F37","#673147","#FF007C","#A0E6FF","#56887D","#C9A0DC","#C19A6B","#738678","#0F4D92","#1C2841","#FFFF00","#FCE883","#EFCC00","#FFD300","#FEDF00","#FFEF00","#FEFE33","#9ACD32","#FFAE42","#FFF000","#FFF700","#0014A8","#2C1608","#39A78E"]')}},C={};!function A(E){var B=C[E];if(void 0!==B)return B.exports;var D=C[E]={exports:{}};return F[E].call(D.exports,D,D.exports,A),D.exports}(796)})();