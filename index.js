import{a as m,S as p,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const y="50800171-f0005a0681d5ee847775b056c",g="https://pixabay.com/api/";async function h(s){const t={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(g,{params:t})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const t=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:a,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img src="${o}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${r}</p>
          <p><b>Views:</b> ${a}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",t),b.refresh()}function v(){c.innerHTML=""}function q(){l.classList.add("visible")}function w(){l.classList.remove("visible")}const u=document.querySelector(".form"),P=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const t=P.value.trim();if(!t){n.warning({message:"Please enter a search query."});return}v(),q();try{const o=await h(t);o.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!"}):L(o.hits)}catch{n.error({message:"An error occurred. Please try again later."})}finally{w()}});
//# sourceMappingURL=index.js.map
