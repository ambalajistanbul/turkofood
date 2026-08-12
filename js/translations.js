// Turkofood Bilingual Translation Dictionary (RU / RO)
const TRANSLATIONS = {
    // Delivery Terms & Calculation Translations
    deliverySectionTitle: {
      ru: '🚚 Условия Доставки',
      ro: '🚚 Condiții de Livrare',
      en: '🚚 Delivery Terms'
    },
    deliveryChisinauTitle: {
      ru: 'Доставка по муниципию Кишинёв',
      ro: 'Livrare în municipiul Chișinău',
      en: 'Chisinau Municipality Delivery'
    },
    deliveryChisinauDesc: {
      ru: 'Осуществляется в течение 3 часов с 9:00 до 17:00. БЕСПЛАТНО от 700 MDL. При заказе на меньшую сумму — 80 MDL.',
      ro: 'Efectuată în 3 ore, între 09:00 - 17:00. GRATUIT de la 700 MDL. La comenzi mai mici — 80 MDL.',
      en: 'Delivered within 3 hours (9:00 - 17:00). FREE for orders over 700 MDL. Under 700 MDL — 80 MDL fee.'
    },
    deliveryMoldovaTitle: {
      ru: 'Доставка по Республике Молдова',
      ro: 'Livrare pe teritoriul Republicii Moldova',
      en: 'Republic of Moldova Delivery'
    },
    deliveryMoldovaDesc: {
      ru: 'Осуществляется в течение 8-12 часов с 9:00 до 16:00. БЕСПЛАТНО от 1200 MDL. При заказе на меньшую сумму — 120 MDL.',
      ro: 'Efectuată în 8-12 ore, între 09:00 - 16:00. GRATUIT de la 1200 MDL. La comenzi mai mici — 120 MDL.',
      en: 'Delivered within 8-12 hours (9:00 - 16:00). FREE for orders over 1200 MDL. Under 1200 MDL — 120 MDL fee.'
    },
    deliveryDaysNotice: {
      ru: 'В воскресные дни и в дни государственных праздников доставка не осуществляется.',
      ro: 'În zilele de duminică și sărbători legale nu se efectuează livrări.',
      en: 'No deliveries on Sundays and official public holidays.'
    },
    deliveryAddressNotice: {
      ru: 'Вы можете выбрать любой адрес — домой или в офис. 1 адрес на заказ.',
      ro: 'Puteți alege orice adresă — acasă sau la birou. O singură adresă per comandă.',
      en: 'Choose any address — home or office. One address per order.'
    },
    deliveryInspectionNotice: {
      ru: 'При получении проверьте целостность упаковки и кассовый чек в присутствии курьера.',
      ro: 'La primire, verificați integritatea ambalajului și bonul fiscal în prezența curierului.',
      en: 'Please check package integrity and receipt upon arrival in presence of courier.'
    },
    freeShippingProgress: {
      ru: 'Добавьте еще {amount} MDL для бесплатной доставки по {zone}!',
      ro: 'Mai adăugați {amount} MDL pentru livrare gratuită în {zone}!',
      en: 'Add {amount} MDL more for free delivery to {zone}!'
    },
    freeShippingUnlocked: {
      ru: '🎉 Поздравляем! У вас бесплатная доставка!',
      ro: '🎉 Felicitări! Aveți livrare gratuită!',
      en: '🎉 Congratulations! You have unlocked free delivery!'
    },
    selectDeliveryZone: {
      ru: 'Выберите зону доставки:',
      ro: 'Selectați zona de livrare:',
      en: 'Select delivery zone:'
    },
    zoneChisinau: {
      ru: 'Кишинёв (Бесплатно от 700 MDL)',
      ro: 'Chișinău (Gratuit de la 700 MDL)',
      en: 'Chisinau (Free over 700 MDL)'
    },
    zoneMoldova: {
      ru: 'Республика Молдова (Бесплатно от 1200 MDL)',
      ro: 'Republica Moldova (Gratuit de la 1200 MDL)',
      en: 'Republic of Moldova (Free over 1200 MDL)'
    },
    deliveryFeeLabel: {
      ru: 'Доставка:',
      ro: 'Cost livrare:',
      en: 'Delivery Fee:'
    },
    freeDeliveryText: {
      ru: 'БЕСПЛАТНО',
      ro: 'GRATUIT',
      en: 'FREE'
    },
    fullDeliveryRulesBtn: {
      ru: 'Подробные правила доставки',
      ro: 'Reguli detaliate de livrare',
      en: 'Full Delivery Policy'
    },

  ru: {

    Greutate: "Вес",
    Preț: "Цена",
    livrare: "Доставка",
    Calitate: "Качество",
    Sortare: "Сортировка",
    Origine: "Происхождение",
    Total: "Итого",
    Ambalaj: "Упаковка",
    greutatea: "вес",
    Ambalajul: "Упаковку",


    // Delivery Section Keys
    deliverySectionTitle: "🚚 Условия Доставки",
    fullDeliveryRulesBtn: "Подробные правила доставки",
    deliveryChisinauTitle: "Доставка по муниципию Кишинёв",
    deliveryChisinauDesc: "Осуществляется в течение 3 часов с 9:00 до 17:00. БЕСПЛАТНО от 700 MDL. При заказе до 700 MDL — стоимость доставки 80 MDL.",
    deliveryMoldovaTitle: "Доставка по Республике Молдова",
    deliveryMoldovaDesc: "Осуществляется в течение 8-12 часов с 9:00 до 16:00. БЕСПЛАТНО от 1200 MDL. При заказе до 1200 MDL — стоимость доставки 120 MDL.",
    deliveryDaysNotice: "В воскресные дни и в дни государственных праздников доставка не осуществляется.",
    deliveryAddressNotice: "Вы можете выбрать любой адрес — домой или в офис. 1 адрес на заказ.",
    deliveryInspectionNotice: "При получении проверьте целостность упаковки и кассовый чек в присутствии курьера.",
    selectDeliveryZone: "Выберите зону доставки:",
    zoneChisinau: "Кишинёв (Бесплатно от 700 MDL)",
    zoneMoldova: "Республика Молдова (Бесплатно от 1200 MDL)",
    deliveryFeeLabel: "Доставка:",
    freeDeliveryText: "БЕСПЛАТНО",

    // Header & Navigation
    storeName: "TURKOFOOD",
    tagline: "Натуральные турецкие продукты в Молдове",
    navHome: "Главная",
    navCatalog: "Каталог",
    navCategories: "Категории",
    navAbout: "О нас",
    navContact: "Контакты",
    searchPlaceholder: "Поиск баклавы, чая, лукума, специй...",
    cartTitle: "Корзина",
    emptyCart: "Ваша корзина пуста",
    checkoutBtn: "Оформить заказ",
    whatsappOrder: "Заказать через WhatsApp",
    telegramOrder: "Заказать через Telegram",
    mobileFilterBtn: "Категории и Фильтры",
    
    // Hero Banner
    heroBadge: "100% ПРЯМЫЕ ПОСТАВКИ ИЗ ТУРЦИИ",
    heroTitle: "Вкус Настоящей Турции у Вас Дома",
    heroSubtitle: "Свежая баклава, рахат-лукум, ароматный чай, отборные орехи, специи и восточные сладости с доставкой по Кишиневу и всей Молдове.",
    heroCtaPrimary: "Смотреть Каталог",
    heroCtaSecondary: "Спецпредложения",
    
    // Feature Highlights
    feat1Title: "Прямой Импорт",
    feat1Desc: "100% аутентичные турецкие бренды высочайшего качества",
    feat2Title: "Всегда Свежее",
    feat2Desc: "Регулярные прямые поставки из Турции каждые 7 дней",
    feat3Title: "Быстрая Доставка",
    feat3Desc: "Доставка курьером по Кишиневу и почтой по всей Молдове",
    feat4Title: "Гарантия Вкуса",
    feat4Desc: "Натуральные ингредиенты без искусственных добавок",

    // Categories (Sidebar & Drawer)
    categoriesTitle: "Категории Товаров",
    allCategories: "Все Товары",
    catBaklava: "Баклава & Кадаиф",
    catRahatLukurn: "Рахат-Лукум",
    catNuts: "Орехи & Семечки",
    catDriedFruits: "Сухофрукты",
    catTea: "Турецкий Чай",
    catCoffee: "Турецкий Кофе",
    catHalva: "Халва & Батончики",
    catPastesJams: "Пасты & Джемы",
    catDragees: "Драже & Сладости",
    catSpicesOils: "Специи & Масла",
    catCanned: "Консервы & Соусы",
    catCookware: "Турецкая Посуда",

    // Catalog & Sorting
    catalogTitle: "Наш Каталог",
    catalogSubtitle: "Выберите лучшие турецкие деликатесы",
    sortLabel: "Сортировка:",
    sortDefault: "По умолчанию",
    sortPriceAsc: "Сначала дешевле",
    sortPriceDesc: "Сначала дороже",
    sortTitle: "По названию",
    itemsFound: "товаров",
    noProductsFound: "Товары не найдены",

    // Badges & Weight Selector
    badgePopular: "Хит",
    badgeNew: "Новинка",
    badgeBestseller: "Бестселлер",
    badgeSale: "Акция",
    addToCart: "В корзину",
    addedToCart: "Добавлено в корзину!",
    quickView: "Подробнее",
    weightSelect: "Выберите Вес / Упаковку:",
    pricePerUnit: "Цена:",
    inStockStatus: "В наличии",
    weightLabel: "Вес:",

    // Quick View / Product Detail Modal
    modalClose: "Закрыть",
    originLabel: "Происхождение:",
    originValue: "Турция (100% оригинал)",
    qualityLabel: "Качество:",
    qualityValue: "Премиум класс",
    selectWeightPrompt: "Кликните для выбора веса:",

    // Cart Drawer
    cartSubtotal: "Итого:",
    cartDeliveryNote: "Доставка рассчитывается при подтверждении",
    clearCart: "Очистить",
    selectedWeight: "Упаковка:",

    // Floating Quick Chat Tooltips
    chatWhatsAppTooltip: "Написать в WhatsApp",
    chatTelegramTooltip: "Написать в Telegram",

    // Footer
    footerDesc: "Turkofood — Главный поставщик оригинальных турецких продуктов питания в Молдове. Самый широкий выбор баклавы, лукума, чая, кофе и турецких деликатесов.",
    quickLinks: "Быстрые ссылки",
    contactsTitle: "Контакты",
    workingHoursTitle: "Часы работы",
    workingHours: "Пн - Вс: 09:00 - 20:00",
    phoneContact: "+373 67 353 798",
    addressContact: "Молдова, г. Кишинев",
    copyright: "© 2026 Turkofood (turkofood.vercel.app). Все права защищены."
  },
  ro: {

    Вес: "Greutate",
    Сортировка: "Sortare",
    доставки: "livrare",
    Цена: "Preț",
    Происхождение: "Origine",
    Упаковка: "Ambalaj",
    Качество: "Calitate",
    веса: "greutatea",
    Итого: "Total",
    Упаковку: "Ambalaj",
    Доставка: "Livrare",


    // Delivery Section Keys
    deliverySectionTitle: "🚚 Condiții de Livrare",
    fullDeliveryRulesBtn: "Reguli detaliate de livrare",
    deliveryChisinauTitle: "Livrare în municipiul Chișinău",
    deliveryChisinauDesc: "Efectuată în 3 ore, între 09:00 - 17:00. GRATUIT de la 700 MDL. La comenzi mai mici de 700 MDL — cost livrare 80 MDL.",
    deliveryMoldovaTitle: "Livrare pe teritoriul Republicii Moldova",
    deliveryMoldovaDesc: "Efectuată în 8-12 ore, între 09:00 - 16:00. GRATUIT de la 1200 MDL. La comenzi mai mici de 1200 MDL — cost livrare 120 MDL.",
    deliveryDaysNotice: "În zilele de duminică și sărbători legale nu se efectuează livrări.",
    deliveryAddressNotice: "Puteți alege orice adresă — acasă sau la birou. O singură adresă per comandă.",
    deliveryInspectionNotice: "La primire, verificați integritatea ambalajului și bonul fiscal în prezența curierului.",
    selectDeliveryZone: "Selectați zona de livrare:",
    zoneChisinau: "Chișinău (Gratuit de la 700 MDL)",
    zoneMoldova: "Republica Moldova (Gratuit de la 1200 MDL)",
    deliveryFeeLabel: "Cost livrare:",
    freeDeliveryText: "GRATUIT",

    // Header & Navigation
    storeName: "TURKOFOOD",
    tagline: "Produse turcești naturale în Moldova",
    navHome: "Acasă",
    navCatalog: "Catalog",
    navCategories: "Categorii",
    navAbout: "Despre Noi",
    navContact: "Contacte",
    searchPlaceholder: "Caută baclava, ceai, rahat, condimente...",
    cartTitle: "Coșul Meu",
    emptyCart: "Coșul tău este gol",
    checkoutBtn: "Finalizează Comanda",
    whatsappOrder: "Comandă prin WhatsApp",
    telegramOrder: "Comandă prin Telegram",
    mobileFilterBtn: "Categorii și Filtre",

    // Hero Banner
    heroBadge: "100% IMPORT DIRECT DIN TURCIA",
    heroTitle: "Gustul Turciei Autentice la Tine Acasă",
    heroSubtitle: "Baclava proaspătă, rahat lokum, ceai aromat, alune selecte, condimente și dulciuri orientale cu livrare în Chișinău și toată Moldova.",
    heroCtaPrimary: "Vezi Catalogul",
    heroCtaSecondary: "Oferte Speciale",

    // Feature Highlights
    feat1Title: "Import Direct",
    feat1Desc: "Branduri turcești 100% autentice de cea mai înaltă calitate",
    feat2Title: "Mereu Proaspăt",
    feat2Desc: "Livrări directe regulate din Turcia la fiecare 7 zile",
    feat3Title: "Livrare Rapidă",
    feat3Desc: "Livrare prin curier în Chișinău și prin poștă în toată Moldova",
    feat4Title: "Garanția Gustului",
    feat4Desc: "Ingrediente naturale fără aditivi artificiali",

    // Categories (Sidebar & Drawer)
    categoriesTitle: "Categoriile Produselor",
    allCategories: "Toate Produsele",
    catBaklava: "Baclava & Kadaif",
    catRahatLukurn: "Rahat Lokum",
    catNuts: "Alune & Nucifere",
    catDriedFruits: "Fructe Uscate",
    catTea: "Ceai Turcesc",
    catCoffee: "Cafea Turcească",
    catHalva: "Halva & Batoane",
    catPastesJams: "Paste & Gemuri",
    catDragees: "Drajeuri & Dulciuri",
    catSpicesOils: "Condimente & Uleiuri",
    catCanned: "Conserve & Sosuri",
    catCookware: "Veselă Turcească",

    // Catalog & Sorting
    catalogTitle: "Catalogul Nostru",
    catalogSubtitle: "Alege cele mai bune delicii turcești",
    sortLabel: "Sortare:",
    sortDefault: "Implicit",
    sortPriceAsc: "Preț crescător",
    sortPriceDesc: "Preț descrescător",
    sortTitle: "După nume",
    itemsFound: "produse găsite",
    noProductsFound: "Nu au fost găsite produse",

    // Badges & Weight Selector
    badgePopular: "Popular",
    badgeNew: "Nou",
    badgeBestseller: "Bestseller",
    badgeSale: "Ofertă",
    addToCart: "Adaugă în coș",
    addedToCart: "Adăugat în coș!",
    quickView: "Detalii",
    weightSelect: "Alege Greutatea / Ambalajul:",
    pricePerUnit: "Preț:",
    inStockStatus: "În stoc",
    weightLabel: "Greutate:",

    // Quick View / Product Detail Modal
    modalClose: "Închide",
    originLabel: "Origine:",
    originValue: "Turcia (100% original)",
    qualityLabel: "Calitate:",
    qualityValue: "Clasă Premium",
    selectWeightPrompt: "Apasă pentru a alege greutatea:",

    // Cart Drawer
    cartSubtotal: "Total:",
    cartDeliveryNote: "Livrarea se calculează la confirmare",
    clearCart: "Golește",
    selectedWeight: "Ambalaj:",

    // Floating Quick Chat Tooltips
    chatWhatsAppTooltip: "Scrie pe WhatsApp",
    chatTelegramTooltip: "Scrie pe Telegram",

    // Footer
    footerDesc: "Turkofood — Principalul furnizor de produse alimentare turcești originale în Moldova. Cea mai vastă selecție de baclava, rahat, ceai, cafea și delicii orientale.",
    quickLinks: "Linkuri Rapide",
    contactsTitle: "Contacte",
    workingHoursTitle: "Program de lucru",
    workingHours: "Lu - Du: 09:00 - 20:00",
    phoneContact: "+373 67 353 798",
    addressContact: "Moldova, or. Chișinău",
    copyright: "© 2026 Turkofood (turkofood.vercel.app). Toate drepturile rezervate."
  }
};
