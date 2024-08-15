import { User } from "../entities/User";

type Override = Partial<User>;

export const makeUserFactory = ({id, ...override}: Override) => {
  return new User({
    email: "teste2@teste.com",
        password: "123456",
        name: "Teste",
        role: "user",
        updatedAt: new Date(),
        ...override,
  }, id,);
}