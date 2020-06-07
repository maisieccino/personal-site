// Shim for react static generator.
window.requestAnimationFrame = window.requestAnimationFrame || function () {};
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    };
  };
