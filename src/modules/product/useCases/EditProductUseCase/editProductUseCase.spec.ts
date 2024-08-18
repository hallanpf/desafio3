import { makeUserFactory } from 'src/modules/user/factories/userFactory'
import { ProductRepositoryInMemory } from '../../repositories/productRepositoryInMemory'
import { EditProductUseCase } from './EditProductUseCase'
import { makeProductFactory } from '../../factories/productFactory'
import { NotFoundException } from '@nestjs/common'

let productRepositoryInMemory: ProductRepositoryInMemory
let editProductUseCase: EditProductUseCase

describe ('EditProductUseCase', () => {
  beforeEach(() => {
    productRepositoryInMemory = new ProductRepositoryInMemory()
    editProductUseCase = new EditProductUseCase(productRepositoryInMemory)
  })

  it('should be able to edit a product', async () => {
    const user = makeUserFactory({})
    const product = makeProductFactory({
      userId: user.id
    });

    productRepositoryInMemory.products = [product]

    await editProductUseCase.execute({
      productId: product.id,
      userId: user.id,
      name: 'New Product Name',
      description: 'New Product Description',
      tags: [],
      productVariants: [],
      productImages: []
    })

    const updatedProduct = productRepositoryInMemory.products[0]

    expect(updatedProduct.name).toBe('New Product Name')
    expect(updatedProduct.description).toBe('New Product Description')
   })

  it('should not be able to edit a product that does not exist', async () => {
    const user = makeUserFactory({})

    await expect(editProductUseCase.execute({
      productId: 'non-existent-product-id',
      userId: user.id,
      name: 'New Product Name',
      description: 'New Product Description',
      tags: [],
      productVariants: [],
      productImages: []
    })).rejects.toThrow(NotFoundException)
   })
})