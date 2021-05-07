const questions = document.querySelectorAll('.question')
questions.forEach((questions) => {
  questions.addEventListener('click', (e) => {
    setActiveElements(e)
  })
})
function setActiveElements(e) {
  const wrapper = e.target.closest('.question-wrapper')
  const expandBtn = wrapper.querySelector('.btn-expand')
  const answer = wrapper.querySelector('.answer')
  answer.classList.toggle('active')
  expandBtn.classList.toggle('active')
}
