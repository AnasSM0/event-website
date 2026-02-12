export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: GalleryFilter;
}

export const galleryFilters = [
  "all",
  "marquee",
  "tent",
  "crockery",
  "serving-products",
  "staff-uniforms",
  "furniture",
  "kitchen-equipment",
  "table-linens",
  "marquee-fabrication",
  "room-linens",
  "carpet",
  "kitchen-utensils",
  "cutlery",
  "tent-accessories",
] as const;

export type GalleryFilter = (typeof galleryFilters)[number];

// Helper to generate local items
// Helper to generate local items
const localItems: GalleryItem[] = [
  // Marquee: Images 1-10
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    src: `/gallery/${i + 1}.jpeg`,
    alt: `Marquee setup ${i + 1}`,
    category: "marquee" as GalleryFilter,
  })),
  // Tent: Images 16-25
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 16,
    src: `/gallery/${i + 16}.jpeg`,
    alt: `Tent arrangement ${i + 1}`,
    category: "tent" as GalleryFilter,
  })),
  // Marquee Fabrication: Images 11-15 (from Marquee)
  ...Array.from({ length: 5 }, (_, i) => ({
    id: i + 11,
    src: `/gallery/${i + 11}.jpeg`,
    alt: `Fabrication process ${i + 1}`,
    category: "marquee-fabrication" as GalleryFilter,
  })),
  // Marquee Fabrication: Images 26-30 (from Tent)
  ...Array.from({ length: 5 }, (_, i) => ({
    id: i + 26,
    src: `/gallery/${i + 26}.jpeg`,
    alt: `Manufacturing process ${i + 1}`,
    category: "marquee-fabrication" as GalleryFilter,
  })),
];

// Helper for custom serving items provided by user
const customServingItems: GalleryItem[] = [
  {
    id: 1101,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaR8PkEkxPWGChhz5KVihi7q2As7pkZRNvDQ&s",
    alt: "Serving Platter Setup",
    category: "serving-products",
  },
  {
    id: 1102,
    src: "https://tableware.pk/cdn/shop/files/52_36a6e22f-fb6a-4306-b37a-6103d403824a_1080x.jpg?v=1746521263",
    alt: "Elegant Chafing Dish",
    category: "serving-products",
  },
  {
    id: 1103,
    src: "https://www.arraish.com/cdn/shop/products/plates-platters-tranquility-oval-serving-dish-28002045362258.jpg?v=1617289911",
    alt: "Oval Serving Dish",
    category: "serving-products",
  },
  {
    id: 1104,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTINw62QcFt2jhbu3cqg_xexguBbkYmyKR_4w&s",
    alt: "Buffet Serving Set",
    category: "serving-products",
  },
  {
    id: 1105,
    src: "https://imperialnest.pk/cdn/shop/files/IMG_6538-min.jpg?v=1766775914&width=533",
    alt: "Decorative Serving Tray",
    category: "serving-products",
  },
  {
    id: 1106,
    src: "https://m.media-amazon.com/images/I/31wORkYJmZL._SL500_.jpg",
    alt: "Stainless Steel Server",
    category: "serving-products",
  },
  {
    id: 1107,
    src: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/7cfe52a5-f954-40d5-95d9-7b68e996d21b.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    alt: "Catering Serving Display",
    category: "serving-products",
  },
];

// Helper for custom image URLs provided by user
const customCrockeryItems: GalleryItem[] = [
  {
    id: 1001,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSRptYdRx3NjscaeOjbhohKRKqMw7kgEtuew&s",
    alt: "Custom Crockery Set 1",
    category: "crockery",
  },
  {
    id: 1002,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaofQmR6gyW6a0JUNM3nUbbDStyO0cR13uzA&s",
    alt: "Custom Crockery Set 2",
    category: "crockery",
  },
  {
    id: 1003,
    src: "https://tiimg.tistatic.com/fp/1/007/998/additionally-quality-experts-goods-at-affordable-white-melamine-kitchen-crockery-set-281.jpg",
    alt: "White Melamine Crockery Set",
    category: "crockery",
  },
  {
    id: 1004,
    src: "https://shopylancy.pk/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-15-at-3.39.37-PM.jpeg",
    alt: "Elegant Dinner Set",
    category: "crockery",
  },
  {
    id: 1005,
    src: "https://www.adornia.pk/images/product_gallery/adornia-new-img-85.jpg",
    alt: "Adornia Dinnerware",
    category: "crockery",
  },
  {
    id: 1006,
    src: "https://www.kochenessential.com/cdn/shop/files/81mcLxn_pL._SL1500.jpg?v=1696532845",
    alt: "Premium Crockery Selection",
    category: "crockery",
  },
  {
    id: 1007,
    src: "https://m.media-amazon.com/images/I/61k1dOJSbAS._AC_UF1000,1000_QL80_.jpg",
    alt: "Modern Plate Set",
    category: "crockery",
  },
  {
    id: 1008,
    src: "https://images.onlinecrockerystore.com/upload/w_300,h_300/https://jcosu3vnwz.ufs.sh/f/JM2Cb5Uu9AQa48Jm9nTeBJsza9Xx4w8M0PZbkKdh1n2mYioA",
    alt: "Classic White Dinnerware",
    category: "crockery",
  },
];

// Helper for custom staff uniform items provided by user
const customUniformItems: GalleryItem[] = [
  {
    id: 1201,
    src: "https://uniformsuppliers.com.pk/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-15-at-10.34.42-AM.jpeg",
    alt: "Custom Staff Uniform 1",
    category: "staff-uniforms",
  },
  {
    id: 1202,
    src: "https://image.made-in-china.com/202f0j00kdDaHtYzgqoJ/Custom-Slim-Fit-Hotel-Staff-Uniforms-Wholesale.jpg",
    alt: "Slim Fit Hotel Uniform",
    category: "staff-uniforms",
  },
  {
    id: 1203,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69bWDgJoIV23DqDOt8HPlH-pvqiUWGDVbvg&s",
    alt: "Staff Uniform Detail",
    category: "staff-uniforms",
  },
  {
    id: 1204,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3onhbrdzS_s_KjVvPsn_IE4e5MOSiMDp8_Q&s",
    alt: "Professional Staff Attire",
    category: "staff-uniforms",
  },
  {
    id: 1205,
    src: "https://safeken.co.ke/wp-content/uploads/2024/09/Branded-Corporate-Shirt-430x429.jpg",
    alt: "Branded Corporate Shirt",
    category: "staff-uniforms",
  },
  {
    id: 1206,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyDGpSFVt1iRwcZr4oZm4zUNG3OFm36l84nQ&s",
    alt: "Staff Uniform Style",
    category: "staff-uniforms",
  },
  {
    id: 1207,
    src: "https://www.tekiria.co.ke/wp-content/uploads/2025/02/corporate-shirt--300x300.webp",
    alt: "Corporate Shirt Design",
    category: "staff-uniforms",
  },
  {
    id: 1208,
    src: "https://staffuniformsupplier.co.ke/wp-content/uploads/2023/06/Caveni-Workwear-and-Safety-Gear-11.webp",
    alt: "Workwear and Safety Gear",
    category: "staff-uniforms",
  },
];

// Helper for custom furniture items provided by user
const customFurnitureItems: GalleryItem[] = [
  {
    id: 1301,
    src: "https://iwood.pk/wp-content/uploads/2019/03/iwojfdfjdj.jpg",
    alt: "Modern Wooden Furniture",
    category: "furniture",
  },
  {
    id: 1302,
    src: "https://woodc.pk/wp-content/uploads/2023/06/jjfjndf.jpg",
    alt: "Elegant Wood Craft",
    category: "furniture",
  },
  {
    id: 1303,
    src: "https://pffurnitures.com/wp-content/uploads/2025/09/Luxury-Sofa-Set-by-Pyramid-Furniure-3.jpg",
    alt: "Luxury Sofa Set",
    category: "furniture",
  },
  {
    id: 1304,
    src: "https://www.bassettfurniture.com/on/demandware.static/-/Sites-bassett-Library/default/dw8109f429/living/2-col-impact-living-clp.jpg",
    alt: "Contemporary Living Room",
    category: "furniture",
  },
  {
    id: 1305,
    src: "https://media.designcafe.com/wp-content/uploads/2023/07/05120637/modern-furniture-designs.jpg",
    alt: "Modern Furniture Design",
    category: "furniture",
  },
  {
    id: 1306,
    src: "https://activehomecentre.com/cdn/shop/collections/WhatsApp_Image_2021-04-22_at_3.06.53_PM_3.jpg?v=1757011624",
    alt: "Stylish Home Furniture",
    category: "furniture",
  },
  {
    id: 1307,
    src: "https://draperandkramer.com/wp-content/uploads/2022/04/insights-exploring-interior-design-trends-textured-furniture-draperandkramer_20220427_header-image.jpg",
    alt: "Textured Interior Design",
    category: "furniture",
  },
];

// Helper for custom kitchen equipment items provided by user
const customEquipmentItems: GalleryItem[] = [
  {
    id: 1401,
    src: "https://nmgprod.s3.amazonaws.com/media/files/d1/b1/d1b1268a9f21f16238c819c2574946e8/cover_image_1692816609.jpeg.960x540_q85_crop_upscale.jpg",
    alt: "Commercial Kitchen Setup",
    category: "kitchen-equipment",
  },
  {
    id: 1402,
    src: "https://www.thedailymeal.com/img/gallery/30-essential-kitchen-tools/l-intro-1687790000.jpg",
    alt: "Essential Kitchen Tools",
    category: "kitchen-equipment",
  },
  {
    id: 1403,
    src: "https://cdn.shopify.com/s/files/1/0931/2382/files/1x1_STAHL_03_2022_8090_1.jpg",
    alt: "Stainless Steel Cookware",
    category: "kitchen-equipment",
  },
  {
    id: 1404,
    src: "https://www.touchbistro.com/wp-content/uploads/2019/03/restaurant-equipment.jpg",
    alt: "Restaurant Equipment",
    category: "kitchen-equipment",
  },
];

// Helper for custom table linen items provided by user
const customLinenItems: GalleryItem[] = [
  {
    id: 1501,
    src: "https://m.media-amazon.com/images/I/71KfAHuRbyL._AC_SL1000__.jpg",
    alt: "Luxury Table Cloth",
    category: "table-linens",
  },
  {
    id: 1502,
    src: "https://www.figlinensandhome.com/cdn/shop/articles/le_jacquard_francais_voliere_blue_table_linens_fig-linens_and_home_fine_table_linens_luxury_table_cloth.jpeg-1666607524963_9a343593-19f9-4f41-8572-b0949ea2f1aa.jpg?v=1743511663&width=1024",
    alt: "Fine Table Linens",
    category: "table-linens",
  },
  {
    id: 1503,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCkNP1rq23XA0FgctZLGvl2QRwZikfvHrF4A&s",
    alt: "Event Table Setting",
    category: "table-linens",
  },
  {
    id: 1504,
    src: "https://cdn.shopify.com/s/files/1/2690/0106/files/DSC3041_copy_A_88b85887-89e7-4336-9ff8-665c435fb473.jpg?v=1747715749",
    alt: "Elegant Dining Setup",
    category: "table-linens",
  },
  {
    id: 1505,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcQMA56rVoiqoiPWpJCfJjf7jue_MzTBuYsA&s",
    alt: "Premium Table Decor",
    category: "table-linens",
  },
];

// Helper for custom room linen items provided by user
const customRoomLinenItems: GalleryItem[] = [
  {
    id: 1601,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQje02Q6-zxgUDcYgLPOeOjkOcq6l2i7jOKdw&s",
    alt: "Hotel Room Linens",
    category: "room-linens",
  },
  {
    id: 1602,
    src: "https://media.istockphoto.com/id/905186016/photo/clean-towels-on-bed-at-hotel-room.jpg?s=612x612&w=0&k=20&c=9MAm5p0xP2s8p4Z27CKYi-IJLZGeZMDKs6hUOwMAvrE=",
    alt: "Fresh Hotel Towels",
    category: "room-linens",
  },
  {
    id: 1603,
    src: "https://image.made-in-china.com/202f0j00fhNcJDdllHoL/Excellent-Design-Bedding-Linens-Bed-Runner-for-Hotel-Room.webp",
    alt: "Luxury Bed Runner",
    category: "room-linens",
  },
  {
    id: 1604,
    src: "https://mlbeknpml64q.i.optimole.com/cb:WBbB~4415d/w:640/h:423/q:85/f:best/https://jla.com/wp-content/uploads/2025/02/AdobeStock_897170646-small-v2-copy.jpg",
    alt: "Professional Laundry Service",
    category: "room-linens",
  },
  {
    id: 1605,
    src: "https://www.belledorm.co.uk/cms_media/images/what_is_bed_linen_final.jpg",
    alt: "High Quality Bed Linen",
    category: "room-linens",
  },
];

// Helper for custom carpet items provided by user
const customCarpetItems: GalleryItem[] = [
  {
    id: 1701,
    src: "https://www.rugstreet.com/mm5/graphics/00000001/IORunner7_White_540x463.jpg",
    alt: "Event Carpet Runner",
    category: "carpet",
  },
  {
    id: 1702,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvfOVCoY5qhUL2btOBGYGX7l6Ff-zU_H_KA&s",
    alt: "Red Carpet Entrance",
    category: "carpet",
  },
  {
    id: 1703,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0rj6p7OCE_Kq9DwChPXwhXXsrWwH2zukyGg&s",
    alt: "Patterned Event Carpet",
    category: "carpet",
  },
  {
    id: 1704,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7z2Migck6qbYUHB7ou2YzZW4VO801MFSjXA&s",
    alt: "Exhibition Carpet Flooring",
    category: "carpet",
  },
  {
    id: 1705,
    src: "https://i.pinimg.com/236x/cf/4f/50/cf4f503ac5285e7ae5d0d72ac008fa78.jpg",
    alt: "Luxury Carpet Setup",
    category: "carpet",
  },
];

// Helper for custom kitchen utensil items provided by user
const customUtensilItems: GalleryItem[] = [
  {
    id: 1801,
    src: "https://www.allinonestore.pk/cdn/shop/files/12-pcs-silicone-cooking-utensils-set-933819.webp?v=1755460541",
    alt: "Silicone Cooking Utensils Set",
    category: "kitchen-utensils",
  },
  {
    id: 1802,
    src: "https://majesticchef.pk/cdn/shop/files/ClarionBlack01_600x.jpg?v=1763037852",
    alt: "Premium Cookware Set",
    category: "kitchen-utensils",
  },
  {
    id: 1803,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoE-Fs5EMh6b3vYVnHFks7pCcVX4jSb-TXPA&s",
    alt: "Professional Kitchen Tools",
    category: "kitchen-utensils",
  },
  {
    id: 1804,
    src: "https://m.media-amazon.com/images/I/91PZ-8farsL._UF894,1000_QL80_.jpg",
    alt: "Stainless Steel Utensil Holder",
    category: "kitchen-utensils",
  },
  {
    id: 1805,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLXFpXWUxhPEEdWBUFwJYjxnuCfNmqNg7YOQ&s",
    alt: "Everyday Kitchen Essentials",
    category: "kitchen-utensils",
  },
];

// Helper for custom cutlery items provided by user
const customCutleryItems: GalleryItem[] = [
  {
    id: 1901,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeJSGlKdX7mLK_MfD5rXnGUK19SgHpVH78Og&s",
    alt: "Premium Cutlery Set",
    category: "cutlery",
  },
  {
    id: 1902,
    src: "https://www.outofeden.co.uk/cdn/shop/files/5810_Bead.webp?v=1739286532&width=700",
    alt: "Stainless Steel Flatware",
    category: "cutlery",
  },
  {
    id: 1903,
    src: "https://apricot.com.pk/cdn/shop/products/Silver-4404-24-PCs-Premium-Steel-Cutlery-Set-Apricot-7455.jpg?v=1739772346",
    alt: "Silver Cutlery Collection",
    category: "cutlery",
  },
  {
    id: 1904,
    src: "https://cherrypot.pk/wp-content/uploads/2025/07/VES_0714-2-scaled.jpg",
    alt: "Elegant Dining Cutlery",
    category: "cutlery",
  },
  {
    id: 1905,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJ3h3TUAnAOcpl6xZEsG84jGPhRKRj1qhZg&s",
    alt: "Classic Spoon and Fork",
    category: "cutlery",
  },
];

// Helper for custom tent accessory items provided by user
const customTentAccessoryItems: GalleryItem[] = [
  {
    id: 2001,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJ3h3TUAnAOcpl6xZEsG84jGPhRKRj1qhZg&s",
    alt: "Tent Accessory Item",
    category: "tent-accessories",
  },
  {
    id: 2002,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZkfZQbMFcZuf7eB_yki0XcXAY_NPoGuvKpQ&s",
    alt: "Tent Lighting/Decor",
    category: "tent-accessories",
  },
  {
    id: 2003,
    src: "https://www.opustents.com/wp-content/uploads/2024/07/picforchris-300x300.jpg",
    alt: "Tent Structural Component",
    category: "tent-accessories",
  },
  {
    id: 2004,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MvSdNq_-x0pfpo4EOjNMKLGcm1tQeDSLBQ&s",
    alt: "Tent Assembly Part",
    category: "tent-accessories",
  },
  {
    id: 2005,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRAdQPieCYJkGU4lzJnMFrKg1EXrlHOfwcrA&s",
    alt: "Tent Fitting",
    category: "tent-accessories",
  },
];

export const galleryItems: GalleryItem[] = [
  ...localItems, 
  ...customCrockeryItems, 
  ...customServingItems, 
  ...customUniformItems, 
  ...customFurnitureItems, 
  ...customEquipmentItems,
  ...customLinenItems,
  ...customRoomLinenItems,
  ...customCarpetItems,
  ...customUtensilItems,
  ...customCutleryItems,
  ...customTentAccessoryItems
];
