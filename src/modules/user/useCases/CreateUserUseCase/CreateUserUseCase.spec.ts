import { CreateUserUseCase } from './createUserUseCase';
import { UserRepositoryInMemory } from '../../repositories/UserRepositoryInMemory';

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe('CreateUserUseCase', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory;
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it('should be able to create a new user', () => {
    expect(userRepositoryInMemory.users).toEqual([]);

    const user = createUserUseCase.execute({
      email: 'abc@abc.com',
      password: '123',
      name: 'John Doe',
      role: 'admin',
    });

    expect(userRepositoryInMemory.users).toEqual([user]);
  });

  it('should be able to create a new user with encrypt password', async () => {
    const userEncryptPass = '123'
    
    const user = await createUserUseCase.execute({
      email: 'abc@abc.com',
      password: userEncryptPass,
      name: 'John Doe',
      role: 'admin',
    });

    const userHasEncryptPass = await compare(userEncryptPass, user.password);

    expect(userHasEncryptPass).toBeTruthy();
  });
});
function compare(userEncryptPass: string, password: string) {
  throw new Error('Function not implemented.');
}

