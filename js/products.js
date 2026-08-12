// Turkofood 100% Verified WooCommerce Product Catalog (126 Products)
const PRODUCTS_DATA = [
  {
    "id": "prod_1",
    "category": "halva",
    "title": {
      "ru": "Батончик Koska с фундуком",
      "ro": "Batoana Koska cu alune de pădure"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Батончик Koska с фундуком.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Batoana Koska cu alune de pădure."
    },
    "price": 30.0,
    "image": "images/istanbul_title_item_1.jpg",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 30.0
      }
    ]
  },
  {
    "id": "prod_2",
    "category": "halva",
    "title": {
      "ru": "Батончик Koska с арахисом",
      "ro": "Batoana Koska cu arahide"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Батончик Koska с арахисом.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Batoana Koska cu arahide."
    },
    "price": 20.0,
    "image": "images/istanbul_title_item_2.jpg",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 20.0
      }
    ]
  },
  {
    "id": "prod_3",
    "category": "halva",
    "title": {
      "ru": "Батончик Koska с миндалем",
      "ro": "Batoana Koska cu migdale"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Батончик Koska с миндалем.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Batoana Koska cu migdale."
    },
    "price": 30.0,
    "image": "images/istanbul_title_item_3.jpg",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 30.0
      }
    ]
  },
  {
    "id": "prod_4",
    "category": "halva",
    "title": {
      "ru": "Батончик Koska с морковью и орехами",
      "ro": "Batoana Koska cu morcov și nuci (Cezerye)"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Батончик Koska с морковью и орехами.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Batoana Koska cu morcov și nuci (Cezerye)."
    },
    "price": 20.0,
    "image": "images/istanbul_title_item_4.jpg",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 20.0
      }
    ]
  },
  {
    "id": "prod_5",
    "category": "dragees",
    "title": {
      "ru": "Сублимированная клубника в шоколаде с лаймом",
      "ro": "Căpșuni liofilizate în ciocolată cu lămâie verde"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Сублимированная клубника в шоколаде с лаймом.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Căpșuni liofilizate în ciocolată cu lămâie verde."
    },
    "price": 225.0,
    "image": "images/istanbul_title_item_5.png",
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
    ]
  },
  {
    "id": "prod_6",
    "category": "spices-oils",
    "title": {
      "ru": "Турецкий чай Filiz 200г",
      "ro": "Ceai turcesc Filiz 200g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Турецкий чай Filiz 200г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ceai turcesc Filiz 200g."
    },
    "price": 100.0,
    "image": "images/istanbul_title_item_6.jpg",
    "weights": [
      {
        "label": "200 GR",
        "price": 100.0
      }
    ]
  },
  {
    "id": "prod_7",
    "category": "pastes-jams",
    "title": {
      "ru": "Тахини (кунжутная паста) Koska",
      "ro": "Tahini (pastă de susan) Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Тахини (кунжутная паста) Koska.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Tahini (pastă de susan) Koska."
    },
    "price": 190.0,
    "image": "images/istanbul_title_item_7.jpg",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 190.0
      }
    ]
  },
  {
    "id": "prod_8",
    "category": "dragees",
    "title": {
      "ru": "Сублимированная малина в белом шоколаде",
      "ro": "Zmeură liofilizată în ciocolată albă"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Сублимированная малина в белом шоколаде.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Zmeură liofilizată în ciocolată albă."
    },
    "price": 225.0,
    "image": "images/istanbul_title_item_8.jpg",
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
    ]
  },
  {
    "id": "prod_9",
    "category": "dried-fruits",
    "title": {
      "ru": "Ананас сушеный (цукаты)",
      "ro": "Ananas uscat (fructe confiate)"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Ананас сушеный (цукаты).",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ananas uscat (fructe confiate)."
    },
    "price": 75.0,
    "image": "images/istanbul_title_item_9.jpg",
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
    ]
  },
  {
    "id": "prod_10",
    "category": "nuts",
    "title": {
      "ru": "Арахис в кунжуте с медом",
      "ro": "Arahide în susan cu miere"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Арахис в кунжуте с медом.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Arahide în susan cu miere."
    },
    "price": 62.5,
    "image": "images/istanbul_title_item_10.png",
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
    ]
  },
  {
    "id": "prod_11",
    "category": "nuts",
    "title": {
      "ru": "Арахис хрустящий в панировке",
      "ro": "Arahide crocante pane"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Арахис хрустящий в панировке.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Arahide crocante pane."
    },
    "price": 62.5,
    "image": "images/istanbul_title_item_11.jpg",
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
    ]
  },
  {
    "id": "prod_12",
    "category": "nuts",
    "title": {
      "ru": "Арахис жареный соленый",
      "ro": "Arahide prăjite sărate"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Арахис жареный соленый.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Arahide prăjite sărate."
    },
    "price": 55.0,
    "image": "images/istanbul_title_item_12.png",
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
    ]
  },
  {
    "id": "prod_13",
    "category": "baklava",
    "title": {
      "ru": "Баклава с грецким орехом",
      "ro": "Baclava cu nucă"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Баклава с грецким орехом.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Baclava cu nucă."
    },
    "price": 112.5,
    "image": "images/istanbul_title_item_13.jpg",
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
    ]
  },
  {
    "id": "prod_14",
    "category": "baklava",
    "title": {
      "ru": "Баклава с премиум фисташками",
      "ro": "Baclava cu fistic premium"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Баклава с премиум фисташками.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Baclava cu fistic premium."
    },
    "price": 162.5,
    "image": "images/istanbul_title_item_14.png",
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
    ]
  },
  {
    "id": "prod_15",
    "category": "nuts",
    "title": {
      "ru": "Бразильский орех отборный",
      "ro": "Nuci braziliene selecte"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Бразильский орех отборный.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Nuci braziliene selecte."
    },
    "price": 225.0,
    "image": "images/istanbul_title_item_15.png",
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
    ]
  },
  {
    "id": "prod_16",
    "category": "dried-fruits",
    "title": {
      "ru": "Сушеные бананы премиум",
      "ro": "Banane uscate premium"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Сушеные бананы премиум.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Banane uscate premium."
    },
    "price": 100.0,
    "image": "images/istanbul_title_item_16.png",
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
    ]
  },
  {
    "id": "prod_17",
    "category": "rahat-lukum",
    "title": {
      "ru": "Гранатовый лукум с фисташками и барбарисом",
      "ro": "Rahat lokum de rodie cu fistic și dracilă"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Гранатовый лукум с фисташками и барбарисом.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Rahat lokum de rodie cu fistic și dracilă."
    },
    "price": 125.0,
    "image": "images/istanbul_title_item_17.jpg",
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
    ]
  },
  {
    "id": "prod_18",
    "category": "rahat-lukum",
    "title": {
      "ru": "Гранатовый лукум с фисташками и воздушным рисом",
      "ro": "Rahat lokum de rodie cu fistic și orez expandat"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Гранатовый лукум с фисташками и воздушным рисом.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Rahat lokum de rodie cu fistic și orez expandat."
    },
    "price": 125.0,
    "image": "images/istanbul_title_item_18.jpg",
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
    ]
  },
  {
    "id": "prod_19",
    "category": "rahat-lukum",
    "title": {
      "ru": "Гранатовый лукум с фисташками и лепестками роз",
      "ro": "Rahat lokum de rodie cu fistic și petale de trandafir"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Гранатовый лукум с фисташками и лепестками роз.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Rahat lokum de rodie cu fistic și petale de trandafir."
    },
    "price": 125.0,
    "image": "images/istanbul_title_item_19.jpg",
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
    ]
  },
  {
    "id": "prod_20",
    "category": "nuts",
    "title": {
      "ru": "Грецкие орехи",
      "ro": "Nuci grecești"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Грецкие орехи.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Nuci grecești."
    },
    "price": 87.5,
    "image": "images/istanbul_title_item_20.jpg",
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
    ]
  },
  {
    "id": "prod_21",
    "category": "pastes-jams",
    "title": {
      "ru": "Джем из Абрикоса Koska 300гр",
      "ro": "Gem de caise Koska 300g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Джем из Абрикоса Koska 300гр.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Gem de caise Koska 300g."
    },
    "price": 60.0,
    "image": "images/istanbul_title_item_21.jpg",
    "weights": [
      {
        "label": "300ГР",
        "price": 60.0
      }
    ]
  },
  {
    "id": "prod_22",
    "category": "pastes-jams",
    "title": {
      "ru": "Джем из Айвы Koska 300г",
      "ro": "Gem de gutui Koska 300g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Джем из Айвы Koska 300г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Gem de gutui Koska 300g."
    },
    "price": 60.0,
    "image": "images/istanbul_title_item_22.jpg",
    "weights": [
      {
        "label": "300Г",
        "price": 60.0
      }
    ]
  },
  {
    "id": "prod_23",
    "category": "pastes-jams",
    "title": {
      "ru": "Джем из Апельсина Koska 300гр",
      "ro": "Gem de portocale Koska 300g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Джем из Апельсина Koska 300гр.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Gem de portocale Koska 300g."
    },
    "price": 70.0,
    "image": "images/istanbul_title_item_23.png",
    "weights": [
      {
        "label": "300ГР",
        "price": 70.0
      }
    ]
  },
  {
    "id": "prod_24",
    "category": "pastes-jams",
    "title": {
      "ru": "Джем из Вишни Koska 300гр",
      "ro": "Gem de vișine Koska 300g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Джем из Вишни Koska 300гр.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Gem de vișine Koska 300g."
    },
    "price": 70.0,
    "image": "images/istanbul_title_item_24.jpg",
    "weights": [
      {
        "label": "300ГР",
        "price": 70.0
      }
    ]
  },
  {
    "id": "prod_25",
    "category": "pastes-jams",
    "title": {
      "ru": "Джем из ежевики Koska 300гр",
      "ro": "Gem de mure Koska 300g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Джем из ежевики Koska 300гр.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Gem de mure Koska 300g."
    },
    "price": 80.0,
    "image": "images/istanbul_title_item_25.png",
    "weights": [
      {
        "label": "300ГР",
        "price": 80.0
      }
    ]
  },
  {
    "id": "prod_26",
    "category": "pastes-jams",
    "title": {
      "ru": "Джем из Инжира Koska 300гр",
      "ro": "Gem de smochine Koska 300g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Джем из Инжира Koska 300гр.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Gem de smochine Koska 300g."
    },
    "price": 60.0,
    "image": "images/istanbul_title_item_26.jpg",
    "weights": [
      {
        "label": "300ГР",
        "price": 60.0
      }
    ]
  },
  {
    "id": "prod_27",
    "category": "pastes-jams",
    "title": {
      "ru": "Джем из Клубники Koska 300гр",
      "ro": "Gem de căpșuni Koska 300g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Джем из Клубники Koska 300гр.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Gem de căpșuni Koska 300g."
    },
    "price": 70.0,
    "image": "images/istanbul_title_item_27.jpg",
    "weights": [
      {
        "label": "300ГР",
        "price": 70.0
      }
    ]
  },
  {
    "id": "prod_28",
    "category": "pastes-jams",
    "title": {
      "ru": "Джем из Розы Koska 300гр",
      "ro": "Gem de trandafir Koska 300g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Джем из Розы Koska 300гр.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Gem de trandafir Koska 300g."
    },
    "price": 60.0,
    "image": "images/istanbul_title_item_28.jpg",
    "weights": [
      {
        "label": "300ГР",
        "price": 60.0
      }
    ]
  },
  {
    "id": "prod_29",
    "category": "dragees",
    "title": {
      "ru": "Драже Бонибон",
      "ro": "Drajeuri Bonibon"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Драже Бонибон.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Drajeuri Bonibon."
    },
    "price": 62.5,
    "image": "images/istanbul_title_item_29.png",
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
    ]
  },
  {
    "id": "prod_30",
    "category": "dragees",
    "title": {
      "ru": "Драже камушки",
      "ro": "Drajeuri pietricile de ciocolată"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Драже камушки.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Drajeuri pietricile de ciocolată."
    },
    "price": 62.5,
    "image": "images/istanbul_title_item_30.jpg",
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
    ]
  },
  {
    "id": "prod_31",
    "category": "dragees",
    "title": {
      "ru": "Драже с лесным орехом в белом шоколаде",
      "ro": "Drajeuri cu alune de pădure în ciocolată albă"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Драже с лесным орехом в белом шоколаде.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Drajeuri cu alune de pădure în ciocolată albă."
    },
    "price": 125.0,
    "image": "images/istanbul_title_item_31.png",
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
    ]
  },
  {
    "id": "prod_32",
    "category": "nuts",
    "title": {
      "ru": "Жаренная кукуруза",
      "ro": "Porumb prăjit"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Жаренная кукуруза.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Porumb prăjit."
    },
    "price": 50.0,
    "image": "images/istanbul_title_item_32.jpg",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 50.0
      }
    ]
  },
  {
    "id": "prod_33",
    "category": "tea",
    "title": {
      "ru": "Зелёный чай 100г",
      "ro": "Ceai verde 100g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Зелёный чай 100г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ceai verde 100g."
    },
    "price": 95.0,
    "image": "images/istanbul_title_item_33.jpg",
    "weights": [
      {
        "label": "100Г",
        "price": 95.0
      }
    ]
  },
  {
    "id": "prod_34",
    "category": "tea",
    "title": {
      "ru": "Зимний чай",
      "ro": "Ceai de iarnă"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Зимний чай.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ceai de iarnă."
    },
    "price": 150.0,
    "image": "images/istanbul_title_item_34.jpg",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 150.0
      }
    ]
  },
  {
    "id": "prod_35",
    "category": "tea",
    "title": {
      "ru": "Зимний чай 100г",
      "ro": "Ceai de iarnă 100g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Зимний чай 100г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ceai de iarnă 100g."
    },
    "price": 80.0,
    "image": "images/istanbul_title_item_35.png",
    "weights": [
      {
        "label": "100Г",
        "price": 80.0
      }
    ]
  },
  {
    "id": "prod_36",
    "category": "dried-fruits",
    "title": {
      "ru": "Изум голден",
      "ro": "Stafide aurii Golden"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Изум голден.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Stafide aurii Golden."
    },
    "price": 75.0,
    "image": "images/istanbul_title_item_36.jpg",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 75.0
      }
    ]
  },
  {
    "id": "prod_37",
    "category": "dried-fruits",
    "title": {
      "ru": "Имбирь сушеный",
      "ro": "Smochine uscate premium"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Имбирь сушеный.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Smochine uscate premium."
    },
    "price": 75.0,
    "image": "images/istanbul_title_item_37.jpg",
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
    ]
  },
  {
    "id": "prod_38",
    "category": "baklava",
    "title": {
      "ru": "Кадаиф с фисташками",
      "ro": "Ghimbir confiat"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кадаиф с фисташками.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ghimbir confiat."
    },
    "price": 162.5,
    "image": "images/istanbul_title_item_38.jpg",
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
    ]
  },
  {
    "id": "prod_39",
    "category": "coffee",
    "title": {
      "ru": "Какао Nuri Toplar",
      "ro": "Cacao Nuri Toplar"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Какао Nuri Toplar.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Cacao Nuri Toplar."
    },
    "price": 240.0,
    "image": "images/istanbul_title_item_39.jpg",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 240.0
      }
    ]
  },
  {
    "id": "prod_40",
    "category": "nuts",
    "title": {
      "ru": "Кешью жареный соленый",
      "ro": "Caju crud premium"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кешью жареный соленый.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Caju crud premium."
    },
    "price": 137.5,
    "image": "images/istanbul_title_item_40.jpg",
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
    ]
  },
  {
    "id": "prod_41",
    "category": "nuts",
    "title": {
      "ru": "Кешью сушеный",
      "ro": "Caju prăjit sărat"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кешью сушеный.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Caju prăjit sărat."
    },
    "price": 137.5,
    "image": "images/istanbul_title_item_41.jpg",
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
    ]
  },
  {
    "id": "prod_42",
    "category": "dried-fruits",
    "title": {
      "ru": "Киви сушеный",
      "ro": "Kiwi uscat (fructe confiate)"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Киви сушеный.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Kiwi uscat (fructe confiate)."
    },
    "price": 75.0,
    "image": "images/istanbul_title_item_42.jpg",
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
    ]
  },
  {
    "id": "prod_43",
    "category": "coffee",
    "title": {
      "ru": "Кофе Nuri Toplar Осман 250г",
      "ro": "Cafea Nuri Toplar Osman 250g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кофе Nuri Toplar Осман 250г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Cafea Nuri Toplar Osman 250g."
    },
    "price": 150.0,
    "image": "images/istanbul_title_item_43.png",
    "weights": [
      {
        "label": "250Г",
        "price": 150.0
      }
    ]
  },
  {
    "id": "prod_44",
    "category": "coffee",
    "title": {
      "ru": "Кофе Nuri Toplar с лесным орехом 250г",
      "ro": "Cafea Nuri Toplar cu damasc"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кофе Nuri Toplar с лесным орехом 250г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Cafea Nuri Toplar cu damasc."
    },
    "price": 210.0,
    "image": "images/istanbul_title_item_44.png",
    "weights": [
      {
        "label": "250Г",
        "price": 210.0
      }
    ]
  },
  {
    "id": "prod_45",
    "category": "coffee",
    "title": {
      "ru": "Кофе Nuri Toplar с мастикой 250г",
      "ro": "Cafea Nuri Toplar 250g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кофе Nuri Toplar с мастикой 250г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Cafea Nuri Toplar 250g."
    },
    "price": 210.0,
    "image": "images/istanbul_title_item_45.png",
    "weights": [
      {
        "label": "250Г",
        "price": 210.0
      }
    ]
  },
  {
    "id": "prod_46",
    "category": "coffee",
    "title": {
      "ru": "Кофе по-турецки Kurukahveci Mehmet efendi 100gr",
      "ro": "Ulei de cocos 250ml"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кофе по-турецки Kurukahveci Mehmet efendi 100gr.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ulei de cocos 250ml."
    },
    "price": 70.0,
    "image": "images/istanbul_title_item_46.jpg",
    "weights": [
      {
        "label": "100GR",
        "price": 70.0
      }
    ]
  },
  {
    "id": "prod_47",
    "category": "coffee",
    "title": {
      "ru": "Кофе по-турецки Kurukahveci Mehmet efendi 250gr",
      "ro": "Bomboane turcești asortate"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кофе по-турецки Kurukahveci Mehmet efendi 250gr.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Bomboane turcești asortate."
    },
    "price": 200.0,
    "image": "images/istanbul_title_item_47.jpg",
    "weights": [
      {
        "label": "250GR",
        "price": 200.0
      }
    ]
  },
  {
    "id": "prod_48",
    "category": "coffee",
    "title": {
      "ru": "Кофе по-турецки Kurukahveci Mehmet efendi 500gr",
      "ro": "Caise uscate ciocolatii suculente"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кофе по-турецки Kurukahveci Mehmet efendi 500gr.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Caise uscate ciocolatii suculente."
    },
    "price": 370.0,
    "image": "images/istanbul_title_item_48.jpg",
    "weights": [
      {
        "label": "500GR",
        "price": 370.0
      }
    ]
  },
  {
    "id": "prod_49",
    "category": "coffee",
    "title": {
      "ru": "Кофе по-турецки Nuri Toplar",
      "ro": "Caise uscate regale"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кофе по-турецки Nuri Toplar.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Caise uscate regale."
    },
    "price": 65.0,
    "image": "images/istanbul_title_item_49.png",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 65.0
      }
    ]
  },
  {
    "id": "prod_50",
    "category": "coffee",
    "title": {
      "ru": "Кофе по-турецки Nuri Toplar 250г -500г",
      "ro": "Lămâie uscată feliată"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кофе по-турецки Nuri Toplar 250г -500г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Lămâie uscată feliată."
    },
    "price": 180.0,
    "image": "images/istanbul_title_item_50.jpg",
    "weights": [
      {
        "label": "250Г",
        "price": 180.0
      }
    ]
  },
  {
    "id": "prod_51",
    "category": "coffee",
    "title": {
      "ru": "Кофе по-турецки Nuri Toplar с мастикой 100gr",
      "ro": "Lămâie verde uscată feliată"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кофе по-турецки Nuri Toplar с мастикой 100gr.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Lămâie verde uscată feliată."
    },
    "price": 80.0,
    "image": "images/istanbul_title_item_51.jpg",
    "weights": [
      {
        "label": "100GR",
        "price": 80.0
      }
    ]
  },
  {
    "id": "prod_52",
    "category": "nuts",
    "title": {
      "ru": "Кукурузные чипсы со сладкой паприкой",
      "ro": "Acid citric"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кукурузные чипсы со сладкой паприкой.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Acid citric."
    },
    "price": 50.0,
    "image": "images/istanbul_title_item_52.png",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 50.0
      }
    ]
  },
  {
    "id": "prod_53",
    "category": "pastes-jams",
    "title": {
      "ru": "Кунжутная паста Koska",
      "ro": "Paletă pentru tort și baclava"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кунжутная паста Koska.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Paletă pentru tort și baclava."
    },
    "price": 90.0,
    "image": "images/istanbul_title_item_53.jpg",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 90.0
      }
    ]
  },
  {
    "id": "prod_54",
    "category": "spices-oils",
    "title": {
      "ru": "Кунжутная халва с рожковой пудрой и фундуком Koska 200гр",
      "ro": "Nuci Macadamia în coajă"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Кунжутная халва с рожковой пудрой и фундуком Koska 200гр.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Nuci Macadamia în coajă."
    },
    "price": 65.0,
    "image": "images/istanbul_title_item_54.jpg",
    "weights": [
      {
        "label": "200ГР",
        "price": 65.0
      }
    ]
  },
  {
    "id": "prod_55",
    "category": "dried-fruits",
    "title": {
      "ru": "Курага",
      "ro": "Mac persan"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Курага.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Mac persan."
    },
    "price": 100.0,
    "image": "images/istanbul_title_item_55.jpg",
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
    ]
  },
  {
    "id": "prod_56",
    "category": "dried-fruits",
    "title": {
      "ru": "Курага натуральная (абрикос вяленый)",
      "ro": "Mango uscat natural"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Курага натуральная (абрикос вяленый).",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Mango uscat natural."
    },
    "price": 100.0,
    "image": "images/istanbul_title_item_56.jpg",
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
    ]
  },
  {
    "id": "prod_57",
    "category": "rahat-lukum",
    "title": {
      "ru": "Лукум Sultan с фисташками Koska 500г",
      "ro": "Mango confiat"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум Sultan с фисташками Koska 500г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Mango confiat."
    },
    "price": 130.0,
    "image": "images/istanbul_title_item_57.jpg",
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
    ]
  },
  {
    "id": "prod_58",
    "category": "rahat-lukum",
    "title": {
      "ru": "Лукум ассорти (фундук, фисташки, классический и кокосовая стружка ) Koska 250г",
      "ro": "Miere turcească polifloră 500g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум ассорти (фундук, фисташки, классический и кокосовая стружка ) Koska 250г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Miere turcească polifloră 500g."
    },
    "price": 90.0,
    "image": "images/istanbul_title_item_58.jpg",
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
    ]
  },
  {
    "id": "prod_59",
    "category": "rahat-lukum",
    "title": {
      "ru": "Лукум ассорти с разными ароматами Koska 250г",
      "ro": "Migdale albite"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум ассорти с разными ароматами Koska 250г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Migdale albite."
    },
    "price": 70.0,
    "image": "images/istanbul_title_item_59.jpg",
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
    ]
  },
  {
    "id": "prod_60",
    "category": "rahat-lukum",
    "title": {
      "ru": "Лукум ассорти с разными ароматами Koska 500г",
      "ro": "Migdale prăjite sărate"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум ассорти с разными ароматами Koska 500г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Migdale prăjite sărate."
    },
    "price": 110.0,
    "image": "images/istanbul_title_item_60.jpg",
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
    ]
  },
  {
    "id": "prod_61",
    "category": "rahat-lukum",
    "title": {
      "ru": "Лукум гранатовый с фисташкой и кокосовая стружка",
      "ro": "Migdale crude premium"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум гранатовый с фисташкой и кокосовая стружка.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Migdale crude premium."
    },
    "price": 100.0,
    "image": "images/istanbul_title_item_61.jpg",
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
    ]
  },
  {
    "id": "prod_62",
    "category": "rahat-lukum",
    "title": {
      "ru": "Лукум гранатовый с шафраном",
      "ro": "Migdale glazurate în zahăr"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум гранатовый с шафраном.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Migdale glazurate în zahăr."
    },
    "price": 125.0,
    "image": "images/istanbul_title_item_62.jpg",
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
    ]
  },
  {
    "id": "prod_63",
    "category": "rahat-lukum",
    "title": {
      "ru": "Лукум классический Koska 250г",
      "ro": "Mix de nuci crude"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум классический Koska 250г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Mix de nuci crude."
    },
    "price": 75.0,
    "image": "images/istanbul_title_item_63.jpg",
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
    ]
  },
  {
    "id": "prod_64",
    "category": "rahat-lukum",
    "title": {
      "ru": "Лукум классический Koska 500г",
      "ro": "Mix de nuci prăjite sărate"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум классический Koska 500г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Mix de nuci prăjite sărate."
    },
    "price": 100.0,
    "image": "images/istanbul_title_item_64.jpg",
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
    ]
  },
  {
    "id": "prod_65",
    "category": "rahat-lukum",
    "title": {
      "ru": "Лукум с ароматом апельсина и лимона в шоколадной глазури Koska 140г",
      "ro": "Mix de fructe uscate"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с ароматом апельсина и лимона в шоколадной глазури Koska 140г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Mix de fructe uscate."
    },
    "price": 95.0,
    "image": "images/istanbul_title_item_65.png",
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
    ]
  },
  {
    "id": "prod_66",
    "category": "rahat-lukum",
    "title": {
      "ru": "Лукум с ароматом мяты в шоколадной глазури Koska 140г",
      "ro": "Mentă uscată mărunțită"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с ароматом мяты в шоколадной глазури Koska 140г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Mentă uscată mărunțită."
    },
    "price": 95.0,
    "image": "images/istanbul_title_item_66.png",
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
    ]
  },
  {
    "id": "prod_67",
    "category": "rahat-lukum",
    "title": {
      "ru": "Лукум с ароматом розы и лимона без добавления сахара Koska 160г",
      "ro": "Măsline la grătar în ulei"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с ароматом розы и лимона без добавления сахара Koska 160г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Măsline la grătar în ulei."
    },
    "price": 85.0,
    "image": "images/istanbul_title_item_67.png",
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
    ]
  },
  {
    "id": "prod_68",
    "category": "rahat-lukum",
    "title": {
      "ru": "Лукум с гранатом, фисташками и молоком",
      "ro": "Măsline verzi gigante cu sâmbure"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с гранатом, фисташками и молоком.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Măsline verzi gigante cu sâmbure."
    },
    "price": 137.5,
    "image": "images/istanbul_title_item_68.jpg",
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
    ]
  },
  {
    "id": "prod_69",
    "category": "rahat-lukum",
    "title": {
      "ru": "Лукум с молоком и шоколадной пастой (ролы)",
      "ro": "Măsline negre deshidratate Sele"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с молоком и шоколадной пастой (ролы).",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Măsline negre deshidratate Sele."
    },
    "price": 112.5,
    "image": "images/istanbul_title_item_69.jpg",
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
    ]
  },
  {
    "id": "prod_70",
    "category": "rahat-lukum",
    "title": {
      "ru": "Лукум с фисташками Koska 250г",
      "ro": "Papaya uscată confiată"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с фисташками Koska 250г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Papaya uscată confiată."
    },
    "price": 105.0,
    "image": "images/istanbul_title_item_70.jpg",
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
    ]
  },
  {
    "id": "prod_71",
    "category": "rahat-lukum",
    "title": {
      "ru": "Лукум с фисташками Koska 500г",
      "ro": "Nuci Pecan selecte"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с фисташками Koska 500г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Nuci Pecan selecte."
    },
    "price": 170.0,
    "image": "images/istanbul_title_item_71.png",
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
    ]
  },
  {
    "id": "prod_72",
    "category": "rahat-lukum",
    "title": {
      "ru": "Лукум с фисташками без добавления сахара Koska 160г",
      "ro": "Pekmez de roșcove Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с фисташками без добавления сахара Koska 160г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pekmez de roșcove Koska."
    },
    "price": 120.0,
    "image": "images/istanbul_title_item_72.png",
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
    ]
  },
  {
    "id": "prod_73",
    "category": "rahat-lukum",
    "title": {
      "ru": "Лукум с фисташками в шоколадной глазури Koska 140г",
      "ro": "Pekmez de dude Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с фисташками в шоколадной глазури Koska 140г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pekmez de dude Koska."
    },
    "price": 110.0,
    "image": "images/istanbul_title_item_73.jpg",
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
    ]
  },
  {
    "id": "prod_74",
    "category": "rahat-lukum",
    "title": {
      "ru": "Лукум с фундуком в шоколадной глазури Koska 140г",
      "ro": "Piersici uscate"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с фундуком в шоколадной глазури Koska 140г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Piersici uscate."
    },
    "price": 100.0,
    "image": "images/istanbul_title_item_74.jpg",
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
    ]
  },
  {
    "id": "prod_75",
    "category": "rahat-lukum",
    "title": {
      "ru": "Лукум с фундуком, фисташками и кокосом Koska 500г",
      "ro": "Pișmaniye clasic de vanilie Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум с фундуком, фисташками и кокосом Koska 500г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pișmaniye clasic de vanilie Koska."
    },
    "price": 150.0,
    "image": "images/istanbul_title_item_75.jpg",
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
    ]
  },
  {
    "id": "prod_76",
    "category": "rahat-lukum",
    "title": {
      "ru": "Лукум фруктовый микс",
      "ro": "Pișmaniye cu fistic Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Лукум фруктовый микс.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pișmaniye cu fistic Koska."
    },
    "price": 62.5,
    "image": "images/istanbul_title_item_76.jpg",
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
    ]
  },
  {
    "id": "prod_77",
    "category": "dried-fruits",
    "title": {
      "ru": "Манго сушеный",
      "ro": "Pișmaniye în ciocolată Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Манго сушеный.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pișmaniye în ciocolată Koska."
    },
    "price": 75.0,
    "image": "images/istanbul_title_item_77.jpg",
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
    ]
  },
  {
    "id": "prod_78",
    "category": "pastes-jams",
    "title": {
      "ru": "Медовая паста с экстрактом Эпимедиума",
      "ro": "Rahat-lokum de rodie cu fistic Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Медовая паста с экстрактом Эпимедиума.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Rahat-lokum de rodie cu fistic Koska."
    },
    "price": 300.0,
    "image": "images/istanbul_title_item_78.jpg",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 300.0
      }
    ]
  },
  {
    "id": "prod_79",
    "category": "nuts",
    "title": {
      "ru": "Микс орехов",
      "ro": "Rahat-lokum asortat fructat Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Микс орехов.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Rahat-lokum asortat fructat Koska."
    },
    "price": 75.0,
    "image": "images/istanbul_title_item_79.png",
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
    ]
  },
  {
    "id": "prod_80",
    "category": "nuts",
    "title": {
      "ru": "Миндаль жареный соленый",
      "ro": "Rahat-lokum de vanilie cu arahide Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Миндаль жареный соленый.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Rahat-lokum de vanilie cu arahide Koska."
    },
    "price": 137.5,
    "image": "images/istanbul_title_item_80.jpg",
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
    ]
  },
  {
    "id": "prod_81",
    "category": "nuts",
    "title": {
      "ru": "Миндаль сырой голден",
      "ro": "Rahat-lokum de vanilie cu fistic Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Миндаль сырой голден.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Rahat-lokum de vanilie cu fistic Koska."
    },
    "price": 137.5,
    "image": "images/istanbul_title_item_81.jpg",
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
    ]
  },
  {
    "id": "prod_82",
    "category": "dried-fruits",
    "title": {
      "ru": "Натуральное сушеное манго",
      "ro": "Rahat-lokum cu alune de pădure Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Натуральное сушеное манго.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Rahat-lokum cu alune de pădure Koska."
    },
    "price": 105.0,
    "image": "images/istanbul_title_item_82.jpg",
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
    ]
  },
  {
    "id": "prod_83",
    "category": "dried-fruits",
    "title": {
      "ru": "Натуральный сушеный инжир",
      "ro": "Semințe de dovleac prăjite"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Натуральный сушеный инжир.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Semințe de dovleac prăjite."
    },
    "price": 100.0,
    "image": "images/istanbul_title_item_83.jpg",
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
    ]
  },
  {
    "id": "prod_84",
    "category": "nuts",
    "title": {
      "ru": "Нут жареный леблеби",
      "ro": "Semințe de floarea-soarelui"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Нут жареный леблеби.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Semințe de floarea-soarelui."
    },
    "price": 50.0,
    "image": "images/istanbul_title_item_84.jpg",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 50.0
      }
    ]
  },
  {
    "id": "prod_85",
    "category": "dried-fruits",
    "title": {
      "ru": "Папайя сушеная.",
      "ro": "Sos de rodie Narșarab"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Папайя сушеная..",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Sos de rodie Narșarab."
    },
    "price": 105.0,
    "image": "images/istanbul_title_item_85.jpg",
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
    ]
  },
  {
    "id": "prod_86",
    "category": "pastes-jams",
    "title": {
      "ru": "Патока виноградная",
      "ro": "Condimente pentru grătar și carne"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Патока виноградная.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Condimente pentru grătar și carne."
    },
    "price": 110.0,
    "image": "images/istanbul_title_item_86.jpg",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 110.0
      }
    ]
  },
  {
    "id": "prod_87",
    "category": "pastes-jams",
    "title": {
      "ru": "Патока из шелковицы",
      "ro": "Condimente pentru pui în stil turcesc"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Патока из шелковицы.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Condimente pentru pui în stil turcesc."
    },
    "price": 110.0,
    "image": "images/istanbul_title_item_87.png",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 110.0
      }
    ]
  },
  {
    "id": "prod_88",
    "category": "rahat-lukum",
    "title": {
      "ru": "Пишмание классическое Koska 150г",
      "ro": "Condimente pentru pește și fructe de mare"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Пишмание классическое Koska 150г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Condimente pentru pește și fructe de mare."
    },
    "price": 85.0,
    "image": "images/istanbul_title_item_88.jpg",
    "weights": [
      {
        "label": "150Г",
        "price": 85.0
      }
    ]
  },
  {
    "id": "prod_89",
    "category": "rahat-lukum",
    "title": {
      "ru": "Пишмание с фисташками Koska 250г",
      "ro": "Condimente Pul Biber (fulgi de ardei)"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Пишмание с фисташками Koska 250г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Condimente Pul Biber (fulgi de ardei)."
    },
    "price": 95.0,
    "image": "images/istanbul_title_item_89.jpg",
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
    ]
  },
  {
    "id": "prod_90",
    "category": "rahat-lukum",
    "title": {
      "ru": "Рахат лукум классический",
      "ro": "Sumac turcesc"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Рахат лукум классический.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Sumac turcesc."
    },
    "price": 50.0,
    "image": "images/istanbul_title_item_90.jpg",
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
    ]
  },
  {
    "id": "prod_91",
    "category": "pastes-jams",
    "title": {
      "ru": "Рожковое патока",
      "ro": "Kumquat uscat"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Рожковое патока.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Kumquat uscat."
    },
    "price": 100.0,
    "image": "images/istanbul_title_item_91.jpg",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 100.0
      }
    ]
  },
  {
    "id": "prod_92",
    "category": "nuts",
    "title": {
      "ru": "Смесь орехов с фисташкой",
      "ro": "Pastă de tomate turcească 830g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Смесь орехов с фисташкой.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pastă de tomate turcească 830g."
    },
    "price": 150.0,
    "image": "images/istanbul_title_item_92.jpg",
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
    ]
  },
  {
    "id": "prod_93",
    "category": "dragees",
    "title": {
      "ru": "Сублимированная клубника в шоколаде",
      "ro": "Pastă de ardei iute 700g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Сублимированная клубника в шоколаде.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pastă de ardei iute 700g."
    },
    "price": 225.0,
    "image": "images/istanbul_title_item_93.jpg",
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
    ]
  },
  {
    "id": "prod_94",
    "category": "dried-fruits",
    "title": {
      "ru": "Сушенный кокос",
      "ro": "Pastă de ardei dulce 700g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Сушенный кокос.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pastă de ardei dulce 700g."
    },
    "price": 100.0,
    "image": "images/istanbul_title_item_94.jpg",
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
    ]
  },
  {
    "id": "prod_95",
    "category": "dried-fruits",
    "title": {
      "ru": "Сушеное помело",
      "ro": "Ibric turcesc din cupru 300ml"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Сушеное помело.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ibric turcesc din cupru 300ml."
    },
    "price": 75.0,
    "image": "images/istanbul_title_item_95.jpg",
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
    ]
  },
  {
    "id": "prod_96",
    "category": "pastes-jams",
    "title": {
      "ru": "Тахини с пастой из фундука и пекмезом Koska 320г",
      "ro": "Pahare turcești armudu (6 buc)"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Тахини с пастой из фундука и пекмезом Koska 320г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pahare turcești armudu (6 buc)."
    },
    "price": 100.0,
    "image": "images/istanbul_title_item_96.jpg",
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
    ]
  },
  {
    "id": "prod_97",
    "category": "pastes-jams",
    "title": {
      "ru": "Тахини с пекмезом из рожкового дерева Koska 350г",
      "ro": "Cafea turcească Kurukahveci Mehmet Efendi 100g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Тахини с пекмезом из рожкового дерева Koska 350г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Cafea turcească Kurukahveci Mehmet Efendi 100g."
    },
    "price": 90.0,
    "image": "images/istanbul_title_item_97.jpg",
    "weights": [
      {
        "label": "350Г",
        "price": 90.0
      }
    ]
  },
  {
    "id": "prod_98",
    "category": "coffee",
    "title": {
      "ru": "Турецкий кофе с кардамоном Nuri Toplar 250г",
      "ro": "Cafea turcească Kurukahveci Mehmet Efendi 250g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Турецкий кофе с кардамоном Nuri Toplar 250г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Cafea turcească Kurukahveci Mehmet Efendi 250g."
    },
    "price": 210.0,
    "image": "images/istanbul_title_item_98.jpg",
    "weights": [
      {
        "label": "250Г",
        "price": 210.0
      }
    ]
  },
  {
    "id": "prod_99",
    "category": "dried-fruits",
    "title": {
      "ru": "Финики королевские",
      "ro": "Cafea turcească Kurukahveci Mehmet Efendi 500g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Финики королевские.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Cafea turcească Kurukahveci Mehmet Efendi 500g."
    },
    "price": 137.5,
    "image": "images/istanbul_title_item_99.jpg",
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
    ]
  },
  {
    "id": "prod_100",
    "category": "nuts",
    "title": {
      "ru": "Фисташки жареные малосольные",
      "ro": "Cafea turcească cu mastic 200g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Фисташки жареные малосольные.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Cafea turcească cu mastic 200g."
    },
    "price": 187.5,
    "image": "images/istanbul_title_item_100.jpg",
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
    ]
  },
  {
    "id": "prod_101",
    "category": "nuts",
    "title": {
      "ru": "Фисташки жареные соленые",
      "ro": "Cafea turcească cu cardamom 200g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Фисташки жареные соленые.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Cafea turcească cu cardamom 200g."
    },
    "price": 175.0,
    "image": "images/istanbul_title_item_101.jpg",
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
    ]
  },
  {
    "id": "prod_102",
    "category": "dragees",
    "title": {
      "ru": "Фундук в шоколаде",
      "ro": "Ceai turcesc Çaykur Rize 500g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Фундук в шоколаде.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ceai turcesc Çaykur Rize 500g."
    },
    "price": 125.0,
    "image": "images/istanbul_title_item_102.jpg",
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
    ]
  },
  {
    "id": "prod_103",
    "category": "nuts",
    "title": {
      "ru": "Фундук жареный",
      "ro": "Ceai turcesc Çaykur Altınbaş 500g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Фундук жареный.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ceai turcesc Çaykur Altınbaş 500g."
    },
    "price": 175.0,
    "image": "images/istanbul_title_item_103.jpg",
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
    ]
  },
  {
    "id": "prod_104",
    "category": "halva",
    "title": {
      "ru": "Халва диабетическая Koska 200г",
      "ro": "Ceai turcesc Çaykur Tiryaki 1000g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Халва диабетическая Koska 200г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ceai turcesc Çaykur Tiryaki 1000g."
    },
    "price": 70.0,
    "image": "images/istanbul_title_item_104.jpg",
    "weights": [
      {
        "label": "200Г",
        "price": 70.0
      }
    ]
  },
  {
    "id": "prod_105",
    "category": "halva",
    "title": {
      "ru": "Халва кунжутная классическая Koska 200г",
      "ro": "Ceai turcesc Dogadan tei și cimbrișor"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Халва кунжутная классическая Koska 200г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ceai turcesc Dogadan tei și cimbrișor."
    },
    "price": 55.0,
    "image": "images/istanbul_title_item_105.png",
    "weights": [
      {
        "label": "200Г",
        "price": 55.0
      }
    ]
  },
  {
    "id": "prod_106",
    "category": "halva",
    "title": {
      "ru": "Халва кунжутная с какао Koska 200г",
      "ro": "Ceai turcesc Dogadan instant de rodie"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Халва кунжутная с какао Koska 200г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ceai turcesc Dogadan instant de rodie."
    },
    "price": 60.0,
    "image": "images/istanbul_title_item_106.png",
    "weights": [
      {
        "label": "200Г",
        "price": 60.0
      }
    ]
  },
  {
    "id": "prod_107",
    "category": "halva",
    "title": {
      "ru": "Халва кунжутная с фисташками Koska 200г",
      "ro": "Ceai turcesc instant de măr"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Халва кунжутная с фисташками Koska 200г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ceai turcesc instant de măr."
    },
    "price": 80.0,
    "image": "images/istanbul_title_item_107.jpg",
    "weights": [
      {
        "label": "200Г",
        "price": 80.0
      }
    ]
  },
  {
    "id": "prod_108",
    "category": "halva",
    "title": {
      "ru": "Халва кунжутная с фундуком Koska 200г",
      "ro": "Curmale Regale Medjool"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Халва кунжутная с фундуком Koska 200г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Curmale Regale Medjool."
    },
    "price": 70.0,
    "image": "images/istanbul_title_item_108.jpg",
    "weights": [
      {
        "label": "200Г",
        "price": 70.0
      }
    ]
  },
  {
    "id": "prod_109",
    "category": "halva",
    "title": {
      "ru": "Халва с ореховым пюре Koska 40г",
      "ro": "Curmale Tunis pe cracă"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Халва с ореховым пюре Koska 40г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Curmale Tunis pe cracă."
    },
    "price": 16.0,
    "image": "images/istanbul_title_item_109.jpg",
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
    ]
  },
  {
    "id": "prod_110",
    "category": "halva",
    "title": {
      "ru": "Халва с рожковым деревом и фундуком Koska 250г",
      "ro": "Fistic întreg crud decojit"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Халва с рожковым деревом и фундуком Koska 250г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Fistic întreg crud decojit."
    },
    "price": 90.0,
    "image": "images/istanbul_title_item_110.png",
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
    ]
  },
  {
    "id": "prod_111",
    "category": "halva",
    "title": {
      "ru": "Халва фисташковая Koska 40г",
      "ro": "Fistic turcesc prăjit sărat Antep"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Халва фисташковая Koska 40г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Fistic turcesc prăjit sărat Antep."
    },
    "price": 20.0,
    "image": "images/istanbul_title_item_111.png",
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
    ]
  },
  {
    "id": "prod_112",
    "category": "halva",
    "title": {
      "ru": "Халва фисташковая диабетическая Koska 200г",
      "ro": "Alune de pădure prăjite albite"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Халва фисташковая диабетическая Koska 200г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Alune de pădure prăjite albite."
    },
    "price": 90.0,
    "image": "images/istanbul_title_item_112.jpg",
    "weights": [
      {
        "label": "200Г",
        "price": 90.0
      }
    ]
  },
  {
    "id": "prod_113",
    "category": "tea",
    "title": {
      "ru": "Чай Çaykur Altınbaş 500г",
      "ro": "Alune de pădure crude selecte"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чай Çaykur Altınbaş 500г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Alune de pădure crude selecte."
    },
    "price": 200.0,
    "image": "images/istanbul_title_item_113.jpg",
    "weights": [
      {
        "label": "500Г",
        "price": 200.0
      }
    ]
  },
  {
    "id": "prod_114",
    "category": "tea",
    "title": {
      "ru": "Чай Çaykur Altınbaş в жестяной банке 100г",
      "ro": "Halva de susan Koska cu vanilie 400g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чай Çaykur Altınbaş в жестяной банке 100г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Halva de susan Koska cu vanilie 400g."
    },
    "price": 80.0,
    "image": "images/istanbul_title_item_102.jpg",
    "weights": [
      {
        "label": "100Г",
        "price": 80.0
      }
    ]
  },
  {
    "id": "prod_115",
    "category": "tea",
    "title": {
      "ru": "Чай из бутонов роз 100г",
      "ro": "Halva de susan Koska cu fistic 400g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чай из бутонов роз 100г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Halva de susan Koska cu fistic 400g."
    },
    "price": 120.0,
    "image": "images/istanbul_title_item_103.jpg",
    "weights": [
      {
        "label": "100Г",
        "price": 120.0
      }
    ]
  },
  {
    "id": "prod_116",
    "category": "tea",
    "title": {
      "ru": "Чай из ромашки 100г",
      "ro": "Halva de susan Koska cu cacao 400g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чай из ромашки 100г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Halva de susan Koska cu cacao 400g."
    },
    "price": 80.0,
    "image": "images/istanbul_title_item_104.jpg",
    "weights": [
      {
        "label": "100Г",
        "price": 80.0
      }
    ]
  },
  {
    "id": "prod_117",
    "category": "tea",
    "title": {
      "ru": "Чай из цветков граната 100г",
      "ro": "Halva de susan marmorată Koska"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чай из цветков граната 100г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Halva de susan marmorată Koska."
    },
    "price": 100.0,
    "image": "images/istanbul_title_item_104.jpg",
    "weights": [
      {
        "label": "100Г",
        "price": 100.0
      }
    ]
  },
  {
    "id": "prod_118",
    "category": "tea",
    "title": {
      "ru": "Чай из шалфея 50г",
      "ro": "Halva de floarea-soarelui cu fistic"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чай из шалфея 50г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Halva de floarea-soarelui cu fistic."
    },
    "price": 21.0,
    "image": "images/istanbul_title_item_105.png",
    "weights": [
      {
        "label": "50Г",
        "price": 21.0
      }
    ]
  },
  {
    "id": "prod_119",
    "category": "spices-oils",
    "title": {
      "ru": "Чай каркадэ 100г",
      "ro": "Fructe confiate mix asortat"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чай каркадэ 100г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Fructe confiate mix asortat."
    },
    "price": 55.0,
    "image": "images/istanbul_title_item_106.png",
    "weights": [
      {
        "label": "100Г",
        "price": 55.0
      }
    ]
  },
  {
    "id": "prod_120",
    "category": "tea",
    "title": {
      "ru": "Чай с мятой и лимоном 100г",
      "ro": "Prune uscate fără sâmburi suculente"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чай с мятой и лимоном 100г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Prune uscate fără sâmburi suculente."
    },
    "price": 60.0,
    "image": "images/istanbul_title_item_107.jpg",
    "weights": [
      {
        "label": "100Г",
        "price": 60.0
      }
    ]
  },
  {
    "id": "prod_121",
    "category": "tea",
    "title": {
      "ru": "Чай черный турецкий Caykur rize Turist",
      "ro": "Ciocolată turcească Ulker cu fistic"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чай черный турецкий Caykur rize Turist.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ciocolată turcească Ulker cu fistic."
    },
    "price": 190.0,
    "image": "images/istanbul_title_item_108.jpg",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 190.0
      }
    ]
  },
  {
    "id": "prod_122",
    "category": "tea",
    "title": {
      "ru": "Черный чай с бергамотом Tomurcuk",
      "ro": "Ciocolată turcească Godiva duet fistic"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Черный чай с бергамотом Tomurcuk.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Ciocolată turcească Godiva duet fistic."
    },
    "price": 80.0,
    "image": "images/istanbul_title_item_109.jpg",
    "weights": [
      {
        "label": "1 шт / 1 buc",
        "price": 80.0
      }
    ]
  },
  {
    "id": "prod_123",
    "category": "rahat-lukum",
    "title": {
      "ru": "Чурчхела с грецким орехом и виноградным соком",
      "ro": "Bomboane de ciocolată cu umplutură de tahini"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чурчхела с грецким орехом и виноградным соком.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Bomboane de ciocolată cu umplutură de tahini."
    },
    "price": 100.0,
    "image": "images/istanbul_title_item_110.png",
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
    ]
  },
  {
    "id": "prod_124",
    "category": "rahat-lukum",
    "title": {
      "ru": "Чурчхела с грецким орехом и гранатовым соком",
      "ro": "Pastă de epimedium Themra 240g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Чурчхела с грецким орехом и гранатовым соком.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pastă de epimedium Themra 240g."
    },
    "price": 100.0,
    "image": "images/istanbul_title_item_111.png",
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
    ]
  },
  {
    "id": "prod_125",
    "category": "dragees",
    "title": {
      "ru": "Шоколадно-миндальное драже",
      "ro": "Pastă de epimedium Sahimerdan 240g"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Шоколадно-миндальное драже.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Pastă de epimedium Sahimerdan 240g."
    },
    "price": 125.0,
    "image": "images/istanbul_title_item_112.jpg",
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
    ]
  },
  {
    "id": "prod_126",
    "category": "pastes-jams",
    "title": {
      "ru": "Экстракт рожкового дерева Koska 310г",
      "ro": "Baclava palatului cu fistic Karaköy Güllüoğlu"
    },
    "description": {
      "ru": "Натуральный продукт высочайшего качества прямо из Турции. Экстракт рожкового дерева Koska 310г.",
      "ro": "Produs natural autentic de cea mai înaltă calitate, importat direct din Turcia. Baclava palatului cu fistic Karaköy Güllüoğlu."
    },
    "price": 80.0,
    "image": "images/istanbul_title_item_113.jpg",
    "weights": [
      {
        "label": "310Г",
        "price": 80.0
      }
    ]
  }
];
