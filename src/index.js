import './style.css'
import './normalize.css'
const feather = require('feather-icons')
import { DOMElements } from './dom'
import { addCard, addCategory } from './cardFactories'
import { showCategoryForm, showCardForm} from './UIController'
import { displayCategories } from './displayCategories'

// const board = {
//     allCategories: {
//         house: [{title: 'hello house', description: 'yes yes', date: '2022-11-17', complete: false},{title: 'hello house 2', description: 'yes yes1', date: '2022-11-17', complete: '2022-11-221'}],
//         work: [{title: ' hello work', description: 'yes yes', date: '2022-11-17', complete: false}],
//         kids: [{title: 'hello kids', description: 'yes yes', date: '2022-11-17', complete: false}],
//         organize: [{title: 'hello organize', description: 'yes yes', date: '2022-11-17', complete: false}],
//         groceries: [{title: 'hello groceries', description: 'yes yes', date: '2022-11-17', complete: false}],
//         projects: [{title: 'hello projects', description: 'yes yes', date: '2022-11-17', complete: false}],
//         general: [{title: 'hello general', description: 'yes yes', date: '2022-11-17', complete: false}]
//     }
// }

const board = [
    {category: 'house', todo: [{title: 'hello house', description: 'yes yes', date: '2022-11-17', complete: false}, {title: 'hello house 2', description: 'yes yes1', date: '2022-11-17', complete: false}]},
    {category: 'work', todo: [{title: 'hello work', description: 'yes yes', date: '2022-11-17', complete: false}] },
    {category: 'kids', todo: [{title: 'hello kids', description: 'yes yes', date: '2022-11-17', complete: false}] },
    {category: 'organize', todo: [{title: 'hello organize', description: 'yes yes', date: '2022-11-17', complete: false}]},
    {category: 'groceries', todo: [{title: 'hello groceries', description: 'yes yes', date: '2022-11-17', complete: false}]},
    {category: 'projects', todo: [{title: 'hello projects', description: 'yes yes', date: '2022-11-17', complete: false}]},
    {category: 'general', todo: [{title: 'hello general', description: 'yes yes', date: '2022-11-17', complete: false}]}
]

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
// DOMElements.closeUpdateCard.addEventListener('click', showUpdateCardForm)

feather.replace()
feather.icons.x.toSvg()
