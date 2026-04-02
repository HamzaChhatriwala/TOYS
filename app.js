// Real category images from local folders
const categoryImages = {
  "Assorted Toys": [
    "assorted toys/PHOTO-2026-03-27-12-04-45.jpg",
    "assorted toys/PHOTO-2026-03-27-12-05-07.jpg",
    "assorted toys/PHOTO-2026-03-28-11-32-32.jpg",
    "assorted toys/PHOTO-2026-03-28-11-55-58.jpg",
    "assorted toys/PHOTO-2026-03-28-17-56-37.jpg"
  ],
  "Die Cast Toys": [
    "die cast/PHOTO-2026-03-14-17-13-59 2.jpg",
    "die cast/PHOTO-2026-03-14-17-13-59.jpg",
    "die cast/PHOTO-2026-03-14-17-14-00 2.jpg",
    "die cast/PHOTO-2026-03-14-17-14-00.jpg",
    "die cast/PHOTO-2026-03-14-17-14-12.jpg"
  ],
  "Guns": [
    "guns copy/PHOTO-2026-03-30-11-30-39.jpg",
    "guns copy/PHOTO-2026-03-30-13-02-25.jpg",
    "guns copy/PHOTO-2026-03-30-13-02-46 2.jpg",
    "guns copy/PHOTO-2026-03-30-13-02-46 3.jpg",
    "guns copy/PHOTO-2026-03-30-13-02-46.jpg"
  ],
  "RC Cars": [
    "rc cars/PHOTO-2026-03-27-12-02-57.jpg",
    "rc cars/PHOTO-2026-03-27-12-03-05.jpg",
    "rc cars/PHOTO-2026-03-27-12-03-14.jpg",
    "rc cars/PHOTO-2026-03-27-12-03-24.jpg",
    "rc cars/PHOTO-2026-03-27-12-03-42.jpg"
  ],
  "Trains and Track Sets": [
    "trains and track sets/PHOTO-2026-03-26-12-11-32.jpg",
    "trains and track sets/PHOTO-2026-03-26-12-11-41.jpg",
    "trains and track sets/PHOTO-2026-03-27-12-04-57.jpg",
    "trains and track sets/PHOTO-2026-03-27-12-05-05.jpg",
    "trains and track sets/PHOTO-2026-03-27-12-05-07.jpg"
  ]
};

const products = [
  // Assorted Toys (5 real photos)
  {id: 1, name: "Assorted Toy Set 1", brand: "Toy Kingdom", price: 599, oldPrice: 799, rating: 4.7, reviews: 134, imgPath: "assorted toys/PHOTO-2026-03-27-12-04-45.jpg", img: "🧸", color: "#FFCDD2", cat: "Assorted Toys", isNew: true, isSale: true, age: "3-5"},
  {id: 2, name: "Assorted Toy Set 2", brand: "Toy Kingdom", price: 699, oldPrice: 899, rating: 4.8, reviews: 98, imgPath: "assorted toys/PHOTO-2026-03-27-12-05-07.jpg", img: "🧸", color: "#FFCDD2", cat: "Assorted Toys", isNew: false, isSale: true, age: "6-8"},
  {id: 3, name: "Assorted Toy Set 3", brand: "Toy Kingdom", price: 549, oldPrice: 699, rating: 4.6, reviews: 212, imgPath: "assorted toys/PHOTO-2026-03-28-11-32-32.jpg", img: "🧸", color: "#FFCDD2", cat: "Assorted Toys", isNew: false, isSale: false, age: "3-5"},
  {id: 4, name: "Assorted Toy Set 4", brand: "Toy Kingdom", price: 799, oldPrice: 999, rating: 4.9, reviews: 67, imgPath: "assorted toys/PHOTO-2026-03-28-11-55-58.jpg", img: "🧸", color: "#FFCDD2", cat: "Assorted Toys", isNew: true, isSale: false, age: "6-8"},
  {id: 5, name: "Assorted Toy Set 5", brand: "Toy Kingdom", price: 349, oldPrice: 449, rating: 4.5, reviews: 189, imgPath: "assorted toys/PHOTO-2026-03-28-17-56-37.jpg", img: "🧸", color: "#FFCDD2", cat: "Assorted Toys", isNew: false, isSale: true, age: "0-2"},

  // Die Cast Toys (5 real photos)
  {id: 6, name: "Die Cast Car 1", brand: "Metal Motors", price: 299, oldPrice: 399, rating: 4.8, reviews: 241, imgPath: "die cast/PHOTO-2026-03-14-17-13-59 2.jpg", img: "🚗", color: "#FFE0B2", cat: "Die Cast Toys", isNew: false, isSale: true, age: "3-5"},
  {id: 7, name: "Die Cast Car 2", brand: "Metal Motors", price: 349, oldPrice: 449, rating: 4.7, reviews: 178, imgPath: "die cast/PHOTO-2026-03-14-17-13-59.jpg", img: "🚗", color: "#FFE0B2", cat: "Die Cast Toys", isNew: true, isSale: false, age: "6-8"},
  {id: 8, name: "Die Cast Car 3", brand: "Metal Motors", price: 249, oldPrice: 329, rating: 4.6, reviews: 312, imgPath: "die cast/PHOTO-2026-03-14-17-14-00 2.jpg", img: "🚗", color: "#FFE0B2", cat: "Die Cast Toys", isNew: false, isSale: true, age: "6-8"},
  {id: 9, name: "Die Cast Car 4", brand: "Metal Motors", price: 399, oldPrice: 499, rating: 4.9, reviews: 89, imgPath: "die cast/PHOTO-2026-03-14-17-14-00.jpg", img: "🚗", color: "#FFE0B2", cat: "Die Cast Toys", isNew: true, isSale: true, age: "9-12"},
  {id: 10, name: "Die Cast Car 5", brand: "Metal Motors", price: 279, oldPrice: 349, rating: 4.7, reviews: 155, imgPath: "die cast/PHOTO-2026-03-14-17-14-12.jpg", img: "🚗", color: "#FFE0B2", cat: "Die Cast Toys", isNew: false, isSale: false, age: "3-5"},

  // Guns (5 real photos)
  {id: 11, name: "Toy Gun Set 1", brand: "PlayBlast", price: 499, oldPrice: 649, rating: 4.5, reviews: 76, imgPath: "guns copy/PHOTO-2026-03-30-11-30-39.jpg", img: "🎯", color: "#B2EBF2", cat: "Guns", isNew: false, isSale: true, age: "6-8"},
  {id: 12, name: "Toy Gun Set 2", brand: "PlayBlast", price: 599, oldPrice: 749, rating: 4.6, reviews: 123, imgPath: "guns copy/PHOTO-2026-03-30-13-02-25.jpg", img: "🎯", color: "#B2EBF2", cat: "Guns", isNew: true, isSale: false, age: "9-12"},
  {id: 13, name: "Toy Gun Set 3", brand: "PlayBlast", price: 399, oldPrice: 499, rating: 4.4, reviews: 98, imgPath: "guns copy/PHOTO-2026-03-30-13-02-46 2.jpg", img: "🎯", color: "#B2EBF2", cat: "Guns", isNew: false, isSale: true, age: "6-8"},
  {id: 14, name: "Toy Gun Set 4", brand: "PlayBlast", price: 449, oldPrice: 599, rating: 4.7, reviews: 54, imgPath: "guns copy/PHOTO-2026-03-30-13-02-46 3.jpg", img: "🎯", color: "#B2EBF2", cat: "Guns", isNew: false, isSale: true, age: "9-12"},
  {id: 15, name: "Toy Gun Set 5", brand: "PlayBlast", price: 349, oldPrice: 449, rating: 4.3, reviews: 87, imgPath: "guns copy/PHOTO-2026-03-30-13-02-46.jpg", img: "🎯", color: "#B2EBF2", cat: "Guns", isNew: true, isSale: false, age: "6-8"},

  // RC Cars (5 real photos)
  {id: 16, name: "RC Car 1", brand: "SpeedRacer", price: 899, oldPrice: 1199, rating: 4.8, reviews: 201, imgPath: "rc cars/PHOTO-2026-03-27-12-02-57.jpg", img: "🏎️", color: "#E0F7FA", cat: "RC Cars", isNew: true, isSale: true, age: "6-8"},
  {id: 17, name: "RC Car 2", brand: "SpeedRacer", price: 999, oldPrice: 1299, rating: 4.9, reviews: 145, imgPath: "rc cars/PHOTO-2026-03-27-12-03-05.jpg", img: "🏎️", color: "#E0F7FA", cat: "RC Cars", isNew: false, isSale: false, age: "9-12"},
  {id: 18, name: "RC Car 3", brand: "SpeedRacer", price: 749, oldPrice: 999, rating: 4.7, reviews: 278, imgPath: "rc cars/PHOTO-2026-03-27-12-03-14.jpg", img: "🏎️", color: "#E0F7FA", cat: "RC Cars", isNew: false, isSale: true, age: "6-8"},
  {id: 19, name: "RC Car 4", brand: "SpeedRacer", price: 1199, oldPrice: 1499, rating: 4.8, reviews: 93, imgPath: "rc cars/PHOTO-2026-03-27-12-03-24.jpg", img: "🏎️", color: "#E0F7FA", cat: "RC Cars", isNew: true, isSale: false, age: "9-12"},
  {id: 20, name: "RC Car 5", brand: "SpeedRacer", price: 849, oldPrice: 1099, rating: 4.6, reviews: 167, imgPath: "rc cars/PHOTO-2026-03-27-12-03-42.jpg", img: "🏎️", color: "#E0F7FA", cat: "RC Cars", isNew: false, isSale: true, age: "6-8"},

  // Trains and Track Sets (5 real photos)
  {id: 21, name: "Train Set 1", brand: "TrackMaster", price: 799, oldPrice: 999, rating: 4.7, reviews: 312, imgPath: "trains and track sets/PHOTO-2026-03-26-12-11-32.jpg", img: "🚂", color: "#FFF9C4", cat: "Trains and Track Sets", isNew: false, isSale: true, age: "3-5"},
  {id: 22, name: "Train Set 2", brand: "TrackMaster", price: 549, oldPrice: 699, rating: 4.5, reviews: 189, imgPath: "trains and track sets/PHOTO-2026-03-26-12-11-41.jpg", img: "🚂", color: "#FFF9C4", cat: "Trains and Track Sets", isNew: true, isSale: false, age: "0-2"},
  {id: 23, name: "Train Set 3", brand: "TrackMaster", price: 999, oldPrice: 1299, rating: 4.9, reviews: 76, imgPath: "trains and track sets/PHOTO-2026-03-27-12-04-57.jpg", img: "🚂", color: "#FFF9C4", cat: "Trains and Track Sets", isNew: false, isSale: true, age: "3-5"},
  {id: 24, name: "Train Set 4", brand: "TrackMaster", price: 649, oldPrice: 849, rating: 4.6, reviews: 241, imgPath: "trains and track sets/PHOTO-2026-03-27-12-05-05.jpg", img: "🚂", color: "#FFF9C4", cat: "Trains and Track Sets", isNew: true, isSale: true, age: "3-5"},
  {id: 25, name: "Train Set 5", brand: "TrackMaster", price: 449, oldPrice: 599, rating: 4.8, reviews: 134, imgPath: "trains and track sets/PHOTO-2026-03-27-12-05-07.jpg", img: "🚂", color: "#FFF9C4", cat: "Trains and Track Sets", isNew: false, isSale: false, age: "0-2"},

  // Others (emoji only)
  {id: 26, name: "Barbie Dreamhouse 2025", brand: "Barbie", price: 2999, oldPrice: 3499, rating: 4.9, reviews: 189, img: "👸", color: "#F8BBD0", cat: "Role Play Toys", isNew: true, isSale: true, age: "3-5"},
  {id: 27, name: "Play-Doh Mega Pack", brand: "Hasbro", price: 449, oldPrice: 549, rating: 4.8, reviews: 421, img: "🎨", color: "#D1C4E9", cat: "Box Items", isNew: false, isSale: true, age: "3-5"},
  {id: 28, name: "Transformers Optimus", brand: "Hasbro", price: 1799, oldPrice: 2199, rating: 4.9, reviews: 98, img: "🤖", color: "#C5CAE9", cat: "Battery Operated Items", isNew: true, isSale: true, age: "6-8"},
  {id: 29, name: "Barbie Fashion Doll", brand: "Mattel", price: 599, oldPrice: 799, rating: 4.8, reviews: 312, img: "🪆", color: "#FCE4EC", cat: "Dolls", isNew: true, isSale: true, age: "3-5"},
  {id: 30, name: "Magical Princess Wand", brand: "Disney", price: 299, oldPrice: 399, rating: 4.6, reviews: 120, img: "🪄", color: "#Fce4ec", cat: "Role Play Toys", isNew: false, isSale: false, age: "3-5"}
];

const categories = [
  {name: "Assorted Toys", icon: "🧸", count: 234, color: "linear-gradient(135deg, #FF5252, #D50000)"},
  {name: "Battery Operated Items", icon: "🔋", count: 198, color: "linear-gradient(135deg, #FF9100, #E65100)"},
  {name: "Box Items", icon: "📦", count: 156, color: "linear-gradient(135deg, #FFEA00, #FFAB00)"},
  {name: "Die Cast Toys", icon: "🚗", count: 143, color: "linear-gradient(135deg, #40C4FF, #0091EA)"},
  {name: "Dolls", icon: "🪆", count: 121, color: "linear-gradient(135deg, #FF80AB, #C51162)"},
  {name: "Guns", icon: "🎯", count: 112, color: "linear-gradient(135deg, #69F0AE, #00C853)"},
  {name: "RC Cars", icon: "🏎️", count: 95, color: "linear-gradient(135deg, #F44336, #B71C1C)"},
  {name: "Role Play Toys", icon: "🎭", count: 89, color: "linear-gradient(135deg, #E040FB, #AA00FF)"},
  {name: "Trains and Track Sets", icon: "🚂", count: 67, color: "linear-gradient(135deg, #FF6D00, #BF360C)"}
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
// Support both file:// (local) and http:// (server) URLs
let currentRoute = (window.location.protocol === 'file:' || window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) ? 'home' : window.location.pathname.substring(1).split('?')[0] || 'home';

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
  let newRoute = (path === '/' || path === '' || path.endsWith('index.html')) ? 'home' : path.substring(1).split('?')[0];
  if(!document.getElementById(`page-${newRoute}`)) newRoute = 'home';
  if(newRoute === currentRoute) return;

  // pushState fails silently on file:// URLs — wrap in try/catch
  if(!isPopState) {
    try { window.history.pushState({}, '', path); } catch(e) {}
  }

  const currentEl = document.getElementById(`page-${currentRoute}`);
  const newEl = document.getElementById(`page-${newRoute}`);

  // Transition classes
  currentEl.classList.add('page-exit');
  newEl.classList.add('page-enter');
  newEl.style.display = 'block';

  setTimeout(() => {
    // Remove active/exit from old page but KEEP the 'page' class
    currentEl.classList.remove('active', 'page-exit');
    currentEl.style.display = 'none';
    newEl.classList.remove('page-enter');
    newEl.classList.add('active');
    currentRoute = newRoute;
    window.scrollTo(0, 0);
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
  const imgHtml = p.imgPath
    ? `<img src="${encodeURIPath(p.imgPath)}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:15px;transition:transform 0.4s ease;" onmouseover="this.style.transform='scale(1.08)'" onmouseout="this.style.transform='scale(1)'" onerror="this.parentElement.innerHTML='${p.img}';this.parentElement.style.fontSize='6rem';">`
    : p.img;
  return `
    <div class="product-card floating" style="animation-delay: ${delay}s">
      ${p.isNew ? '<div class="card-badge badge-new">NEW!</div>' : ''}
      ${p.isSale && !p.isNew ? '<div class="card-badge badge-sale">SALE</div>' : ''}
      <button class="wishlist-btn ${isWish?'active':''}" onclick="toggleWishlist(${p.id}, this)">❤️</button>
      <div class="card-img ${p.imgPath ? 'card-img-photo' : ''}" style="background: ${p.color}; overflow:hidden; padding:${p.imgPath?'0':''};" id="img-p${p.id}">${imgHtml}</div>
      <div class="product-brand">${p.brand}</div>
      <h3 class="product-name">${p.name}</h3>
      <div class="stars">${stars} <span style="color:#aaa;font-size:0.8rem">(${p.reviews})</span></div>
      <div class="price-row">
        ${p.oldPrice > p.price ? `<span class="price-old">₹${p.oldPrice}</span>` : ''}
        <span class="price-current">₹${p.price}</span>
      </div>
      <button class="btn btn-red add-to-cart" onclick="addToCart(event, ${p.id}, 'img-p${p.id}')">ADD TO CART</button>
    </div>
  `;
}

function encodeURIPath(path) {
  return path.split('/').map(segment => encodeURIComponent(segment)).join('/');
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
  document.getElementById('price-val').innerText = `₹${maxPrice}`;
  
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
  document.getElementById('cat-grid').innerHTML = categories.map((c,i) => {
    const imgs = categoryImages[c.name];
    if (imgs && imgs.length > 0) {
      const mosaicImgs = imgs.slice(0,4).map((src, idx) => `<img src="${encodeURIPath(src)}" alt="${c.name}" style="width:100%;height:${idx===0?'130':'85'}px;object-fit:cover;border-radius:8px;transition:transform 0.3s;" onerror="this.style.display='none';">`).join('');
      return `
        <div class="big-cat-card floating" style="animation-delay:${i*0.15}s;padding:0;overflow:hidden;cursor:pointer;position:relative;" onclick="showCategoryGallery('${c.name}')">
          <div class="big-cat-bg" style="background:${c.color};opacity:0.12;"></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;padding:12px;position:relative;z-index:2;">${mosaicImgs}</div>
          <div style="padding:20px 25px 25px;position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to top,rgba(0,0,0,0.8) 0%,transparent 100%);color:white;z-index:3;">
            <div style="font-size:2rem;margin-bottom:4px;">${c.icon}</div>
            <h3 style="font-size:1.8rem;margin:0 0 4px;">${c.name}</h3>
            <p style="margin:0;opacity:0.85;font-size:0.9rem;">Tap to explore ›</p>
          </div>
        </div>
      `;
    }
    return `
      <div class="big-cat-card floating" style="animation-delay:${i*0.15}s" onclick="routeTo('/shop')">
        <div class="big-cat-bg" style="background:${c.color}"></div>
        <div class="big-cat-content"><h3>${c.name}</h3><p>${c.count} products</p></div>
        <div class="big-cat-img">${c.icon}</div>
      </div>
    `;
  }).join('');
}

function showCategoryGallery(catName) {
  const imgs = categoryImages[catName];
  if (!imgs) { routeTo('/shop'); return; }
  const catProducts = products.filter(p => p.cat === catName);
  const cat = categories.find(c => c.name === catName);
  const overlay = document.createElement('div');
  overlay.id = 'gallery-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.93);z-index:5000;overflow-y:auto;animation:dropIn 0.4s cubic-bezier(0.175,0.885,0.32,1.275);';
  overlay.innerHTML = `
    <div style="max-width:1200px;margin:0 auto;padding:30px 20px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:30px;">
        <div style="display:flex;align-items:center;gap:15px;">
          <span style="font-size:3rem;">${cat ? cat.icon : '📦'}</span>
          <div>
            <h2 style="color:white;font-family:'Fredoka One';font-size:2.5rem;margin:0;">${catName}</h2>
            <p style="color:rgba(255,255,255,0.6);margin:0;">${catProducts.length} products</p>
          </div>
        </div>
        <button onclick="document.getElementById('gallery-overlay').remove()" style="background:white;border:none;border-radius:50%;width:48px;height:48px;font-size:1.3rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform 0.2s;" onmouseover="this.style.transform='rotate(90deg)scale(1.1)'" onmouseout="this.style.transform=''">✕</button>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px;">
        ${catProducts.map(p => `
          <div style="background:white;border-radius:20px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.3);transition:transform 0.3s,box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-8px)';this.style.boxShadow='0 20px 50px rgba(0,0,0,0.4)'" onmouseout="this.style.transform='';this.style.boxShadow='0 8px 30px rgba(0,0,0,0.3)'">
            <div style="height:200px;overflow:hidden;background:${p.color};display:flex;align-items:center;justify-content:center;">
              <img src="${encodeURIPath(p.imgPath)}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;" onerror="this.parentElement.innerHTML='<div style=display:flex;align-items:center;justify-content:center;height:200px;font-size:5rem>${p.img}</div>'">
            </div>
            <div style="padding:18px;">
              ${p.isNew ? '<span style="background:#FFD700;color:#E31E24;font-size:0.75rem;font-weight:bold;padding:3px 10px;border-radius:20px;font-family:Fredoka One;display:inline-block;margin-bottom:6px;">NEW!</span>' : ''}
              ${p.isSale && !p.isNew ? '<span style="background:#E31E24;color:white;font-size:0.75rem;font-weight:bold;padding:3px 10px;border-radius:20px;display:inline-block;margin-bottom:6px;">SALE</span>' : ''}
              <h3 style="font-family:Nunito;font-weight:800;font-size:1rem;color:#1A237E;margin:4px 0;">${p.name}</h3>
              <div style="color:#888;font-size:0.8rem;margin-bottom:10px;">${p.brand}</div>
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <div>${p.oldPrice > p.price ? '<span style=text-decoration:line-through;color:#999;font-size:0.85rem>₹'+p.oldPrice+'</span>' : ''} <span style="color:#E31E24;font-weight:bold;font-size:1.2rem;">₹${p.price}</span></div>
                <button class="btn btn-red" style="padding:8px 16px;font-size:0.85rem;" onclick="processAddToCart(${p.id});this.textContent='✓';setTimeout(()=>this.textContent='Add',1500)">Add</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      <div style="text-align:center;margin-top:40px;padding-bottom:40px;">
        <button class="btn btn-red" onclick="document.getElementById('gallery-overlay').remove();routeTo('/shop')" style="font-size:1.1rem;padding:15px 40px;">Shop All Products →</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => { if(e.target === overlay) overlay.remove(); });
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
        <div style="color:var(--red);font-weight:bold;margin-bottom:5px;">₹${c.price}</div>
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="qtyChange(${c.id}, -1)">-</button>
          <span>${c.qty}</span>
          <button class="qty-btn" onclick="qtyChange(${c.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-remove" onclick="qtyChange(${c.id}, -${c.qty})">🗑️</button>
    </div>
  `}).join('');
  
  document.getElementById('cart-subtotal').innerText = `₹${total}`;
  const pb = document.getElementById('cart-progress-bar');
  const pt = document.getElementById('cart-progress-text');
  if(total >= 1500) {
    pb.style.width = '100%';
    pt.innerHTML = '🎉 You qualify for <strong>FREE SHIPPING!</strong>';
  } else {
    pb.style.width = `${(total/1500)*100}%`;
    pt.innerHTML = `Add ₹${1500-total} more for free shipping!`;
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
