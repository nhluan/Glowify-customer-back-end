import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createMultipleProducts() {
  try {
    const products = await prisma.product.createMany({
      data: [
        {
          name: 'Laptop',
          description: 'High-performance laptop',
          price: 1200.0,
        },
        {
          name: 'Smartphone',
          description: 'Latest model smartphone',
          price: 800.0,
        },
        {
          name: 'Headphones',
          description: 'Noise-cancelling headphones',
          price: 150.0,
        },
        {
          name: 'Smartwatch',
          description: 'Fitness and health tracking smartwatch',
          price: 200.0,
        },
        {
          name: 'Tablet',
          description: 'Lightweight tablet for work and play',
          price: 350.0,
        },
        {
          name: 'Camera',
          description: 'Digital camera with 4K video',
          price: 650.0,
        },
        {
          name: 'Monitor',
          description: '27-inch 4K monitor for gaming and work',
          price: 450.0,
        },
        {
          name: 'Keyboard',
          description: 'Mechanical keyboard for fast typing',
          price: 100.0,
        },
        {
          name: 'Mouse',
          description: 'Wireless mouse with ergonomic design',
          price: 40.0,
        },
        {
          name: 'Printer',
          description: 'All-in-one inkjet printer',
          price: 120.0,
        },
      ],
    });

    console.log('Products created:', products);
  } catch (error) {
    console.error('Error creating products:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createMultipleProducts();
