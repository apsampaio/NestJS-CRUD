import { Service } from '../../shared/core/Service';
import { v4 as uuidv4 } from 'uuid';

interface Request {}

interface Response {
  uuid: string;
}

class CreateUniqueID implements Service<Request, Response> {
  constructor() {}

  execute(): Response {
    const uuid = uuidv4();
    return { uuid };
  }
}

export { CreateUniqueID };
