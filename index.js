import{a as y,S as d,i}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const m="50800171-f0005a0681d5ee847775b056c",g="https://pixabay.com/api/";async function h(s){const t={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return y.get(g,{params:t}).then(a=>{if(a.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return a.data})}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const t=s.map(({webformatURL:a,largeImageURL:n,tags:e,likes:r,views:o,comments:f,downloads:p})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img src="${a}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><span> ${r}</span></p>
          <p class="info-item"><b>Views</b><span> ${o}</span></p>
          <p class="info-item"><b>Comments</b><span> ${f}</span></p>
          <p class="info-item"><b>Downloads</b><span> ${p}</span></p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",t),b.refresh()}function q(){c.innerHTML=""}function w(){l.style.display="block"}function P(){l.style.display="none"}const u=document.querySelector(".form"),S=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const t=S.value.trim();if(!t){i.warning({message:"Please enter a search query."});return}q(),w();try{const a=await h(t);a.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!"}):L(a.hits)}catch{i.error({message:"An error occurred. Please try again later."})}finally{P()}});
//# sourceMappingURL=index.js.map
