var reviewsSlider = tns({
  container: '.reviews-slider',
  items: 1,
  controls: false,
  nav: false,
  loop: false,
  mouseDrag: true,
  responsive: {
    1366: {
      fixedWidth: 435,
      gutter: 30,
    },
    100: {
      gutter: 10,
      fixedWidth: 280,
    },
  },
})
