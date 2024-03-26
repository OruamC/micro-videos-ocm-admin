import { Category } from './../category.entity';

describe('Category Unit Tests', () => {
  test('should change name', () => {
    // Arrange
    const name = 'Movie';
    const category = Category.create({
      name,
    });

    expect(category.name).toBe(name);

    // Act
    const expectedName = 'New Movie';
    category.changeName(expectedName);

    // Assert
    expect(category.name).toBe(expectedName);
  });

  test('should change description', () => {
    // Arrange
    const name = 'Movie';
    const category = Category.create({
      name,
    });

    expect(category.name).toBe(name);
    expect(category.description).toBeNull();

    // Act
    const expectedDescription = 'New descritpion';
    category.changeDescription(expectedDescription);

    // Assert
    expect(category.description).toBe(expectedDescription);
  });

  test('should activate a category', () => {
    // Arrange
    const name = 'Movie';
    const category = Category.create({
      name,
      is_active: false,
    });

    expect(category.name).toBe(name);
    expect(category.is_active).toBeFalsy();

    // Act
    category.activate();

    // Assert
    expect(category.is_active).toBeTruthy();
  });

  test('should deactivate a category', () => {
    // Arrange
    const name = 'Movie';
    const category = Category.create({
      name,
    });

    expect(category.name).toBe(name);
    expect(category.is_active).toBeTruthy();

    // Act
    category.deactivate();

    // Assert
    expect(category.is_active).toBeFalsy();
  });

  describe('constructor', () => {
    test('should create with only name', () => {
      // Arrange
      const expectedName = 'Movie';

      // Act
      const category = new Category({
        name: expectedName,
      });

      // Assert
      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe(expectedName);
      expect(category.description).toBeNull();
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

    test('should create with all arguments', () => {
      // Arrange
      const expectedName = 'Movie';
      const expectedDescription = 'Movie description';
      const expectedIsActive = false;
      const expectedCreatedAt = new Date();

      // Act
      const category = new Category({
        name: expectedName,
        description: expectedDescription,
        is_active: expectedIsActive,
        created_at: expectedCreatedAt,
      });

      // Assert
      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe(expectedName);
      expect(category.description).toBe(expectedDescription);
      expect(category.is_active).toBe(expectedIsActive);
      expect(category.created_at).toBe(expectedCreatedAt);
    });

    test('should create with name and description', () => {
      // Arrange
      const expectedName = 'Movie';
      const expectedDescription = 'Movie description';

      // Act
      const category = new Category({
        name: expectedName,
        description: expectedDescription,
      });

      // Assert
      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe(expectedName);
      expect(category.description).toBe(expectedDescription);
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
    });
  });

  describe('create command', () => {
    test('should create category', () => {
      // Arrange
      const expectedName = 'Movie';

      // Act
      const category = Category.create({
        name: expectedName,
      });

      // Assert
      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe(expectedName);
      expect(category.description).toBeNull();
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

    test('should create category with all arguments', () => {
      // Arrange
      const expectedName = 'Movie';
      const expectedDescription = 'Movie description';
      const expectedIsActive = false;
      const expectedCreatedAt = new Date();

      // Act
      const category = Category.create({
        name: expectedName,
        description: expectedDescription,
        is_active: expectedIsActive,
      });

      // Assert
      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe(expectedName);
      expect(category.description).toBe(expectedDescription);
      expect(category.is_active).toBe(expectedIsActive);
      expect(category.created_at).toBeInstanceOf(Date);
    });

    test('should create category with name and description', () => {
      // Arrange
      const expectedName = 'Movie';
      const expectedDescription = 'Movie description';

      // Act
      const category = Category.create({
        name: expectedName,
        description: expectedDescription,
      });

      // Assert
      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe(expectedName);
      expect(category.description).toBe(expectedDescription);
      expect(category.is_active).toBeTruthy();
      expect(category.created_at).toBeInstanceOf(Date);
    });

    test('should create category with name and is active', () => {
      // Arrange
      const expectedName = 'Movie';
      const expectedIsActive = false;

      // Act
      const category = Category.create({
        name: expectedName,
        is_active: expectedIsActive,
      });

      // Assert
      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe(expectedName);
      expect(category.description).toBeNull();
      expect(category.is_active).toBeFalsy();
      expect(category.created_at).toBeInstanceOf(Date);
    });
  });
});

