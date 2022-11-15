import './style.css'
import './normalize.css'
import { DOMElements } from './dom'
import { addCard, addCategory } from './cardFactories'
import { showCategoryForm, showCardForm} from './UIController'
import { displayCategories } from './displayCategories'



const board = [
    {category: 'house', color: '', todo: []},
    {category: 'house2', color: '', todo: []},
    {category: 'house3', color: '', todo: []}
]
// const JSONBoard = JSON.stringify(board)
// window.localStorage.setItem('board', JSONBoard)
// console.log(window.localStorage)
// const localBoardInJSON = localStorage.getItem('board')
// const localBoard = JSON.parse(localBoardInJSON)
// update()

// function update() {
//     let values = [], keys = Object.keys(localStorage), i = keys.length;
//     while (i--) {
//         values.push( localStorage.getItem(keys[i]))
//     }
// }
displayCategories(board)

// Event Listener 
DOMElements.addNewCard.addEventListener('click', function(e) {
    e.preventDefault()
    addCard(e, board)
})
DOMElements.addNewCategory.addEventListener('click', function(e) {
    e.preventDefault()
    addCategory(board)
})
DOMElements.back.addEventListener('click', function() {
    displayCategories(board)
})

DOMElements.closeCard.addEventListener('click', showCardForm)
DOMElements.closeCat.addEventListener('click', showCategoryForm)