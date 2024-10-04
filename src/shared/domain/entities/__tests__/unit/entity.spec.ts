import { validate as uuidValidate } from "uuid";
import { Entity } from "../../entity";

type StubProps = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<StubProps> {}

describe("Entity unit tests", () => {
  it('Should set props and id', () => {
    const props = { prop1: 'value1', prop2: 15 };
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).not.toBeNull();
    expect(uuidValidate(entity._id)).toBeTruthy();
  });

  it('Should accept a valid uuid', () => {
    const props = { prop1: 'value1', prop2: 15 };
    const id = 'ef21a9e2-af36-4cbd-9096-039ca1c760f0';
    const entity = new StubEntity(props, id);

    expect(uuidValidate(entity._id)).toBeTruthy();
    expect(entity._id).toBe(id);
  });

  it('Should convert an entity to a Javascript Object', () => {
    const props = { prop1: 'value1', prop2: 15 };
    const id = 'ef21a9e2-af36-4cbd-9096-039ca1c760f0';
    const entity = new StubEntity(props, id);

    expect(entity.toJSON).toStrictEqual({
      id,
      ...props
    });
  });
});
