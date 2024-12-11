// createCustomers.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createMultipleCustomers() {
  try {
    const customers = await prisma.customer.createMany({
      data: [
        {
          email: 'alice@example.com',
          firstName: 'Alice',
          lastName: 'Smith',
          password: 'alicepassword123',
          status: true,
        },
        {
          email: 'bob@example.com',
          firstName: 'Bob',
          lastName: 'Johnson',
          password: 'bobpassword123',
          status: false,
        },
        {
          email: 'charlie@example.com',
          firstName: 'Charlie',
          lastName: 'Brown',
          password: 'charliepassword123',
          status: true,
        },
        {
          email: 'dave@example.com',
          firstName: 'Dave',
          lastName: 'Davis',
          password: 'davepassword123',
          status: true,
        },
        {
          email: 'eve@example.com',
          firstName: 'Eve',
          lastName: 'White',
          password: 'evepassword123',
          status: false,
        },
        {
          email: 'frank@example.com',
          firstName: 'Frank',
          lastName: 'Miller',
          password: 'frankpassword123',
          status: true,
        },
        {
          email: 'grace@example.com',
          firstName: 'Grace',
          lastName: 'Moore',
          password: 'gracepassword123',
          status: true,
        },
        {
          email: 'hannah@example.com',
          firstName: 'Hannah',
          lastName: 'Taylor',
          password: 'hannahpassword123',
          status: false,
        },
        {
          email: 'ian@example.com',
          firstName: 'Ian',
          lastName: 'Wilson',
          password: 'ianpassword123',
          status: true,
        },
        {
          email: 'jack@example.com',
          firstName: 'Jack',
          lastName: 'Anderson',
          password: 'jackpassword123',
          status: true,
        },
      ],
    });

    console.log('Customers created:', customers);
  } catch (error) {
    console.error('Error creating customers:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createMultipleCustomers();
