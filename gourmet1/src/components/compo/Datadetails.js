let hampers = [
    {
        "id": 1,
        "title": "MOET & CHANDON INDULGENCE",
        "price": 70.00,
        "image": "https://gourmetliving.com.au/wp-content/uploads/2022/10/MOET-CHANDON-INDULGENCE_THUMBNAIL-min-300x300.webp",
        "description": "Asterisk Kitchen Langues De Chat Raspberry Unforgettable Products Petite Strawberry Meringues Unforgettable Products Lemon Curd"
    },
    {
        "id": 2,
        "title": "SHE WILL LOVE IT",
        "price": 56.00,
        "image": "https://gourmetliving.com.au/wp-content/uploads/2022/10/SHE-WILL-LOVE-IT_THUMBNAIL-min-300x300.webp",
        "description": "Asterisk Kitchen Langues De Chat Raspberry So Moorish Foods Mini Raspberry Rocky Road Charlie’s Cookies Raspberry White Choc Mini Melting Moments Unforgettable Products Petite Strawberry Meringues Cunliffe & Waters Raspberry Jam"
    },
    {
        "id": 3,
        "title": "PREMIUM MOST & CHANDON",
        "price": 149.00,
        "image": "https://gourmetliving.com.au/wp-content/uploads/2022/10/PREMIUM-MOET-CHANDON_THUMBNAIL-min-300x300.webp",
        "description": "Moet & Chandon Brut Imperial Champagne Langues De Chat Raspberry  Unforgettable Products Petite Meringue Unforgettable Products Lemon Curd"
    },
    {
        "id": 4,
        "title": "BIRD IN HAND HAMPER",
        "price": 49.00,
        "image": "https://gourmetliving.com.au/wp-content/uploads/2022/10/BIRD-IN-HAMPER_thumbnail-min-300x300.webp",
        "description": "Bird In Hand Sparkling wine So Moorish Foods Raspberry Rocky Road Choconuts Milk Chocolate Coated Cranberry Unforgettable Products Petite Chocolate Meringues Unforgettable Products Lemon Curd Charlie’s Cookies Lemon Mini Melting Moments Nicholson Fine Foods Essence Of Hibiscus Flowers"
    },
    {
        "id": 5,
        "title": "POP THE TREAT",
        "price": 149.00,
        "image": "https://gourmetliving.com.au/wp-content/uploads/2022/10/POP-THE-TREAT_THUMNAIL-min-300x300.webp",
        "description":"Brown Brothers Pinot Noir Chardonnay Oglivie & Co. Rum & Brandy Cake Oglivie & Co. Caramel Fudge Sauce So Moorish Foods White Chocolate Raspberry Jellies  Charlie’s Cookies Raspberry White Choc Mini Melting Moments Cunliffe& Waters Mulled Fig Jam Asterisk Kitchen Kalamata and Rosemary Grissini Oglivie & Co. Antipasto Olives  Bizzarri Dolci Chocolate Cracktops"
    },
    {
        "id": 6,
        "title": "THEY WILL LOVE IT",
        "price": 125.00,
        "image": "https://gourmetliving.com.au/wp-content/uploads/2022/10/THEY-WILL-LOVE-IT_THUMBNAIL-min-300x300.webp",
        "description":"Brown Brothers Pinot Noir Chardonnay Oglivie & Co. Rum & Brandy Cake Oglivie & Co. Caramel Fudge Sauce So Moorish Foods White Chocolate Raspberry Jellies Charlie’s Cookies Raspberry White Choc Mini Melting Moments Cunliffe& Waters Mulled Fig Jam Asterisk Kitchen Kalamata and Rosemary Grissini  Oglivie & Co. Antipasto Olives Bizzarri Dolci Chocolate Cracktops"
    },
]
hampers = hampers.map((items) => ({ ...items, quantity: 1 }))
console.log(hampers);


let bestseller = [
    {
        "id": 7,
        "title": "UNFORGETTABLE PRODUCTS CHOCOLATE MERINGUE 75 GM",
        "price":11.99,
        "image": "https://gourmetliving.com.au/wp-content/uploads/2022/11/product-image_0008_Chocolate_meringue_75_gm-300x300.jpg"
    },
    {
        "id": 8,
        "title": "NICHOLSON FINE FOODS BELGIAN WHITE CHOCOLATE MOUSSE 150GM",
        "price":13.99,
        "image": "https://gourmetliving.com.au/wp-content/uploads/2022/11/product-image_0007_DSC_4295-300x300.jpg"
    },
    {
        "id": 9,
        "title": "NICHOLSON FINE FOODS BELGIAN CHOCOLATE MOUSSE 150GM",
        "price":13.99,
        "image": "https://gourmetliving.com.au/wp-content/uploads/2022/11/product-image_0006_DSC_4299-300x300.jpg"
    },
    {
        "id": 10,
        "title": "OGILVIE &amp; CO. RUM AND BRANDY CAKE-400G",
        "price": 15.99,
        "image": "https://gourmetliving.com.au/wp-content/uploads/2022/11/product-image_0004_Rum-_-Brandy-Cake-400g-2-300x300.jpg"
    },
    {
        "id": 11,
        "title": "UNFORGETTABLE PRODUCTS STRAWBERRY MERINGUE 30 GM",
        "price": 8.99,
        "image": "https://gourmetliving.com.au/wp-content/uploads/2022/11/product-image_0002_Strawberry_Meringues30_gm-300x300.jpg"
    },
    {
        "id": 12,
        "title": "UNFORGETTABLE PRODUCTS VANILLA MERINGUE 30 GM",
        "price": 8.99,
        "image": "https://gourmetliving.com.au/wp-content/uploads/2022/11/product-image_0001_Vanillla_Meringue30_gm-300x300.jpg"
    },
]

bestseller = bestseller.map((items) => ({ ...items, quantity: 1 }))
console.log(bestseller);

export { hampers, bestseller }