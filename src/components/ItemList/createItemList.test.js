import createItemList from './createItemList';

describe('test for ItemList component', () => {
  it('should return an <UL /> element', () => {
    const itemListElement = createItemList();
    expect(itemListElement.tagName).toBe('UL');
  });

  it.skip('should have "todo" as title value', () => {
    const itemListElement = createItemList();
    expect(itemListElement.innerHTML).toBe('todos');
  });
  it.skip('should be like the snaptshot', () => {
    const itemListElement = createItemList();
    expect(itemListElement).toMatchSnapshot();
  });
});
