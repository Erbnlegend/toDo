import { DOMElements } from './dom'
import {displayCategories, displayInnerCategories} from './displayCards'

function cardFactory(title, description, date) {
    return {
        title,
        description,
        date
    }
}

function addCard(e, board) {
    const category = e.target.dataset.category
    DOMElements.ifEditing.value = category
    const newTitle = DOMElements.title.value
    const newDescription = DOMElements.description.value
    const newDate = DOMElements.date.value
    let generateColor = Math.floor(Math.random()*16777215).toString(16);
    let randomColor = `#${generateColor}50`
    const newCard = cardFactory(newTitle,newDescription,newDate)
    board.allCategories[category].push(newCard)
    displayInnerCategories(e, board, randomColor)
    DOMElements.title.value = ""
    DOMElements.description.value = ""
    DOMElements.date.value = ""
}

function addCategory(board) {
    const category = DOMElements.category.value
    DOMElements.ifEditing.value = category
    board.allCategories[category] = [{title: 'Look!', description: 'Im a new Card', date: 'today'}]
    displayCategories(board)
}

export { addCard, addCategory }