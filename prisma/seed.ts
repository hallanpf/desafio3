import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Usuários
  const user1 = await prisma.user.create({
    data: {
      email: "teste@teste.com.br",
      name: "Usuário teste",
      password: "1234567",
      role: "admin"
    },
  });

  // Produtos
  const product1 = await prisma.product.create({
    data: {
      id: '14ce4a83-87d0-4147-a4aa-2f9049605f54',
      name: 'Lolito',
      description: 'Setting the bar as one of the loudest speakers in its class...',
      createdAt: new Date('2024-08-23T13:35:26.437Z'),
      updatedAt: new Date('2024-08-24T02:06:38.490Z'),
      user: {
        connect: {
          email: "teste@teste.com.br"
        }
      },
      Tags: {
        create: [
          {
            id: 'da1b81ed-972e-45ac-a523-ebf87139cd04',
            tags: 'sofa',
            createdAt: new Date('2024-08-23T13:35:26.445Z'),
            updatedAt: new Date('2024-08-23T13:35:26.445Z'),
          },
        ],
      },
      ProductVariant: {
        create: [
          {
            id: 'a4efd0db-21f8-443b-9f47-e445035d29df',
            price: 2500000,
            size: 'Large',
            sku: 'SKU125',
            color: 'White',
            quantity: 10,
            category: 'sofa',
            discount: 50,
            createdAt: new Date('2024-08-23T13:35:26.451Z'),
            updatedAt: new Date('2024-08-23T13:35:26.451Z'),
          },
        ],
      },
      ProductImages: {
        create: [
          {
            id: 'cc18d5f5-ac7a-4761-aeff-b19bbbc02ad7',
            url: 'http://localhost:5173/src/assets/productImages/product7/',
            createdAt: new Date('2024-08-23T13:35:26.455Z'),
            updatedAt: new Date('2024-08-23T13:35:26.455Z'),
          },
        ],
      },
    },
  });

  const product2 = await prisma.product.create({
    data: {
      id: '077ef807-e113-4b30-bfc7-1cafe5041533',
      name: 'Respira',
      description: 'Setting the bar as one of the loudest speakers in its class...',
      createdAt: new Date('2024-08-23T13:36:52.713Z'),
      updatedAt: new Date('2024-08-24T02:06:45.730Z'),
      user: {
        connect: {
          email: "teste@teste.com.br"
        }
      },
      Tags: {
        create: [
          {
            id: 'f9b56ab6-9f65-4b73-8745-fffda58230a1',
            tags: 'table',
            createdAt: new Date('2024-08-23T13:36:52.720Z'),
            updatedAt: new Date('2024-08-23T13:36:52.720Z'),
          },
        ],
      },
      ProductVariant: {
        create: [
          {
            id: 'ffb2bd70-9dc5-4f10-8ab0-699d3feeeac8',
            price: 2500000,
            size: 'Large',
            sku: 'SKU126',
            color: 'Wood',
            quantity: 10,
            category: 'table',
            discount: 0,
            createdAt: new Date('2024-08-23T13:36:52.725Z'),
            updatedAt: new Date('2024-08-23T13:36:52.725Z'),
          },
        ],
      },
      ProductImages: {
        create: [
          {
            id: '01128b8e-11ba-42a8-934b-500034b05414',
            url: 'http://localhost:5173/src/assets/productImages/product8/',
            createdAt: new Date('2024-08-23T13:36:52.728Z'),
            updatedAt: new Date('2024-08-23T13:36:52.728Z'),
          },
        ],
      },
    },
  });

  const product3 = await prisma.product.create({
    data: {
      id: '960afdc7-67f9-43d5-b61c-14dbd46b259f',
      name: 'Syltherine',
      description: 'Setting the bar as one of the loudest speakers in its class...',
      createdAt: new Date('2024-08-23T13:42:00.999Z'),
      updatedAt: new Date('2024-08-24T02:06:49.504Z'),
      user: {
        connect: {
          email: "teste@teste.com.br"
        }
      },
      Tags: {
        create: [
          {
            id: '5fa69690-a188-46fd-8328-2419d066e981',
            tags: 'chair',
            createdAt: new Date('2024-08-23T13:42:01.008Z'),
            updatedAt: new Date('2024-08-23T13:42:01.008Z'),
          },
        ],
      },
      ProductVariant: {
        create: [
          {
            id: '3f328682-5748-4fed-8365-1a7e2ff18426',
            price: 2500000,
            size: 'Small',
            sku: 'SKU123',
            color: 'White',
            quantity: 100,
            category: 'chair',
            discount: 30,
            createdAt: new Date('2024-08-23T13:42:01.014Z'),
            updatedAt: new Date('2024-08-23T13:42:01.014Z'),
          },
        ],
      },
      ProductImages: {
        create: [
          {
            id: 'bca4df11-eeaa-4fc1-90f6-644b61d95b17',
            url: 'http://localhost:5173/src/assets/productImages/product9/',
            createdAt: new Date('2024-08-23T13:42:01.017Z'),
            updatedAt: new Date('2024-08-23T13:42:01.017Z'),
          },
        ],
      },
    },
  });

  const product4 = await prisma.product.create({
    data: {
      id: 'b11ca81a-5c94-4be4-aaa4-18c3b44f3b32',
      name: 'Leviosa',
      description: 'Setting the bar as one of the loudest speakers in its class...',
      createdAt: new Date('2024-08-23T13:42:24.801Z'),
      updatedAt: new Date('2024-08-24T02:06:55.573Z'),
      user: {
        connect: {
          email: "teste@teste.com.br"
        }
      },
      Tags: {
        create: [
          {
            id: 'd1dd7230-a291-4e44-b204-4a97ccb2ecf3',
            tags: 'chair',
            createdAt: new Date('2024-08-23T13:42:24.808Z'),
            updatedAt: new Date('2024-08-23T13:42:24.808Z'),
          },
        ],
      },
      ProductVariant: {
        create: [
          {
            id: '445b9b68-fdaa-4e47-85b4-2a605b201678',
            price: 2500000,
            size: 'Small',
            sku: 'SKU124',
            color: 'White',
            quantity: 100,
            category: 'chair',
            discount: 0,
            createdAt: new Date('2024-08-23T13:42:24.815Z'),
            updatedAt: new Date('2024-08-23T13:42:24.815Z'),
          },
        ],
      },
      ProductImages: {
        create: [
          {
            id: '96c403fa-0f90-4d8b-8b37-c2c82a3aaeea',
            url: 'http://localhost:5173/src/assets/productImages/product10/',
            createdAt: new Date('2024-08-23T13:42:24.821Z'),
            updatedAt: new Date('2024-08-23T13:42:24.821Z'),
          },
        ],
      },
    },
  });
  
  const product5 = await prisma.product.create({
    data: {
      id: '5e9ff7e5-2cf9-4a9c-b579-e8463d55f00b',
      name: 'Lolito',
      description: 'Setting the bar as one of the loudest speakers in its class...',
      createdAt: new Date('2024-08-23T13:42:50.740Z'),
      updatedAt: new Date('2024-08-24T02:06:58.730Z'),
      user: {
        connect: {
          email: "teste@teste.com.br"
        }
      },
      Tags: {
        create: [
          {
            id: 'dfa94be2-e548-40ba-a5c4-43f8bf8fe6ca',
            tags: 'sofa',
            createdAt: new Date('2024-08-23T13:42:50.748Z'),
            updatedAt: new Date('2024-08-23T13:42:50.748Z'),
          },
        ],
      },
      ProductVariant: {
        create: [
          {
            id: '863ac53a-b84b-4df6-b5a2-cfbf1a3756a6',
            price: 2500000,
            size: 'Large',
            sku: 'SKU125',
            color: 'White',
            quantity: 10,
            category: 'sofa',
            discount: 50,
            createdAt: new Date('2024-08-23T13:42:50.752Z'),
            updatedAt: new Date('2024-08-23T13:42:50.752Z'),
          },
        ],
      },
      ProductImages: {
        create: [
          {
            id: 'c6bd775e-54a3-4f0c-bf7c-6b80da507ebf',
            url: 'http://localhost:5173/src/assets/productImages/product11/',
            createdAt: new Date('2024-08-23T13:42:50.756Z'),
            updatedAt: new Date('2024-08-23T13:42:50.756Z'),
          },
        ],
      },
    },
  });
  
  const product6 = await prisma.product.create({
    data: {
      id: '111298a3-7510-4d2d-962a-a7e3d93b2f51',
      name: 'Respira',
      description: 'Setting the bar as one of the loudest speakers in its class...',
      createdAt: new Date('2024-08-23T13:43:47.791Z'),
      updatedAt: new Date('2024-08-24T02:07:05.484Z'),
      user: {
        connect: {
          email: "teste@teste.com.br"
        }
      },
      Tags: {
        create: [
          {
            id: 'ad2b1710-fea8-480b-a6d6-c178545cb0c6',
            tags: 'table',
            createdAt: new Date('2024-08-23T13:43:47.799Z'),
            updatedAt: new Date('2024-08-23T13:43:47.799Z'),
          },
        ],
      },
      ProductVariant: {
        create: [
          {
            id: '1c95c11b-0d77-4f02-9b8d-6918780940c0',
            price: 2500000,
            size: 'Large',
            sku: 'SKU126',
            color: 'Wood',
            quantity: 10,
            category: 'table',
            discount: 0,
            createdAt: new Date('2024-08-23T13:43:47.804Z'),
            updatedAt: new Date('2024-08-23T13:43:47.804Z'),
          },
        ],
      },
      ProductImages: {
        create: [
          {
            id: '361b0e2b-52e6-4e52-9da9-6b83ab88413b',
            url: 'http://localhost:5173/src/assets/productImages/product12/',
            createdAt: new Date('2024-08-23T13:43:47.808Z'),
            updatedAt: new Date('2024-08-23T13:43:47.808Z'),
          },
        ],
      },
    },
  });
  
  const product7 = await prisma.product.create({
    data: {
      id: '77ef330a-18db-4fd4-9d95-3428445aa7de',
      name: 'Syltherine',
      description: 'Setting the bar as one of the loudest speakers in its class...',
      createdAt: new Date('2024-08-23T03:47:11.805Z'),
      updatedAt: new Date('2024-08-23T03:47:11.805Z'),
      user: {
        connect: {
          email: "teste@teste.com.br"
        }
      },
      Tags: {
        create: [
          {
            id: '9a6f95c2-d721-4f14-b2d2-4b8d5a244358',
            tags: 'chair',
            createdAt: new Date('2024-08-23T03:21:50.277Z'),
            updatedAt: new Date('2024-08-23T03:21:50.277Z'),
          },
        ],
      },
      ProductVariant: {
        create: [
          {
            id: '3a697c97-22b5-4f81-8c63-7ef2b8fb9656',
            price: 2500000,
            size: 'Small',
            sku: 'SKU123',
            color: 'White',
            quantity: 100,
            category: 'chair',
            discount: 30,
            createdAt: new Date('2024-08-23T03:21:50.284Z'),
            updatedAt: new Date('2024-08-23T03:21:50.284Z'),
          },
        ],
      },
      ProductImages: {
        create: [
          {
            id: '22be9602-aac3-4b52-9413-83afa8278e4d',
            url: 'http://localhost:5173/public/productImages/product1',
            createdAt: new Date('2024-08-23T03:21:50.289Z'),
            updatedAt: new Date('2024-08-23T03:37:22.536Z'),
          },
        ],
      },
    },
  });
  
  const product8 = await prisma.product.create({
    data: {
      id: '50e44238-7090-4e34-a7e5-401b9f520168',
      name: 'Leviosa',
      description: 'Setting the bar as one of the loudest speakers in its class...',
      createdAt: new Date('2024-08-23T03:47:21.805Z'),
      updatedAt: new Date('2024-08-24T02:06:14.916Z'),
      user: {
        connect: {
          email: "teste@teste.com.br"
        }
      },
      Tags: {
        create: [
          {
            id: '280bca5f-24c0-4214-97d7-6c2941613a87',
            tags: 'chair',
            createdAt: new Date('2024-08-23T03:47:21.832Z'),
            updatedAt: new Date('2024-08-23T03:47:21.832Z'),
          },
        ],
      },
      ProductVariant: {
        create: [
          {
            id: '279b88e6-4d40-4853-b2f8-e1a48cdbcc19',
            price: 2500000,
            size: 'Small',
            sku: 'SKU124',
            color: 'White',
            quantity: 100,
            category: 'chair',
            discount: 0,
            createdAt: new Date('2024-08-23T03:47:21.837Z'),
            updatedAt: new Date('2024-08-23T03:47:21.837Z'),
          },
        ],
      },
      ProductImages: {
        create: [
          {
            id: '5a55e823-5789-4236-8e35-70d42fc85147',
            url: 'http://localhost:5173/src/assets/productImages/product2/',
            createdAt: new Date('2024-08-23T03:47:21.842Z'),
            updatedAt: new Date('2024-08-23T03:47:21.842Z'),
          },
        ],
      },
    },
  });
  
  const product9 = await prisma.product.create({
    data: {
      id: '9958056a-70c8-47c7-923a-6d6eb37d85ca',
      name: 'Lolito',
      description: 'Setting the bar as one of the loudest speakers in its class...',
      createdAt: new Date('2024-08-23T03:56:02.743Z'),
      updatedAt: new Date('2024-08-24T02:06:19.908Z'),
      user: {
        connect: {
          email: "teste@teste.com.br"
        }
      },
      Tags: {
        create: [
          {
            id: '7a712066-7100-47e7-99b2-0c5db113e8a3',
            tags: 'sofa',
            createdAt: new Date('2024-08-23T03:56:02.764Z'),
            updatedAt: new Date('2024-08-23T03:56:02.764Z'),
          },
        ],
      },
      ProductVariant: {
        create: [
          {
            id: '52aec1d3-1eb3-4e06-a2cb-2c92221ff38d',
            price: 7000000,
            size: 'Large',
            sku: 'SKU125',
            color: 'Gray',
            quantity: 100,
            category: 'sofa',
            discount: 50,
            createdAt: new Date('2024-08-23T03:56:02.768Z'),
            updatedAt: new Date('2024-08-23T03:56:02.768Z'),
          },
        ],
      },
      ProductImages: {
        create: [
          {
            id: '838a02fb-1bc5-4a5e-bcbe-7c66a9ac2ad8',
            url: 'http://localhost:5173/src/assets/productImages/product3/',
            createdAt: new Date('2024-08-23T03:56:02.773Z'),
            updatedAt: new Date('2024-08-23T03:56:02.773Z'),
          },
        ],
      },
    },
  });
  
  const product10 = await prisma.product.create({
    data: {
      id: '9dca4235-4a51-4523-8761-fbe05b0722f9',
      name: 'Respira',
      description: 'Setting the bar as one of the loudest speakers in its class...',
      createdAt: new Date('2024-08-23T03:58:51.357Z'),
      updatedAt: new Date('2024-08-24T02:06:24.957Z'),
      user: {
        connect: {
          email: "teste@teste.com.br"
        }
      },
      Tags: {
        create: [
          {
            id: '30e573b1-a06c-4f5d-9a84-0f4e71d0c7a6',
            tags: 'table',
            createdAt: new Date('2024-08-23T03:58:51.364Z'),
            updatedAt: new Date('2024-08-23T03:58:51.364Z'),
          },
        ],
      },
      ProductVariant: {
        create: [
          {
            id: 'd5cba581-1f38-4d52-a473-015635bbdac6',
            price: 500000,
            size: 'Large',
            sku: 'SKU126',
            color: 'Wood',
            quantity: 100,
            category: 'table',
            discount: 0,
            createdAt: new Date('2024-08-23T03:58:51.368Z'),
            updatedAt: new Date('2024-08-23T03:58:51.368Z'),
          },
        ],
      },
      ProductImages: {
        create: [
          {
            id: 'b959176a-2fa4-4c1d-aa2f-9edb45e53447',
            url: 'http://localhost:5173/src/assets/productImages/product4/',
            createdAt: new Date('2024-08-23T03:58:51.372Z'),
            updatedAt: new Date('2024-08-23T03:58:51.372Z'),
          },
        ],
      },
    },
  });
  
  const product11 = await prisma.product.create({
    data: {
      id: '4d13d91d-07d1-4e91-80b3-56762dbbd380',
      name: 'Syltherine',
      description: 'Setting the bar as one of the loudest speakers in its class...',
      createdAt: new Date('2024-08-23T13:32:22.580Z'),
      updatedAt: new Date('2024-08-24T02:06:30.086Z'),
      user: {
        connect: {
          email: "teste@teste.com.br"
        }
      },
      Tags: {
        create: [
          {
            id: 'b8eafb8b-197c-4e3d-a151-575b7f3b8892',
            tags: 'chair',
            createdAt: new Date('2024-08-23T13:32:22.610Z'),
            updatedAt: new Date('2024-08-23T13:32:22.610Z'),
          },
        ],
      },
      ProductVariant: {
        create: [
          {
            id: 'f24e3777-0070-438f-9803-095dc760cf76',
            price: 2500000,
            size: 'Small',
            sku: 'SKU123',
            color: 'White',
            quantity: 100,
            category: 'chair',
            discount: 30,
            createdAt: new Date('2024-08-23T13:32:22.618Z'),
            updatedAt: new Date('2024-08-23T13:32:22.618Z'),
          },
        ],
      },
      ProductImages: {
        create: [
          {
            id: '199ba7c8-ccc8-4b6f-bdc6-70099584e9f2',
            url: 'http://localhost:5173/src/assets/productImages/product5/',
            createdAt: new Date('2024-08-23T13:32:22.623Z'),
            updatedAt: new Date('2024-08-23T13:32:22.623Z'),
          },
        ],
      },
    },
  });
  
  const product12 = await prisma.product.create({
    data: {
      id: 'f4fde5ec-5a41-4fa5-a386-dfadfd85955b',
      name: 'Leviosa',
      description: 'Setting the bar as one of the loudest speakers in its class...',
      createdAt: new Date('2024-08-23T13:33:46.600Z'),
      updatedAt: new Date('2024-08-24T02:06:35.034Z'),
      user: {
        connect: {
          email: "teste@teste.com.br"
        }
      },
      Tags: {
        create: [
          {
            id: 'a0a75889-23a6-415c-b4ac-f6ffa3aeadd6',
            tags: 'chair',
            createdAt: new Date('2024-08-23T13:33:46.606Z'),
            updatedAt: new Date('2024-08-23T13:33:46.606Z'),
          },
        ],
      },
      ProductVariant: {
        create: [
          {
            id: '83a8c903-84c3-4a9d-9e5f-9bf8e656c562',
            price: 2500000,
            size: 'Small',
            sku: 'SKU124',
            color: 'White',
            quantity: 100,
            category: 'chair',
            discount: 0,
            createdAt: new Date('2024-08-23T13:33:46.610Z'),
            updatedAt: new Date('2024-08-23T13:33:46.610Z'),
          },
        ],
      },
      ProductImages: {
        create: [
          {
            id: '00bb09f3-6c74-4a1f-a4cd-a3bc72a8f638',
            url: 'http://localhost:5173/src/assets/productImages/product6/',
            createdAt: new Date('2024-08-23T13:33:46.614Z'),
            updatedAt: new Date('2024-08-23T13:33:46.614Z'),
          },
        ],
      },
    },
  });
  
  const product13 = await prisma.product.create({
    data: {
      id: 'b564aece-da2e-483c-b818-887086ebc14e',
      name: 'Syltherine',
      description: 'Setting the bar as one of the loudest speakers in its class...',
      createdAt: new Date('2024-08-23T13:44:15.996Z'),
      updatedAt: new Date('2024-08-24T02:07:11.004Z'),
      user: {
        connect: {
          email: "teste@teste.com.br"
        }
      },
      Tags: {
        create: [
          {
            id: '8dfa220f-4d62-4501-a4e7-5188af211ef9',
            tags: 'chair',
            createdAt: new Date('2024-08-23T13:44:16.003Z'),
            updatedAt: new Date('2024-08-23T13:44:16.003Z'),
          },
        ],
      },
      ProductVariant: {
        create: [
          {
            id: '91eda512-62c0-45be-883d-bb29c34da51e',
            price: 2500000,
            size: 'Small',
            sku: 'SKU123',
            color: 'White',
            quantity: 100,
            category: 'chair',
            discount: 30,
            createdAt: new Date('2024-08-23T13:44:16.007Z'),
            updatedAt: new Date('2024-08-23T13:44:16.007Z'),
          },
        ],
      },
      ProductImages: {
        create: [
          {
            id: '4fa37676-95cc-465f-9b9a-c14e105db1ae',
            url: 'http://localhost:5173/src/assets/productImages/product13/',
            createdAt: new Date('2024-08-23T13:44:16.012Z'),
            updatedAt: new Date('2024-08-23T13:44:16.012Z'),
          },
        ],
      },
    },
  });
  
  const product14 = await prisma.product.create({
    data: {
      id: 'e228e27f-848d-4499-87b1-ed1b2e3154a2',
      name: 'Leviosa',
      description: 'Setting the bar as one of the loudest speakers in its class...',
      createdAt: new Date('2024-08-23T13:44:36.611Z'),
      updatedAt: new Date('2024-08-24T02:07:14.603Z'),
      user: {
        connect: {
          email: "teste@teste.com.br"
        }
      },
      Tags: {
        create: [
          {
            id: '7da7cb31-5c4d-4de8-b1d4-d589003587cf',
            tags: 'chair',
            createdAt: new Date('2024-08-23T13:44:36.620Z'),
            updatedAt: new Date('2024-08-23T13:44:36.620Z'),
          },
        ],
      },
      ProductVariant: {
        create: [
          {
            id: '6525d29a-de4c-4ecb-9d06-e6230ecdae4d',
            price: 2500000,
            size: 'Small',
            sku: 'SKU124',
            color: 'White',
            quantity: 100,
            category: 'chair',
            discount: 0,
            createdAt: new Date('2024-08-23T13:44:36.624Z'),
            updatedAt: new Date('2024-08-23T13:44:36.624Z'),
          },
        ],
      },
      ProductImages: {
        create: [
          {
            id: '0f6c199b-00cf-4f1e-8b5d-ea1567ef7468',
            url: 'http://localhost:5173/src/assets/productImages/product14/',
            createdAt: new Date('2024-08-23T13:44:36.628Z'),
            updatedAt: new Date('2024-08-23T13:44:36.628Z'),
          },
        ],
      },
    },
  });
  
  const product15 = await prisma.product.create({
    data: {
      id: 'eb952a7a-7775-4490-94bb-a3f82f6ce6ac',
      name: 'Lolito',
      description: 'Setting the bar as one of the loudest speakers in its class...',
      createdAt: new Date('2024-08-23T13:45:17.735Z'),
      updatedAt: new Date('2024-08-24T02:07:19.365Z'),
      user: {
        connect: {
          email: "teste@teste.com.br"
        }
      },
      Tags: {
        create: [
          {
            id: 'e2634e2a-08c5-4b4a-ac0e-ad337837736c',
            tags: 'sofa',
            createdAt: new Date('2024-08-23T13:45:17.744Z'),
            updatedAt: new Date('2024-08-23T13:45:17.744Z'),
          },
        ],
      },
      ProductVariant: {
        create: [
          {
            id: '471f09dc-6ed2-45ae-9e05-b4381158644a',
            price: 2500000,
            size: 'Large',
            sku: 'SKU125',
            color: 'White',
            quantity: 10,
            category: 'sofa',
            discount: 50,
            createdAt: new Date('2024-08-23T13:45:17.750Z'),
            updatedAt: new Date('2024-08-23T13:45:17.750Z'),
          },
        ],
      },
      ProductImages: {
        create: [
          {
            id: 'd4181cea-1933-45b4-99e5-d6876b06dd6b',
            url: 'http://localhost:5173/src/assets/productImages/product15/',
            createdAt: new Date('2024-08-23T13:45:17.754Z'),
            updatedAt: new Date('2024-08-23T13:45:17.754Z'),
          },
        ],
      },
    },
  });
  
  const product16 = await prisma.product.create({
    data: {
      id: '44911532-7572-4995-98ad-456b7a89b9f1',
      name: 'Respira',
      description: 'Setting the bar as one of the loudest speakers in its class...',
      createdAt: new Date('2024-08-23T13:45:41.595Z'),
      updatedAt: new Date('2024-08-24T02:07:30.533Z'),
      user: {
        connect: {
          email: "teste@teste.com.br"
        }
      },
      Tags: {
        create: [
          {
            id: '43f850b2-0700-458b-8e6c-5505aaa8cd59',
            tags: 'table',
            createdAt: new Date('2024-08-23T13:45:41.604Z'),
            updatedAt: new Date('2024-08-23T13:45:41.604Z'),
          },
        ],
      },
      ProductVariant: {
        create: [
          {
            id: '3cf26e72-705d-48bf-8360-ccccccf21b4c',
            price: 2500000,
            size: 'Large',
            sku: 'SKU126',
            color: 'Wood',
            quantity: 10,
            category: 'table',
            discount: 0,
            createdAt: new Date('2024-08-23T13:45:41.609Z'),
            updatedAt: new Date('2024-08-23T13:45:41.609Z'),
          },
        ],
      },
      ProductImages: {
        create: [
          {
            id: '9f85cf4b-4cdc-4433-8ab1-1131af445923',
            url: 'http://localhost:5173/src/assets/productImages/product16/',
            createdAt: new Date('2024-08-23T13:45:41.614Z'),
            updatedAt: new Date('2024-08-23T13:45:41.614Z'),
          },
        ],
      },
    },
  });

  const product17 = await prisma.product.create({
    data: {
      id: 'de8c36e9-b85e-4fdf-be1e-04194c433ac7',
      name: 'Syltherine',
      description: 'Setting the bar as one of the loudest speakers in its class...',
      createdAt: new Date('2024-08-23T13:46:04.041Z'),
      updatedAt: new Date('2024-08-24T02:07:34.919Z'),
      user: {
        connect: {
          email: "teste@teste.com.br"
        }
      },
      Tags: {
        create: [
          {
            id: '4262c4cd-7ebc-4405-9881-2fc7b5fec619',
            tags: 'chair',
            createdAt: new Date('2024-08-23T13:46:04.090Z'),
            updatedAt: new Date('2024-08-23T13:46:04.090Z'),
          },
        ],
      },
      ProductVariant: {
        create: [
          {
            id: '645bbdb5-c1ff-49e7-b0d8-75fbcd91068b',
            price: 2500000,
            size: 'Small',
            sku: 'SKU123',
            color: 'White',
            quantity: 100,
            category: 'chair',
            discount: 30,
            createdAt: new Date('2024-08-23T13:46:04.099Z'),
            updatedAt: new Date('2024-08-23T13:46:04.099Z'),
          },
        ],
      },
      ProductImages: {
        create: [
          {
            id: 'f71885f8-58d5-40c7-853c-2df311b528b1',
            url: 'http://localhost:5173/src/assets/productImages/product17/',
            createdAt: new Date('2024-08-23T13:46:04.105Z'),
            updatedAt: new Date('2024-08-23T13:46:04.105Z'),
          },
        ],
      },
    },
  });
  
  const product18 = await prisma.product.create({
    data: {
      id: '29f48782-5f0f-485a-be37-867fb16f0e99',
      name: 'Leviosa',
      description: 'Setting the bar as one of the loudest speakers in its class...',
      createdAt: new Date('2024-08-23T13:46:24.073Z'),
      updatedAt: new Date('2024-08-24T02:07:40.249Z'),
      user: {
        connect: {
          email: "teste@teste.com.br"
        }
      },
      Tags: {
        create: [
          {
            id: 'bae49a29-3d66-44f6-914d-71b363829395',
            tags: 'chair',
            createdAt: new Date('2024-08-23T13:46:24.080Z'),
            updatedAt: new Date('2024-08-23T13:46:24.080Z'),
          },
        ],
      },
      ProductVariant: {
        create: [
          {
            id: 'c3707ba7-26ee-4be6-bf2d-c7db99ce4fb6',
            price: 2500000,
            size: 'Small',
            sku: 'SKU124',
            color: 'White',
            quantity: 100,
            category: 'chair',
            discount: 0,
            createdAt: new Date('2024-08-23T13:46:24.086Z'),
            updatedAt: new Date('2024-08-23T13:46:24.086Z'),
          },
        ],
      },
      ProductImages: {
        create: [
          {
            id: '3ba3c91e-93e8-45d8-a141-9b4403f26d3c',
            url: 'http://localhost:5173/src/assets/productImages/product18/',
            createdAt: new Date('2024-08-23T13:46:24.090Z'),
            updatedAt: new Date('2024-08-23T13:46:24.090Z'),
          },
        ],
      },
    },
  });
  
  const product19 = await prisma.product.create({
    data: {
      id: '64f7e8a7-411a-4f79-97e5-86ae769dd595',
      name: 'Lolito',
      description: 'Setting the bar as one of the loudest speakers in its class...',
      createdAt: new Date('2024-08-23T13:46:42.303Z'),
      updatedAt: new Date('2024-08-24T02:07:44.009Z'),
      user: {
        connect: {
          email: "teste@teste.com.br"
        }
      },
      Tags: {
        create: [
          {
            id: '08083ab1-5df9-47dd-98a6-8a48f90f2114',
            tags: 'sofa',
            createdAt: new Date('2024-08-23T13:46:42.311Z'),
            updatedAt: new Date('2024-08-23T13:46:42.311Z'),
          },
        ],
      },
      ProductVariant: {
        create: [
          {
            id: '25cac987-ae97-40b0-8b87-b10383054cf2',
            price: 2500000,
            size: 'Large',
            sku: 'SKU125',
            color: 'White',
            quantity: 10,
            category: 'sofa',
            discount: 50,
            createdAt: new Date('2024-08-23T13:46:42.316Z'),
            updatedAt: new Date('2024-08-23T13:46:42.316Z'),
          },
        ],
      },
      ProductImages: {
        create: [
          {
            id: '4b837092-0072-4a74-a38d-430e50b2ca00',
            url: 'http://localhost:5173/src/assets/productImages/product19/',
            createdAt: new Date('2024-08-23T13:46:42.320Z'),
            updatedAt: new Date('2024-08-23T13:46:42.320Z'),
          },
        ],
      },
    },
  });
  
  const product20 = await prisma.product.create({
    data: {
      id: '7f00d9a5-63fb-49a9-be1e-9c2862ed0454',
      name: 'Respira',
      description: 'Setting the bar as one of the loudest speakers in its class...',
      createdAt: new Date('2024-08-23T13:47:02.274Z'),
      updatedAt: new Date('2024-08-24T02:07:49.113Z'),
      user: {
        connect: {
          email: "teste@teste.com.br"
        }
      },
      Tags: {
        create: [
          {
            id: 'c5e5ca0c-e78f-48b1-9773-899e8d61505c',
            tags: 'table',
            createdAt: new Date('2024-08-23T13:47:02.284Z'),
            updatedAt: new Date('2024-08-23T13:47:02.284Z'),
          },
        ],
      },
      ProductVariant: {
        create: [
          {
            id: '05848967-639d-4c1f-bd0f-887946e51ac3',
            price: 2500000,
            size: 'Large',
            sku: 'SKU126',
            color: 'Wood',
            quantity: 10,
            category: 'table',
            discount: 0,
            createdAt: new Date('2024-08-23T13:47:02.288Z'),
            updatedAt: new Date('2024-08-23T13:47:02.288Z'),
          },
        ],
      },
      ProductImages: {
        create: [
          {
            id: '15ccfd7a-b736-4c11-9ee9-55279f4bd5fc',
            url: 'http://localhost:5173/src/assets/productImages/product20/',
            createdAt: new Date('2024-08-23T13:47:02.292Z'),
            updatedAt: new Date('2024-08-23T13:47:02.292Z'),
          },
        ],
      },
    },
  });  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });