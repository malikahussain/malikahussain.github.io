---
permalink: /
title: "Welcome!"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div style="position: relative; overflow: hidden; height: 100vh; margin: 0;">
  <img src="/images/India1875.jpg" alt="Colonial India 1875" 
       style="width: 100%; height: 100%; object-fit: contain; opacity: 0.3; position: fixed; top: 0; left: 0; z-index: -1;">
</div>

<p style="position: relative; z-index: 1; margin-top: 20px;">
I am a Postdoctoral Fellow at the <strong>Knee Regulatory Research Center</strong> in the 
<strong>John Chambers College of Business and Economics</strong> at 
<strong>West Virginia University</strong>. I received my Ph.D. in Economics from <strong>George Mason University</strong>, 
where my research focused on health, institutions, and development in colonial India. 
I study how political and cultural structures shaped vaccination campaigns and mortality patterns under British rule, 
and how these legacies continue to influence contemporary outcomes.
</p>

<script>
window.addEventListener("scroll", () => {
  const img = document.querySelector('img[src*="India1875.jpg"]');
  if (!img) return;
  const scrollY = window.scrollY;
  const fadePoint = 400; // adjust fade intensity (smaller = faster fade)
  img.style.opacity = Math.max(0.3, 0.3 + (0.6 - scrollY / fadePoint));
});
</script>
