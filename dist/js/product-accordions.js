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
