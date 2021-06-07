const popUp = document.querySelector('.popUp')
const allInputs = popUp.querySelectorAll('.popUp-input')
const phoneInput = popUp.querySelector('.tel-input-popUp')
const btnSubmit = popUp.querySelector('.btn-submit-tel-popUp')
function checkAllInputs() {
  let badInputs = []
  for (const input of allInputs) {
    if (input.type === 'checkbox') {
      return input.checked
    }
    if (!input.value) {
      badInputs.push(input)
      setInputColor(input, false)
    }
  }
  if (badInputs.lenght > 0) {
    return false
  }
  return true
}
function checkPhone() {
  if (
    phoneInput.value.replace(/-|\(|\)|\s|\+/g, '').length > 15 ||
    phoneInput.value.length < 5
  ) {
    setInputColor(phoneInput, false)
    return false
  }
  setInputColor(phoneInput, true)
  return true
}
function checkAll() {
  if (!(checkAllInputs() && checkPhone() && checkMail())) {
    return false
  }
  return true
}
btnSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  if (checkAll()) {
    popUp.classList.add('sended')
  } else {
    alert('Проверьте правильность ввода данных')
  }
})
const mailInput = popUp.querySelector('.mail-input-popUp')
const mailMask =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
function testEmail(email) {
  return mailMask.test(email)
}
function initMailListeners(mailInput) {
  mailInput.addEventListener('input', onMailInput)
}
function setInputColor(input, state) {
  if (state) {
    input.style.border = '1px solid #23DC3D'
  } else {
    input.style.border = '1px solid tomato'
  }
}
function onMailInput() {
  setInputColor(mailInput, testEmail(mailInput.value))
}
function checkMail() {
  return testEmail(mailInput.value)
}
initMailListeners(mailInput)

document.addEventListener('DOMContentLoaded', function () {
  var phoneInputs = document.querySelectorAll('.tel-input-popUp')

  var getInputNumbersValue = function (input) {
    return input.value.replace(/\D/g, '')
  }

  var onPhonePaste = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input)
    var pasted = e.clipboardData || window.clipboardData
    if (pasted) {
      var pastedText = pasted.getData('Text')
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue
        return
      }
    }
  }
  var onPhoneInput = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      selectionStart = input.selectionStart,
      formattedInputValue = ''

    if (!inputNumbersValue) {
      return (input.value = '')
    }

    if (input.value.length != selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue
      }
      return
    }

    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == '9')
        inputNumbersValue = '7' + inputNumbersValue
      var firstSymbols = inputNumbersValue[0] == '8' ? '8' : '+7'
      formattedInputValue = input.value = firstSymbols + ' '
      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4)
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7)
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9)
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11)
      }
    } else {
      formattedInputValue = '+' + inputNumbersValue.substring(0, 15)
    }
    input.value = formattedInputValue
  }
  var onPhoneKeyDown = function (e) {
    var inputValue = e.target.value.replace(/\D/g, '')
    if (e.keyCode == 8 && inputValue.length == 1) {
      e.target.value = ''
    }
  }
  for (var phoneInput of phoneInputs) {
    phoneInput.addEventListener('keydown', onPhoneKeyDown)
    phoneInput.addEventListener('input', onPhoneInput, false)
    phoneInput.addEventListener('paste', onPhonePaste, false)
  }
})
