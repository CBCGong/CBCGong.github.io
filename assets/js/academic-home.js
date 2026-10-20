(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const syncThemeButton = () => {
    const dark = root.dataset.theme === 'dark';
    themeButton.setAttribute('aria-pressed', String(dark));
    themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  };
  if (themeButton) {
    syncThemeButton();
    themeButton.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('academic-theme', next); } catch (_) {}
      syncThemeButton();
    });
  }
})();
