import { Category } from './../category.entity';

describe('Category Unit Tests', () => {
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
});

