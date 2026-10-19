document.addEventListener("DOMContentLoaded", () => {
  if (typeof SPOT_DATA === "undefined") return;
  document.body.classList.add(`theme-${SPOT_DATA.theme}`);
  document.getElementById("meta-title").textContent = SPOT_DATA.meta.title;
  document.getElementById("hero-image").src = SPOT_DATA.hero.coverImage;
  document.getElementById("hero-badge-icon").className = `${SPOT_DATA.hero.badgeIcon} mr-1.5`;
  document.getElementById("hero-badge-text").textContent = SPOT_DATA.hero.badge;
  document.getElementById("hero-title").textContent = SPOT_DATA.hero.title;
  document.getElementById("hero-subtitle").textContent = SPOT_DATA.hero.subtitle;
  
  document.getElementById("hero-stats").innerHTML = SPOT_DATA.hero.stats.map(s => `
    <div class="bg-slate-900/60 rounded-2xl p-4 border border-slate-700 text-center">
      <i class="${s.icon} text-amber-500 mb-1"></i>
      <div class="text-xl font-bold text-white">${s.value}</div>
      <div class="text-xs text-slate-400">${s.label}</div>
    </div>
  `).join("");

  document.getElementById("what-title").textContent = SPOT_DATA.whatIsIt.title;
  document.getElementById("what-badge").textContent = SPOT_DATA.whatIsIt.categoryBadge;
  document.getElementById("what-desc").textContent = SPOT_DATA.whatIsIt.description;

  document.getElementById("guide-title").textContent = SPOT_DATA.detailedGuide.title;
  document.getElementById("guide-paragraphs").innerHTML = SPOT_DATA.detailedGuide.paragraphs.map(p => `<p>${p}</p>`).join("");

  document.getElementById("why-visit-grid").innerHTML = SPOT_DATA.whyVisit.map(w => `
    <div class="bg-slate-800 rounded-3xl p-6 border border-slate-700 flex flex-col justify-between">
      <div>
        <div class="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-500 flex items-center justify-center mb-4">
          <i class="${w.icon} text-xl"></i>
        </div>
        <h3 class="text-xl font-bold text-white mb-2">${w.title}</h3>
        <p class="text-slate-300 text-sm">${w.description}</p>
      </div>
    </div>
  `).join("");

  document.getElementById("highlights-list").innerHTML = SPOT_DATA.highlights.map(h => `
    <li class="flex items-center space-x-3 bg-slate-900/50 p-4 rounded-2xl border border-slate-700">
      <i class="fa-solid fa-circle-check text-amber-500"></i>
      <span class="text-slate-200 text-sm">${h}</span>
    </li>
  `).join("");

  document.getElementById("transport-title").textContent = SPOT_DATA.transportation.title;
  document.getElementById("transport-desc").textContent = SPOT_DATA.transportation.description;
  document.getElementById("transport-tips").innerHTML = SPOT_DATA.transportation.tips.map(t => `
    <li class="flex items-start space-x-3 text-slate-300 text-sm bg-slate-900/40 p-3.5 rounded-xl border border-slate-700">
      <i class="fa-solid fa-arrow-right text-amber-500 mt-1"></i><span>${t}</span>
    </li>
  `).join("");

  document.getElementById("hotels-grid").innerHTML = SPOT_DATA.hotels.map(h => `
    <div class="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 flex flex-col justify-between">
      <div class="h-48 relative"><img src="${h.image}" class="w-full h-full object-cover"><span class="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500 text-slate-950">${h.badge}</span></div>
      <div class="p-6 space-y-4"><h3 class="text-xl font-bold text-white">${h.name}</h3><p class="text-slate-300 text-sm">${h.description}</p>
      <a href="${h.url}" target="_blank" class="block text-center px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-sm font-medium">Otel Fırsatları</a></div>
    </div>
  `).join("");

  document.getElementById("restaurants-grid").innerHTML = SPOT_DATA.restaurants.map(r => `
    <div class="bg-slate-800 rounded-3xl p-6 border border-slate-700 space-y-4">
      <div class="flex justify-between items-center"><h3 class="text-xl font-bold text-white">${r.name}</h3><span class="px-2.5 py-1 rounded-lg text-xs bg-amber-500/20 text-amber-300">${r.badge}</span></div>
      <p class="text-slate-300 text-sm">${r.description}</p>
      <div class="text-xs text-slate-400 flex items-center"><i class="fa-solid fa-location-dot text-amber-500 mr-2"></i>${r.location}</div>
    </div>
  `).join("");
});