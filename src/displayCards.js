import {DOMElements} from './dom'
import {showCardForm} from './UIController'
import {removeInnerCard} from './remove'
import {editCard, submitChangeCard, editCheck} from './edit'
import { createElement, MoreHorizontal, CheckCircle } from './lucide.js';

function displayInnerCards(category, board, randomColor) {
    DOMElements.currentPlace.innerHTML = `What part of ${category.category} are you working on today?`
    DOMElements.cards.innerHTML = ""
    
    // Add + Button
    const button = document.createElement('div')
    button.setAttribute('class', 'card')
    button.setAttribute('data-category', category.category)
    DOMElements.addNewCard.setAttribute('data-category', category.category)
    button.style.backgroundColor = `${randomColor}`;
    button.addEventListener('click', showCardForm )
    button.innerHTML = "+ Add"

    // Passes Category to Form for editing
    DOMElements.ifEditing.value = category.category
    for(let i = 0; i < category.todo.length; i++) {
        // New Card Instance
        const createNewCard = document.createElement('div')
        const createDescription = document.createElement('div')
        // Card Information Display
        createDescription.setAttribute('id', `description${i}`)
        createDescription.innerHTML = category.todo[i].description
        const createDate = document.createElement('div')
        createDate.setAttribute('id', `date${i}`)
        createDate.innerHTML = category.todo[i].date
        createNewCard.style.backgroundColor = `${randomColor}`;
        createNewCard.setAttribute('class', 'card')

        // Remove Button
        const removeButton = document.createElement('div')
        removeButton.setAttribute('class', 'removeButton')
        removeButton.setAttribute('id', `remove`)

        // Edit Input 
        const createTitleInput = document.createElement('input')
        createTitleInput.setAttribute('id', `edit${i}`)
        createTitleInput.value = category.todo[i].title
        createTitleInput.style.display = 'none'

        // Edit date Input 
        const createDateInput = document.createElement('input')
        createDateInput.setAttribute('id', `editDate${i}`)
        createDateInput.setAttribute('type', 'date')
        createDateInput.value = category.todo[i].date
        createDateInput.style.display = 'none'

        // Edit description Input 
        const createDescriptionInput = document.createElement('input')
        createDescriptionInput.setAttribute('id', `editDescription${i}`)
        createDescriptionInput.value = category.todo[i].description
        createDescriptionInput.style.display = 'none'

        // Submit Input
        const submitField = document.createElement('input')
        submitField.setAttribute('type', 'submit')
        submitField.setAttribute('value', 'Save')
        submitField.setAttribute('id', `submit${i}`)
        submitField.style.display = 'none'

                
        // Edit Button
        const editButton = createElement(MoreHorizontal)
        editButton.setAttribute('class', 'editButton cardEditButton')
        editButton.setAttribute('data-category', category.todo[i].title)
        editButton.setAttribute('id', `editButton${i}`)

        // checkComplete Button
        const checkComplete = createElement(CheckCircle)
        checkComplete.setAttribute('class', 'editCheck')
        checkComplete.setAttribute('id', `editCheck${i}`)
        const ifCompleted = category.todo[i].complete
        if(ifCompleted) {
            checkComplete.setAttribute('class', 'editCheck greenCompleted')
        }

        // pass index number
        removeButton.setAttribute('data-card', i)
        createNewCard.setAttribute('data-card', i)

        // Stop Propagation Issues
        // New Event Listeners
        checkComplete.addEventListener('click', function(e){
            editCheck(e, board, i, category)
        })
        submitField.addEventListener('click', function(e){
            e.preventDefault()
        })
        submitField.addEventListener('click', function(e){
            submitChangeCard(e, board, i, category)
        })
        createTitleInput.addEventListener('click', function(e){
            e.stopPropagation();
        })
        editButton.addEventListener('click', function(e){
            e.stopPropagation();
        })
        editButton.addEventListener('click', function(e) {
            editCard(e, board, i)
        })
        removeButton.addEventListener('click', function(e) {
            e.stopPropagation();
        })
        removeButton.addEventListener('click', function(e) {
            removeInnerCard(e, board, category)
        })
        removeButton.innerHTML = "X"

        // Creates the card for the array
        const text = document.createElement('div')
        text.setAttribute('id', i)
        text.textContent = `${category.todo[i].title}`
        // Make the new Card
        createNewCard.append(text)
        createNewCard.append(createTitleInput)
        createNewCard.append(createDescriptionInput)
        createNewCard.append(createDateInput)
        createNewCard.append(createDescription)
        createNewCard.append(createDate)
        createNewCard.append(submitField)
        createNewCard.append(editButton)
        createNewCard.append(checkComplete)
        createNewCard.append(removeButton)

        // Append new card
        DOMElements.cards.append(createNewCard)
    }
    DOMElements.cards.append(button)
}

export {displayInnerCards}