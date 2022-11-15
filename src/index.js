import './style.css'
import './normalize.css'
import { DOMElements } from './dom'
import { addCard, addCategory } from './cardFactories'
import { showCategoryForm, showCardForm } from './UIController'
import { displayCategories } from './displayCategories'

// const storageParse = JSON.parse(localStorage.getItem('board'))
// if (storageParse === null) {
//   const initBoard = [{ category: 'work', todo: [{ title: 'hello!', description: 'Im a new Card', date: '2022-01-01', complete: false }] }]
//   const stringifyBoard = JSON.stringify(initBoard)
//   localStorage.setItem('board', stringifyBoard)
// }

const checkData = new Promise(function(resolve, reject) {
  const boardString = localStorage.getItem('board')
  if (boardString === null) {
    reject('Failure! Initializing Board with default values')
    const initBoard = [{ category: 'work', todo: [{ title: 'hello!', description: 'Im a new Card', date: '2022-01-01', complete: false }] }]
    const stringifyBoard = JSON.stringify(initBoard)
    localStorage.setItem('board', stringifyBoard)
  } else {
    resolve('Success!')
  }
})

checkData.then(function (result) {
  console.log(result)
  console.log('Initialized App')
}).catch(function () {
  console.log('The App has Started with Default Data')
}).finally(function () {
  getLocalData()
  displayCategories()
})

const getLocalData = function() {
  const boardString = localStorage.getItem('board')
  const board = JSON.parse(boardString)
  return board
}

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


export { getLocalData }