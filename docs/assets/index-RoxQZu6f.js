(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=[{category:"web",subtitle:"Project 1 Subtitle",title:"Shooting Stars",description:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",image:"./assets/thumbnail-1.webp"},{category:"web",subtitle:"Project 1 Subtitle",title:"Shooting Stars",description:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",image:"./assets/thumbnail-1.webp"},{category:"web",subtitle:"Project 1 Subtitle",title:"Shooting Stars",description:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",image:"./assets/thumbnail-1.webp"},{category:"web",subtitle:"Project 1 Subtitle",title:"Shooting Stars",description:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",image:"./assets/thumbnail-1.webp"},{category:"web",subtitle:"Project 1 Subtitle",title:"Shooting Stars",description:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",image:"./assets/thumbnail-1.webp"},{category:"web",subtitle:"Project 1 Subtitle",title:"Shooting Stars",description:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",image:"./assets/thumbnail-1.webp"},{category:"web",subtitle:"Project 1 Subtitle",title:"Shooting Stars",description:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",image:"./assets/thumbnail-1.webp"},{category:"web",subtitle:"Project 1 Subtitle",title:"Shooting Stars",description:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",image:"./assets/thumbnail-1.webp"},{category:"web",subtitle:"Project 1 Subtitle",title:"Shooting Stars",description:"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",image:"./assets/thumbnail-1.webp"}],l=document.querySelector(".fa-bars"),n=document.querySelector(".fa-x"),g=document.querySelector(".nav-menu");l.addEventListener("click",()=>{n.style.display="block",l.style.display="none",g.classList.remove("-translate-y-full")});n.addEventListener("click",()=>{l.style.display="block",n.style.display="none",g.classList.add("-translate-y-full")});function u(c,i=null,r=null){const s=document.querySelector(c);if(!s)return;s.innerHTML="";const e=i?d.filter(o=>o.category===i):d;(r?e.slice(0,r):e).forEach(o=>{const a=document.createElement("div");a.className="project flex relative h-80",a.innerHTML=`
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-top border-2 border-secondary" src="${o.image}">
            <div class="px-8 py-10 relative z-10 w-full border-2 border-text bg-secondary opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <h2 class="tracking-widest text-sm title-font font-medium text-primary mb-1">${o.subtitle}</h2>
                <h1 class="title-font text-lg font-medium text-white mb-3">${o.title}</h1>
                <p class="leading-relaxed">${o.description}</p>
            </div>
        `,s.appendChild(a)})}u(".projects",null,6);u(".projects-all");
