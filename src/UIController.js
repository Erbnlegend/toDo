import { DOMElements } from "./dom"

function showCategoryForm() {
    if(DOMElements.categoryForm.classList.contains('swipeRight')) {
        DOMElements.categoryForm.classList.toggle('swipeLeft')
    }
    if(DOMElements.categoryForm.classList.contains('swipeLeft')) {
        DOMElements.categoryForm.classList.toggle('swipeRight')
        setTimeout(() => {
            DOMElements.categoryForm.classList.toggle('disappear')
        }, 300);
    }
    if(DOMElements.categoryForm.classList.contains('swipeRight') && DOMElements.categoryForm.classList.contains('swipeLeft')) {
        DOMElements.categoryForm.classList.toggle('swipeRight')
        DOMElements.categoryForm.classList.toggle('swipeLeft')
        setTimeout(() => {
            DOMElements.categoryForm.classList.toggle('swipeRight')
        }, 200);

    }
}

function showCardForm() {
    if(DOMElements.cardForm.classList.contains('swipeRight')) {
        DOMElements.cardForm.classList.toggle('swipeLeft')
    }
    if(DOMElements.cardForm.classList.contains('swipeLeft')) {
        DOMElements.cardForm.classList.toggle('swipeRight')
        setTimeout(() => {
            DOMElements.cardForm.classList.toggle('disappear')
        }, 300);
    }
    if(DOMElements.cardForm.classList.contains('swipeRight') && DOMElements.cardForm.classList.contains('swipeLeft')) {
        DOMElements.cardForm.classList.toggle('swipeRight')
        DOMElements.cardForm.classList.toggle('swipeLeft')
        setTimeout(() => {
            DOMElements.cardForm.classList.toggle('swipeRight')
        }, 200);
    }
}

export {showCategoryForm, showCardForm }