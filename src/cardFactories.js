import { DOMElements } from './dom'
import {displayCategories} from './displayCategories'
import {displayInnerCards} from './displayCards'
import {showCardForm, showCategoryForm} from './UIController'

function cardFactory(title, description, date, complete) {
    return {
        title,
        description,
        date,
        complete
    }
}

function addCard(e, board) {
    const inputCategory = e.target.dataset.category
    let index = board.findIndex(x => x.category === inputCategory)

    DOMElements.ifEditing.value = inputCategory
    const newTitle = DOMElements.title.value
    const newDescription = DOMElements.description.value
    const newDate = DOMElements.date.value

    // let findDupe = board[i].todo[inputCategory].includes(newTitle)
    
    for(let i = 0; i < board[index].todo.length; i++) {
        const findDupe = board[index].todo[i].title.includes(newTitle)
        if(findDupe) {
            DOMElements.createCardError.innerHTML = 'A card with that title already exists'
            return
        }
        else {
            DOMElements.createCardError.innerHTML = ''
            continue
        }
    }
    if(newTitle.length < 1) {
        DOMElements.createCardError.innerHTML = "Please enter a valid title"
        return
    }
    DOMElements.createCardError.innerHTML = ""
    let generateColor = Math.floor(Math.random()*16777215).toString(16);
    let randomColor = `#${generateColor}50`
    const newCard = cardFactory(newTitle,newDescription,newDate)
    board[index].todo.push(newCard)
    displayInnerCards(board[index], board, randomColor)
    DOMElements.title.value = ""
    DOMElements.description.value = ""
    DOMElements.date.value = ""
}

function addCategory(board) {
    const inputCategory = DOMElements.category.value

    if(inputCategory.length < 1) {
        DOMElements.createCatError.innerHTML = "Please enter a valid name"
        return
    }
    for(let i = 0; i < board.length; i++) {
        const findDupe = board[i].category.includes(inputCategory)
        if(findDupe) {
            DOMElements.createCatError.innerHTML = 'A card with that title already exists'
            return
        }
    }
    DOMElements.createCatError.innerHTML = ""
    DOMElements.ifEditing.value = inputCategory

    board.push({category: inputCategory, todo: [{title: 'hello!', description: 'Im a new Card', date: '', complete: false}]})
    displayCategories(board)
}

export { addCard, addCategory }