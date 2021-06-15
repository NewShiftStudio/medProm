document.addEventListener('DOMContentLoaded', () => {
  var historySlider = tns({
    container: '.history-slider',
    controls: true,
    loop: false,
    mouseDrag: false,
    controlsContainer: '.history-slider-controls',
    nav: false,
    responsive: {
      1366: {
        items: 4,
        fixedWidth: 300,
        autoWidth: false,
      },
      100: {
        items: 1,
        fixedWidth: false,
        autoWidth: true,
      },
    },
  })
  var productSlider = tns({
    container: '.product-card-slider',
    controlsContainer: '.product-card-slider__controls',
    navContainer: '.product-card-pages',
    nested: 'inner',
    controls: true,
    loop: false,
    center: true,
    center: true,
    mouseDrag: false,
    nav: true,
    navAsThumbnails: true,
    navPosition: 'bottom',
  })
})
