const root = document.documentElement;

export default {
  activate(state) {
    atom.config.observe('clear-night-ui.fontSize', value => setFontSize(value));

    return atom.config.observe('clear-night-ui.layoutMode',
      value => setLayoutMode(value));
  },

  deactivate() {
    unsetFontSize();
    return unsetLayoutMode();
  }
};

// Font Size
const setFontSize = function(currentFontSize) {
  if (Number.isInteger(currentFontSize)) {
    root.style.fontSize = `${currentFontSize}px`;
    return root.style.fontSize;
  } else if (currentFontSize === 'Auto') {
    return unsetFontSize();
  }
};

const unsetFontSize = () => root.style.fontSize = '';

// Layout Mode
const setLayoutMode = layoutMode => root
  .setAttribute('theme-clear-night-ui-layoutmode', layoutMode.toLowerCase());

const unsetLayoutMode = () => root
  .removeAttribute('theme-clear-night-ui-layoutmode');
