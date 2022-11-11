import {DOMElements} from './dom'
import {showCategoryForm, showCardForm} from './UIController'
import {removeCategory, removeInnerCard} from './remove'

function displayCategories(board) {
    if(board.reset) {
        board.reset = false
        return
    }
    DOMElements.cards.innerHTML = ""
    DOMElements.currentPlace.innerHTML = `What are you working on today?`
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    const button = document.createElement('div')
    button.setAttribute('class', 'card add')
    button.style.backgroundColor = `#${randomColor}50`;
    button.addEventListener('click', showCategoryForm)
    button.innerHTML = "+ Add"

    for(let item in board.allCategories) {
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        const createNewCard = document.createElement('div')
        const displayNumber = document.createElement('div')
        // Remove
        const removeButton = document.createElement('div')
        removeButton.setAttribute('class', 'removeButton')
        removeButton.setAttribute('data-category', item)
        removeButton.innerHTML = "X"

        // Number in category array
        displayNumber.setAttribute('class', 'numberRound')
        displayNumber.innerHTML = board.allCategories[item].length
        displayNumber.style.backgroundColor = `#${randomColor}80`;
        displayNumber.setAttribute('data-category', item)

        // Entire new Card
        createNewCard.style.backgroundColor = `#${randomColor}60`;
        createNewCard.innerHTML = item
        createNewCard.setAttribute('class', 'card')
        createNewCard.setAttribute('data-category', item)
        createNewCard.append(removeButton)
        createNewCard.append(displayNumber)
        removeButton.addEventListener('click', function(e) {
            e.stopPropagation();
        })
        removeButton.addEventListener('click', function(e) {
            removeCategory(e, board, item)
        })
        createNewCard.addEventListener('click', function(e) {
            displayInnerCategories(e, board, e.target.style.backgroundColor)
        })
        DOMElements.cards.append(createNewCard)
        DOMElements.category.value = ""

    }
    DOMElements.cards.append(button)
}

function displayInnerCategories(e, board, randomColor) {
    let category = ''

    // Checks where the function was called from (remove or event click)
    if(board.allCategories.hasOwnProperty(e)) {
        category = e
    }
    else {
        category = e.target.dataset.category
    }

    DOMElements.currentPlace.innerHTML = `What part of ${category} are you working on today?`
    DOMElements.cards.innerHTML = ""

    // Add + Button
    const button = document.createElement('div')
    button.setAttribute('class', 'card')
    button.setAttribute('data-category', category)
    DOMElements.addNewCard.setAttribute('data-category', category)
    button.style.backgroundColor = `${randomColor}`;
    button.addEventListener('click', showCardForm )
    button.innerHTML = "+ Add"
    // Passes Category to Form for editing
    DOMElements.ifEditing.value = category
    
    for(let item in board.allCategories[category]) {
        const createNewCard = document.createElement('div')
        createNewCard.style.backgroundColor = `${randomColor}`;
        createNewCard.setAttribute('class', 'card')
        createNewCard.setAttribute('data-card', item)

        // Remove
        const removeButton = document.createElement('div')
        removeButton.setAttribute('class', 'removeButton')
        removeButton.setAttribute('data-card', item)
        removeButton.addEventListener('click', function(e) {
            e.stopPropagation
        })
        removeButton.addEventListener('click', function(e) {
            removeInnerCard(e, board, category)
        })
        removeButton.innerHTML = "X"

        // Creates the card for the array
        const createTitle = document.createElement('div')
        const createDescription = document.createElement('div')
        const createDate = document.createElement('div')
        const path = board.allCategories[category][item]

        createTitle.innerHTML = path.title
        createDescription.innerHTML = path.description
        createDate.innerHTML = path.date

        createNewCard.append(createTitle)
        createNewCard.append(createDescription)
        createNewCard.append(removeButton)
        createNewCard.append(createDate)
        
        
        DOMElements.cards.append(createNewCard)
    }
    DOMElements.cards.append(button)
}

export {displayCategories, displayInnerCategories}