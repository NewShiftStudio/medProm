var categoriesSlider = tns({
  container: '.categories-cards-slider',
  items: 1,
  controls: false,
  nav: false,
  fixedWidth: 280,
  gutter: 10,
  loop: false,
  edgePadding: 20,
})
var howToSlider = tns({
  container: '.using-cards-slider',
  controlsContainer: '.using-slider-controls',
  items: 1,
  nav: false,
  gutter: 20,
  loop: false,
})
var manufacturersSlider = tns({
  container: '.manufacturers-content-slider',
  controlsContainer: '.manufacturers-slider-controls',
  items: 1,
  nav: false,
  loop: false,
  gutter: 5,
  touch: false,
})
var certificatesSlider = tns({
  container: '.certificates-content-slider',
  items: 1,
  fixedWidth: 260,
  gutter: 10,
  controls: false,
  nav: false,
  loop: false,
  mouseDrag: true,
})
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
