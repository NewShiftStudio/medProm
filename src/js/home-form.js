const checkboxLabel = document.querySelector('.phone-form-checkbox-wrapper')
const checkbox = checkboxLabel.querySelector('.checkbox')
const checkboxFake = checkboxLabel.querySelector('.checkbox-fake')

checkboxLabel.addEventListener('click', (e) => {
  e.preventDefault()
  checkboxFake.classList.toggle('active')
})
