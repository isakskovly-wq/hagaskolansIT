document.addEventListener("DOMContentLoaded",()=>{const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav-wrap nav");if(toggle&&nav)toggle.addEventListener("click",()=>nav.classList.toggle("open"));
const guides=[
["Projektorn visar ingen bild",["projektor","bild","hdmi","skärm"],"guider/projektor-ingen-bild.html"],
["Inget ljud",["ljud","högtalare","volym","sound"],"guider/inget-ljud.html"],
["Datorn startar inte",["dator","chromebook","startar","ström"],"guider/dator-startar-inte.html"],
["Wi-Fi / internet fungerar inte",["wifi","wi-fi","internet","nätverk"],"guider/wifi-fungerar-inte.html"],
["Jag kan inte skriva ut",["skrivare","print","skriva","utskrift"],"guider/skrivare-fungerar-inte.html"],
["Jag kan inte logga in",["login","logga","lösenord","konto"],"guider/kan-inte-logga-in.html"],
["Meitner – inloggning",["meitner","inloggning"],"guider/meitner-login.html"],
["Skolon / Licenser",["skolon","licens","licenser","app"],"guider/skolon-licenser.html"]
];
const input=document.querySelector("#searchInput"),out=document.querySelector("#searchResults");
if(input&&out){input.addEventListener("input",()=>{const q=input.value.trim().toLowerCase();if(!q){out.classList.add("hidden");out.innerHTML="";return}const r=guides.filter(g=>(g[0]+" "+g[1].join(" ")).toLowerCase().includes(q));out.innerHTML=r.length?r.map(g=>`<a href="${g[2]}">📌 ${g[0]}</a>`).join(""):`<div style="padding:15px">Hittade inget. Prova ett annat ord – eller <a href="kontakt.html"><strong>kontakta Isak</strong></a>.</div>`;out.classList.remove("hidden")})}
const form=document.querySelector("#supportForm"),success=document.querySelector("#formSuccess");
if(form&&success){form.addEventListener("submit",e=>{e.preventDefault();const id="TEST-"+Math.floor(1000+Math.random()*9000);form.classList.add("hidden");success.classList.remove("hidden");success.innerHTML=`<strong>📝 Testärendet ${id} är registrerat!</strong><p>I denna lokala version skickas inget iväg. Nästa steg blir att koppla formuläret till exempelvis kommunens Microsoft 365-miljö.</p><a class="button" href="index.html">Till startsidan</a>`})}});
