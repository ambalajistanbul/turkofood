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
    whatsappCheckoutBtn: document.getElementById('whatsapp-checkout-btn'),
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

  function openDeliveryModal() {
    const modal = document.getElementById('delivery-modal');
    const contentEl = document.getElementById('delivery-modal-body-content');
    if (!modal || !contentEl) return;

    const lang = state.lang || 'ru';
    if (lang === 'ro') {
      contentEl.innerHTML = `
        <div class="delivery-legal-text">
          <p><strong>Livrare în municipiul Chișinău:</strong> Se efectuează în termen de 3 ore după confirmarea comenzii de către operatorii noștri. Livrarea se face între orele 09:00 - 17:00 și este <strong>GRATUITĂ la comenzi de peste 700 MDL</strong>. La comenzi mai mici, costul livrării este de 80 MDL (suma va fi inclusă în totalul comenzii).</p>
          <p><strong>Livrare pe teritoriul Republicii Moldova:</strong> Se efectuează în termen de 8-12 ore după confirmarea comenzii. Livrarea se face între orele 09:00 - 16:00 și este <strong>GRATUITĂ la comenzi de peste 1200 MDL</strong>. La comenzi mai mici, costul livrării este de 120 MDL (suma va fi inclusă în totalul comenzii).</p>
          <p>⚠️ <em>În zilele de duminică și în sărbătorile legale nu se efectuează livrări.</em></p>
          <p>ℹ️ Termenul de livrare poate fi prelungit în cazuri excepționale (condiții meteo nefavorabile, sărbători legale, probleme tehnice neprevăzute). În astfel de situații vă vom notifica în prealabil.</p>
          <p>📍 Puteți alege orice adresă de livrare — acasă, la birou sau altă adresă, fără taxe suplimentare. În cadrul unei comenzi este permisă livrarea la o singură adresă.</p>
          <p>🔍 <strong>La primirea comenzii:</strong> Vă rugăm să verificați în prezența curierului integritatea ambalajului și prezența bonului fiscal. Reclamațiile ulterioare nu vor fi acceptate.</p>
        </div>
      `;
    } else {
      contentEl.innerHTML = `
        <div class="delivery-legal-text">
          <p><strong>Доставка по муниципию Кишинёв:</strong> Осуществляется в течение 3 часов после подтверждения заказа нашими операторами. Доставка производится с 9:00 до 17:00 и является <strong>БЕСПЛАТНОЙ при заказе от 700 MDL</strong>. При заказах на меньшую сумму стоимость доставки составляет 80 MDL (данная сумма будет включена в итоговую сумму заказа).</p>
          <p><strong>Доставка по территории Республики Молдова:</strong> Осуществляется в течение 8-12 часов после подтверждения заказа нашими операторами. Доставка производится с 9:00 до 16:00 и является <strong>БЕСПЛАТНОЙ при заказе от 1200 MDL</strong>. При заказах на меньшую сумму стоимость доставки составляет 120 MDL (данная сумма будет включена в итоговую сумму заказа).</p>
          <p>⚠️ <em>В воскресные дни и в дни государственных праздников доставка не осуществляется.</em></p>
          <p>ℹ️ Срок доставки может быть увеличен в отдельных случаях (неблагоприятные погодные условия, государственные праздники, непредвиденные технические проблемы и т.д.). В таких ситуациях мы предварительно уведомим вас.</p>
          <p>📍 Вы можете выбрать любой адрес доставки — домой, в офис или любой другой адрес, без дополнительной оплаты. В рамках одного заказа допускается доставка только по одному адресу.</p>
          <p>🔍 <strong>При получении заказа:</strong> Пожалуйста, проверьте в присутствии курьера целостность упаковки и наличие кассового чека. Последующие претензии по данным вопросам не принимаются.</p>
        </div>
      `;
    }
    modal.classList.add('active');
  }

  function closeDeliveryModal() {
    const modal = document.getElementById('delivery-modal');
    if (modal) modal.classList.remove('active');
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
  }

  // Event Listeners Setup
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

    if (elements.whatsappCheckoutBtn) {
      elements.whatsappCheckoutBtn.addEventListener('click', triggerWhatsAppOrder);
    }

    if (elements.telegramCheckoutBtn) {
      elements.telegramCheckoutBtn.addEventListener('click', triggerTelegramOrder);
    }
  }

  function openCategoryDrawer() {
    if (elements.categoryDrawerBackdrop && elements.categoryDrawer) {
      elements.categoryDrawerBackdrop.classList.add('active');
      elements.categoryDrawer.classList.add('active');
    }
  }

  function closeCategoryDrawer() {
    if (elements.categoryDrawerBackdrop && elements.categoryDrawer) {
      elements.categoryDrawerBackdrop.classList.remove('active');
      elements.categoryDrawer.classList.remove('active');
    }
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
                <span class="product-price">${currentPrice.toFixed(2)} MDL</span>
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

    document.getElementById('modal-img').src = prod.image;
    document.getElementById('modal-img').onerror = function() { this.src = 'images/product_fallback.jpg'; };
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-price').textContent = `${selWeightObj.price.toFixed(2)} MDL`;
    document.getElementById('modal-desc').textContent = desc;

    const weightContainer = document.getElementById('modal-weight-options');
    if (weightContainer) {
      if (prod.weights.length > 1) {
        weightContainer.innerHTML = prod.weights.map((w, idx) => `
          <button class="modal-weight-chip ${idx === state.activeModalWeightIdx ? 'active' : ''}" 
                  onclick="TurkofoodApp.setModalWeight(${idx})">
            ${formatWeightLabel(w.label)} (${w.price.toFixed(2)} MDL)
          </button>
        `).join('');
      } else {
        weightContainer.innerHTML = `<span class="modal-weight-chip active">${formattedLabel} (${selWeightObj.price.toFixed(2)} MDL)</span>`;
      }
    }

    document.getElementById('modal-add-cart-btn').onclick = function() {
      addToCartWithWeight(prod.id, state.activeModalWeightIdx);
      closeModal();
    };
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
    let text = state.lang === 'ru'
      ? `Здравствуйте! Я хочу оформить заказ в магазине Turkofood (turkofood.vercel.app):\n\n`
      : `Bună ziua! Doresc să plasez o comandă pe Turkofood (turkofood.vercel.app):\n\n`;

    let total = 0;
    state.cart.forEach((item, i) => {
      const prod = PRODUCTS_DATA.find(p => p.id === item.id);
      if (prod) {
        const uPrice = Number(item.unitPrice) || Number(prod.price) || 0;
        const q = Number(item.qty) || 1;
        const itemSum = uPrice * q;
        total += itemSum;
        const weightLabel = formatWeightLabel(item.weightLabel);
        const unitSuffix = state.lang === 'ru' ? 'шт.' : 'buc.';

        text += `${i + 1}. ${prod.title[state.lang]} (${weightLabel}) — ${q} ${unitSuffix} (${itemSum.toFixed(2)} MDL)\n`;
      }
    });

    const totalLabel = state.lang === 'ru' ? 'Итого к оплате' : 'Total de plată';
    const deliveryNote = state.lang === 'ru' ? 'Доставка по Кишиневу / Молдове.' : 'Livrare în Chișinău / Moldova.';

    text += `\n${totalLabel} / Total: *${total.toFixed(2)} MDL*`;
    text += `\n${deliveryNote}`;
    return text;
  }

  // WhatsApp Order Trigger (+373 67 353 798)
  function triggerWhatsAppOrder() {
    if (state.cart.length === 0) {
      alert(t('emptyCart'));
      return;
    }
    const phone = '37367353798';
    const text = buildFormattedOrderText();
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  // Telegram Order Trigger (@akilion)
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

  // Global API Export
  window.TurkofoodApp = {
    init,
    setLanguage,
    selectCategory,
    selectCardWeight,
    setModalWeight,
    openQuickView,
    closeModal,
    addToCartWithWeight,
    updateQtyByKey,
    openCartDrawer,
    closeCartDrawer,
    triggerWhatsAppOrder,
    triggerTelegramOrder
  ,
    setDeliveryZone,
    openDeliveryModal,
    closeDeliveryModal
};

  document.addEventListener('DOMContentLoaded', init);
})();
