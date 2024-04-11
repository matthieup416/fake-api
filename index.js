// Add Express
const express = require('express')

// Initialize Express
const app = express()

// Create GET request
app.get('/products', (req, res) => {
  const products = [
    {
      id: 101,
      name: 'Smartphone Pro Max',
      description:
        'The latest in our line of smartphones, featuring cutting-edge technology and an innovative camera system.',
      price: 999.99,
      currency: 'USD',
      inStock: true,
      rating: 4.8,
      category: 'Electronics',
      subCategory: 'Smartphones',
      brand: 'TechGiant',
      specs: {
        color: 'Midnight Black',
        weight: '203g',
        dimensions: '146.7 x 71.5 x 7.4 mm',
        display: '6.7 inch OLED',
        battery: '4100mAh',
        processor: 'A15 Bionic',
        storageOptions: ['128GB', '256GB', '512GB'],
        OS: 'OS 15',
      },
      reviews: [
        {
          username: 'TechLover',
          rating: 5,
          title: 'Incredible Performance!',
          comment:
            "I'm amazed by the speed and the camera quality. Worth every penny!",
          date: '2023-09-15',
        },
        {
          username: 'GadgetGuru',
          rating: 4,
          title: 'Great phone, but a bit pricey',
          comment:
            "Love the display and battery life. However, it's a bit on the expensive side.",
          date: '2023-09-20',
        },
      ],
      images: [
        'https://example.com/images/smartphone-front.jpg',
        'https://example.com/images/smartphone-back.jpg',
        'https://example.com/images/smartphone-side.jpg',
      ],
      availability: {
        online: true,
        inStore: false,
        locations: [],
      },
      shippingOptions: [
        {
          method: 'Standard',
          cost: 0,
          estimatedDelivery: '5-7 business days',
        },
        {
          method: 'Express',
          cost: 19.99,
          estimatedDelivery: '2-3 business days',
        },
      ],
      tags: ['latest', 'smartphone', 'TechGiant', 'high-end'],
    },
    {
      id: 102,
      name: 'UltraHD 4K Smart TV',
      description:
        'Experience cinema-quality visuals at home with our latest 4K Smart TV, featuring smart connectivity and immersive sound.',
      price: 1299.99,
      currency: 'USD',
      inStock: true,
      rating: 4.7,
      category: 'Electronics',
      subCategory: 'Televisions',
      brand: 'VisionPlus',
      specs: {
        color: 'Sleek Silver',
        weight: '22kg',
        dimensions: '1248 x 728 x 88 mm',
        display: '65 inch LED',
        resolution: '3840 x 2160',
        connectivity: ['HDMI', 'USB', 'Wi-Fi', 'Bluetooth'],
        OS: 'SmartHub',
      },
      reviews: [
        {
          username: 'CinemaFan',
          rating: 5,
          title: 'Like being at the movies!',
          comment:
            'The picture quality is stunning, and the smart features are very user-friendly.',
          date: '2023-08-10',
        },
        {
          username: 'BusyMom',
          rating: 4,
          title: 'Great for family movie nights',
          comment:
            'Everyone loves movie night now with this TV. Just wish the remote was more intuitive.',
          date: '2023-08-15',
        },
      ],
      images: [
        'https://example.com/images/tv-front.jpg',
        'https://example.com/images/tv-back.jpg',
      ],
      availability: {
        online: true,
        inStore: true,
        locations: ['New York', 'San Francisco', 'Chicago'],
      },
      shippingOptions: [
        {
          method: 'Free Shipping',
          cost: 0,
          estimatedDelivery: '7-10 business days',
        },
        {
          method: 'Priority',
          cost: 39.99,
          estimatedDelivery: '3-5 business days',
        },
      ],
      tags: ['4K', 'Smart TV', 'VisionPlus', 'UltraHD'],
    },
    ,
    {
      id: 102,
      name: 'UltraHD 4K Smart TV',
      description:
        'Experience cinema-quality visuals at home with our latest 4K Smart TV, featuring smart connectivity and immersive sound.',
      price: 1299.99,
      currency: 'USD',
      inStock: true,
      rating: 4.7,
      category: 'Electronics',
      subCategory: 'Televisions',
      brand: 'VisionPlus',
      specs: {
        color: 'Sleek Silver',
        weight: '22kg',
        dimensions: '1248 x 728 x 88 mm',
        display: '65 inch LED',
        resolution: '3840 x 2160',
        connectivity: ['HDMI', 'USB', 'Wi-Fi', 'Bluetooth'],
        OS: 'SmartHub',
      },
      reviews: [
        {
          username: 'CinemaFan',
          rating: 5,
          title: 'Like being at the movies!',
          comment:
            'The picture quality is stunning, and the smart features are very user-friendly.',
          date: '2023-08-10',
        },
        {
          username: 'BusyMom',
          rating: 4,
          title: 'Great for family movie nights',
          comment:
            'Everyone loves movie night now with this TV. Just wish the remote was more intuitive.',
          date: '2023-08-15',
        },
      ],
      images: [
        'https://example.com/images/tv-front.jpg',
        'https://example.com/images/tv-back.jpg',
      ],
      availability: {
        online: true,
        inStore: true,
        locations: ['New York', 'San Francisco', 'Chicago'],
      },
      shippingOptions: [
        {
          method: 'Free Shipping',
          cost: 0,
          estimatedDelivery: '7-10 business days',
        },
        {
          method: 'Priority',
          cost: 39.99,
          estimatedDelivery: '3-5 business days',
        },
      ],
      tags: ['4K', 'Smart TV', 'VisionPlus', 'UltraHD'],
    },
    ,
    {
      id: 102,
      name: 'UltraHD 4K Smart TV',
      description:
        'Experience cinema-quality visuals at home with our latest 4K Smart TV, featuring smart connectivity and immersive sound.',
      price: 1299.99,
      currency: 'USD',
      inStock: true,
      rating: 4.7,
      category: 'Electronics',
      subCategory: 'Televisions',
      brand: 'VisionPlus',
      specs: {
        color: 'Sleek Silver',
        weight: '22kg',
        dimensions: '1248 x 728 x 88 mm',
        display: '65 inch LED',
        resolution: '3840 x 2160',
        connectivity: ['HDMI', 'USB', 'Wi-Fi', 'Bluetooth'],
        OS: 'SmartHub',
      },
      reviews: [
        {
          username: 'CinemaFan',
          rating: 5,
          title: 'Like being at the movies!',
          comment:
            'The picture quality is stunning, and the smart features are very user-friendly.',
          date: '2023-08-10',
        },
        {
          username: 'BusyMom',
          rating: 4,
          title: 'Great for family movie nights',
          comment:
            'Everyone loves movie night now with this TV. Just wish the remote was more intuitive.',
          date: '2023-08-15',
        },
      ],
      images: [
        'https://example.com/images/tv-front.jpg',
        'https://example.com/images/tv-back.jpg',
      ],
      availability: {
        online: true,
        inStore: true,
        locations: ['New York', 'San Francisco', 'Chicago'],
      },
      shippingOptions: [
        {
          method: 'Free Shipping',
          cost: 0,
          estimatedDelivery: '7-10 business days',
        },
        {
          method: 'Priority',
          cost: 39.99,
          estimatedDelivery: '3-5 business days',
        },
      ],
      tags: ['4K', 'Smart TV', 'VisionPlus', 'UltraHD'],
    },
    ,
    {
      id: 102,
      name: 'UltraHD 4K Smart TV',
      description:
        'Experience cinema-quality visuals at home with our latest 4K Smart TV, featuring smart connectivity and immersive sound.',
      price: 1299.99,
      currency: 'USD',
      inStock: true,
      rating: 4.7,
      category: 'Electronics',
      subCategory: 'Televisions',
      brand: 'VisionPlus',
      specs: {
        color: 'Sleek Silver',
        weight: '22kg',
        dimensions: '1248 x 728 x 88 mm',
        display: '65 inch LED',
        resolution: '3840 x 2160',
        connectivity: ['HDMI', 'USB', 'Wi-Fi', 'Bluetooth'],
        OS: 'SmartHub',
      },
      reviews: [
        {
          username: 'CinemaFan',
          rating: 5,
          title: 'Like being at the movies!',
          comment:
            'The picture quality is stunning, and the smart features are very user-friendly.',
          date: '2023-08-10',
        },
        {
          username: 'BusyMom',
          rating: 4,
          title: 'Great for family movie nights',
          comment:
            'Everyone loves movie night now with this TV. Just wish the remote was more intuitive.',
          date: '2023-08-15',
        },
      ],
      images: [
        'https://example.com/images/tv-front.jpg',
        'https://example.com/images/tv-back.jpg',
      ],
      availability: {
        online: true,
        inStore: true,
        locations: ['New York', 'San Francisco', 'Chicago'],
      },
      shippingOptions: [
        {
          method: 'Free Shipping',
          cost: 0,
          estimatedDelivery: '7-10 business days',
        },
        {
          method: 'Priority',
          cost: 39.99,
          estimatedDelivery: '3-5 business days',
        },
      ],
      tags: ['4K', 'Smart TV', 'VisionPlus', 'UltraHD'],
    },
    ,
    {
      id: 102,
      name: 'UltraHD 4K Smart TV',
      description:
        'Experience cinema-quality visuals at home with our latest 4K Smart TV, featuring smart connectivity and immersive sound.',
      price: 1299.99,
      currency: 'USD',
      inStock: true,
      rating: 4.7,
      category: 'Electronics',
      subCategory: 'Televisions',
      brand: 'VisionPlus',
      specs: {
        color: 'Sleek Silver',
        weight: '22kg',
        dimensions: '1248 x 728 x 88 mm',
        display: '65 inch LED',
        resolution: '3840 x 2160',
        connectivity: ['HDMI', 'USB', 'Wi-Fi', 'Bluetooth'],
        OS: 'SmartHub',
      },
      reviews: [
        {
          username: 'CinemaFan',
          rating: 5,
          title: 'Like being at the movies!',
          comment:
            'The picture quality is stunning, and the smart features are very user-friendly.',
          date: '2023-08-10',
        },
        {
          username: 'BusyMom',
          rating: 4,
          title: 'Great for family movie nights',
          comment:
            'Everyone loves movie night now with this TV. Just wish the remote was more intuitive.',
          date: '2023-08-15',
        },
      ],
      images: [
        'https://example.com/images/tv-front.jpg',
        'https://example.com/images/tv-back.jpg',
      ],
      availability: {
        online: true,
        inStore: true,
        locations: ['New York', 'San Francisco', 'Chicago'],
      },
      shippingOptions: [
        {
          method: 'Free Shipping',
          cost: 0,
          estimatedDelivery: '7-10 business days',
        },
        {
          method: 'Priority',
          cost: 39.99,
          estimatedDelivery: '3-5 business days',
        },
      ],
      tags: ['4K', 'Smart TV', 'VisionPlus', 'UltraHD'],
    },
    ,
    {
      id: 102,
      name: 'UltraHD 4K Smart TV',
      description:
        'Experience cinema-quality visuals at home with our latest 4K Smart TV, featuring smart connectivity and immersive sound.',
      price: 1299.99,
      currency: 'USD',
      inStock: true,
      rating: 4.7,
      category: 'Electronics',
      subCategory: 'Televisions',
      brand: 'VisionPlus',
      specs: {
        color: 'Sleek Silver',
        weight: '22kg',
        dimensions: '1248 x 728 x 88 mm',
        display: '65 inch LED',
        resolution: '3840 x 2160',
        connectivity: ['HDMI', 'USB', 'Wi-Fi', 'Bluetooth'],
        OS: 'SmartHub',
      },
      reviews: [
        {
          username: 'CinemaFan',
          rating: 5,
          title: 'Like being at the movies!',
          comment:
            'The picture quality is stunning, and the smart features are very user-friendly.',
          date: '2023-08-10',
        },
        {
          username: 'BusyMom',
          rating: 4,
          title: 'Great for family movie nights',
          comment:
            'Everyone loves movie night now with this TV. Just wish the remote was more intuitive.',
          date: '2023-08-15',
        },
      ],
      images: [
        'https://example.com/images/tv-front.jpg',
        'https://example.com/images/tv-back.jpg',
      ],
      availability: {
        online: true,
        inStore: true,
        locations: ['New York', 'San Francisco', 'Chicago'],
      },
      shippingOptions: [
        {
          method: 'Free Shipping',
          cost: 0,
          estimatedDelivery: '7-10 business days',
        },
        {
          method: 'Priority',
          cost: 39.99,
          estimatedDelivery: '3-5 business days',
        },
      ],
      tags: ['4K', 'Smart TV', 'VisionPlus', 'UltraHD'],
    },
    ,
    {
      id: 102,
      name: 'UltraHD 4K Smart TV',
      description:
        'Experience cinema-quality visuals at home with our latest 4K Smart TV, featuring smart connectivity and immersive sound.',
      price: 1299.99,
      currency: 'USD',
      inStock: true,
      rating: 4.7,
      category: 'Electronics',
      subCategory: 'Televisions',
      brand: 'VisionPlus',
      specs: {
        color: 'Sleek Silver',
        weight: '22kg',
        dimensions: '1248 x 728 x 88 mm',
        display: '65 inch LED',
        resolution: '3840 x 2160',
        connectivity: ['HDMI', 'USB', 'Wi-Fi', 'Bluetooth'],
        OS: 'SmartHub',
      },
      reviews: [
        {
          username: 'CinemaFan',
          rating: 5,
          title: 'Like being at the movies!',
          comment:
            'The picture quality is stunning, and the smart features are very user-friendly.',
          date: '2023-08-10',
        },
        {
          username: 'BusyMom',
          rating: 4,
          title: 'Great for family movie nights',
          comment:
            'Everyone loves movie night now with this TV. Just wish the remote was more intuitive.',
          date: '2023-08-15',
        },
      ],
      images: [
        'https://example.com/images/tv-front.jpg',
        'https://example.com/images/tv-back.jpg',
      ],
      availability: {
        online: true,
        inStore: true,
        locations: ['New York', 'San Francisco', 'Chicago'],
      },
      shippingOptions: [
        {
          method: 'Free Shipping',
          cost: 0,
          estimatedDelivery: '7-10 business days',
        },
        {
          method: 'Priority',
          cost: 39.99,
          estimatedDelivery: '3-5 business days',
        },
      ],
      tags: ['4K', 'Smart TV', 'VisionPlus', 'UltraHD'],
    },
    ,
    {
      id: 102,
      name: 'UltraHD 4K Smart TV',
      description:
        'Experience cinema-quality visuals at home with our latest 4K Smart TV, featuring smart connectivity and immersive sound.',
      price: 1299.99,
      currency: 'USD',
      inStock: true,
      rating: 4.7,
      category: 'Electronics',
      subCategory: 'Televisions',
      brand: 'VisionPlus',
      specs: {
        color: 'Sleek Silver',
        weight: '22kg',
        dimensions: '1248 x 728 x 88 mm',
        display: '65 inch LED',
        resolution: '3840 x 2160',
        connectivity: ['HDMI', 'USB', 'Wi-Fi', 'Bluetooth'],
        OS: 'SmartHub',
      },
      reviews: [
        {
          username: 'CinemaFan',
          rating: 5,
          title: 'Like being at the movies!',
          comment:
            'The picture quality is stunning, and the smart features are very user-friendly.',
          date: '2023-08-10',
        },
        {
          username: 'BusyMom',
          rating: 4,
          title: 'Great for family movie nights',
          comment:
            'Everyone loves movie night now with this TV. Just wish the remote was more intuitive.',
          date: '2023-08-15',
        },
      ],
      images: [
        'https://example.com/images/tv-front.jpg',
        'https://example.com/images/tv-back.jpg',
      ],
      availability: {
        online: true,
        inStore: true,
        locations: ['New York', 'San Francisco', 'Chicago'],
      },
      shippingOptions: [
        {
          method: 'Free Shipping',
          cost: 0,
          estimatedDelivery: '7-10 business days',
        },
        {
          method: 'Priority',
          cost: 39.99,
          estimatedDelivery: '3-5 business days',
        },
      ],
      tags: ['4K', 'Smart TV', 'VisionPlus', 'UltraHD'],
    },
    ,
    {
      id: 102,
      name: 'UltraHD 4K Smart TV',
      description:
        'Experience cinema-quality visuals at home with our latest 4K Smart TV, featuring smart connectivity and immersive sound.',
      price: 1299.99,
      currency: 'USD',
      inStock: true,
      rating: 4.7,
      category: 'Electronics',
      subCategory: 'Televisions',
      brand: 'VisionPlus',
      specs: {
        color: 'Sleek Silver',
        weight: '22kg',
        dimensions: '1248 x 728 x 88 mm',
        display: '65 inch LED',
        resolution: '3840 x 2160',
        connectivity: ['HDMI', 'USB', 'Wi-Fi', 'Bluetooth'],
        OS: 'SmartHub',
      },
      reviews: [
        {
          username: 'CinemaFan',
          rating: 5,
          title: 'Like being at the movies!',
          comment:
            'The picture quality is stunning, and the smart features are very user-friendly.',
          date: '2023-08-10',
        },
        {
          username: 'BusyMom',
          rating: 4,
          title: 'Great for family movie nights',
          comment:
            'Everyone loves movie night now with this TV. Just wish the remote was more intuitive.',
          date: '2023-08-15',
        },
      ],
      images: [
        'https://example.com/images/tv-front.jpg',
        'https://example.com/images/tv-back.jpg',
      ],
      availability: {
        online: true,
        inStore: true,
        locations: ['New York', 'San Francisco', 'Chicago'],
      },
      shippingOptions: [
        {
          method: 'Free Shipping',
          cost: 0,
          estimatedDelivery: '7-10 business days',
        },
        {
          method: 'Priority',
          cost: 39.99,
          estimatedDelivery: '3-5 business days',
        },
      ],
      tags: ['4K', 'Smart TV', 'VisionPlus', 'UltraHD'],
    },
    ,
    {
      id: 102,
      name: 'UltraHD 4K Smart TV',
      description:
        'Experience cinema-quality visuals at home with our latest 4K Smart TV, featuring smart connectivity and immersive sound.',
      price: 1299.99,
      currency: 'USD',
      inStock: true,
      rating: 4.7,
      category: 'Electronics',
      subCategory: 'Televisions',
      brand: 'VisionPlus',
      specs: {
        color: 'Sleek Silver',
        weight: '22kg',
        dimensions: '1248 x 728 x 88 mm',
        display: '65 inch LED',
        resolution: '3840 x 2160',
        connectivity: ['HDMI', 'USB', 'Wi-Fi', 'Bluetooth'],
        OS: 'SmartHub',
      },
      reviews: [
        {
          username: 'CinemaFan',
          rating: 5,
          title: 'Like being at the movies!',
          comment:
            'The picture quality is stunning, and the smart features are very user-friendly.',
          date: '2023-08-10',
        },
        {
          username: 'BusyMom',
          rating: 4,
          title: 'Great for family movie nights',
          comment:
            'Everyone loves movie night now with this TV. Just wish the remote was more intuitive.',
          date: '2023-08-15',
        },
      ],
      images: [
        'https://example.com/images/tv-front.jpg',
        'https://example.com/images/tv-back.jpg',
      ],
      availability: {
        online: true,
        inStore: true,
        locations: ['New York', 'San Francisco', 'Chicago'],
      },
      shippingOptions: [
        {
          method: 'Free Shipping',
          cost: 0,
          estimatedDelivery: '7-10 business days',
        },
        {
          method: 'Priority',
          cost: 39.99,
          estimatedDelivery: '3-5 business days',
        },
      ],
      tags: ['4K', 'Smart TV', 'VisionPlus', 'UltraHD'],
    },
    ,
    {
      id: 102,
      name: 'UltraHD 4K Smart TV',
      description:
        'Experience cinema-quality visuals at home with our latest 4K Smart TV, featuring smart connectivity and immersive sound.',
      price: 1299.99,
      currency: 'USD',
      inStock: true,
      rating: 4.7,
      category: 'Electronics',
      subCategory: 'Televisions',
      brand: 'VisionPlus',
      specs: {
        color: 'Sleek Silver',
        weight: '22kg',
        dimensions: '1248 x 728 x 88 mm',
        display: '65 inch LED',
        resolution: '3840 x 2160',
        connectivity: ['HDMI', 'USB', 'Wi-Fi', 'Bluetooth'],
        OS: 'SmartHub',
      },
      reviews: [
        {
          username: 'CinemaFan',
          rating: 5,
          title: 'Like being at the movies!',
          comment:
            'The picture quality is stunning, and the smart features are very user-friendly.',
          date: '2023-08-10',
        },
        {
          username: 'BusyMom',
          rating: 4,
          title: 'Great for family movie nights',
          comment:
            'Everyone loves movie night now with this TV. Just wish the remote was more intuitive.',
          date: '2023-08-15',
        },
      ],
      images: [
        'https://example.com/images/tv-front.jpg',
        'https://example.com/images/tv-back.jpg',
      ],
      availability: {
        online: true,
        inStore: true,
        locations: ['New York', 'San Francisco', 'Chicago'],
      },
      shippingOptions: [
        {
          method: 'Free Shipping',
          cost: 0,
          estimatedDelivery: '7-10 business days',
        },
        {
          method: 'Priority',
          cost: 39.99,
          estimatedDelivery: '3-5 business days',
        },
      ],
      tags: ['4K', 'Smart TV', 'VisionPlus', 'UltraHD'],
    },
    ,
    {
      id: 102,
      name: 'UltraHD 4K Smart TV',
      description:
        'Experience cinema-quality visuals at home with our latest 4K Smart TV, featuring smart connectivity and immersive sound.',
      price: 1299.99,
      currency: 'USD',
      inStock: true,
      rating: 4.7,
      category: 'Electronics',
      subCategory: 'Televisions',
      brand: 'VisionPlus',
      specs: {
        color: 'Sleek Silver',
        weight: '22kg',
        dimensions: '1248 x 728 x 88 mm',
        display: '65 inch LED',
        resolution: '3840 x 2160',
        connectivity: ['HDMI', 'USB', 'Wi-Fi', 'Bluetooth'],
        OS: 'SmartHub',
      },
      reviews: [
        {
          username: 'CinemaFan',
          rating: 5,
          title: 'Like being at the movies!',
          comment:
            'The picture quality is stunning, and the smart features are very user-friendly.',
          date: '2023-08-10',
        },
        {
          username: 'BusyMom',
          rating: 4,
          title: 'Great for family movie nights',
          comment:
            'Everyone loves movie night now with this TV. Just wish the remote was more intuitive.',
          date: '2023-08-15',
        },
      ],
      images: [
        'https://example.com/images/tv-front.jpg',
        'https://example.com/images/tv-back.jpg',
      ],
      availability: {
        online: true,
        inStore: true,
        locations: ['New York', 'San Francisco', 'Chicago'],
      },
      shippingOptions: [
        {
          method: 'Free Shipping',
          cost: 0,
          estimatedDelivery: '7-10 business days',
        },
        {
          method: 'Priority',
          cost: 39.99,
          estimatedDelivery: '3-5 business days',
        },
      ],
      tags: ['4K', 'Smart TV', 'VisionPlus', 'UltraHD'],
    },
    ,
    {
      id: 102,
      name: 'UltraHD 4K Smart TV',
      description:
        'Experience cinema-quality visuals at home with our latest 4K Smart TV, featuring smart connectivity and immersive sound.',
      price: 1299.99,
      currency: 'USD',
      inStock: true,
      rating: 4.7,
      category: 'Electronics',
      subCategory: 'Televisions',
      brand: 'VisionPlus',
      specs: {
        color: 'Sleek Silver',
        weight: '22kg',
        dimensions: '1248 x 728 x 88 mm',
        display: '65 inch LED',
        resolution: '3840 x 2160',
        connectivity: ['HDMI', 'USB', 'Wi-Fi', 'Bluetooth'],
        OS: 'SmartHub',
      },
      reviews: [
        {
          username: 'CinemaFan',
          rating: 5,
          title: 'Like being at the movies!',
          comment:
            'The picture quality is stunning, and the smart features are very user-friendly.',
          date: '2023-08-10',
        },
        {
          username: 'BusyMom',
          rating: 4,
          title: 'Great for family movie nights',
          comment:
            'Everyone loves movie night now with this TV. Just wish the remote was more intuitive.',
          date: '2023-08-15',
        },
      ],
      images: [
        'https://example.com/images/tv-front.jpg',
        'https://example.com/images/tv-back.jpg',
      ],
      availability: {
        online: true,
        inStore: true,
        locations: ['New York', 'San Francisco', 'Chicago'],
      },
      shippingOptions: [
        {
          method: 'Free Shipping',
          cost: 0,
          estimatedDelivery: '7-10 business days',
        },
        {
          method: 'Priority',
          cost: 39.99,
          estimatedDelivery: '3-5 business days',
        },
      ],
      tags: ['4K', 'Smart TV', 'VisionPlus', 'UltraHD'],
    },
    ,
    {
      id: 102,
      name: 'UltraHD 4K Smart TV',
      description:
        'Experience cinema-quality visuals at home with our latest 4K Smart TV, featuring smart connectivity and immersive sound.',
      price: 1299.99,
      currency: 'USD',
      inStock: true,
      rating: 4.7,
      category: 'Electronics',
      subCategory: 'Televisions',
      brand: 'VisionPlus',
      specs: {
        color: 'Sleek Silver',
        weight: '22kg',
        dimensions: '1248 x 728 x 88 mm',
        display: '65 inch LED',
        resolution: '3840 x 2160',
        connectivity: ['HDMI', 'USB', 'Wi-Fi', 'Bluetooth'],
        OS: 'SmartHub',
      },
      reviews: [
        {
          username: 'CinemaFan',
          rating: 5,
          title: 'Like being at the movies!',
          comment:
            'The picture quality is stunning, and the smart features are very user-friendly.',
          date: '2023-08-10',
        },
        {
          username: 'BusyMom',
          rating: 4,
          title: 'Great for family movie nights',
          comment:
            'Everyone loves movie night now with this TV. Just wish the remote was more intuitive.',
          date: '2023-08-15',
        },
      ],
      images: [
        'https://example.com/images/tv-front.jpg',
        'https://example.com/images/tv-back.jpg',
      ],
      availability: {
        online: true,
        inStore: true,
        locations: ['New York', 'San Francisco', 'Chicago'],
      },
      shippingOptions: [
        {
          method: 'Free Shipping',
          cost: 0,
          estimatedDelivery: '7-10 business days',
        },
        {
          method: 'Priority',
          cost: 39.99,
          estimatedDelivery: '3-5 business days',
        },
      ],
      tags: ['4K', 'Smart TV', 'VisionPlus', 'UltraHD'],
    },
    ,
    {
      id: 102,
      name: 'UltraHD 4K Smart TV',
      description:
        'Experience cinema-quality visuals at home with our latest 4K Smart TV, featuring smart connectivity and immersive sound.',
      price: 1299.99,
      currency: 'USD',
      inStock: true,
      rating: 4.7,
      category: 'Electronics',
      subCategory: 'Televisions',
      brand: 'VisionPlus',
      specs: {
        color: 'Sleek Silver',
        weight: '22kg',
        dimensions: '1248 x 728 x 88 mm',
        display: '65 inch LED',
        resolution: '3840 x 2160',
        connectivity: ['HDMI', 'USB', 'Wi-Fi', 'Bluetooth'],
        OS: 'SmartHub',
      },
      reviews: [
        {
          username: 'CinemaFan',
          rating: 5,
          title: 'Like being at the movies!',
          comment:
            'The picture quality is stunning, and the smart features are very user-friendly.',
          date: '2023-08-10',
        },
        {
          username: 'BusyMom',
          rating: 4,
          title: 'Great for family movie nights',
          comment:
            'Everyone loves movie night now with this TV. Just wish the remote was more intuitive.',
          date: '2023-08-15',
        },
      ],
      images: [
        'https://example.com/images/tv-front.jpg',
        'https://example.com/images/tv-back.jpg',
      ],
      availability: {
        online: true,
        inStore: true,
        locations: ['New York', 'San Francisco', 'Chicago'],
      },
      shippingOptions: [
        {
          method: 'Free Shipping',
          cost: 0,
          estimatedDelivery: '7-10 business days',
        },
        {
          method: 'Priority',
          cost: 39.99,
          estimatedDelivery: '3-5 business days',
        },
      ],
      tags: ['4K', 'Smart TV', 'VisionPlus', 'UltraHD'],
    },
    ,
    {
      id: 102,
      name: 'UltraHD 4K Smart TV',
      description:
        'Experience cinema-quality visuals at home with our latest 4K Smart TV, featuring smart connectivity and immersive sound.',
      price: 1299.99,
      currency: 'USD',
      inStock: true,
      rating: 4.7,
      category: 'Electronics',
      subCategory: 'Televisions',
      brand: 'VisionPlus',
      specs: {
        color: 'Sleek Silver',
        weight: '22kg',
        dimensions: '1248 x 728 x 88 mm',
        display: '65 inch LED',
        resolution: '3840 x 2160',
        connectivity: ['HDMI', 'USB', 'Wi-Fi', 'Bluetooth'],
        OS: 'SmartHub',
      },
      reviews: [
        {
          username: 'CinemaFan',
          rating: 5,
          title: 'Like being at the movies!',
          comment:
            'The picture quality is stunning, and the smart features are very user-friendly.',
          date: '2023-08-10',
        },
        {
          username: 'BusyMom',
          rating: 4,
          title: 'Great for family movie nights',
          comment:
            'Everyone loves movie night now with this TV. Just wish the remote was more intuitive.',
          date: '2023-08-15',
        },
      ],
      images: [
        'https://example.com/images/tv-front.jpg',
        'https://example.com/images/tv-back.jpg',
      ],
      availability: {
        online: true,
        inStore: true,
        locations: ['New York', 'San Francisco', 'Chicago'],
      },
      shippingOptions: [
        {
          method: 'Free Shipping',
          cost: 0,
          estimatedDelivery: '7-10 business days',
        },
        {
          method: 'Priority',
          cost: 39.99,
          estimatedDelivery: '3-5 business days',
        },
      ],
      tags: ['4K', 'Smart TV', 'VisionPlus', 'UltraHD'],
    },
    ,
    {
      id: 102,
      name: 'UltraHD 4K Smart TV',
      description:
        'Experience cinema-quality visuals at home with our latest 4K Smart TV, featuring smart connectivity and immersive sound.',
      price: 1299.99,
      currency: 'USD',
      inStock: true,
      rating: 4.7,
      category: 'Electronics',
      subCategory: 'Televisions',
      brand: 'VisionPlus',
      specs: {
        color: 'Sleek Silver',
        weight: '22kg',
        dimensions: '1248 x 728 x 88 mm',
        display: '65 inch LED',
        resolution: '3840 x 2160',
        connectivity: ['HDMI', 'USB', 'Wi-Fi', 'Bluetooth'],
        OS: 'SmartHub',
      },
      reviews: [
        {
          username: 'CinemaFan',
          rating: 5,
          title: 'Like being at the movies!',
          comment:
            'The picture quality is stunning, and the smart features are very user-friendly.',
          date: '2023-08-10',
        },
        {
          username: 'BusyMom',
          rating: 4,
          title: 'Great for family movie nights',
          comment:
            'Everyone loves movie night now with this TV. Just wish the remote was more intuitive.',
          date: '2023-08-15',
        },
      ],
      images: [
        'https://example.com/images/tv-front.jpg',
        'https://example.com/images/tv-back.jpg',
      ],
      availability: {
        online: true,
        inStore: true,
        locations: ['New York', 'San Francisco', 'Chicago'],
      },
      shippingOptions: [
        {
          method: 'Free Shipping',
          cost: 0,
          estimatedDelivery: '7-10 business days',
        },
        {
          method: 'Priority',
          cost: 39.99,
          estimatedDelivery: '3-5 business days',
        },
      ],
      tags: ['4K', 'Smart TV', 'VisionPlus', 'UltraHD'],
    },
    ,
    {
      id: 102,
      name: 'UltraHD 4K Smart TV',
      description:
        'Experience cinema-quality visuals at home with our latest 4K Smart TV, featuring smart connectivity and immersive sound.',
      price: 1299.99,
      currency: 'USD',
      inStock: true,
      rating: 4.7,
      category: 'Electronics',
      subCategory: 'Televisions',
      brand: 'VisionPlus',
      specs: {
        color: 'Sleek Silver',
        weight: '22kg',
        dimensions: '1248 x 728 x 88 mm',
        display: '65 inch LED',
        resolution: '3840 x 2160',
        connectivity: ['HDMI', 'USB', 'Wi-Fi', 'Bluetooth'],
        OS: 'SmartHub',
      },
      reviews: [
        {
          username: 'CinemaFan',
          rating: 5,
          title: 'Like being at the movies!',
          comment:
            'The picture quality is stunning, and the smart features are very user-friendly.',
          date: '2023-08-10',
        },
        {
          username: 'BusyMom',
          rating: 4,
          title: 'Great for family movie nights',
          comment:
            'Everyone loves movie night now with this TV. Just wish the remote was more intuitive.',
          date: '2023-08-15',
        },
      ],
      images: [
        'https://example.com/images/tv-front.jpg',
        'https://example.com/images/tv-back.jpg',
      ],
      availability: {
        online: true,
        inStore: true,
        locations: ['New York', 'San Francisco', 'Chicago'],
      },
      shippingOptions: [
        {
          method: 'Free Shipping',
          cost: 0,
          estimatedDelivery: '7-10 business days',
        },
        {
          method: 'Priority',
          cost: 39.99,
          estimatedDelivery: '3-5 business days',
        },
      ],
      tags: ['4K', 'Smart TV', 'VisionPlus', 'UltraHD'],
    },
    ,
    {
      id: 102,
      name: 'UltraHD 4K Smart TV',
      description:
        'Experience cinema-quality visuals at home with our latest 4K Smart TV, featuring smart connectivity and immersive sound.',
      price: 1299.99,
      currency: 'USD',
      inStock: true,
      rating: 4.7,
      category: 'Electronics',
      subCategory: 'Televisions',
      brand: 'VisionPlus',
      specs: {
        color: 'Sleek Silver',
        weight: '22kg',
        dimensions: '1248 x 728 x 88 mm',
        display: '65 inch LED',
        resolution: '3840 x 2160',
        connectivity: ['HDMI', 'USB', 'Wi-Fi', 'Bluetooth'],
        OS: 'SmartHub',
      },
      reviews: [
        {
          username: 'CinemaFan',
          rating: 5,
          title: 'Like being at the movies!',
          comment:
            'The picture quality is stunning, and the smart features are very user-friendly.',
          date: '2023-08-10',
        },
        {
          username: 'BusyMom',
          rating: 4,
          title: 'Great for family movie nights',
          comment:
            'Everyone loves movie night now with this TV. Just wish the remote was more intuitive.',
          date: '2023-08-15',
        },
      ],
      images: [
        'https://example.com/images/tv-front.jpg',
        'https://example.com/images/tv-back.jpg',
      ],
      availability: {
        online: true,
        inStore: true,
        locations: ['New York', 'San Francisco', 'Chicago'],
      },
      shippingOptions: [
        {
          method: 'Free Shipping',
          cost: 0,
          estimatedDelivery: '7-10 business days',
        },
        {
          method: 'Priority',
          cost: 39.99,
          estimatedDelivery: '3-5 business days',
        },
      ],
      tags: ['4K', 'Smart TV', 'VisionPlus', 'UltraHD'],
    },
    ,
    {
      id: 102,
      name: 'UltraHD 4K Smart TV',
      description:
        'Experience cinema-quality visuals at home with our latest 4K Smart TV, featuring smart connectivity and immersive sound.',
      price: 1299.99,
      currency: 'USD',
      inStock: true,
      rating: 4.7,
      category: 'Electronics',
      subCategory: 'Televisions',
      brand: 'VisionPlus',
      specs: {
        color: 'Sleek Silver',
        weight: '22kg',
        dimensions: '1248 x 728 x 88 mm',
        display: '65 inch LED',
        resolution: '3840 x 2160',
        connectivity: ['HDMI', 'USB', 'Wi-Fi', 'Bluetooth'],
        OS: 'SmartHub',
      },
      reviews: [
        {
          username: 'CinemaFan',
          rating: 5,
          title: 'Like being at the movies!',
          comment:
            'The picture quality is stunning, and the smart features are very user-friendly.',
          date: '2023-08-10',
        },
        {
          username: 'BusyMom',
          rating: 4,
          title: 'Great for family movie nights',
          comment:
            'Everyone loves movie night now with this TV. Just wish the remote was more intuitive.',
          date: '2023-08-15',
        },
      ],
      images: [
        'https://example.com/images/tv-front.jpg',
        'https://example.com/images/tv-back.jpg',
      ],
      availability: {
        online: true,
        inStore: true,
        locations: ['New York', 'San Francisco', 'Chicago'],
      },
      shippingOptions: [
        {
          method: 'Free Shipping',
          cost: 0,
          estimatedDelivery: '7-10 business days',
        },
        {
          method: 'Priority',
          cost: 39.99,
          estimatedDelivery: '3-5 business days',
        },
      ],
      tags: ['4K', 'Smart TV', 'VisionPlus', 'UltraHD'],
    },
  ]
  res.json(products)
})

// Initialize server
app.listen(5000, () => {
  console.log('Running on port 5000.')
})
