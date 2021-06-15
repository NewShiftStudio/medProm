document.addEventListener('DOMContentLoaded', () => {
  const productSelectors = document.querySelectorAll(
    '.product-card_bot__selector'
  )
  const productTexts = document.querySelectorAll('.product-card_bot-text')
  if (!widthCheck()) {
    productSelectors.forEach((selector) => {
      selector.addEventListener('click', (e) => {
        productSelectors.forEach((selector) => {
          if (selector.classList.contains('selected')) {
            selector.classList.remove('selected')
          }
        })
        selector.classList.toggle('selected')
        const type = selector.dataset.type
        productTexts.forEach((text) => {
          text.classList.remove('selected')
          if (text.dataset.type === type) {
            text.classList.add('selected')
          }
        })
      })
    })
  } else {
    const questions = document.querySelectorAll('.accordion')
    questions.forEach((questions) => {
      questions.addEventListener('click', (e) => {
        setActiveElements(e)
      })
    })
    function setActiveElements(e) {
      const wrapper = e.target.closest('.accordion-wrapper')
      const expandBtn = wrapper.querySelector('.btn-expand')
      const answer = wrapper.querySelector('.accordion-hidden')
      answer.classList.toggle('active')
      expandBtn.classList.toggle('active')
    }
  }

  function widthCheck() {
    currentWidth = document.body.clientWidth
    if (currentWidth > 480) {
      return false
    } else return true
  }
  function enabliePagination() {
    const images = document.querySelectorAll('.product-card__slide__img')
    const pagesWrapper = document.querySelector('.product-card-pages')

    images.forEach((image) => {
      pagesWrapper.insertAdjacentHTML(
        'beforeend',
        getPage(image.getAttribute('src'))
      )
    })
  }
  function getPage(img) {
    return `<div class="product-page">
    <img
      src="${img}"
      alt=""
      class="product-page__img"
    />
  </div>`
  }
  enabliePagination()
})
