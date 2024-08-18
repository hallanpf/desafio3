import { ProductRepositoryInMemory } from '../../repositories/productRepositoryInMemory'
import { CreateProductUseCase } from './CreateProductUseCase'

let productRepositoryInMemory: ProductRepositoryInMemory
let createProductUseCase: CreateProductUseCase

describe ('CreateProductUseCase', () => {
  beforeEach(() => {
    productRepositoryInMemory = new ProductRepositoryInMemory()
    createProductUseCase = new CreateProductUseCase(productRepositoryInMemory)
  })

  it('should be able to create a new product', async () => {
    expect (productRepositoryInMemory.products).toEqual([])

    const product = await createProductUseCase.execute({
      name: 'Product Name',
      description: 'Product Description',
      userId: 'User Id',
      tags: [
        {
          id: 'Tag Id',
          tags: 'Tag',
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 'Product Id'
        }
      ],
      productVariants: [
        {
          id: 'Product Variant Id',
          price: 100,
          size: 'M',
          sku: 'SKU',
          color: 'Color',
          quantity: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 'Product Id'
        }
      ],
      productImages: [
        {
          id: 'Product Image Id',
          url: 'image.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          productId: 'Product Id'
        }
      ]
    })
  })
})