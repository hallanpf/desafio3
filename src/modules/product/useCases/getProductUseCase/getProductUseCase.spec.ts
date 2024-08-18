import { makeUserFactory } from 'src/modules/user/factories/userFactory'
import { ProductRepositoryInMemory } from '../../repositories/productRepositoryInMemory'
import { GetProductUseCase } from './GetProductUseCase'
import { makeProductFactory } from '../../factories/productFactory'
import { NotFoundException } from '@nestjs/common'

let productRepositoryInMemory: ProductRepositoryInMemory
let getProductUseCase: GetProductUseCase

describe ('GetProductUseCase', () => {
  beforeEach(() => {
    productRepositoryInMemory = new ProductRepositoryInMemory()
    getProductUseCase = new GetProductUseCase(productRepositoryInMemory)
  })

  it('should be able to get a product', async () => {
    const user = makeUserFactory({})
    const product = makeProductFactory({
      userId: user.id
    });

    productRepositoryInMemory.products = [product]

    const response = await getProductUseCase.execute({
      productId: product.id,
      userId: user.id
    })

    expect(response).toEqual(product)

   })

  it('should not be able to get a product that does not exist', async () => { 
    const user = makeUserFactory({})

    await expect(getProductUseCase.execute({
      productId: 'non-existent-product-id',
      userId: user.id
    })).rejects.toThrow(NotFoundException)
   })
})