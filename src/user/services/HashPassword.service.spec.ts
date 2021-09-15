import { HashPassword } from './HashPassword.service';

describe('HashPassword', () => {
  let hashPassword: HashPassword;

  beforeEach(() => {
    hashPassword = new HashPassword();
  });

  it('should return a hashed password', async () => {
    const password = '123456';
    const { hashed_password } = await hashPassword.execute({ password });

    expect(hashed_password).toBeTruthy();
    expect(hashed_password).not.toMatch(password);
  });
});
