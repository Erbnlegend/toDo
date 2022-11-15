import { DOMElements } from './dom'
import {displayCategories} from './displayCategories'
import {displayInnerCards} from './displayCards'

function cardFactory(title, description, date, complete) {
    return {
        title,
        description,
        date,
        complete
    }
}

function addCard(e) {
    const boardString = localStorage.getItem('board')
    const board = JSON.parse(boardString)
    const inputCategory = e.target.dataset.category
    let index = board.findIndex(x => x.category === inputCategory)

    DOMElements.ifEditing.value = inputCategory
    const newTitle = DOMElements.title.value
    const newDescription = DOMElements.description.value
    const newDate = DOMElements.date.value

    if(newDescription === "") {
        DOMElements.createCardError.innerHTML = "Please enter a description"
        return
    }
    if(newDate === "") {
        DOMElements.createCardError.innerHTML = "Please enter a valid date"
        return
    }
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
    const newCard = new cardFactory(newTitle,newDescription,newDate,false)
    board[index].todo.push(newCard)
    const boardtoString = JSON.stringify(board)
    window.localStorage.setItem('board', boardtoString)

    displayInnerCards(board[index], randomColor)
    DOMElements.title.value = ""
    DOMElements.description.value = ""
    DOMElements.date.value = ""
}

function addCategory() {
    const boardString = localStorage.getItem('board')
    const board = JSON.parse(boardString)
    const inputCategory = DOMElements.category.value

    if(inputCategory.length < 1) {
        DOMElements.createCatError.innerHTML = "Please enter a valid name"
        return
    }
    for(let i = 0; i < board.length; i++) {
        let checkDupe = board[i].category
        let testString = new RegExp("^" + checkDupe + "$")
        let findDupe = testString.test(inputCategory)
        if(findDupe) {
            DOMElements.createCatError.innerHTML = 'A card with that title already exists'
            return
        }
    }
    DOMElements.createCatError.innerHTML = ""
    DOMElements.ifEditing.value = inputCategory

    board.push({category: inputCategory, todo: [{title: 'hello!', description: 'Im a new Card', date: '2022-01-01', complete: false}]})
    const boardtoString = JSON.stringify(board)
    localStorage.setItem('board', boardtoString)
    displayCategories()
}

export { addCard, addCategory }