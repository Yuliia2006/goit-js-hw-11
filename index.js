import{a as d,S as m,i}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="50800171-f0005a0681d5ee847775b056c",g="https://pixabay.com/api/";async function h(a){const r={key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(g,{params:r})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(a){const r=a.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:o,comments:f,downloads:p})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img src="${s}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b><span> ${t}</span></p>
          <p class="info-item"><b>Views</b><span> ${o}</span></p>
          <p class="info-item"><b>Comments</b><span> ${f}</span></p>
          <p class="info-item"><b>Downloads</b><span> ${p}</span></p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function v(){c.innerHTML=""}function q(){l.classList.add("visible")}function w(){l.classList.remove("visible")}const u=document.querySelector(".form"),P=u.elements["search-text"];u.addEventListener("submit",async a=>{a.preventDefault();const r=P.value.trim();if(!r){i.warning({message:"Please enter a search query."});return}v(),q();try{const s=await h(r);s.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!"}):L(s.hits)}catch{i.error({message:"An error occurred. Please try again later."})}finally{w()}});
//# sourceMappingURL=index.js.map
