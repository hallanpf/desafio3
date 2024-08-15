import { makeUserFactory } from "src/modules/user/factories/userFactory";
import { JwtService } from "@nestjs/jwt";
import { SignInUseCase } from "./signInUseCase";
import { UserPayload } from "../../models/UserPayload";

let signInUseCase: SignInUseCase;
let jwtService: JwtService;

describe ('Sign In', () => {
  beforeEach(() => {
    jwtService = new JwtService({ secret: 'secret'});
    signInUseCase = new SignInUseCase(jwtService);
  });

  it('should be able to create a correct access token', async () => {
    const user = makeUserFactory({});
    const jwtToken = await signInUseCase.execute({ user });

    const payload = jwtService.decode(jwtToken) as UserPayload;

    expect(payload.sub).toEqual(user.id);

  });
});