(()=>{"use strict";window.onload=function(){const s="rrs-sg-",t="rrs-px-",e=new Array,n=new Array;let r="";for(const o of document.getElementsByClassName("rrs-sg"))for(const c of o.classList)if(c.startsWith(s)){const t=c.substring(s.length);e.includes(t)||(r+=`.rrs-sg-${t} { background-image: url('../icons/sg-${t}.svg'); }\n`,e.push(t))}else if(c.startsWith(t)){const s=c.substring(t.length);n.includes(s)||(r+=`.rrs-px-${s} { min-width: ${s}px; min-height: ${s}px; }\n`,n.push(s))}const o=document.createElement("style");o.type="text/css",o.appendChild(document.createTextNode(r)),document.getElementsByTagName("head")[0].appendChild(o)}})();