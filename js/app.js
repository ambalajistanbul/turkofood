// Turkofood Ultra-Refined E-Commerce Core Application Logic (V7 Verified)
(function() {
  'use strict';

  // Application State
  const state = {
    lang: localStorage.getItem('turkofood_lang') || 'ru',
    category: 'all',
    searchQuery: '',
    sortBy: 'default',
    cart: loadSanitizedCart(),
    selectedWeights: {}, // Map of productId -> selected weight index
    activeModalProduct: null,
    activeModalWeightIdx: 0
  };

  // DOM Elements Cache
  const elements = {
    langBtns: document.querySelectorAll('.lang-btn'),
    searchInput: document.getElementById('search-input'),
    cartToggleBtn: document.getElementById('cart-toggle-btn'),
    cartBadge: document.getElementById('cart-badge'),
    cartDrawerBackdrop: document.getElementById('cart-drawer-backdrop'),
    cartDrawer: document.getElementById('cart-drawer'),
    cartCloseBtn: document.getElementById('cart-close-btn'),
    cartItemsList: document.getElementById('cart-items-list'),
    cartSubtotalPrice: document.getElementById('cart-subtotal-price'),
    
    // Sidebar & Mobile Category Triggers
    sidebarCatList: document.getElementById('sidebar-cat-list'),
    mobileFilterBtn: document.getElementById('mobile-filter-btn'),
    categoryDrawerBackdrop: document.getElementById('category-drawer-backdrop'),
    categoryDrawer: document.getElementById('category-drawer'),
    categoryDrawerClose: document.getElementById('category-drawer-close'),

    // Grid & Sorting
    productsGrid: document.getElementById('products-grid'),
    itemsCounter: document.getElementById('items-counter'),
    sortSelect: document.getElementById('sort-select'),
    
    // Quick View / Detail Modal
    modalBackdrop: document.getElementById('modal-backdrop'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    
    // Mobile Bottom Floating Cart
    mobileBottomCart: document.getElementById('mobile-bottom-cart'),
    mobileCartBadge: document.getElementById('mobile-cart-badge'),
    mobileCartPrice: document.getElementById('mobile-cart-price'),

    // Floating Scroll To Top Button
    scrollToTopBtn: document.getElementById('scroll-to-top'),

    // WhatsApp & Telegram Checkout Buttons
    
    telegramCheckoutBtn: document.getElementById('telegram-checkout-btn')
  };

  // Category Icons & Data Map
  const CATEGORIES_INFO = [
    { id: 'all', icon: '✨', key: 'allCategories' },
    { id: 'baklava', icon: '🥮', key: 'catBaklava' },
    { id: 'rahat-lukum', icon: '🍬', key: 'catRahatLukurn' },
    { id: 'nuts', icon: '🥜', key: 'catNuts' },
    { id: 'dried-fruits', icon: '🍇', key: 'catDriedFruits' },
    { id: 'tea', icon: '🫖', key: 'catTea' },
    { id: 'coffee', icon: '☕', key: 'catCoffee' },
    { id: 'halva', icon: '🍯', key: 'catHalva' },
    { id: 'pastes-jams', icon: '🥞', key: 'catPastesJams' },
    { id: 'dragees', icon: '🍫', key: 'catDragees' },
    { id: 'spices-oils', icon: '🌶️', key: 'catSpicesOils' },
    { id: 'canned', icon: '🫙', key: 'catCanned' },
    { id: 'cookware', icon: '🫖', key: 'catCookware' }
  ];

  // Helper Translation Function
  function t(key) {
    return (TRANSLATIONS[state.lang] && TRANSLATIONS[state.lang][key]) || key;
  }

  // Weight Label Localizer
  function formatWeightLabel(rawLabel) {
    if (!rawLabel) return state.lang === 'ru' ? '1 шт' : '1 buc';
    
    if (rawLabel.includes('1 шт / 1 buc') || rawLabel.includes('1 шт') || rawLabel.includes('1 buc')) {
      return state.lang === 'ru' ? '1 шт' : '1 buc';
    }

    if (state.lang === 'ru') {
      return rawLabel.replace(/g\b/g, 'г').replace(/kg\b/g, 'кг');
    } else {
      return rawLabel.replace(/г\b/g, 'g').replace(/кг\b/g, 'kg');
    }
  }

  // Load and Sanitize Cart from localStorage (Prevents legacy NaN or undefined bugs)
  function loadSanitizedCart() {
    try {
      const raw = localStorage.getItem('turkofood_cart');
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];

      return parsed.map(item => {
        const prod = PRODUCTS_DATA.find(p => p.id === item.id);
        if (!prod) return null;

        const defaultWeightObj = (prod.weights && prod.weights[0]) ? prod.weights[0] : { label: '1 шт / 1 buc', price: prod.price || 0 };
        
        let label = item.weightLabel;
        if (!label || label === 'undefined') {
          label = defaultWeightObj.label;
        }

        let unitPrice = Number(item.unitPrice);
        if (isNaN(unitPrice) || unitPrice <= 0) {
          const matchedW = (prod.weights || []).find(w => w.label === label);
          unitPrice = matchedW ? Number(matchedW.price) : Number(defaultWeightObj.price);
        }

        let qty = Number(item.qty);
        if (isNaN(qty) || qty <= 0) qty = 1;

        
  // Delivery Zone & Modal Handler
  function setDeliveryZone(zone) {
    state.deliveryZone = zone;
    updateCartUI();
  }

  

  return {
          cartKey: `${prod.id}_${label}`,
          id: prod.id,
          weightLabel: label,
          unitPrice: unitPrice,
          qty: qty
        };
      }).filter(Boolean);
    } catch (e) {
      console.warn("Cleared corrupted cart state:", e);
      localStorage.removeItem('turkofood_cart');
      return [];
    }
  }

  // Initialize Application
  
    function init() {
    
    setupLanguage();
    renderCategorySidebar();
    setupEventListeners();
    setupScrollToTop();
    renderProducts();
    updateCartUI();
  }

  // Scroll to top button handling
  function setupScrollToTop() {
    if (!elements.scrollToTopBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        elements.scrollToTopBtn.classList.add('visible');
      } else {
        elements.scrollToTopBtn.classList.remove('visible');
      }
    });

    elements.scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Language Setup & Updates
  function setupLanguage() {
    updateTranslatableElements();
    elements.langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === state.lang);
    });
  }

  function setLanguage(newLang) {
    if (newLang === state.lang) return;
    state.lang = newLang;
    localStorage.setItem('turkofood_lang', newLang);
    setupLanguage();
    renderCategorySidebar();
    renderProducts();
    updateCartUI();
  }

  function updateTranslatableElements() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (TRANSLATIONS[state.lang][key]) {
        el.textContent = TRANSLATIONS[state.lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (TRANSLATIONS[state.lang][key]) {
        el.placeholder = TRANSLATIONS[state.lang][key];
      }
    });

    document.documentElement.lang = state.lang;
    document.title = state.lang === 'ru' 
      ? 'Turkofood - Натуральные Турецкие Продукты в Молдове | Прямые Поставки' 
      : 'Turkofood - Produse Turcești în Moldova | Import Direct';
  }

  // Category Sidebar Renderer
  function renderCategorySidebar() {
    const counts = { 'all': PRODUCTS_DATA.length };
    PRODUCTS_DATA.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });

    const html = CATEGORIES_INFO.map(cat => {
      const text = t(cat.key);
      const count = counts[cat.id] || 0;
      if (cat.id !== 'all' && count === 0) return '';
      const isActive = state.category === cat.id;

      return `
        <li>
          <button class="sidebar-cat-btn ${isActive ? 'active' : ''}" onclick="TurkofoodApp.selectCategory('${cat.id}')">
            <span>${cat.icon} ${text}</span>
            <span class="cat-item-count">${count}</span>
          </button>
        </li>
      `;
    }).join('');

    if (elements.sidebarCatList) {
      elements.sidebarCatList.innerHTML = html;
    }

    const drawerList = document.getElementById('mobile-drawer-cat-list');
    if (drawerList) {
      drawerList.innerHTML = html;
    }
  }

  function selectCategory(catId) {
    state.category = catId;
    renderCategorySidebar();
    renderProducts();
    closeCategoryDrawer();

    // Smoothly scroll to the catalog grid so user immediately sees category products
    const targetEl = document.getElementById('catalog-section') || document.getElementById('products-grid');
    if (targetEl) {
      const topOffset = -100;
      const y = targetEl.getBoundingClientRect().top + window.pageYOffset + topOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  }

  function setupEventListeners() {
    elements.langBtns.forEach(btn => {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    if (elements.searchInput) {
      elements.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.toLowerCase().trim();
        renderProducts();
      });
    }

    if (elements.sortSelect) {
      elements.sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderProducts();
      });
    }

    if (elements.mobileFilterBtn) {
      elements.mobileFilterBtn.addEventListener('click', openCategoryDrawer);
    }
    if (elements.categoryDrawerClose) {
      elements.categoryDrawerClose.addEventListener('click', closeCategoryDrawer);
    }
    if (elements.categoryDrawerBackdrop) {
      elements.categoryDrawerBackdrop.addEventListener('click', closeCategoryDrawer);
    }

    if (elements.cartToggleBtn) {
      elements.cartToggleBtn.addEventListener('click', openCartDrawer);
    }
    if (elements.mobileBottomCart) {
      elements.mobileBottomCart.addEventListener('click', openCartDrawer);
    }
    if (elements.cartCloseBtn) {
      elements.cartCloseBtn.addEventListener('click', closeCartDrawer);
    }
    if (elements.cartDrawerBackdrop) {
      elements.cartDrawerBackdrop.addEventListener('click', closeCartDrawer);
    }

    if (elements.modalCloseBtn) {
      elements.modalCloseBtn.addEventListener('click', closeModal);
    }
    if (elements.modalBackdrop) {
      elements.modalBackdrop.addEventListener('click', (e) => {
        if (e.target === elements.modalBackdrop) closeModal();
      });
    }

    

    if (elements.telegramCheckoutBtn) {
      elements.telegramCheckoutBtn.addEventListener('click', triggerTelegramOrder);
    }
  }

  function openCategoryDrawer() {
    const backdrop = document.getElementById('category-drawer-backdrop') || elements.categoryDrawerBackdrop;
    const drawer = document.getElementById('category-drawer') || elements.categoryDrawer;
    if (backdrop) backdrop.classList.add('active');
    if (drawer) drawer.classList.add('active');
  }

  function closeCategoryDrawer() {
    const backdrop = document.getElementById('category-drawer-backdrop') || elements.categoryDrawerBackdrop;
    const drawer = document.getElementById('category-drawer') || elements.categoryDrawer;
    if (backdrop) backdrop.classList.remove('active');
    if (drawer) drawer.classList.remove('active');
  }

  // Filter & Sort Logic
  function getFilteredProducts() {
    return PRODUCTS_DATA.filter(prod => {
      if (state.category !== 'all' && prod.category !== state.category) {
        return false;
      }
      if (state.searchQuery) {
        const titleRu = prod.title.ru.toLowerCase();
        const titleRo = prod.title.ro.toLowerCase();
        if (!titleRu.includes(state.searchQuery) && !titleRo.includes(state.searchQuery)) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      const pA = a.weights[0].price;
      const pB = b.weights[0].price;
      if (state.sortBy === 'price-asc') return pA - pB;
      if (state.sortBy === 'price-desc') return pB - pA;
      if (state.sortBy === 'title') {
        return a.title[state.lang].localeCompare(b.title[state.lang]);
      }
      return 0;
    });
  }


  function updateProductSchema(products) {
    let schemaScript = document.getElementById('products-jsonld');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'products-jsonld';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    const currentLang = state.lang || 'ru';
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "numberOfItems": products.length,
      "itemListElement": products.map((prod, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "Product",
          "name": prod.title[currentLang] || prod.title['ru'],
          "image": "https://turkofood.vercel.app/" + prod.image,
          "description": prod.description[currentLang] || prod.description['ru'],
          "offers": {
            "@type": "Offer",
            "price": prod.price,
            "priceCurrency": "MDL",
            "availability": "https://schema.org/InStock"
          }
        }
      }))
    };
    schemaScript.textContent = JSON.stringify(schemaData);
  }

  // Product Grid Renderer
  function renderProducts() {
    updateProductSchema(getFilteredProducts());
    if (!elements.productsGrid) return;

    const products = getFilteredProducts();

    if (elements.itemsCounter) {
      elements.itemsCounter.textContent = `${products.length} ${t('itemsFound')}`;
    }

    if (products.length === 0) {
      elements.productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: white; border-radius: 16px; border: 1px solid var(--border-light);">
          <div style="font-size: 3rem; color: var(--gold); margin-bottom: 12px;">🔍</div>
          <h3 style="font-size: 1.4rem; margin-bottom: 8px;">${t('noProductsFound')}</h3>
          <p style="color: var(--text-muted);">${state.lang === 'ru' ? 'Попробуйте изменить поисковый запрос или категорию' : 'Încearcă să schimbi termenul de căutare sau categoria'}</p>
        </div>
      `;
      return;
    }

    elements.productsGrid.innerHTML = products.map(prod => {
      const title = prod.title[state.lang];
      const badgeText = prod.badge ? t(`badge${prod.badge.charAt(0).toUpperCase() + prod.badge.slice(1)}`) : '';
      
      const selWeightIdx = state.selectedWeights[prod.id] || 0;
      const selWeightObj = prod.weights[selWeightIdx] || prod.weights[0];
      const currentPrice = selWeightObj.price;
      const currentLabel = formatWeightLabel(selWeightObj.label);

      return `
        <div class="product-card" onclick="TurkofoodApp.openQuickView('${prod.id}')">
          ${prod.badge ? `<span class="card-badge badge-${prod.badge}">${badgeText}</span>` : ''}
          
          <div class="product-image-container">
            <img src="${prod.image}" alt="${title}" loading="lazy" onerror="this.src='images/product_fallback.jpg'">
          </div>

          <div class="product-details">
            <h3 class="product-title" title="${title}">${title}</h3>
            
            ${prod.weights.length > 1 ? `
              <div class="card-weight-selector" onclick="event.stopPropagation()">
                ${prod.weights.map((w, idx) => `
                  <button class="weight-btn-chip ${idx === selWeightIdx ? 'active' : ''}" 
                          onclick="TurkofoodApp.selectCardWeight('${prod.id}', ${idx})">
                    ${formatWeightLabel(w.label)}
                  </button>
                `).join('')}
              </div>
            ` : `
              <div class="card-weight-selector">
                <span class="weight-btn-chip active">${currentLabel}</span>
              </div>
            `}

            <div class="product-footer">
              <div class="product-price-wrapper">
                <span class="product-price">${currentPrice.toFixed(2)} MDL</span><div class="b2b-pill-row"><span class="b2b-price-pill">${t('b2bPriceTag')}</span></div>
              </div>
              <button class="add-cart-btn" 
                      onclick="event.stopPropagation(); TurkofoodApp.addToCartWithWeight('${prod.id}', ${selWeightIdx})" 
                      title="${t('addToCart')}">
                🛒
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function selectCardWeight(prodId, weightIdx) {
    state.selectedWeights[prodId] = weightIdx;
    renderProducts();
  }

  function openQuickView(prodId) {
    const prod = PRODUCTS_DATA.find(p => p.id === prodId);
    if (!prod || !elements.modalBackdrop) return;

    state.activeModalProduct = prod;
    state.activeModalWeightIdx = state.selectedWeights[prodId] || 0;

    updateModalUI();
    elements.modalBackdrop.classList.add('active');
  }

  function updateModalUI() {
    const prod = state.activeModalProduct;
    if (!prod) return;

    const title = prod.title[state.lang];
    const desc = prod.description[state.lang];
    const selWeightObj = prod.weights[state.activeModalWeightIdx] || prod.weights[0];
    const formattedLabel = formatWeightLabel(selWeightObj.label);

    const imgEl = document.getElementById('modal-img');
    if (imgEl) {
      imgEl.src = prod.image;
      imgEl.onerror = function() { this.src = 'images/product_fallback.jpg'; };
    }
    
    const titleEl = document.getElementById('modal-title');
    if (titleEl) titleEl.textContent = title;
    
    const priceEl = document.getElementById('modal-price');
    if (priceEl) priceEl.textContent = `${selWeightObj.price.toFixed(2)} MDL`;
    
    const descEl = document.getElementById('modal-description') || document.getElementById('modal-desc');
    if (descEl) descEl.textContent = desc;

    const weightContainer = document.getElementById('modal-weight-chips') || document.getElementById('modal-weight-options');
    if (weightContainer) {
      if (prod.weights.length > 1) {
        weightContainer.innerHTML = prod.weights.map((w, idx) => `
          <button class="modal-weight-chip ${idx === state.activeModalWeightIdx ? 'active' : ''}" onclick="TurkofoodApp.setModalWeight(${idx})">
            ${formatWeightLabel(w.label)} (${w.price.toFixed(2)} MDL)
          </button>
        `).join('');
      } else {
        weightContainer.innerHTML = `
          <button class="modal-weight-chip active">
            ${formatWeightLabel(selWeightObj.label)} (${selWeightObj.price.toFixed(2)} MDL)
          </button>
        `;
      }
    }

    const addBtn = document.getElementById('modal-add-btn') || document.getElementById('modal-add-cart-btn');
    if (addBtn) {
      addBtn.onclick = function() {
        addToCartWithWeight(prod.id, state.activeModalWeightIdx);
        closeModal();
        openCartDrawer();
      };
    }
  }

  
  function setModalWeight(weightIdx) {
    state.activeModalWeightIdx = weightIdx;
    if (state.activeModalProduct) {
      state.selectedWeights[state.activeModalProduct.id] = weightIdx;
    }
    updateModalUI();
    renderProducts();
  }

  function closeModal() {
    if (elements.modalBackdrop) {
      elements.modalBackdrop.classList.remove('active');
    }
  }

  // Add To Cart with Strict Fallback Calculations (Prevents NaN & undefined)
  function addToCartWithWeight(prodId, weightIdx) {
    const prod = PRODUCTS_DATA.find(p => p.id === prodId);
    if (!prod) return;

    const validWeightIdx = (typeof weightIdx === 'number' && weightIdx >= 0 && weightIdx < prod.weights.length) ? weightIdx : 0;
    const weightObj = prod.weights[validWeightIdx] || prod.weights[0] || { label: '1 шт / 1 buc', price: prod.price || 0 };
    
    const weightLabel = weightObj.label || '1 шт';
    const unitPrice = (typeof weightObj.price === 'number' && !isNaN(weightObj.price)) ? weightObj.price : Number(prod.price || 0);

    const cartKey = `${prod.id}_${weightLabel}`;

    const existingItem = state.cart.find(item => item.cartKey === cartKey);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      state.cart.push({
        cartKey: cartKey,
        id: prod.id,
        weightLabel: weightLabel,
        unitPrice: unitPrice,
        qty: 1
      });
    }

    saveCart();
    updateCartUI();
    openCartDrawer();
  }

  function updateQtyByKey(cartKey, delta) {
    const item = state.cart.find(i => i.cartKey === cartKey);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      state.cart = state.cart.filter(i => i.cartKey !== cartKey);
    }

    saveCart();
    updateCartUI();
  }

  function saveCart() {
    localStorage.setItem('turkofood_cart', JSON.stringify(state.cart));
  }

  function openCartDrawer() {
    if (elements.cartDrawerBackdrop && elements.cartDrawer) {
      elements.cartDrawerBackdrop.classList.add('active');
      elements.cartDrawer.classList.add('active');
    }
  }

  function closeCartDrawer() {
    if (elements.cartDrawerBackdrop && elements.cartDrawer) {
      elements.cartDrawerBackdrop.classList.remove('active');
      elements.cartDrawer.classList.remove('active');
    }
  }

  // Update Cart UI with Bulletproof Numeric Checks & Localization
  function updateCartUI() {
    const totalCount = state.cart.reduce((sum, item) => sum + (Number(item.qty) || 1), 0);

    if (elements.cartBadge) elements.cartBadge.textContent = totalCount;
    if (elements.mobileCartBadge) elements.mobileCartBadge.textContent = totalCount;
    const bottomBadge = document.getElementById('mobile-bottom-nav-badge');
    if (bottomBadge) bottomBadge.textContent = totalCount;

    let subtotal = 0;
    state.cart.forEach(item => {
      const uPrice = Number(item.unitPrice) || 0;
      const q = Number(item.qty) || 1;
      subtotal += uPrice * q;
    });

    const subtotalFormatted = `${subtotal.toFixed(2)} MDL`;

    if (elements.cartSubtotalPrice) {
      elements.cartSubtotalPrice.textContent = subtotalFormatted;
    }
    if (elements.mobileCartPrice) {
      elements.mobileCartPrice.textContent = subtotalFormatted;
    }

    if (!elements.cartItemsList) return;

    if (state.cart.length === 0) {
      elements.cartItemsList.innerHTML = `
        <div style="text-align: center; padding: 50px 0; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 12px;">🛍️</div>
          <p style="font-weight: 700; font-size: 1.1rem;">${t('emptyCart')}</p>
        </div>
      `;
      return;
    }

    elements.cartItemsList.innerHTML = state.cart.map(cartItem => {
      const prod = PRODUCTS_DATA.find(p => p.id === cartItem.id);
      if (!prod) return '';

      const uPrice = Number(cartItem.unitPrice) || Number(prod.price) || 0;
      const q = Number(cartItem.qty) || 1;
      const itemTotal = uPrice * q;
      const title = prod.title[state.lang];
      const weightLabel = formatWeightLabel(cartItem.weightLabel);

      return `
        <div class="cart-item">
          <img src="${prod.image}" alt="${title}" class="cart-item-img" onerror="this.src='images/product_fallback.jpg'">
          <div class="cart-item-info">
            <h4 class="cart-item-title">${title}</h4>
            <div class="cart-item-weight">${t('selectedWeight')} <strong>${weightLabel}</strong></div>
            <div class="cart-item-price">${uPrice.toFixed(2)} MDL × ${q} = ${itemTotal.toFixed(2)} MDL</div>
          </div>
          <div class="cart-qty-controls">
            <button class="qty-btn" onclick="TurkofoodApp.updateQtyByKey('${cartItem.cartKey}', -1)">-</button>
            <span style="font-size: 0.85rem; font-weight: 800;">${q}</span>
            <button class="qty-btn" onclick="TurkofoodApp.updateQtyByKey('${cartItem.cartKey}', 1)">+</button>
          </div>
        </div>
      `;
    }).join('');
  }

  // Format Order Message Text with 100% Guaranteed Non-NaN Numbers & Perfect Bilingual Formatting
      function buildFormattedOrderText() {
    const isRu = state.lang === 'ru';
    
    let text = isRu 
      ? `🏢 ЗАПРОС ПЕРСОНАЛЬНОГО ОПТОВОГО ПРАЙС-ЛИСТА (B2B OFFER REQUEST)\n`
      : `🏢 SOLICITARE OFERTĂ EN-GROS PERSONALIZATĂ (B2B OFFER REQUEST)\n`;
      
    text += isRu
      ? `Здравствуйте! Я представитель бизнеса (Кафе / Ресторан / Бар / Магазин / АЗС / Отель).
Прошу рассчитать индивидуальную оптовую стоимость для выбранного списка товаров:

`
      : `Bună ziua! Sunt reprezentantul unei afaceri (Cafenea / Restaurant / Bar / Magazin / PECO / Hotel).
Vă rog să calculați prețul en-gros personalizat pentru lista selectată de produse:

`;

    text += isRu ? `📋 Список товаров из каталога:\n` : `📋 Lista de produse din catalog:\n`;

    let subtotal = 0;

    state.cart.forEach((item, index) => {
      const prodId = item.id || item.productId;
      const prod = PRODUCTS_DATA.find(p => p.id === prodId);
      if (!prod) return;
      
      const title = isRu ? prod.title : (prod.title_ro || prod.title);
      const q = Number(item.qty || item.quantity) || 1;
      const uPrice = Number(item.unitPrice) || Number(prod.price) || 0;
      const itemPrice = uPrice * q;
      subtotal += itemPrice;

      const label = formatWeightLabel(item.weightLabel || prod.weight);

      text += `${index + 1}. ${title} (${label}) — ${q} шт x ${uPrice.toFixed(2)} MDL = ${itemPrice.toFixed(2)} MDL\n`;
    });

    text += isRu 
      ? `\n💰 Ориентировочная сумма по розничному прайсу: ${subtotal.toFixed(2)} MDL\n`
      : `\n💰 Suma orientativă conform prețului cu amănuntul: ${subtotal.toFixed(2)} MDL\n`;

    text += isRu
      ? `\n📦 Дополнительный запрос на импорт редких товаров из Турции:
(Если вам нужен продукт, которого нет на сайте, напишите его название ниже)

⭐ Ожидаю индивидуальное коммерческое предложение с лучшими ценами!`
      : `\n📦 Solicitare suplimentară de import produse la comandă din Turcia:
(Dacă aveți nevoie de un produs care nu se află pe site, scrieți denumirea mai jos)

⭐ Aștept oferta comercială personalizată cu cele mai bune prețuri!`;

    return text;
  }

  function triggerTelegramOrder() {
    if (state.cart.length === 0) {
      alert(t('emptyCart'));
      return;
    }
    const username = 'akilion';
    const text = buildFormattedOrderText();
    const url = `https://t.me/${username}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }


  // Delivery Zone & Modal Handler
  function setDeliveryZone(zone) {
    state.deliveryZone = zone;
    updateCartUI();
  }

  

  // Global API Export
    function focusSearch() {
    const input = document.getElementById('search-input');
    if (input) {
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => input.focus(), 300);
    }
  }

  window.TurkofoodApp = {
    init,
    setLanguage,
    selectCategory,
    openCategoryDrawer,
    closeCategoryDrawer,
    selectCardWeight,
    setModalWeight,
    openQuickView,
    closeModal,
    addToCartWithWeight,
    updateQtyByKey,
    openCartDrawer,
    focusSearch,
    closeCartDrawer,
    
    triggerTelegramOrder,
    setDeliveryZone
  };

  document.addEventListener('DOMContentLoaded', init);
})();
