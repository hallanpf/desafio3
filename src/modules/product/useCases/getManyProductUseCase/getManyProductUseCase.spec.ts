import { makeUserFactory } from 'src/modules/user/factories/userFactory'
import { ProductRepositoryInMemory } from '../../repositories/productRepositoryInMemory'
import { GetManyProductUseCase } from './GetManyProductUseCase'
import { makeProductFactory } from '../../factories/productFactory'

let productRepositoryInMemory: ProductRepositoryInMemory
let getManyProductUseCase: GetManyProductUseCase

describe ('GetManyProductUseCase', () => {
  beforeEach(() => {
    productRepositoryInMemory = new ProductRepositoryInMemory()
    getManyProductUseCase = new GetManyProductUseCase(productRepositoryInMemory)
  })

  it('should be able to get all products', async () => {
    const user = makeUserFactory({})
    const product = makeProductFactory({
      userId: user.id
    });

    productRepositoryInMemory.products = [product]

    const response = await getManyProductUseCase.execute({
      page: 1,
      limit: 10
    })

    expect(response.products).toEqual([product])
   })

   it('should be able to get all products paginated with 10 products per page', async () => {
    const user = makeUserFactory({})
    const products = Array.from({ length: 100 }, (_, index) => makeProductFactory({
      userId: user.id,
      name: `Product ${index + 1}`
    }));

    productRepositoryInMemory.products = products

    const response = await getManyProductUseCase.execute({
      page: 1,
      limit: 10
    })

    expect(response.products).toHaveLength(10)
    expect(response.totalPages).toBe(10)
    expect(response.currentPage).toBe(1)
    expect(response.hasNextPage).toBe(true)
    expect(response.hasPreviousPage).toBe(false)
    expect(response.pages).toEqual([1, 2, 3])    
   })
})