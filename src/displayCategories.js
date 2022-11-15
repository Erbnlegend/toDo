import {DOMElements} from './dom'
import {showCategoryForm} from './UIController'
import {removeCategory } from './remove'
import {edit, submitChange} from './edit'
import {displayInnerCards} from './displayCards'
import { createElement, MoreHorizontal} from './lucide.js';

function displayCategories(board) {
    DOMElements.cards.innerHTML = ""
    DOMElements.currentPlace.innerHTML = `What are you working on today?`
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    const button = document.createElement('div')
    button.setAttribute('class', 'card add')
    button.style.backgroundColor = `#${randomColor}50`;
    button.addEventListener('click', showCategoryForm)
    button.innerHTML = "+ Add"

    for(let item in board) {
        randomColor = Math.floor(Math.random()*16777215).toString(16);

        // New Card Instance
        const createNewCard = document.createElement('div')
        const text = document.createElement('div')
        text.setAttribute('id', item)

        // Remove button
        const removeButton = document.createElement('div')
        removeButton.setAttribute('class', 'removeButton')
        removeButton.setAttribute('data-category', board[item].category)
        removeButton.innerHTML = "X"

        // Edit Field 
        const createInput = document.createElement('input')
        createInput.setAttribute('id', `edit${item}`)
        createInput.value = board[item].category
        createInput.style.display = 'none'

        // Submit Field
        const submitField = document.createElement('input')
        submitField.setAttribute('type', 'submit')
        submitField.setAttribute('value', 'Save')
        submitField.setAttribute('id', `submit${item}`)
        submitField.style.display = 'none'
                
        // Edit Button
        const editButton = createElement(MoreHorizontal)
        editButton.setAttribute('class', 'editButton')
        editButton.setAttribute('data-category', board[item].category)
        editButton.setAttribute('id', `editButton${item}`)

        // Number in category array
        const displayNumber = document.createElement('div')
        displayNumber.setAttribute('class', 'numberRound')
        displayNumber.innerHTML = `${board[item].todo.length}`
        displayNumber.style.backgroundColor = `#${randomColor}80`;
        displayNumber.setAttribute('data-category', item)

        // Entire new Card
        createNewCard.style.backgroundColor = `#${randomColor}60`;
        text.textContent = board[item].category
        createNewCard.setAttribute('class', 'card')
        createNewCard.setAttribute('data-category', item)
        createNewCard.append(createInput)
        createNewCard.append(submitField)
        createNewCard.append(text)
        createNewCard.append(removeButton)
        createNewCard.append(editButton)
        createNewCard.append(displayNumber)

        // Stop Propagation Issues
        // New Event Listeners
        
        submitField.addEventListener('click', function(e){
            e.preventDefault()
            e.stopPropagation()
        })
        submitField.addEventListener('click', function(e){
            e.preventDefault()
            submitChange(e, board, item)
        })
        createInput.addEventListener('click', function(e){
            e.stopPropagation();
        })
        editButton.addEventListener('click', function(e){
            e.stopPropagation();
        })
        editButton.addEventListener('click', function(e) {
            e.stopPropagation();
            edit(e, board, item)
        })
        removeButton.addEventListener('click', function(e) {
            e.stopPropagation();
        })
        removeButton.addEventListener('click', function(e) {
            removeCategory(e, board, item)
        })
        createNewCard.addEventListener('click', function(e) {
            displayInnerCards(board[item], board, e.target.style.backgroundColor)
        })
        DOMElements.cards.append(createNewCard)
        DOMElements.category.value = ""
    }
    DOMElements.cards.append(button)
}

export {displayCategories}