import './style.css'
import './normalize.css'
import { DOMElements } from './dom'
import { addCard, addCategory } from './cardFactories'
import { showCategoryForm, showCardForm } from './UIController'
import { displayCategories } from './displayCategories'

const storageParse = JSON.parse(localStorage.getItem('board'))
if (storageParse === null) {
  const initBoard = [{ category: 'work', todo: [{ title: 'hello!', description: 'Im a new Card', date: '2022-01-01', complete: false }] }]
  const stringifyBoard = JSON.stringify(initBoard)
  localStorage.setItem('board', stringifyBoard)
}

displayCategories()

// Event Listener
DOMElements.addNewCard.addEventListener('click', function (e) {
  e.preventDefault()
  addCard(e)
})
DOMElements.addNewCategory.addEventListener('click', function (e) {
  e.preventDefault()
  addCategory(e)
})
DOMElements.back.addEventListener('click', function () {
  displayCategories()
})

DOMElements.closeCard.addEventListener('click', showCardForm)
DOMElements.closeCat.addEventListener('click', showCategoryForm)
