import createItemList from './createItemList';

describe('test for ItemList component', () => {
  it('should return an <UL /> element', () => {
    const itemListElement = createItemList();
    expect(itemListElement.tagName).toBe('UL');
  });
  it('should be like the snaptshot', () => {
    const itemListElement = createItemList();
    expect(itemListElement).toMatchSnapshot();
  });
});
