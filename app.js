const products = [
  {id: 1, name: "LEGO City Police Set", brand: "LEGO", price: 999, oldPrice: 1299, rating: 4.8, reviews: 234, img: "🧱", color: "#FFCDD2", cat: "Boys", isNew: false, isSale: true, age: "6-8"},
  {id: 2, name: "Barbie Dreamhouse 2025", brand: "Barbie", price: 2999, oldPrice: 3499, rating: 4.9, reviews: 189, img: "👸", color: "#F8BBD0", cat: "Girls", isNew: true, isSale: true, age: "3-5"},
  {id: 3, name: "Hot Wheels Ultimate Garage", brand: "Hot Wheels", price: 1499, oldPrice: 1899, rating: 4.7, reviews: 312, img: "🚗", color: "#FFE0B2", cat: "Boys,Riding", isNew: false, isSale: true, age: "6-8"},
  {id: 4, name: "Nerf Elite 2.0 Blaster", brand: "Nerf", price: 1299, oldPrice: 1599, rating: 4.6, reviews: 156, img: "🎯", color: "#B2EBF2", cat: "Boys,Outdoor", isNew: false, isSale: true, age: "9-12"},
  {id: 5, name: "Play-Doh Mega Pack", brand: "Hasbro", price: 449, oldPrice: 549, rating: 4.8, reviews: 421, img: "🎨", color: "#D1C4E9", cat: "Arts & Crafts", isNew: false, isSale: true, age: "3-5"},
  {id: 6, name: "Transformers Optimus", brand: "Hasbro", price: 1799, oldPrice: 2199, rating: 4.9, reviews: 98, img: "🤖", color: "#C5CAE9", cat: "Boys,Games", isNew: true, isSale: true, age: "6-8"},
  {id: 7, name: "Ravensburger 500pc Puzzle", brand: "Ravensburger", price: 599, oldPrice: 749, rating: 4.7, reviews: 267, img: "🧩", color: "#DCEDC8", cat: "Learning", isNew: false, isSale: true, age: "9-12"},
  {id: 8, name: "Dinosaur Figure Set", brand: "Mattel", price: 699, oldPrice: 899, rating: 4.8, reviews: 344, img: "🦕", color: "#C8E6C9", cat: "Boys,Learning", isNew: false, isSale: true, age: "3-5"},
  {id: 9, name: "Baby Learning Blocks", brand: "Fisher-Price", price: 399, oldPrice: 599, rating: 4.5, reviews: 541, img: "🧊", color: "#FFF9C4", cat: "Baby,Learning", isNew: false, isSale: false, age: "0-2"},
  {id: 10, name: "Magical Princess Wand", brand: "Disney", price: 299, oldPrice: 399, rating: 4.6, reviews: 120, img: "🪄", color: "#Fce4ec", cat: "Girls,Dress Up", isNew: true, isSale: false, age: "3-5"},
  {id: 11, name: "Outdoor Splash Pad", brand: "Intex", price: 899, oldPrice: 1299, rating: 4.7, reviews: 210, img: "🌊", color: "#E0F7FA", cat: "Outdoor", isNew: false, isSale: true, age: "3-5"},
  {id: 12, name: "Party Hat Set", brand: "PartyCity", price: 199, oldPrice: 250, rating: 4.2, reviews: 50, img: "🎉", color: "#FFF3E0", cat: "Party", isNew: false, isSale: false, age: "3-5"}
];

const categories = [
  {name: "Boys", icon: "🤖", count: 234, color: "linear-gradient(135deg, #FF5252, #D50000)"},
  {name: "Girls", icon: "👧", count: 198, color: "linear-gradient(135deg, #FF80AB, #C51162)"},
  {name: "Baby", icon: "👶", count: 156, color: "linear-gradient(135deg, #FFEA00, #FFAB00)"},
  {name: "Learning", icon: "🧩", count: 143, color: "linear-gradient(135deg, #40C4FF, #0091EA)"},
  {name: "Games", icon: "🎮", count: 112, color: "linear-gradient(135deg, #E040FB, #AA00FF)"},
  {name: "Arts & Crafts", icon: "🎨", count: 89, color: "linear-gradient(135deg, #FF9100, #DD2C00)"},
  {name: "Riding", icon: "🚴", count: 67, color: "linear-gradient(135deg, #00E676, #00C853)"},
  {name: "Outdoor", icon: "🌊", count: 78, color: "linear-gradient(135deg, #18FFFF, #00B8D4)"},
  {name: "Dress Up", icon: "🎭", count: 54, color: "linear-gradient(135deg, #FF4081, #C51162)"},
  {name: "Party", icon: "🎉", count: 43, color: "linear-gradient(135deg, #FFD740, #FF6D00)"}
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentRoute = window.location.pathname === '/' ? 'home' : window.location.pathname.substring(1);

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => { document.getElementById('loading-screen').style.opacity = '0'; setTimeout(()=>document.getElementById('loading-screen').style.display = 'none', 1000) }, 1000);
  
  initRouter();
  initParticleSystem();
  renderHomeData();
  renderCategoriesData();
  setupFilterCategories();
  updateBadges();
  renderCart();
  startSaleTimer();
  setupScrollAnimations();
  
  if(currentRoute) routeTo('/' + (currentRoute==='home'?'':currentRoute), true);
});

// SPA Routing
function initRouter() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      routeTo(link.getAttribute('href'));
    });
  });
  window.addEventListener('popstate', () => {
    let path = window.location.pathname;
    routeTo(path, true);
  });
}

function routeTo(path, isPopState = false) {
  let newRoute = path === '/' ? 'home' : path.substring(1).split('?')[0];
  if(!document.getElementById(`page-${newRoute}`)) newRoute = 'home';
  if(newRoute === currentRoute) return;

  if(!isPopState) window.history.pushState({}, "", path);

  const currentEl = document.getElementById(`page-${currentRoute}`);
  const newEl = document.getElementById(`page-${newRoute}`);

  // Transition classes
  currentEl.classList.add('page-exit');
  newEl.classList.add('page-enter');
  newEl.style.display = 'block';

  setTimeout(() => {
    currentEl.classList.remove('page', 'active', 'page-exit');
    currentEl.classList.add('page');
    currentEl.style.display = 'none';
    newEl.classList.remove('page-enter');
    newEl.classList.add('active');
    currentRoute = newRoute;
    window.scrollTo(0,0);
    // trigger renders
    if(newRoute === 'shop') renderShop();
    if(newRoute === 'sale') renderSale();
    if(newRoute === 'new-arrivals') renderNewArrivals();
    updateNavUI();
  }, 600); // match dropOff duration
}

function updateNavUI() {
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  let activeLink = document.querySelector(`.nav-links a[data-route="${currentRoute}"]`);
  if(activeLink) activeLink.classList.add('active');
  document.getElementById('nav-bar').classList.remove('mobile-open');
}

function toggleMobileMenu() {
  document.getElementById('nav-bar').classList.toggle('mobile-open');
}

// Data Rendering
function createProductCard(p, delay) {
  const isWish = wishlist.includes(p.id);
  const stars = '⭐'.repeat(Math.floor(p.rating));
  return `
    <div class="product-card floating" style="animation-delay: ${delay}s">
      ${p.isNew ? '<div class="card-badge badge-new">NEW!</div>' : ''}
      ${p.isSale && !p.isNew ? '<div class="card-badge badge-sale">SALE</div>' : ''}
      <button class="wishlist-btn ${isWish?'active':''}" onclick="toggleWishlist(${p.id}, this)">❤️</button>
      <div class="card-img" style="background: ${p.color}" id="img-p${p.id}">${p.img}</div>
      <div class="product-brand">${p.brand}</div>
      <h3 class="product-name">${p.name}</h3>
      <div class="stars">${stars} <span style="color:#aaa;font-size:0.8rem">(${p.reviews})</span></div>
      <div class="price-row">
        ${p.oldPrice > p.price ? `<span class="price-old">₱${p.oldPrice}</span>` : ''}
        <span class="price-current">₱${p.price}</span>
      </div>
      <button class="btn btn-red add-to-cart" onclick="addToCart(event, ${p.id}, 'img-p${p.id}')">ADD TO CART</button>
    </div>
  `;
}

function renderHomeData() {
  const qc = document.getElementById('quick-cats');
  qc.innerHTML = categories.map((c,i) => `
    <div class="cat-btn" onclick="routeTo('/shop?cat=${c.name}')">
      <div class="cat-icon floating" style="background: ${c.color}; animation-delay: ${i*0.2}s">${c.icon}</div>
      <span>${c.name}</span>
    </div>
  `).join('');

  document.getElementById('home-featured').innerHTML = 
    products.slice(0, 8).map((p,i) => createProductCard(p, i*0.1)).join('');
}

function renderShop() {
  const catsBox = Array.from(document.querySelectorAll('#filter-categories input:checked')).map(el=>el.value);
  const maxPrice = document.getElementById('price-slider').value;
  document.getElementById('price-val').innerText = `₱${maxPrice}`;
  
  let p = products.filter(x => x.price <= maxPrice);
  if(catsBox.length > 0) p = p.filter(x => catsBox.some(c => x.cat.includes(c)));
  
  const sort = document.getElementById('sort-select').value;
  if(sort === 'price-low') p.sort((a,b)=>a.price-b.price);
  if(sort === 'price-high') p.sort((a,b)=>b.price-a.price);
  if(sort === 'newest') p.sort((a,b)=>b.isNew?-1:1);
  
  document.getElementById('shop-count').innerText = `Showing ${p.length} products`;
  document.getElementById('shop-grid').innerHTML = p.map((pr,i) => createProductCard(pr, i*0.1)).join('');
}

function setupFilterCategories() {
  document.getElementById('filter-categories').innerHTML = categories.map(c => `
    <label class="filter-label"><input type="checkbox" value="${c.name}"> ${c.name}</label>
  `).join('');
  document.getElementById('price-slider').addEventListener('input', renderShop);
}

function renderNewArrivals() {
  document.getElementById('new-grid').innerHTML = 
    products.filter(p=>p.isNew).concat(products.slice(0,4)).map((pr,i) => createProductCard(pr, i*0.1)).join('');
}

function renderSale() {
  document.getElementById('sale-grid').innerHTML = 
    products.filter(p=>p.isSale).map((pr,i) => createProductCard(pr, i*0.1)).join('');
}

function renderCategoriesData() {
  document.getElementById('cat-grid').innerHTML = categories.map((c,i) => `
    <div class="big-cat-card floating" style="animation-delay: ${i*0.15}s" onclick="routeTo('/shop')">
      <div class="big-cat-bg" style="background:${c.color}"></div>
      <div class="big-cat-content">
        <h3>${c.name}</h3>
        <p>${c.count} products</p>
      </div>
      <div class="big-cat-img">${c.icon}</div>
    </div>
  `).join('');
}

function startSaleTimer() {
  const t = document.getElementById('sale-timer');
  let seconds = 2 * 24 * 3600 + 14 * 3600 + 33 * 60 + 17;
  setInterval(() => {
    seconds--;
    if(seconds<0) seconds=0;
    const d = Math.floor(seconds/(3600*24));
    const h = Math.floor((seconds%(3600*24))/3600);
    const m = Math.floor((seconds%3600)/60);
    const s = seconds%60;
    t.innerText = `${d.toString().padStart(2,'0')}d : ${h.toString().padStart(2,'0')}h : ${m.toString().padStart(2,'0')}m : ${s.toString().padStart(2,'0')}s`;
    if(seconds < 3600) { t.style.color = 'red'; t.style.animation = 'pulse 1s infinite'; }
  }, 1000);
}

// Interactions
function toggleWishlist(id, btn) {
  if(wishlist.includes(id)) {
    wishlist = wishlist.filter(x=>x!==id);
    btn.classList.remove('active');
  } else {
    wishlist.push(id);
    btn.classList.add('active');
  }
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateBadges();
}

function toggleCart() {
  const sb = document.getElementById('cart-sidebar');
  if(document.body.classList.contains('cart-open')) {
    document.body.classList.remove('cart-open');
  } else {
    document.body.classList.add('cart-open');
    renderCart();
  }
}

function addToCart(e, id, imgId) {
  // Animation logic
  const btn = e.target;
  const img = document.getElementById(imgId);
  const cartIcon = document.getElementById('cart-icon');
  
  if(!img || !cartIcon) return processAddToCart(id); // fallback

  const imgRect = img.getBoundingClientRect();
  const cartRect = cartIcon.getBoundingClientRect();
  
  const flyItem = document.getElementById('fly-emoji');
  flyItem.innerHTML = img.innerHTML;
  flyItem.style.display = 'block';
  flyItem.style.left = 0; flyItem.style.top = 0;

  // Set CSS Custom properties for Keyframe calculation
  flyItem.style.setProperty('--startX', `${imgRect.left}px`);
  flyItem.style.setProperty('--startY', `${imgRect.top}px`);
  flyItem.style.setProperty('--midX', `${imgRect.left + (cartRect.left - imgRect.left)/2}px`);
  flyItem.style.setProperty('--midY', `${Math.min(imgRect.top, cartRect.top) - 200}px`);
  flyItem.style.setProperty('--endX', `${cartRect.left}px`);
  flyItem.style.setProperty('--endY', `${cartRect.top}px`);
  
  // Clone fly item to restart animation smoothly
  const cl = flyItem.cloneNode(true);
  document.body.appendChild(cl);
  
  cl.addEventListener('animationend', () => {
    cl.remove();
    cartIcon.style.transform = 'scale(1.5)';
    setTimeout(()=>cartIcon.style.transform = 'none', 300);
    processAddToCart(id);
  });
}

function processAddToCart(id) {
  const p = products.find(x=>x.id===id);
  const existing = cart.find(x=>x.id===id);
  if(existing) existing.qty++;
  else cart.push({...p, qty:1});
  localStorage.setItem('cart', JSON.stringify(cart));
  updateBadges();
}

function qtyChange(id, change) {
  const item = cart.find(x=>x.id===id);
  if(item) {
    item.qty += change;
    if(item.qty <= 0) cart = cart.filter(x=>x.id!==id);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
  updateBadges();
}

function renderCart() {
  document.getElementById('cart-count').innerText = cart.reduce((acc,c)=>acc+c.qty,0);
  let total = 0;
  document.getElementById('cart-items').innerHTML = cart.map(c => {
    total += c.price * c.qty;
    return `
    <div class="cart-item">
      <div class="cart-item-img" style="background:${c.color}">${c.img}</div>
      <div class="cart-item-info">
        <h5>${c.name}</h5>
        <div style="color:var(--red);font-weight:bold;margin-bottom:5px;">₱${c.price}</div>
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="qtyChange(${c.id}, -1)">-</button>
          <span>${c.qty}</span>
          <button class="qty-btn" onclick="qtyChange(${c.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-remove" onclick="qtyChange(${c.id}, -${c.qty})">🗑️</button>
    </div>
  `}).join('');
  
  document.getElementById('cart-subtotal').innerText = `₱${total}`;
  const pb = document.getElementById('cart-progress-bar');
  const pt = document.getElementById('cart-progress-text');
  if(total >= 1500) {
    pb.style.width = '100%';
    pt.innerHTML = '🎉 You qualify for <strong>FREE SHIPPING!</strong>';
  } else {
    pb.style.width = `${(total/1500)*100}%`;
    pt.innerHTML = `Add ₱${1500-total} more for free shipping!`;
  }
}

function updateBadges() {
  document.getElementById('wish-badge').innerText = wishlist.length;
  document.getElementById('cart-badge').innerText = cart.reduce((acc,c)=>acc+c.qty,0);
}

// Particle Engine
function initParticleSystem() {
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  
  const colors = ['#E31E24', '#FFD700', '#1565C0', '#388E3C'];
  const emojis = ['🌟', '🎈', '⭐', '🎊', '🎀'];
  let particles = [];
  
  let mouse = {x: -1000, y: -1000};
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('resize', () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; });

  for(let i=0; i<60; i++) {
    particles.push(createParticle());
  }

  function createParticle() {
    return {
      x: Math.random() * width,
      y: Math.random() * height + height,
      size: Math.random() * 8 + 4,
      speed: Math.random() * 2 + 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      emoji: Math.random() > 0.8 ? emojis[Math.floor(Math.random()*emojis.length)] : null,
      rotation: Math.random() * 360,
      rspeed: (Math.random() - 0.5) * 2,
      drift: (Math.random() - 0.5) * 1
    };
  }

  function render() {
    ctx.clearRect(0,0,width,height);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      particles.forEach(p => {
        p.y -= p.speed;
        p.x += Math.sin(p.y/100) * 0.5 + p.drift;
        p.rotation += p.rspeed;

        // Mouse repel
        let dx = p.x - mouse.x;
        let dy = p.y - mouse.y;
        let dist = Math.sqrt(dx*dx + dy*dy);
        if(dist < 100) {
          p.x += dx/dist * 5;
          p.y += dy/dist * 5;
        }

        if(p.y < -50) Object.assign(p, createParticle(), {y: height + 50});

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.globalAlpha = 0.6;
        if(p.emoji) {
          ctx.font = `${p.size*3}px Arial`;
          ctx.fillText(p.emoji, -p.size, p.size);
        } else {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI*2);
          ctx.fill();
        }
        ctx.restore();
      });
    }
    requestAnimationFrame(render);
  }
  render();
}

function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.wiggle-float').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
}
