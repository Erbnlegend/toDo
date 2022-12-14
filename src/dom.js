const DOMElements = {
    cards: document.getElementById('cards'),
    addCategoryButton: document.getElementById('addCategoryButton'),
    categoryForm: document.getElementById('categoryForm'),
    cardForm: document.getElementById('cardForm'),
    addNewCard: document.getElementById('addNewCard'),
    updateCardForm: document.getElementById('updateCardForm'),
    addNewCategory: document.getElementById('addNewCategory'),
    title: document.getElementById('title'),
    description: document.getElementById('description'),
    category: document.getElementById('category'),
    date: document.getElementById('date'),
    ifEditing: document.getElementById('ifEditing'),
    currentPlace: document.getElementById('currentPlace'),
    back: document.getElementById('back'),
    closeCard: document.getElementById('closeCard'),
    closeCat: document.getElementById('closeCat'),
    removeButton: document.querySelectorAll('.removeButton'),
    editButton: document.querySelectorAll('.editButton'),
    createCatError: document.getElementById('createCatError'),
    createCardError: document.getElementById('createCardError'),
    createUpdateCardError: document.getElementById('createUpdateCardError'),
    disappearCat: document.getElementById('disappearCat'),
    disappearCard: document.getElementById('disappearCard')
}

export {DOMElements}