document.addEventListener('DOMContentLoaded', function () {
  var phoneInputs = document.querySelectorAll('.tel-input')

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
      formattedInputValue = '+' + inputNumbersValue.substring(0, 16)
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

  function setInputColor(input, state) {
    if (state) {
      input.style.border = '1px solid #23DC3D'
    } else {
      input.style.border = '1px solid tomato'
    }
  }
  //mail
  const mailInput = document.querySelector('.checkout-form-mail')
  const mailMask =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  function testEmail(email) {
    return mailMask.test(email)
  }
  function initMailListeners(mailInput) {
    mailInput.addEventListener('input', onMailInput)
  }
  function onMailInput() {
    setInputColor(mailInput, testEmail(mailInput.value))
  }
  function checkMail() {
    return testEmail(mailInput.value)
  }
  initMailListeners(mailInput)

  //adress
  const adresses = document.querySelectorAll('.adress')
  function testAdress(number) {
    if (number > 0) {
      return true
    } else return false
  }
  function initAdressesListeners(adress) {
    adress.addEventListener('input', onAdressInput)
  }
  function onAdressInput() {
    const adressInput = this
    setInputColor(adressInput, testAdress(adressInput.value))
  }
  function checkAdresses() {
    for (const adress of adresses) {
      if (!testAdress(adress.value)) {
        return false
      }
    }
    return true
  }
  adresses.forEach((adress) => {
    initAdressesListeners(adress)
  })

  //checkboxes
  const checkboxes = document.querySelectorAll('.checkbox')
  function initCheckboxesListeners(checkbox) {
    checkbox.addEventListener('click', onCheckboxInput)
  }
  function onCheckboxInput() {
    checkboxes.forEach((checkbox) => {
      checkbox.classList.remove('checked')
    })
    this.classList.add('checked')
  }
  checkboxes.forEach((checkbox) => {
    initCheckboxesListeners(checkbox)
  })

  //file
  const fileInput = document.querySelector('.checkout-form-file')
  const fileName = document.querySelector('.checkout-form-requisites-filename')
  if (fileInput) {
    fileInput.addEventListener('input', (e) => {
      var fullPath = fileInput.value
      if (fullPath) {
        var startIndex =
          fullPath.indexOf('\\') >= 0
            ? fullPath.lastIndexOf('\\')
            : fullPath.lastIndexOf('/')
        var filenameN = fullPath.substring(startIndex)
        if (filenameN.indexOf('\\') === 0 || filenameN.indexOf('/') === 0) {
          filenameN = filenameN.substring(1)
        }
        fileName.innerHTML = filenameN
      }
    })
  }
  const orderBtn = document.querySelector('.btn-order-cart')
  const allInputs = document.querySelectorAll('.block__input')

  function checkAllInputs() {
    for (const input of allInputs) {
      if (!input.value) {
        return false
      }
    }
    return true
  }
  function checkAll() {
    if (!(checkAllInputs() && checkAdresses() && checkMail())) {
      return false
    }
    return true
  }
  orderBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (checkAll()) {
      alert('Форма отправлена')
    } else {
      alert('Проверьте правильность ввода данных')
    }
  })
})
