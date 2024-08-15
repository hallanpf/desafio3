import { UserRepositoryInMemory } from "src/modules/user/repositories/UserRepositoryInMemory";
import { ValidateUserUseCase } from "./validadeUserUseCase";
import { User } from "src/modules/user/entities/User";
import { makeUserFactory } from "src/modules/user/factories/userFactory";

let validateUserUseCase: ValidateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe("Validate User Use Case", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    validateUserUseCase = new ValidateUserUseCase(userRepositoryInMemory);

    it("should be able to validate a user", async () => {

      const userPassword = "123456";
      
      const user = makeUserFactory({
        password: userPassword,
      });

      userRepositoryInMemory.users = [user];

      const response = await validateUserUseCase.execute({
        email: user.email,
        password: userPassword,
      });

      expect(response).toEqual(user);
    });
    
    it("should not be able to validate a user with incorrect credentials", async () => {

      const userPassword = "123456";
      
      const user = makeUserFactory({
         password: userPassword,
      });

      userRepositoryInMemory.users = [user];

      expect(async () => {
        await validateUserUseCase.execute({
          email: "wrong@teste.com",
          password: userPassword,
        });
      }).rejects.toThrowError("Email incorrect");

      expect(async () => {
        await validateUserUseCase.execute({
          email: user.email,
          password: "wrongPassword",
        });
      }).rejects.toThrowError("Password incorrect");

    });
  });
});