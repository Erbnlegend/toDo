import './style.css'
import './normalize.css'
import { DOMElements } from './dom'
import { addCard, addCategory } from './cardFactories'
import { showCategoryForm, showCardForm } from './UIController'
import { displayCategories, displayInnerCards } from './displayCards'

const board = {
    allCategories: {
        house: [{title: 'hello house', description: 'yes yes', date: 'today'},{title: 'hello house 2', description: 'yes yes1', date: 'today1'}],
        work: [{title: ' hello work', description: 'yes yes', date: 'today'}],
        kids: [{title: 'hello kids', description: 'yes yes', date: 'today'}],
        organize: [{title: 'hello organize', description: 'yes yes', date: 'today'}],
        groceries: [{title: 'hello groceries', description: 'yes yes', date: 'today'}],
        projects: [{title: 'hello projects', description: 'yes yes', date: 'today'}],
        general: [{title: 'hello general', description: 'yes yes', date: 'today'}]
    }
}
    
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


