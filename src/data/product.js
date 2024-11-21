// product.js
const products = [
    {
      name: "The Derma Co 0.3% Retinol Face Serum, 30ml",
      price: 480,
      discountPrice: 360,
      discountPercentage: 25,
      imageUrls: [
        "https://jeeveedev.s3.us-east-2.amazonaws.com/whetstone-products/jeevee_erp/2021-04-19/d1/d1bbe40c6bfc9b70640a8ea7635ea55bff757135",
        "https://jeeveedev.s3.us-east-2.amazonaws.com/whetstone-products/jeevee_erp/2024-05-17/e8/e8d24e56ad5bcd5e02d96f4248c3e53ac0b39adb",
      ],
      href: "/products/the-derma-co-0-3-retinol-face-serum",
      rating: 4.4,
      reviewCount: 64,
      tag: "Best Seller",
    },
    {
      name: "Pilgrim Red Vine Toner & Mist- 100 Ml",
      price: 480,
      discountPrice: 422,
      discountPercentage: 12,
      imageUrls: [
        "https://jeeveedev.s3.us-east-2.amazonaws.com/whetstone-products/jeevee_erp/2024-05-14/76/763db91f60d479b8fb9dba896b65bda306d3d55b",
      ],
      href: "/product/stylish-handbag",
      rating: 4.5,
      reviewCount: 120,
      tag: "13.11",
    },
    {
      name: "Pilgrim Red Vine Night Creme Gel- 50 G",
      price: 1040,
      discountPrice: 915.2,
      discountPercentage: 12,
      imageUrls: [
        "https://jeeveedev.s3.us-east-2.amazonaws.com/whetstone-products/jeevee_erp/2024-05-17/e8/e8d24e56ad5bcd5e02d96f4248c3e53ac0b39adb",
      ],
      href: "/product/wireless-headphones",
      rating: 0,
      reviewCount: 0,
      tag: "",
    },
    {
      name: "The Derma Co 0.3% Retinol Face Serum, 30ml",
      price: 480,
      discountPrice: 360,
      discountPercentage: 25,
      imageUrls: [
        "https://jeeveedev.s3.us-east-2.amazonaws.com/whetstone-products/jeevee_erp/2021-04-19/d1/d1bbe40c6bfc9b70640a8ea7635ea55bff757135",
        "https://jeeveedev.s3.us-east-2.amazonaws.com/whetstone-products/jeevee_erp/2024-05-17/e8/e8d24e56ad5bcd5e02d96f4248c3e53ac0b39adb",
      ],
      href: "/products/the-derma-co-0-3-retinol-face-serum",
      rating: 4.4,
      reviewCount: 64,
      tag: "Best Seller",
    },
    {
      name: "Pilgrim Red Vine Toner & Mist- 100 Ml",
      price: 480,
      discountPrice: 422,
      discountPercentage: 12,
      imageUrls: [
        "https://jeeveedev.s3.us-east-2.amazonaws.com/whetstone-products/jeevee_erp/2024-05-14/76/763db91f60d479b8fb9dba896b65bda306d3d55b",
      ],
      href: "/product/stylish-handbag",
      rating: 4.5,
      reviewCount: 120,
      tag: "13.11",
    },
    {
      name: "Pilgrim Red Vine Night Creme Gel- 50 G",
      price: 1040,
      discountPrice: 915.2,
      discountPercentage: 12,
      imageUrls: [
        "https://jeeveedev.s3.us-east-2.amazonaws.com/whetstone-products/jeevee_erp/2024-05-17/e8/e8d24e56ad5bcd5e02d96f4248c3e53ac0b39adb",
      ],
      href: "/product/wireless-headphones",
      rating: 0,
      reviewCount: 0,
      tag: "",
    },
    {
      name: "The Derma Co 0.3% Retinol Face Serum, 30ml",
      price: 480,
      discountPrice: 360,
      discountPercentage: 25,
      imageUrls: [
        "https://jeeveedev.s3.us-east-2.amazonaws.com/whetstone-products/jeevee_erp/2021-04-19/d1/d1bbe40c6bfc9b70640a8ea7635ea55bff757135",
        "https://jeeveedev.s3.us-east-2.amazonaws.com/whetstone-products/jeevee_erp/2024-05-17/e8/e8d24e56ad5bcd5e02d96f4248c3e53ac0b39adb",
      ],
      href: "/products/the-derma-co-0-3-retinol-face-serum",
      rating: 4.4,
      reviewCount: 64,
      tag: "Best Seller",
    },
    {
      name: "Pilgrim Red Vine Toner & Mist- 100 Ml",
      price: 480,
      discountPrice: 422,
      discountPercentage: 12,
      imageUrls: [
        "https://jeeveedev.s3.us-east-2.amazonaws.com/whetstone-products/jeevee_erp/2024-05-14/76/763db91f60d479b8fb9dba896b65bda306d3d55b",
      ],
      href: "/product/stylish-handbag",
      rating: 4.5,
      reviewCount: 120,
      tag: "13.11",
    },
    {
      name: "Pilgrim Red Vine Night Creme Gel- 50 G",
      price: 1040,
      discountPrice: 915.2,
      discountPercentage: 12,
      imageUrls: [
        "https://jeeveedev.s3.us-east-2.amazonaws.com/whetstone-products/jeevee_erp/2024-05-17/e8/e8d24e56ad5bcd5e02d96f4248c3e53ac0b39adb",
      ],
      href: "/product/wireless-headphones",
      rating: 0,
      reviewCount: 0,
      tag: "",
    },
    {
      name: "The Derma Co 0.3% Retinol Face Serum, 30ml",
      price: 480,
      discountPrice: 360,
      discountPercentage: 25,
      imageUrls: [
        "https://jeeveedev.s3.us-east-2.amazonaws.com/whetstone-products/jeevee_erp/2021-04-19/d1/d1bbe40c6bfc9b70640a8ea7635ea55bff757135",
        "https://jeeveedev.s3.us-east-2.amazonaws.com/whetstone-products/jeevee_erp/2024-05-17/e8/e8d24e56ad5bcd5e02d96f4248c3e53ac0b39adb",
      ],
      href: "/products/the-derma-co-0-3-retinol-face-serum",
      rating: 4.4,
      reviewCount: 64,
      tag: "Best Seller",
    },
    {
      name: "Pilgrim Red Vine Toner & Mist- 100 Ml",
      price: 480,
      discountPrice: 422,
      discountPercentage: 12,
      imageUrls: [
        "https://jeeveedev.s3.us-east-2.amazonaws.com/whetstone-products/jeevee_erp/2024-05-14/76/763db91f60d479b8fb9dba896b65bda306d3d55b",
      ],
      href: "/product/stylish-handbag",
      rating: 4.5,
      reviewCount: 120,
      tag: "13.11",
    },
    {
      name: "Pilgrim Red Vine Night Creme Gel- 50 G",
      price: 1040,
      discountPrice: 915.2,
      discountPercentage: 12,
      imageUrls: [
        "https://jeeveedev.s3.us-east-2.amazonaws.com/whetstone-products/jeevee_erp/2024-05-17/e8/e8d24e56ad5bcd5e02d96f4248c3e53ac0b39adb",
      ],
      href: "/product/wireless-headphones",
      rating: 0,
      reviewCount: 0,
      tag: "",
    },
  ];
  
  export default products;
  