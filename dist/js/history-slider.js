var historySlider = tns({
  container: '.history-slider',
  controls: true,
  nav: false,
  loop: false,
  mouseDrag: false,
  controlsContainer: '.history-slider-controls',
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
