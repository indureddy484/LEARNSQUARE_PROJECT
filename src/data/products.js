
const products = [
  {
    id: "gentle-cleanser",
    category: "face",
    subcategory: "facial-wash",
    name: "Dot_key Tea Tree ",
    image: "https://www.dotandkey.com/cdn/shop/files/Artboard1-175ml_5b47c851-ef06-456f-a899-0b9b4e0b7eed.jpg?v=1742551906",
    rating: 4.5,
    price: "200 - ₹300",
    ingredients: "qua, Cocamidopropyl Betaine, Glycerine, Decyl Glucoside, Disodium Cocoyl Glutamate, Triethanolamine, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Xanthan Gum, PEG-40 Hydrogenated Castor Oil, Citric Acid, Disodium EDTA, Panthenol, Cocos Nucifera (Coconut) Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Sodium Hyaluronate, Tocopheryl Acetate, Lactococcus Ferment Lysate, Laminaria Digitata Extract (and) Hydrogenated Lecithin (and) Cetyl-PG Hydroxy- ethyl Palmitamide (and) Ceramide 1, 2,3,4,611 (and) Cholesterol [and] 1,2-hexanediol, Aqua (and) Oryza Sativa (Rice) Extract [and] Saccharomyces ferment lysate filtrate (and) Citric Acid (and) Sodium Benzoate (and) Potassium Sorbate, Benzyl Alcohol (and) Ethylhexylglycerin (and) Tocopherol, Fragrance*. *IFRA Certified",
    features: "normal and sensitive skin,clear gel texture facewash,feels non-dry and soft",
    description: "A gentle cleanser designed to remove impurities and excess oil while nourishing the skin with active botanicals.",
    officialLink: "https://www.dotandkey.com/products/cica-calming-blemish-clearing-face-wash?utm_source=google&utm_medium=paid&utm_campaign=18108354709&utm_content=&utm_term=&gadid=&gad_source=1&gad_campaignid=18108358972&gbraid=0AAAAAC-nk23lMHSP9GGk0Mv0eqVW55LaW&gclid=Cj0KCQjw5ubABhDIARIsAHMighZYrfAVQmY-l1pWFseV8YBFXkl_A1PZNS7MlDveOWNGtVznpTTHsA4aAgyHEALw_wcB",
    amazonLink: "https://www.amazon.in/Salicylic-Sensitive-Sulphate-Blemish-Clearing/dp/B0BCJZ289Q/ref=sr_1_2_pp?crid=NM5B23V0S5R3&dib=eyJ2IjoiMSJ9.Ts6R83bpC_vyLa9HbV5IBRIQaS4NFKFXakpIAB_9qr_BXZeST8f9CKEdDVEBwfGVCJVPO3QtVgHuW7wV5CoxCefUQfIK4992s46uHK0k5X8A264SE44-bu2v0MEvJlnyykl0NAN0OMZb8h8bIrBNtBqNVcU-4m6B_9VrEBYW6JVm7MuwHaCstbjwttPiGJn6w7Fb2dRWsVak0YVAKh1stgoZbKBDHNZcqdq7rSTWJgyxsa-j5Xs4PJowNNzRutJEB6efs1A1eHBLkp5d7qOnVi7DHcg4H-YwELnozCSTnC8.mJvFBEP4--Ow7Hd7nCYzztNfogsxht0dmdDACWJfYsQ&dib_tag=se&keywords=dot%2Bkey&qid=1746554221&sprefix=dot%2Bkey%2Caps%2C825&sr=8-2&th=1"
  },
{
  id: "gentle-cleanser",
  category: "face",
  subcategory: "facial-wash",
  name: "WOW Apple cedar vinegar ",
  image: "https://media.buywow.in/public/a6ad1bfa-8351-40e2-a9f3-09f4a21e4647?w=621&q=75&f=webp",
  rating: 4.0,
  price: "200 - ₹300",
  ingredients: "Purified Water, Cocamidopropyl Betaine, Sodium Lauroyl Sarcosinate, Disodium Cocoamphodiacetate, Sodium Cocoyl Apole Amino Acids, Glycerin, Polysorbate 20, Apple Cider Vinegar, PEG-120 Methyl Glucose Dioleate, Xanthan Gum, Sodium Benzoate, Phenoxyethanol (and) Ethylhexylglicerin, Sodium PCA, Fragrance, Citric Acid, PEG-40 Hydrogenated Castor Oil, Potassium Sorbate, Salicylic Acid, D Panthenol (Pro-Vitamin B5), Sodium Gluconate, Sodium Hydroxide and Bisabolol",
  features: "oily skin, dry and dull skin, acne breakouts, and skin inflammation.",
  description: "A gentle facial cleanser suitable for sensitive skin. Helps maintain the skin's natural pH and is ideal for daily use. Suitable for dry to normal skin types.",
  officialLink: "https://www.buywow.in/products/apple-cider-vinegar-face-wash-100-ml-tube?srsltid=AfmBOordahwckI8ST1X5dUhaOH6njxnFRDVjA_J1qJyImcoiBi0UZo_J",
  amazonLink: "https://www.amazon.in/WOW-Brightening-Vitamin-Face-Wash/dp/B07SZ243VZ/ref=sr_1_1_sspa?crid=2BOSFILIZNA9&dib=eyJ2IjoiMSJ9.tjwz7ZC_jcBkfXkBmPZmmwTa2BzEYlOUa9LUiFhDKx0WzJi0ezHnV3X6IbdztRFpb_Rl4ODVxGWE2AEOCpGVqZRJ--QYLErg_qG66hGf4jS25Z4SNBiYZ9Oo6vy7SAV1zlvOejdtuw-UoNz6ZC5b4P2VkCFeGjMDPWbkNK0dOvW29zZy22gTq5sN30YY81o4BFinh-BfctFHj-F_QCTZiXtncrhwWmq982S__7siEX-kaoSUMtC5hHLiztf2IKKL1xbTcjqQpYSAVPM4Ti8OwD-gAjcsrRPySCnSPRH_tWQ.VTws2_a04gIOAYS8aAWN7SaTUFc8FXt27z6iNoc6tvg&dib_tag=se&keywords=wow%2Bfacewash&nsdOptOutParam=true&qid=1746630532&sprefix=wow%2B%2Caps%2C368&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
},
  {
    id: "foaming-cleanser",
    category: "face",
    subcategory: "facial-wash",
    name: "Mamaearth Vitamin C",
    image: "https://images.mamaearth.in/catalog/product/v/i/vit-c-face-wash_1_1.jpg?format=auto&height=600",
    rating: 4.2,
    price: "₹236 to 269",
    ingredients: "Water, Salicylic Acid, Tea Tree Oil, Cocamidopropyl Betaine",
    features: "Oily skin, blackheads",
    description: "Deep cleansing foam with a refreshing effect. Removes excess oil without over-drying. Best suited for oily and acne-prone skin.",
    officialLink: "https://brand.com/foaming-cleanser",
    amazonLink: "https://www.amazon.in/Mamaearth-Vitamin-Face-Turmeric-Illumination/dp/B089W938BR/ref=sr_1_9_mod_primary_new?crid=158FGY2K4MMD3&dib=eyJ2IjoiMSJ9.nJnVy5GhALoid4o-U-Tk0XekkcV6m1EG-YONErPey-JtyQ1UXUbfxWr0yqcvkGIZPzj9IJQChmA7scgLjql6OW9KTZkibp6ryIzkSgBwCOSBe_rO0ifq_7-LueU6rvFs2Yj37oGM_CAgUEGUyEwBvVHapkCqXq_hp000Wv7P7lCSbrh5a0fEM8NA4YZa7SETVATS4rq9fAvxuNlOoQeub_hiUbBLpHVVlGyjYKJGBPtDethByvnHALTqjGihgui19F9GiCf0YrumAkklT9kD6Vm3V_JPjAU0Pt6RH5heGgk.7zbj4R5oRyYl-ksy-SrOTD3dUgK3r9RMmj6jNMVmDuc&dib_tag=se&keywords=mamaearth%2Bfacewash&nsdOptOutParam=true&qid=1746630591&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=mama%2Caps%2C315&sr=8-9&th="
  },
  {
    id: "hydrating-moisturizer",
    category: "face",
    subcategory: "facial-moisturizer",
    name: " Moisturizer",
    image: "https://images.unsplash.com/photo-1600180758890-6f8c76a7fa56?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    price: "₹350 - ₹500",
    ingredients: "Hyaluronic Acid, Glycerin, Shea Butter, Niacinamide",
    features: "Dryness, dullness",
    description: "Nourishes skin for a radiant glow. Lightweight and quick-absorbing formula, suitable for dry to combination skin types. Improves skin elasticity and texture.",
    officialLink: "https://brand.com/hydrating-moisturizer",
    amazonLink: "https://amazon.in/hydrating-moisturizer"
  }
];

export default products;
