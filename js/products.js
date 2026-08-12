// Turkofood 100% Authentic Product Catalog (126 Products)
const PRODUCTS_DATA = [
  {
    "id": "prod_1",
    "title": {
      "ru": "Батончик Koska с фундуком",
      "ro": "Batoana Koska cu alune de pădure"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Батончик Koska с фундуком.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Batoana Koska cu alune de pădure."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 30.0
      }
    ],
    "price": 30.0,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/product_1.jpg",
    "badge": "popular",
    "inStock": true
  },
  {
    "id": "prod_2",
    "title": {
      "ru": "Батончик Koska с арахисом",
      "ro": "Batoana Koska cu arahide"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Батончик Koska с арахисом.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Batoana Koska cu arahide."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 20.0
      }
    ],
    "price": 20.0,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/product_2.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_3",
    "title": {
      "ru": "Батончик Koska с миндалем",
      "ro": "Batoana Koska cu migdale"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Батончик Koska с миндалем.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Batoana Koska cu migdale."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 30.0
      }
    ],
    "price": 30.0,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/product_1.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_4",
    "title": {
      "ru": "Батончик Koska с морковью и орехами",
      "ro": "Batoana Koska cu morcov și nuci (Cezerye)"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Батончик Koska с морковью и орехами.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Batoana Koska cu morcov și nuci (Cezerye)."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 20.0
      }
    ],
    "price": 20.0,
    "currency": "MDL",
    "category": "halva",
    "image": "images/product_2.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_5",
    "title": {
      "ru": "Сублимированная клубника в шоколаде с лаймом",
      "ro": "Căpșuni liofilizate în ciocolată cu lămâie verde"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Сублимированная клубника в шоколаде с лаймом.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Căpșuni liofilizate în ciocolată cu lămâie verde."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 225.0
      },
      {
        "label": "500g",
        "price": 450.0
      },
      {
        "label": "1kg",
        "price": 900.0
      }
    ],
    "price": 225.0,
    "currency": "MDL",
    "category": "dragees",
    "image": "images/real_prod_84.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_6",
    "title": {
      "ru": "Турецкий чай Filiz 200г",
      "ro": "Ceai turcesc Filiz 200g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Турецкий чай Filiz 200г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ceai turcesc Filiz 200g."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "200 GR",
        "price": 100.0
      }
    ],
    "price": 100.0,
    "currency": "MDL",
    "category": "tea",
    "image": "images/product_4.jpg",
    "badge": "bestseller",
    "inStock": true
  },
  {
    "id": "prod_7",
    "title": {
      "ru": "Тахини (кунжутная паста) Koska",
      "ro": "Tahini (pastă de susan) Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Тахини (кунжутная паста) Koska.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Tahini (pastă de susan) Koska."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 190.0
      }
    ],
    "price": 190.0,
    "currency": "MDL",
    "category": "halva",
    "image": "images/product_3.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_8",
    "title": {
      "ru": "Сублимированная малина в белом шоколаде",
      "ro": "Zmeură liofilizată în ciocolată albă"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Сублимированная малина в белом шоколаде.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Zmeură liofilizată în ciocolată albă."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 225.0
      },
      {
        "label": "500g",
        "price": 450.0
      },
      {
        "label": "1kg",
        "price": 900.0
      }
    ],
    "price": 225.0,
    "currency": "MDL",
    "category": "dragees",
    "image": "images/real_prod_84.jpg",
    "badge": "popular",
    "inStock": true
  },
  {
    "id": "prod_9",
    "title": {
      "ru": "Ананас сушеный (цукаты)",
      "ro": "Ananas uscat (fructe confiate)"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Ананас сушеный (цукаты).",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ananas uscat (fructe confiate)."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 75.0
      },
      {
        "label": "500g",
        "price": 150.0
      },
      {
        "label": "1kg",
        "price": 300.0
      }
    ],
    "price": 75.0,
    "currency": "MDL",
    "category": "dried-fruits",
    "image": "images/product_6.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_10",
    "title": {
      "ru": "Арахис в кунжуте с медом",
      "ro": "Arahide în susan cu miere"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Арахис в кунжуте с медом.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Arahide în susan cu miere."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 62.5
      },
      {
        "label": "500g",
        "price": 125.0
      },
      {
        "label": "1kg",
        "price": 250.0
      }
    ],
    "price": 62.5,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_7.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_11",
    "title": {
      "ru": "Арахис хрустящий в панировке",
      "ro": "Arahide crocante pane"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Арахис хрустящий в панировке.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Arahide crocante pane."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 62.5
      },
      {
        "label": "500g",
        "price": 125.0
      },
      {
        "label": "1kg",
        "price": 250.0
      }
    ],
    "price": 62.5,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/product_8.jpg",
    "badge": "bestseller",
    "inStock": true
  },
  {
    "id": "prod_12",
    "title": {
      "ru": "Арахис жареный соленый",
      "ro": "Arahide prăjite sărate"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Арахис жареный соленый.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Arahide prăjite sărate."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 55.0
      },
      {
        "label": "500g",
        "price": 110.0
      },
      {
        "label": "1kg",
        "price": 220.0
      }
    ],
    "price": 55.0,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_9.jpg",
    "badge": "new",
    "inStock": true
  },
  {
    "id": "prod_13",
    "title": {
      "ru": "Баклава с грецким орехом",
      "ro": "Baclava cu nucă"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Баклава с грецким орехом.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Baclava cu nucă."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 112.5
      },
      {
        "label": "500g",
        "price": 225.0
      },
      {
        "label": "1kg",
        "price": 450.0
      }
    ],
    "price": 112.5,
    "currency": "MDL",
    "category": "baklava",
    "image": "images/product_10.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_14",
    "title": {
      "ru": "Баклава с премиум фисташками",
      "ro": "Baclava cu fistic premium"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Баклава с премиум фисташками.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Baclava cu fistic premium."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 162.5
      },
      {
        "label": "500g",
        "price": 325.0
      },
      {
        "label": "1kg",
        "price": 650.0
      }
    ],
    "price": 162.5,
    "currency": "MDL",
    "category": "baklava",
    "image": "images/product_11.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_15",
    "title": {
      "ru": "Бразильский орех отборный",
      "ro": "Nuci braziliene selecte"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Бразильский орех отборный.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Nuci braziliene selecte."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 225.0
      },
      {
        "label": "500g",
        "price": 450.0
      },
      {
        "label": "1kg",
        "price": 900.0
      }
    ],
    "price": 225.0,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/product_12.jpg",
    "badge": "popular",
    "inStock": true
  },
  {
    "id": "prod_16",
    "title": {
      "ru": "Сушеные бананы премиум",
      "ro": "Banane uscate premium"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Сушеные бананы премиум.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Banane uscate premium."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 100.0
      },
      {
        "label": "500g",
        "price": 200.0
      },
      {
        "label": "1kg",
        "price": 400.0
      }
    ],
    "price": 100.0,
    "currency": "MDL",
    "category": "dried-fruits",
    "image": "images/product_13.jpg",
    "badge": "bestseller",
    "inStock": true
  },
  {
    "id": "prod_17",
    "title": {
      "ru": "Гранатовый лукум с фисташками и барбарисом",
      "ro": "Rahat lokum de rodie cu fistic și dracilă"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Гранатовый лукум с фисташками и барбарисом.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Rahat lokum de rodie cu fistic și dracilă."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 125.0
      },
      {
        "label": "500g",
        "price": 250.0
      },
      {
        "label": "1kg",
        "price": 500.0
      }
    ],
    "price": 125.0,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_14.png",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_18",
    "title": {
      "ru": "Гранатовый лукум с фисташками и воздушным рисом",
      "ro": "Rahat lokum de rodie cu fistic și orez expandat"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Гранатовый лукум с фисташками и воздушным рисом.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Rahat lokum de rodie cu fistic și orez expandat."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 125.0
      },
      {
        "label": "500g",
        "price": 250.0
      },
      {
        "label": "1kg",
        "price": 500.0
      }
    ],
    "price": 125.0,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_15.png",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_19",
    "title": {
      "ru": "Гранатовый лукум с фисташками и лепестками роз",
      "ro": "Rahat lokum de rodie cu fistic și petale de trandafir"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Гранатовый лукум с фисташками и лепестками роз.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Rahat lokum de rodie cu fistic și petale de trandafir."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 125.0
      },
      {
        "label": "500g",
        "price": 250.0
      },
      {
        "label": "1kg",
        "price": 500.0
      }
    ],
    "price": 125.0,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_16.png",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_20",
    "title": {
      "ru": "Грецкие орехи",
      "ro": "Nuci grecești"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Грецкие орехи.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Nuci grecești."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 87.5
      },
      {
        "label": "500g",
        "price": 175.0
      },
      {
        "label": "1kg",
        "price": 350.0
      }
    ],
    "price": 87.5,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_17.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_21",
    "title": {
      "ru": "Джем из Абрикоса Koska 300гр",
      "ro": "Gem de caise Koska 300g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Джем из Абрикоса Koska 300гр.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Gem de caise Koska 300g."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "300ГР",
        "price": 60.0
      }
    ],
    "price": 60.0,
    "currency": "MDL",
    "category": "halva",
    "image": "images/real_prod_18.png",
    "badge": "bestseller",
    "inStock": true
  },
  {
    "id": "prod_22",
    "title": {
      "ru": "Джем из Айвы Koska 300г",
      "ro": "Gem de gutui Koska 300g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Джем из Айвы Koska 300г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Gem de gutui Koska 300g."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "300Г",
        "price": 60.0
      }
    ],
    "price": 60.0,
    "currency": "MDL",
    "category": "halva",
    "image": "images/real_prod_19.png",
    "badge": "popular",
    "inStock": true
  },
  {
    "id": "prod_23",
    "title": {
      "ru": "Джем из Апельсина Koska 300гр",
      "ro": "Gem de portocale Koska 300g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Джем из Апельсина Koska 300гр.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Gem de portocale Koska 300g."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "300ГР",
        "price": 70.0
      }
    ],
    "price": 70.0,
    "currency": "MDL",
    "category": "halva",
    "image": "images/product_4.jpg",
    "badge": "new",
    "inStock": true
  },
  {
    "id": "prod_24",
    "title": {
      "ru": "Джем из Вишни Koska 300гр",
      "ro": "Gem de vișine Koska 300g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Джем из Вишни Koska 300гр.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Gem de vișine Koska 300g."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "300ГР",
        "price": 70.0
      }
    ],
    "price": 70.0,
    "currency": "MDL",
    "category": "halva",
    "image": "images/real_prod_20.png",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_25",
    "title": {
      "ru": "Джем из ежевики Koska 300гр",
      "ro": "Gem de mure Koska 300g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Джем из ежевики Koska 300гр.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Gem de mure Koska 300g."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "300ГР",
        "price": 80.0
      }
    ],
    "price": 80.0,
    "currency": "MDL",
    "category": "halva",
    "image": "images/real_prod_21.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_26",
    "title": {
      "ru": "Джем из Инжира Koska 300гр",
      "ro": "Gem de smochine Koska 300g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Джем из Инжира Koska 300гр.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Gem de smochine Koska 300g."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "300ГР",
        "price": 60.0
      }
    ],
    "price": 60.0,
    "currency": "MDL",
    "category": "halva",
    "image": "images/real_prod_22.png",
    "badge": "bestseller",
    "inStock": true
  },
  {
    "id": "prod_27",
    "title": {
      "ru": "Джем из Клубники Koska 300гр",
      "ro": "Gem de căpșuni Koska 300g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Джем из Клубники Koska 300гр.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Gem de căpșuni Koska 300g."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "300ГР",
        "price": 70.0
      }
    ],
    "price": 70.0,
    "currency": "MDL",
    "category": "halva",
    "image": "images/real_prod_23.png",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_28",
    "title": {
      "ru": "Джем из Розы Koska 300гр",
      "ro": "Gem de trandafir Koska 300g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Джем из Розы Koska 300гр.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Gem de trandafir Koska 300g."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "300ГР",
        "price": 60.0
      }
    ],
    "price": 60.0,
    "currency": "MDL",
    "category": "halva",
    "image": "images/real_prod_24.png",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_29",
    "title": {
      "ru": "Драже Бонибон",
      "ro": "Drajeuri Bonibon"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Драже Бонибон.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Drajeuri Bonibon."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 62.5
      },
      {
        "label": "500g",
        "price": 125.0
      },
      {
        "label": "1kg",
        "price": 250.0
      }
    ],
    "price": 62.5,
    "currency": "MDL",
    "category": "dragees",
    "image": "images/real_prod_25.jpg",
    "badge": "popular",
    "inStock": true
  },
  {
    "id": "prod_30",
    "title": {
      "ru": "Драже камушки",
      "ro": "Drajeuri pietricile de ciocolată"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Драже камушки.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Drajeuri pietricile de ciocolată."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 62.5
      },
      {
        "label": "500g",
        "price": 125.0
      },
      {
        "label": "1kg",
        "price": 250.0
      }
    ],
    "price": 62.5,
    "currency": "MDL",
    "category": "dragees",
    "image": "images/real_prod_26.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_31",
    "title": {
      "ru": "Драже с лесным орехом в белом шоколаде",
      "ro": "Drajeuri cu alune de pădure în ciocolată albă"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Драже с лесным орехом в белом шоколаде.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Drajeuri cu alune de pădure în ciocolată albă."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 125.0
      },
      {
        "label": "500g",
        "price": 250.0
      },
      {
        "label": "1kg",
        "price": 500.0
      }
    ],
    "price": 125.0,
    "currency": "MDL",
    "category": "dragees",
    "image": "images/real_prod_31.jpg",
    "badge": "bestseller",
    "inStock": true
  },
  {
    "id": "prod_32",
    "title": {
      "ru": "Жаренная кукуруза",
      "ro": "Porumb prăjit"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Жаренная кукуруза.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Porumb prăjit."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 50.0
      }
    ],
    "price": 50.0,
    "currency": "MDL",
    "category": "sweets",
    "image": "images/real_prod_27.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_33",
    "title": {
      "ru": "Зелёный чай 100г",
      "ro": "Ceai verde 100g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Зелёный чай 100г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ceai verde 100g."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "100Г",
        "price": 95.0
      }
    ],
    "price": 95.0,
    "currency": "MDL",
    "category": "tea",
    "image": "images/product_6.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_34",
    "title": {
      "ru": "Зимний чай",
      "ro": "Ceai de iarnă"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Зимний чай.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ceai de iarnă."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 150.0
      }
    ],
    "price": 150.0,
    "currency": "MDL",
    "category": "tea",
    "image": "images/real_prod_28.jpg",
    "badge": "new",
    "inStock": true
  },
  {
    "id": "prod_35",
    "title": {
      "ru": "Зимний чай 100г",
      "ro": "Ceai de iarnă 100g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Зимний чай 100г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ceai de iarnă 100g."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "100Г",
        "price": 80.0
      }
    ],
    "price": 80.0,
    "currency": "MDL",
    "category": "tea",
    "image": "images/real_prod_28.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_36",
    "title": {
      "ru": "Изум голден",
      "ro": "Stafide aurii Golden"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Изум голден.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Stafide aurii Golden."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 75.0
      }
    ],
    "price": 75.0,
    "currency": "MDL",
    "category": "sweets",
    "image": "images/real_prod_29.jpg",
    "badge": "popular",
    "inStock": true
  },
  {
    "id": "prod_37",
    "title": {
      "ru": "Имбирь сушеный",
      "ro": "Smochine uscate premium"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Имбирь сушеный.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Smochine uscate premium."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 75.0
      },
      {
        "label": "500g",
        "price": 150.0
      },
      {
        "label": "1kg",
        "price": 300.0
      }
    ],
    "price": 75.0,
    "currency": "MDL",
    "category": "dried-fruits",
    "image": "images/real_prod_30.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_38",
    "title": {
      "ru": "Кадаиф с фисташками",
      "ro": "Ghimbir confiat"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кадаиф с фисташками.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ghimbir confiat."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 162.5
      },
      {
        "label": "500g",
        "price": 325.0
      },
      {
        "label": "1kg",
        "price": 650.0
      }
    ],
    "price": 162.5,
    "currency": "MDL",
    "category": "baklava",
    "image": "images/real_prod_31.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_39",
    "title": {
      "ru": "Какао Nuri Toplar",
      "ro": "Cacao Nuri Toplar"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Какао Nuri Toplar.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Cacao Nuri Toplar."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 240.0
      }
    ],
    "price": 240.0,
    "currency": "MDL",
    "category": "sweets",
    "image": "images/real_prod_32.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_40",
    "title": {
      "ru": "Кешью жареный соленый",
      "ro": "Caju crud premium"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кешью жареный соленый.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Caju crud premium."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 137.5
      },
      {
        "label": "500g",
        "price": 275.0
      },
      {
        "label": "1kg",
        "price": 550.0
      }
    ],
    "price": 137.5,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_33.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_41",
    "title": {
      "ru": "Кешью сушеный",
      "ro": "Caju prăjit sărat"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кешью сушеный.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Caju prăjit sărat."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 137.5
      },
      {
        "label": "500g",
        "price": 275.0
      },
      {
        "label": "1kg",
        "price": 550.0
      }
    ],
    "price": 137.5,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_34.jpg",
    "badge": "bestseller",
    "inStock": true
  },
  {
    "id": "prod_42",
    "title": {
      "ru": "Киви сушеный",
      "ro": "Kiwi uscat (fructe confiate)"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Киви сушеный.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Kiwi uscat (fructe confiate)."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 75.0
      },
      {
        "label": "500g",
        "price": 150.0
      },
      {
        "label": "1kg",
        "price": 300.0
      }
    ],
    "price": 75.0,
    "currency": "MDL",
    "category": "dried-fruits",
    "image": "images/real_prod_35.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_43",
    "title": {
      "ru": "Кофе Nuri Toplar Осман 250г",
      "ro": "Cafea Nuri Toplar Osman 250g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кофе Nuri Toplar Осман 250г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Cafea Nuri Toplar Osman 250g."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "250Г",
        "price": 150.0
      }
    ],
    "price": 150.0,
    "currency": "MDL",
    "category": "coffee",
    "image": "images/real_prod_501.jpg",
    "badge": "popular",
    "inStock": true
  },
  {
    "id": "prod_44",
    "title": {
      "ru": "Кофе Nuri Toplar с лесным орехом 250г",
      "ro": "Cafea Nuri Toplar cu damasc"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кофе Nuri Toplar с лесным орехом 250г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Cafea Nuri Toplar cu damasc."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "250Г",
        "price": 210.0
      }
    ],
    "price": 210.0,
    "currency": "MDL",
    "category": "coffee",
    "image": "images/real_prod_36.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_45",
    "title": {
      "ru": "Кофе Nuri Toplar с мастикой 250г",
      "ro": "Cafea Nuri Toplar 250g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кофе Nuri Toplar с мастикой 250г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Cafea Nuri Toplar 250g."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "250Г",
        "price": 210.0
      }
    ],
    "price": 210.0,
    "currency": "MDL",
    "category": "coffee",
    "image": "images/real_prod_37.jpg",
    "badge": "new",
    "inStock": true
  },
  {
    "id": "prod_46",
    "title": {
      "ru": "Кофе по-турецки Kurukahveci Mehmet efendi 100gr",
      "ro": "Ulei de cocos 250ml"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кофе по-турецки Kurukahveci Mehmet efendi 100gr.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ulei de cocos 250ml."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "100GR",
        "price": 70.0
      }
    ],
    "price": 70.0,
    "currency": "MDL",
    "category": "coffee",
    "image": "images/real_prod_38.jpg",
    "badge": "bestseller",
    "inStock": true
  },
  {
    "id": "prod_47",
    "title": {
      "ru": "Кофе по-турецки Kurukahveci Mehmet efendi 250gr",
      "ro": "Bomboane turcești asortate"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кофе по-турецки Kurukahveci Mehmet efendi 250gr.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Bomboane turcești asortate."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "250GR",
        "price": 200.0
      }
    ],
    "price": 200.0,
    "currency": "MDL",
    "category": "coffee",
    "image": "images/real_prod_39.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_48",
    "title": {
      "ru": "Кофе по-турецки Kurukahveci Mehmet efendi 500gr",
      "ro": "Caise uscate ciocolatii suculente"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кофе по-турецки Kurukahveci Mehmet efendi 500gr.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Caise uscate ciocolatii suculente."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "500GR",
        "price": 370.0
      }
    ],
    "price": 370.0,
    "currency": "MDL",
    "category": "coffee",
    "image": "images/real_prod_40.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_49",
    "title": {
      "ru": "Кофе по-турецки Nuri Toplar",
      "ro": "Caise uscate regale"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кофе по-турецки Nuri Toplar.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Caise uscate regale."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 65.0
      }
    ],
    "price": 65.0,
    "currency": "MDL",
    "category": "coffee",
    "image": "images/real_prod_41.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_50",
    "title": {
      "ru": "Кофе по-турецки Nuri Toplar 250г -500г",
      "ro": "Lămâie uscată feliată"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кофе по-турецки Nuri Toplar 250г -500г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Lămâie uscată feliată."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "250Г",
        "price": 180.0
      }
    ],
    "price": 180.0,
    "currency": "MDL",
    "category": "coffee",
    "image": "images/real_prod_42.jpg",
    "badge": "popular",
    "inStock": true
  },
  {
    "id": "prod_51",
    "title": {
      "ru": "Кофе по-турецки Nuri Toplar с мастикой 100gr",
      "ro": "Lămâie verde uscată feliată"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кофе по-турецки Nuri Toplar с мастикой 100gr.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Lămâie verde uscată feliată."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "100GR",
        "price": 80.0
      }
    ],
    "price": 80.0,
    "currency": "MDL",
    "category": "coffee",
    "image": "images/real_prod_43.png",
    "badge": "bestseller",
    "inStock": true
  },
  {
    "id": "prod_52",
    "title": {
      "ru": "Кукурузные чипсы со сладкой паприкой",
      "ro": "Acid citric"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кукурузные чипсы со сладкой паприкой.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Acid citric."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 50.0
      }
    ],
    "price": 50.0,
    "currency": "MDL",
    "category": "sweets",
    "image": "images/real_prod_44.png",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_53",
    "title": {
      "ru": "Кунжутная паста Koska",
      "ro": "Paletă pentru tort și baclava"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кунжутная паста Koska.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Paletă pentru tort și baclava."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 90.0
      }
    ],
    "price": 90.0,
    "currency": "MDL",
    "category": "halva",
    "image": "images/real_prod_45.png",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_54",
    "title": {
      "ru": "Кунжутная халва с рожковой пудрой и фундуком Koska 200гр",
      "ro": "Nuci Macadamia în coajă"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кунжутная халва с рожковой пудрой и фундуком Koska 200гр.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Nuci Macadamia în coajă."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "200ГР",
        "price": 65.0
      }
    ],
    "price": 65.0,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_46.png",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_55",
    "title": {
      "ru": "Курага",
      "ro": "Mac persan"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Курага.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Mac persan."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 100.0
      },
      {
        "label": "500g",
        "price": 200.0
      },
      {
        "label": "1kg",
        "price": 400.0
      }
    ],
    "price": 100.0,
    "currency": "MDL",
    "category": "dried-fruits",
    "image": "images/real_prod_47.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_56",
    "title": {
      "ru": "Курага натуральная (абрикос вяленый)",
      "ro": "Mango uscat natural"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Курага натуральная (абрикос вяленый).",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Mango uscat natural."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 100.0
      },
      {
        "label": "500g",
        "price": 200.0
      },
      {
        "label": "1kg",
        "price": 400.0
      }
    ],
    "price": 100.0,
    "currency": "MDL",
    "category": "dried-fruits",
    "image": "images/real_prod_48.jpg",
    "badge": "new",
    "inStock": true
  },
  {
    "id": "prod_57",
    "title": {
      "ru": "Лукум Sultan с фисташками Koska 500г",
      "ro": "Mango confiat"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум Sultan с фисташками Koska 500г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Mango confiat."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 130.0
      },
      {
        "label": "500g",
        "price": 260.0
      },
      {
        "label": "1kg",
        "price": 520.0
      }
    ],
    "price": 130.0,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_49.png",
    "badge": "popular",
    "inStock": true
  },
  {
    "id": "prod_58",
    "title": {
      "ru": "Лукум ассорти (фундук, фисташки, классический и кокосовая стружка ) Koska 250г",
      "ro": "Miere turcească polifloră 500g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум ассорти (фундук, фисташки, классический и кокосовая стружка ) Koska 250г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Miere turcească polifloră 500g."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 90.0
      },
      {
        "label": "500g",
        "price": 180.0
      },
      {
        "label": "1kg",
        "price": 360.0
      }
    ],
    "price": 90.0,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_50.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_59",
    "title": {
      "ru": "Лукум ассорти с разными ароматами Koska 250г",
      "ro": "Migdale albite"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум ассорти с разными ароматами Koska 250г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Migdale albite."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 70.0
      },
      {
        "label": "500g",
        "price": 140.0
      },
      {
        "label": "1kg",
        "price": 280.0
      }
    ],
    "price": 70.0,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_51.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_60",
    "title": {
      "ru": "Лукум ассорти с разными ароматами Koska 500г",
      "ro": "Migdale prăjite sărate"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум ассорти с разными ароматами Koska 500г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Migdale prăjite sărate."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 110.0
      },
      {
        "label": "500g",
        "price": 220.0
      },
      {
        "label": "1kg",
        "price": 440.0
      }
    ],
    "price": 110.0,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_52.png",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_61",
    "title": {
      "ru": "Лукум гранатовый с фисташкой и кокосовая стружка",
      "ro": "Migdale crude premium"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум гранатовый с фисташкой и кокосовая стружка.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Migdale crude premium."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 100.0
      },
      {
        "label": "500g",
        "price": 200.0
      },
      {
        "label": "1kg",
        "price": 400.0
      }
    ],
    "price": 100.0,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_53.jpg",
    "badge": "bestseller",
    "inStock": true
  },
  {
    "id": "prod_62",
    "title": {
      "ru": "Лукум гранатовый с шафраном",
      "ro": "Migdale glazurate în zahăr"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум гранатовый с шафраном.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Migdale glazurate în zahăr."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 125.0
      },
      {
        "label": "500g",
        "price": 250.0
      },
      {
        "label": "1kg",
        "price": 500.0
      }
    ],
    "price": 125.0,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_54.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_63",
    "title": {
      "ru": "Лукум классический Koska 250г",
      "ro": "Mix de nuci crude"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум классический Koska 250г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Mix de nuci crude."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 75.0
      },
      {
        "label": "500g",
        "price": 150.0
      },
      {
        "label": "1kg",
        "price": 300.0
      }
    ],
    "price": 75.0,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_55.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_64",
    "title": {
      "ru": "Лукум классический Koska 500г",
      "ro": "Mix de nuci prăjite sărate"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум классический Koska 500г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Mix de nuci prăjite sărate."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 100.0
      },
      {
        "label": "500g",
        "price": 200.0
      },
      {
        "label": "1kg",
        "price": 400.0
      }
    ],
    "price": 100.0,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_56.png",
    "badge": "popular",
    "inStock": true
  },
  {
    "id": "prod_65",
    "title": {
      "ru": "Лукум с ароматом апельсина и лимона в шоколадной глазури Koska 140г",
      "ro": "Mix de fructe uscate"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с ароматом апельсина и лимона в шоколадной глазури Koska 140г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Mix de fructe uscate."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 95.0
      },
      {
        "label": "500g",
        "price": 190.0
      },
      {
        "label": "1kg",
        "price": 380.0
      }
    ],
    "price": 95.0,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_57.png",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_66",
    "title": {
      "ru": "Лукум с ароматом мяты в шоколадной глазури Koska 140г",
      "ro": "Mentă uscată mărunțită"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с ароматом мяты в шоколадной глазури Koska 140г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Mentă uscată mărunțită."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 95.0
      },
      {
        "label": "500g",
        "price": 190.0
      },
      {
        "label": "1kg",
        "price": 380.0
      }
    ],
    "price": 95.0,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_58.png",
    "badge": "bestseller",
    "inStock": true
  },
  {
    "id": "prod_67",
    "title": {
      "ru": "Лукум с ароматом розы и лимона без добавления сахара Koska 160г",
      "ro": "Măsline la grătar în ulei"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с ароматом розы и лимона без добавления сахара Koska 160г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Măsline la grătar în ulei."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 85.0
      },
      {
        "label": "500g",
        "price": 170.0
      },
      {
        "label": "1kg",
        "price": 340.0
      }
    ],
    "price": 85.0,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_59.jpg",
    "badge": "new",
    "inStock": true
  },
  {
    "id": "prod_68",
    "title": {
      "ru": "Лукум с гранатом, фисташками и молоком",
      "ro": "Măsline verzi gigante cu sâmbure"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с гранатом, фисташками и молоком.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Măsline verzi gigante cu sâmbure."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 137.5
      },
      {
        "label": "500g",
        "price": 275.0
      },
      {
        "label": "1kg",
        "price": 550.0
      }
    ],
    "price": 137.5,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_60.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_69",
    "title": {
      "ru": "Лукум с молоком и шоколадной пастой (ролы)",
      "ro": "Măsline negre deshidratate Sele"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с молоком и шоколадной пастой (ролы).",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Măsline negre deshidratate Sele."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 112.5
      },
      {
        "label": "500g",
        "price": 225.0
      },
      {
        "label": "1kg",
        "price": 450.0
      }
    ],
    "price": 112.5,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_61.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_70",
    "title": {
      "ru": "Лукум с фисташками Koska 250г",
      "ro": "Papaya uscată confiată"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с фисташками Koska 250г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Papaya uscată confiată."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 105.0
      },
      {
        "label": "500g",
        "price": 210.0
      },
      {
        "label": "1kg",
        "price": 420.0
      }
    ],
    "price": 105.0,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_62.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_71",
    "title": {
      "ru": "Лукум с фисташками Koska 500г",
      "ro": "Nuci Pecan selecte"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с фисташками Koska 500г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Nuci Pecan selecte."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 170.0
      },
      {
        "label": "500g",
        "price": 340.0
      },
      {
        "label": "1kg",
        "price": 680.0
      }
    ],
    "price": 170.0,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_63.jpg",
    "badge": "popular",
    "inStock": true
  },
  {
    "id": "prod_72",
    "title": {
      "ru": "Лукум с фисташками без добавления сахара Koska 160г",
      "ro": "Pekmez de roșcove Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с фисташками без добавления сахара Koska 160г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pekmez de roșcove Koska."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 120.0
      },
      {
        "label": "500g",
        "price": 240.0
      },
      {
        "label": "1kg",
        "price": 480.0
      }
    ],
    "price": 120.0,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_64.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_73",
    "title": {
      "ru": "Лукум с фисташками в шоколадной глазури Koska 140г",
      "ro": "Pekmez de dude Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с фисташками в шоколадной глазури Koska 140г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pekmez de dude Koska."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 110.0
      },
      {
        "label": "500g",
        "price": 220.0
      },
      {
        "label": "1kg",
        "price": 440.0
      }
    ],
    "price": 110.0,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_65.png",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_74",
    "title": {
      "ru": "Лукум с фундуком в шоколадной глазури Koska 140г",
      "ro": "Piersici uscate"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с фундуком в шоколадной глазури Koska 140г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Piersici uscate."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 100.0
      },
      {
        "label": "500g",
        "price": 200.0
      },
      {
        "label": "1kg",
        "price": 400.0
      }
    ],
    "price": 100.0,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_66.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_75",
    "title": {
      "ru": "Лукум с фундуком, фисташками и кокосом Koska 500г",
      "ro": "Pișmaniye clasic de vanilie Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с фундуком, фисташками и кокосом Koska 500г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pișmaniye clasic de vanilie Koska."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 150.0
      },
      {
        "label": "500g",
        "price": 300.0
      },
      {
        "label": "1kg",
        "price": 600.0
      }
    ],
    "price": 150.0,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_502.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_76",
    "title": {
      "ru": "Лукум фруктовый микс",
      "ro": "Pișmaniye cu fistic Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум фруктовый микс.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pișmaniye cu fistic Koska."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 62.5
      },
      {
        "label": "500g",
        "price": 125.0
      },
      {
        "label": "1kg",
        "price": 250.0
      }
    ],
    "price": 62.5,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_67.jpg",
    "badge": "bestseller",
    "inStock": true
  },
  {
    "id": "prod_77",
    "title": {
      "ru": "Манго сушеный",
      "ro": "Pișmaniye în ciocolată Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Манго сушеный.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pișmaniye în ciocolată Koska."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 75.0
      },
      {
        "label": "500g",
        "price": 150.0
      },
      {
        "label": "1kg",
        "price": 300.0
      }
    ],
    "price": 75.0,
    "currency": "MDL",
    "category": "dried-fruits",
    "image": "images/real_prod_68.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_78",
    "title": {
      "ru": "Медовая паста с экстрактом Эпимедиума",
      "ro": "Rahat-lokum de rodie cu fistic Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Медовая паста с экстрактом Эпимедиума.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Rahat-lokum de rodie cu fistic Koska."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 300.0
      }
    ],
    "price": 300.0,
    "currency": "MDL",
    "category": "pastes-jams",
    "image": "images/real_prod_69.png",
    "badge": "popular",
    "inStock": true
  },
  {
    "id": "prod_79",
    "title": {
      "ru": "Микс орехов",
      "ro": "Rahat-lokum asortat fructat Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Микс орехов.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Rahat-lokum asortat fructat Koska."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 75.0
      },
      {
        "label": "500g",
        "price": 150.0
      },
      {
        "label": "1kg",
        "price": 300.0
      }
    ],
    "price": 75.0,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_70.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_80",
    "title": {
      "ru": "Миндаль жареный соленый",
      "ro": "Rahat-lokum de vanilie cu arahide Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Миндаль жареный соленый.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Rahat-lokum de vanilie cu arahide Koska."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 137.5
      },
      {
        "label": "500g",
        "price": 275.0
      },
      {
        "label": "1kg",
        "price": 550.0
      }
    ],
    "price": 137.5,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_71.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_81",
    "title": {
      "ru": "Миндаль сырой голден",
      "ro": "Rahat-lokum de vanilie cu fistic Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Миндаль сырой голден.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Rahat-lokum de vanilie cu fistic Koska."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 137.5
      },
      {
        "label": "500g",
        "price": 275.0
      },
      {
        "label": "1kg",
        "price": 550.0
      }
    ],
    "price": 137.5,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_72.jpg",
    "badge": "bestseller",
    "inStock": true
  },
  {
    "id": "prod_82",
    "title": {
      "ru": "Натуральное сушеное манго",
      "ro": "Rahat-lokum cu alune de pădure Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Натуральное сушеное манго.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Rahat-lokum cu alune de pădure Koska."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 105.0
      },
      {
        "label": "500g",
        "price": 210.0
      },
      {
        "label": "1kg",
        "price": 420.0
      }
    ],
    "price": 105.0,
    "currency": "MDL",
    "category": "dried-fruits",
    "image": "images/real_prod_73.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_83",
    "title": {
      "ru": "Натуральный сушеный инжир",
      "ro": "Semințe de dovleac prăjite"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Натуральный сушеный инжир.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Semințe de dovleac prăjite."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 100.0
      },
      {
        "label": "500g",
        "price": 200.0
      },
      {
        "label": "1kg",
        "price": 400.0
      }
    ],
    "price": 100.0,
    "currency": "MDL",
    "category": "dried-fruits",
    "image": "images/real_prod_74.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_84",
    "title": {
      "ru": "Нут жареный леблеби",
      "ro": "Semințe de floarea-soarelui"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Нут жареный леблеби.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Semințe de floarea-soarelui."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 50.0
      }
    ],
    "price": 50.0,
    "currency": "MDL",
    "category": "sweets",
    "image": "images/real_prod_75.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_85",
    "title": {
      "ru": "Папайя сушеная.",
      "ro": "Sos de rodie Narșarab"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Папайя сушеная..",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Sos de rodie Narșarab."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 105.0
      },
      {
        "label": "500g",
        "price": 210.0
      },
      {
        "label": "1kg",
        "price": 420.0
      }
    ],
    "price": 105.0,
    "currency": "MDL",
    "category": "dried-fruits",
    "image": "images/real_prod_76.jpg",
    "badge": "popular",
    "inStock": true
  },
  {
    "id": "prod_86",
    "title": {
      "ru": "Патока виноградная",
      "ro": "Condimente pentru grătar și carne"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Патока виноградная.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Condimente pentru grătar și carne."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 110.0
      }
    ],
    "price": 110.0,
    "currency": "MDL",
    "category": "sweets",
    "image": "images/real_prod_77.jpg",
    "badge": "bestseller",
    "inStock": true
  },
  {
    "id": "prod_87",
    "title": {
      "ru": "Патока из шелковицы",
      "ro": "Condimente pentru pui în stil turcesc"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Патока из шелковицы.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Condimente pentru pui în stil turcesc."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 110.0
      }
    ],
    "price": 110.0,
    "currency": "MDL",
    "category": "sweets",
    "image": "images/real_prod_78.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_88",
    "title": {
      "ru": "Пишмание классическое Koska 150г",
      "ro": "Condimente pentru pește și fructe de mare"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Пишмание классическое Koska 150г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Condimente pentru pește și fructe de mare."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "150Г",
        "price": 85.0
      }
    ],
    "price": 85.0,
    "currency": "MDL",
    "category": "halva",
    "image": "images/real_prod_79.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_89",
    "title": {
      "ru": "Пишмание с фисташками Koska 250г",
      "ro": "Condimente Pul Biber (fulgi de ardei)"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Пишмание с фисташками Koska 250г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Condimente Pul Biber (fulgi de ardei)."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 95.0
      },
      {
        "label": "500g",
        "price": 190.0
      },
      {
        "label": "1kg",
        "price": 380.0
      }
    ],
    "price": 95.0,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_80.jpg",
    "badge": "new",
    "inStock": true
  },
  {
    "id": "prod_90",
    "title": {
      "ru": "Рахат лукум классический",
      "ro": "Sumac turcesc"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Рахат лукум классический.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Sumac turcesc."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 50.0
      },
      {
        "label": "500g",
        "price": 100.0
      },
      {
        "label": "1kg",
        "price": 200.0
      }
    ],
    "price": 50.0,
    "currency": "MDL",
    "category": "rahat-lukum",
    "image": "images/real_prod_81.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_91",
    "title": {
      "ru": "Рожковое патока",
      "ro": "Kumquat uscat"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Рожковое патока.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Kumquat uscat."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 100.0
      }
    ],
    "price": 100.0,
    "currency": "MDL",
    "category": "sweets",
    "image": "images/real_prod_82.jpg",
    "badge": "bestseller",
    "inStock": true
  },
  {
    "id": "prod_92",
    "title": {
      "ru": "Смесь орехов с фисташкой",
      "ro": "Pastă de tomate turcească 830g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Смесь орехов с фисташкой.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pastă de tomate turcească 830g."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 150.0
      },
      {
        "label": "500g",
        "price": 300.0
      },
      {
        "label": "1kg",
        "price": 600.0
      }
    ],
    "price": 150.0,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_83.jpg",
    "badge": "popular",
    "inStock": true
  },
  {
    "id": "prod_93",
    "title": {
      "ru": "Сублимированная клубника в шоколаде",
      "ro": "Pastă de ardei iute 700g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Сублимированная клубника в шоколаде.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pastă de ardei iute 700g."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 225.0
      },
      {
        "label": "500g",
        "price": 450.0
      },
      {
        "label": "1kg",
        "price": 900.0
      }
    ],
    "price": 225.0,
    "currency": "MDL",
    "category": "dragees",
    "image": "images/real_prod_84.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_94",
    "title": {
      "ru": "Сушенный кокос",
      "ro": "Pastă de ardei dulce 700g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Сушенный кокос.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pastă de ardei dulce 700g."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 100.0
      },
      {
        "label": "500g",
        "price": 200.0
      },
      {
        "label": "1kg",
        "price": 400.0
      }
    ],
    "price": 100.0,
    "currency": "MDL",
    "category": "dried-fruits",
    "image": "images/real_prod_85.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_95",
    "title": {
      "ru": "Сушеное помело",
      "ro": "Ibric turcesc din cupru 300ml"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Сушеное помело.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ibric turcesc din cupru 300ml."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 75.0
      },
      {
        "label": "500g",
        "price": 150.0
      },
      {
        "label": "1kg",
        "price": 300.0
      }
    ],
    "price": 75.0,
    "currency": "MDL",
    "category": "dried-fruits",
    "image": "images/real_prod_86.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_96",
    "title": {
      "ru": "Тахини с пастой из фундука и пекмезом Koska 320г",
      "ro": "Pahare turcești armudu (6 buc)"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Тахини с пастой из фундука и пекмезом Koska 320г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pahare turcești armudu (6 buc)."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 100.0
      },
      {
        "label": "500g",
        "price": 200.0
      },
      {
        "label": "1kg",
        "price": 400.0
      }
    ],
    "price": 100.0,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_87.png",
    "badge": "bestseller",
    "inStock": true
  },
  {
    "id": "prod_97",
    "title": {
      "ru": "Тахини с пекмезом из рожкового дерева Koska 350г",
      "ro": "Cafea turcească Kurukahveci Mehmet Efendi 100g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Тахини с пекмезом из рожкового дерева Koska 350г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Cafea turcească Kurukahveci Mehmet Efendi 100g."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "350Г",
        "price": 90.0
      }
    ],
    "price": 90.0,
    "currency": "MDL",
    "category": "halva",
    "image": "images/real_prod_88.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_98",
    "title": {
      "ru": "Турецкий кофе с кардамоном Nuri Toplar 250г",
      "ro": "Cafea turcească Kurukahveci Mehmet Efendi 250g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Турецкий кофе с кардамоном Nuri Toplar 250г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Cafea turcească Kurukahveci Mehmet Efendi 250g."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "250Г",
        "price": 210.0
      }
    ],
    "price": 210.0,
    "currency": "MDL",
    "category": "coffee",
    "image": "images/real_prod_89.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_99",
    "title": {
      "ru": "Финики королевские",
      "ro": "Cafea turcească Kurukahveci Mehmet Efendi 500g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Финики королевские.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Cafea turcească Kurukahveci Mehmet Efendi 500g."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 137.5
      },
      {
        "label": "500g",
        "price": 275.0
      },
      {
        "label": "1kg",
        "price": 550.0
      }
    ],
    "price": 137.5,
    "currency": "MDL",
    "category": "dried-fruits",
    "image": "images/real_prod_503.jpg",
    "badge": "popular",
    "inStock": true
  },
  {
    "id": "prod_100",
    "title": {
      "ru": "Фисташки жареные малосольные",
      "ro": "Cafea turcească cu mastic 200g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Фисташки жареные малосольные.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Cafea turcească cu mastic 200g."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 187.5
      },
      {
        "label": "500g",
        "price": 375.0
      },
      {
        "label": "1kg",
        "price": 750.0
      }
    ],
    "price": 187.5,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_90.jpg",
    "badge": "new",
    "inStock": true
  },
  {
    "id": "prod_101",
    "title": {
      "ru": "Фисташки жареные соленые",
      "ro": "Cafea turcească cu cardamom 200g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Фисташки жареные соленые.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Cafea turcească cu cardamom 200g."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 175.0
      },
      {
        "label": "500g",
        "price": 350.0
      },
      {
        "label": "1kg",
        "price": 700.0
      }
    ],
    "price": 175.0,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_91.jpg",
    "badge": "bestseller",
    "inStock": true
  },
  {
    "id": "prod_102",
    "title": {
      "ru": "Фундук в шоколаде",
      "ro": "Ceai turcesc Çaykur Rize 500g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Фундук в шоколаде.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ceai turcesc Çaykur Rize 500g."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 125.0
      },
      {
        "label": "500g",
        "price": 250.0
      },
      {
        "label": "1kg",
        "price": 500.0
      }
    ],
    "price": 125.0,
    "currency": "MDL",
    "category": "dragees",
    "image": "images/product_7.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_103",
    "title": {
      "ru": "Фундук жареный",
      "ro": "Ceai turcesc Çaykur Altınbaş 500g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Фундук жареный.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ceai turcesc Çaykur Altınbaş 500g."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 175.0
      },
      {
        "label": "500g",
        "price": 350.0
      },
      {
        "label": "1kg",
        "price": 700.0
      }
    ],
    "price": 175.0,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_92.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_104",
    "title": {
      "ru": "Халва диабетическая Koska 200г",
      "ro": "Ceai turcesc Çaykur Tiryaki 1000g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Халва диабетическая Koska 200г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ceai turcesc Çaykur Tiryaki 1000g."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "200Г",
        "price": 70.0
      }
    ],
    "price": 70.0,
    "currency": "MDL",
    "category": "halva",
    "image": "images/real_prod_93.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_105",
    "title": {
      "ru": "Халва кунжутная классическая Koska 200г",
      "ro": "Ceai turcesc Dogadan tei și cimbrișor"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Халва кунжутная классическая Koska 200г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ceai turcesc Dogadan tei și cimbrișor."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "200Г",
        "price": 55.0
      }
    ],
    "price": 55.0,
    "currency": "MDL",
    "category": "halva",
    "image": "images/real_prod_94.png",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_106",
    "title": {
      "ru": "Халва кунжутная с какао Koska 200г",
      "ro": "Ceai turcesc Dogadan instant de rodie"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Халва кунжутная с какао Koska 200г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ceai turcesc Dogadan instant de rodie."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "200Г",
        "price": 60.0
      }
    ],
    "price": 60.0,
    "currency": "MDL",
    "category": "halva",
    "image": "images/product_8.jpg",
    "badge": "popular",
    "inStock": true
  },
  {
    "id": "prod_107",
    "title": {
      "ru": "Халва кунжутная с фисташками Koska 200г",
      "ro": "Ceai turcesc instant de măr"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Халва кунжутная с фисташками Koska 200г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ceai turcesc instant de măr."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "200Г",
        "price": 80.0
      }
    ],
    "price": 80.0,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_95.png",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_108",
    "title": {
      "ru": "Халва кунжутная с фундуком Koska 200г",
      "ro": "Curmale Regale Medjool"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Халва кунжутная с фундуком Koska 200г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Curmale Regale Medjool."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "200Г",
        "price": 70.0
      }
    ],
    "price": 70.0,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_96.png",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_109",
    "title": {
      "ru": "Халва с ореховым пюре Koska 40г",
      "ro": "Curmale Tunis pe cracă"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Халва с ореховым пюре Koska 40г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Curmale Tunis pe cracă."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 16.0
      },
      {
        "label": "500g",
        "price": 32.0
      },
      {
        "label": "1kg",
        "price": 64.0
      }
    ],
    "price": 16.0,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_97.png",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_110",
    "title": {
      "ru": "Халва с рожковым деревом и фундуком Koska 250г",
      "ro": "Fistic întreg crud decojit"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Халва с рожковым деревом и фундуком Koska 250г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Fistic întreg crud decojit."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 90.0
      },
      {
        "label": "500g",
        "price": 180.0
      },
      {
        "label": "1kg",
        "price": 360.0
      }
    ],
    "price": 90.0,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_98.png",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_111",
    "title": {
      "ru": "Халва фисташковая Koska 40г",
      "ro": "Fistic turcesc prăjit sărat Antep"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Халва фисташковая Koska 40г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Fistic turcesc prăjit sărat Antep."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 20.0
      },
      {
        "label": "500g",
        "price": 40.0
      },
      {
        "label": "1kg",
        "price": 80.0
      }
    ],
    "price": 20.0,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_99.png",
    "badge": "new",
    "inStock": true
  },
  {
    "id": "prod_112",
    "title": {
      "ru": "Халва фисташковая диабетическая Koska 200г",
      "ro": "Alune de pădure prăjite albite"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Халва фисташковая диабетическая Koska 200г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Alune de pădure prăjite albite."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "200Г",
        "price": 90.0
      }
    ],
    "price": 90.0,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_100.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_113",
    "title": {
      "ru": "Чай Çaykur Altınbaş 500г",
      "ro": "Alune de pădure crude selecte"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чай Çaykur Altınbaş 500г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Alune de pădure crude selecte."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "500Г",
        "price": 200.0
      }
    ],
    "price": 200.0,
    "currency": "MDL",
    "category": "tea",
    "image": "images/real_prod_101.jpg",
    "badge": "popular",
    "inStock": true
  },
  {
    "id": "prod_114",
    "title": {
      "ru": "Чай Çaykur Altınbaş в жестяной банке 100г",
      "ro": "Halva de susan Koska cu vanilie 400g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чай Çaykur Altınbaş в жестяной банке 100г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Halva de susan Koska cu vanilie 400g."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "100Г",
        "price": 80.0
      }
    ],
    "price": 80.0,
    "currency": "MDL",
    "category": "tea",
    "image": "images/real_prod_102.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_115",
    "title": {
      "ru": "Чай из бутонов роз 100г",
      "ro": "Halva de susan Koska cu fistic 400g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чай из бутонов роз 100г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Halva de susan Koska cu fistic 400g."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "100Г",
        "price": 120.0
      }
    ],
    "price": 120.0,
    "currency": "MDL",
    "category": "tea",
    "image": "images/real_prod_103.png",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_116",
    "title": {
      "ru": "Чай из ромашки 100г",
      "ro": "Halva de susan Koska cu cacao 400g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чай из ромашки 100г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Halva de susan Koska cu cacao 400g."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "100Г",
        "price": 80.0
      }
    ],
    "price": 80.0,
    "currency": "MDL",
    "category": "tea",
    "image": "images/real_prod_104.png",
    "badge": "bestseller",
    "inStock": true
  },
  {
    "id": "prod_117",
    "title": {
      "ru": "Чай из цветков граната 100г",
      "ro": "Halva de susan marmorată Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чай из цветков граната 100г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Halva de susan marmorată Koska."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "100Г",
        "price": 100.0
      }
    ],
    "price": 100.0,
    "currency": "MDL",
    "category": "tea",
    "image": "images/real_prod_504.png",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_118",
    "title": {
      "ru": "Чай из шалфея 50г",
      "ro": "Halva de floarea-soarelui cu fistic"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чай из шалфея 50г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Halva de floarea-soarelui cu fistic."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "50Г",
        "price": 21.0
      }
    ],
    "price": 21.0,
    "currency": "MDL",
    "category": "tea",
    "image": "images/real_prod_105.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_119",
    "title": {
      "ru": "Чай каркадэ 100г",
      "ro": "Fructe confiate mix asortat"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чай каркадэ 100г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Fructe confiate mix asortat."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "100Г",
        "price": 55.0
      }
    ],
    "price": 55.0,
    "currency": "MDL",
    "category": "tea",
    "image": "images/real_prod_106.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_120",
    "title": {
      "ru": "Чай с мятой и лимоном 100г",
      "ro": "Prune uscate fără sâmburi suculente"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чай с мятой и лимоном 100г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Prune uscate fără sâmburi suculente."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "100Г",
        "price": 60.0
      }
    ],
    "price": 60.0,
    "currency": "MDL",
    "category": "tea",
    "image": "images/real_prod_107.png",
    "badge": "popular",
    "inStock": true
  },
  {
    "id": "prod_121",
    "title": {
      "ru": "Чай черный турецкий Caykur rize Turist",
      "ro": "Ciocolată turcească Ulker cu fistic"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чай черный турецкий Caykur rize Turist.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ciocolată turcească Ulker cu fistic."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 190.0
      }
    ],
    "price": 190.0,
    "currency": "MDL",
    "category": "tea",
    "image": "images/real_prod_108.jpg",
    "badge": "bestseller",
    "inStock": true
  },
  {
    "id": "prod_122",
    "title": {
      "ru": "Черный чай с бергамотом Tomurcuk",
      "ro": "Ciocolată turcească Godiva duet fistic"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Черный чай с бергамотом Tomurcuk.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ciocolată turcească Godiva duet fistic."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 80.0
      }
    ],
    "price": 80.0,
    "currency": "MDL",
    "category": "tea",
    "image": "images/real_prod_109.jpg",
    "badge": "new",
    "inStock": true
  },
  {
    "id": "prod_123",
    "title": {
      "ru": "Чурчхела с грецким орехом и виноградным соком",
      "ro": "Bomboane de ciocolată cu umplutură de tahini"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чурчхела с грецким орехом и виноградным соком.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Bomboane de ciocolată cu umplutură de tahini."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 100.0
      },
      {
        "label": "500g",
        "price": 200.0
      },
      {
        "label": "1kg",
        "price": 400.0
      }
    ],
    "price": 100.0,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_110.png",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_124",
    "title": {
      "ru": "Чурчхела с грецким орехом и гранатовым соком",
      "ro": "Pastă de epimedium Themra 240g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чурчхела с грецким орехом и гранатовым соком.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pastă de epimedium Themra 240g."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 100.0
      },
      {
        "label": "500g",
        "price": 200.0
      },
      {
        "label": "1kg",
        "price": 400.0
      }
    ],
    "price": 100.0,
    "currency": "MDL",
    "category": "nuts",
    "image": "images/real_prod_111.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_125",
    "title": {
      "ru": "Шоколадно-миндальное драже",
      "ro": "Pastă de epimedium Sahimerdan 240g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Шоколадно-миндальное драже.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pastă de epimedium Sahimerdan 240g."
    },
    "unitType": "weighted",
    "weights": [
      {
        "label": "250g",
        "price": 125.0
      },
      {
        "label": "500g",
        "price": 250.0
      },
      {
        "label": "1kg",
        "price": 500.0
      }
    ],
    "price": 125.0,
    "currency": "MDL",
    "category": "dragees",
    "image": "images/real_prod_112.jpg",
    "badge": null,
    "inStock": true
  },
  {
    "id": "prod_126",
    "title": {
      "ru": "Экстракт рожкового дерева Koska 310г",
      "ro": "Baclava palatului cu fistic Karaköy Güllüoğlu"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Экстракт рожкового дерева Koska 310г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Baclava palatului cu fistic Karaköy Güllüoğlu."
    },
    "unitType": "unit",
    "weights": [
      {
        "label": "310Г",
        "price": 80.0
      }
    ],
    "price": 80.0,
    "currency": "MDL",
    "category": "halva",
    "image": "images/real_prod_113.png",
    "badge": "bestseller",
    "inStock": true
  }
];
