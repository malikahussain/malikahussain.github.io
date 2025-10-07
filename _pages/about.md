---
permalink: /
title: "Welcome!"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<p>
I am a Postdoctoral Fellow at the <strong>Knee Regulatory Research Center</strong> in the 
<strong>John Chambers College of Business and Economics</strong> at 
<strong>West Virginia University</strong>. 
My research lies at the intersection of political economy and economic history, with a focus on health, institutions, 
and development in colonial India. I study how political and cultural structures shaped vaccination campaigns and 
mortality patterns under British rule, and how these legacies continue to influence contemporary outcomes.
</p>

<div style="position: relative; overflow: hidden; height: 60vh; margin-top: 30px;">
  <img src="/images/India1875.jpg" alt="Colonial India 1875" 
       style="width: 100%; height: 100%; object-fit: cover; opacity: 0.9; transition: opacity 0.8s ease-in-out;">
  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
              background: linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(255,255,255,0));"></div>
</div>

<script>
window.addEventListener("scroll", () => {
  const img = document.querySelector('img[src*="India1875.jpg"]');
  if (!img) return;
  const scrollY = window.scrollY;
  const fadePoint = 250; // adjust fade intensity (smaller = faster fade)
  img.style.opacity = Math.max(1 - scrollY / fadePoint, 0.3);
});
</script>
