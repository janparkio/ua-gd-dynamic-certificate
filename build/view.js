(()=>{function e(e,t,n,o,d){const c=`${e.value} ${t.value}`;n.textContent=c,d.textContent=o.textContent,console.log("Certificate updated to:",c)}document.addEventListener("DOMContentLoaded",(function(){new MutationObserver((function(t,n){const o=document.getElementById("ws-form-2"),d=document.getElementById("wsf-2-field-1"),c=document.getElementById("wsf-2-field-2"),i=document.querySelector(".name-text"),l=document.getElementById("heading-title"),u=document.querySelector(".heading-text-title"),s=document.querySelector(".ua-gd-certificate");o&&d&&c&&i&&l&&u&&s?(console.log("All elements found. Adding event listeners and updating dynamic content."),d.addEventListener("input",(()=>e(d,c,i,l,u))),c.addEventListener("input",(()=>e(d,c,i,l,u))),u.textContent=l.textContent,n.disconnect()):console.log("Waiting for elements...")})).observe(document.body,{childList:!0,subtree:!0})}))})();