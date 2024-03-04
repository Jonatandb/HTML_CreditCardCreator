const cardName = document.querySelector('#card-name')
const cardNumber = document.querySelector('#card-number')
const cardMonth = document.querySelector('#card-month')
const cardYear = document.querySelector('#card-year')
const cardCVC = document.querySelector('#card-cvc')

const inputName = document.querySelector('#input-name')
const inputNumber = document.querySelector('#input-number')
const inputMonth = document.querySelector('#input-month')
const inputYear = document.querySelector('#input-year')
const inputCVC = document.querySelector('#input-cvc')

const thankYou = document.querySelector('#thank-you')
const continueBtn = document.querySelector('#continue')
const form = document.querySelector('#form')

const cleaveZen = window.cleaveZen
const {
  formatCreditCard,
  registerCursorTracker,
  DefaultCreditCardDelimiter,
} = cleaveZen

inputName.addEventListener('input', e => {
  cardName.innerText = inputName.value
  if (inputName.value.length == 0)
    cardName.innerText = 'Jane Appleseed'
})

registerCursorTracker({ input: inputNumber, delimiter: DefaultCreditCardDelimiter })
inputNumber.addEventListener('input', e => {
  inputNumber.value = formatCreditCard(e.target.value)
  cardNumber.innerText = inputNumber.value
  if (inputNumber.value.length == 0)
    cardNumber.innerText = '0000 0000 0000 0000'
})

inputMonth.addEventListener('input', e => {
  cardMonth.innerText = inputMonth.value
  if (inputMonth.value.length == 0)
    cardMonth.innerText = '00'
})

inputYear.addEventListener('input', e => {
  cardYear.innerText = inputYear.value
  if (inputYear.value.length == 0)
    cardYear.innerText = '00'
})

inputCVC.addEventListener('input', e => {
  cardCVC.innerText = inputCVC.value
  if (inputCVC.value.length == 0)
    cardCVC.innerText = '000'
})

form.addEventListener('submit', e => {
  e.preventDefault()
  form.classList.add('disabled')
  thankYou.classList.remove('disabled')
})

continueBtn.addEventListener('click', () => {
  form.classList.remove('disabled')
  thankYou.classList.add('disabled')
  form.reset()
  cardName.innerText = 'Jane Appleseed'
  cardNumber.innerText = '0000 0000 0000 0000'
  cardMonth.innerText = '00'
  cardYear.innerText = '00'
  cardCVC.innerText = '000'
})