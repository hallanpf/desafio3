import { makeUserFactory } from 'src/modules/user/factories/userFactory'
import { ProductRepositoryInMemory } from '../../repositories/productRepositoryInMemory'
import { DeleteProductUseCase } from './deleteProductUseCase'
import { makeProductFactory } from '../../factories/productFactory'
import { NotFoundException } from '@nestjs/common'

let productRepositoryInMemory: ProductRepositoryInMemory
let deleteProductUseCase: DeleteProductUseCase

describe ('DeleteProductUseCase', () => {
  beforeEach(() => {
    productRepositoryInMemory = new ProductRepositoryInMemory()
    deleteProductUseCase = new DeleteProductUseCase(productRepositoryInMemory)
  })

  it('should be able to delete a product', async () => {
    const user = makeUserFactory({})
    const product = makeProductFactory({
      userId: user.id
    });

    productRepositoryInMemory.products = [product]

    await deleteProductUseCase.execute({
      productId: product.id,
      userId: user.id,
      tags: [],
      productVariants: [],
      productImages: []
    })

    expect(productRepositoryInMemory.products).toHaveLength(0)
  })

  it('should not be able to delete a product that does not exist', async () => {
    const user = makeUserFactory({})

    await expect(deleteProductUseCase.execute({
      productId: 'non-existent-product-id',
      userId: user.id,
      tags: [],
      productVariants: [],
      productImages: []
    })).rejects.toThrow(NotFoundException)
  })
})