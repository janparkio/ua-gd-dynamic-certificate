console.log("Hello World! (from create-block-ua-gd-dynamic-certificate block)"),document.addEventListener("DOMContentLoaded",(function(){console.log("Document loaded");const e=document.querySelector('input[name="field_1"]'),o=document.querySelector('input[name="field_2"]'),t=document.querySelector(".your-certificate-class");function n(){console.log("Updating certificate");const n=`${e.value} ${o.value}`;console.log("Full Name:",n),fetch("/wp-json/ua-gd-dynamic-certificate/v1/certificate-title").then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{console.log("Fetched Title:",e.title),t.innerHTML=`Certificate of ${e.title} awarded to ${n}`})).catch((e=>{console.error("There was a problem with your fetch operation:",e)}))}console.log("First Name Input:",e),console.log("Last Name Input:",o),console.log("Certificate Block:",t),e&&o?(e.addEventListener("input",n),o.addEventListener("input",n)):console.error("Input elements not found!")}));