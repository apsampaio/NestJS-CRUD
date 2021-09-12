import { CreateUniqueID } from './CreateUniqueID.service';

describe('CreateUniqueID', () => {
  let createUniqueID: CreateUniqueID;

  beforeEach(async () => {
    createUniqueID = new CreateUniqueID();
  });

  it('should create a new uuid', () => {
    const uuid = createUniqueID.execute();

    expect(uuid).toHaveProperty('uuid');
    expect(uuid.uuid).toBeTruthy();
  });

  it('should create a unique uuid', () => {
    const first_id = createUniqueID.execute();
    const second_id = createUniqueID.execute();

    expect(first_id.uuid).not.toMatch(second_id.uuid);
  });
});
