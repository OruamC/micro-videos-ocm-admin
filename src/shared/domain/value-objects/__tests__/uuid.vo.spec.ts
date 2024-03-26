import { v4 as uuidv4, validate as uuidValidate } from 'uuid';

import { InvalidUuidError, Uuid } from '../uuid.vo';

describe('Uuid Unit Tests', () => {
  const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate');

  test('Should throw error when uuid is invalid', () => {
    expect(() => {
      new Uuid('invalid-uuid');
    }).toThrow(new InvalidUuidError());
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  test('should create a valid uuid', () => {
    const uuid = new Uuid();
    expect(uuid.id).toBeDefined();
    expect(uuidValidate(uuid.id)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  test('should accept a valid uuid', () => {
    const uuidV4 = uuidv4().toString();
    const uuid = new Uuid(uuidV4);
    expect(uuid.id).toBe(uuidV4);
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });
});

