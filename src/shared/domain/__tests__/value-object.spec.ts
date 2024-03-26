import { ValueObject } from '../value-object';

class StringValueObject extends ValueObject {
  constructor(readonly value: string) {
    super();
  }
}

class ComplexValueObject extends ValueObject {
  constructor(readonly prop1: string, readonly prop2: number) {
    super();
  }
}

describe('ValueObject Unit Tests', () => {
  test('should be equals', () => {
    const valueObject1 = new StringValueObject('test');
    const ValueObject2 = new StringValueObject('test');
    expect(valueObject1.equals(ValueObject2)).toBeTruthy();
  });

  test('should be equals with complex objects', () => {
    const complexValueObject1 = new ComplexValueObject('test', 1);
    const complexValueObject2 = new ComplexValueObject('test', 1);
    expect(complexValueObject1.equals(complexValueObject2)).toBeTruthy();
  });

  test('should not be equal', () => {
    const valueObject1 = new StringValueObject('test');
    const ValueObject2 = new StringValueObject('test1');
    expect(valueObject1.equals(ValueObject2)).toBeFalsy();
    expect(valueObject1.equals(null as any)).toBeFalsy();
    expect(valueObject1.equals(undefined as any)).toBeFalsy();

    const complexValueObject1 = new ComplexValueObject('test', 1);
    const complexValueObject2 = new ComplexValueObject('test', 2);
    expect(complexValueObject1.equals(complexValueObject2)).toBeFalsy();
    expect(complexValueObject1.equals(null as any)).toBeFalsy();
    expect(complexValueObject1.equals(undefined as any)).toBeFalsy();
  });
});

