function createFooterButton({ callback, name, style } = {}) {
  const footerButton = document.createElement('button');
  footerButton.innerHTML = name;
  footerButton.onclick = () => callback();
  footerButton.className = style;
  return footerButton;
}

export default createFooterButton;
