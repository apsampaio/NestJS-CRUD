import { Service } from '../../shared/core/Service';
import { hash } from 'bcrypt';

interface Request {
  password: string;
}

interface Response {
  hashed_password: string;
}

class HashPassword implements Service<Request, Response> {
  constructor() {}

  async execute({ password }: Request): Promise<Response> {
    const hashed_password = await hash(password, 10);

    return { hashed_password };
  }
}

export { HashPassword };
