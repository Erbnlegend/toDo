import { DOMElements } from "./dom"

function showCategoryForm() {
    if(DOMElements.categoryForm.classList.contains('swipeRight')) {
        DOMElements.categoryForm.classList.toggle('swipeLeft')
    }
    if(DOMElements.categoryForm.classList.contains('swipeLeft')) {
        DOMElements.categoryForm.classList.toggle('swipeRight')
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
    }
    if(DOMElements.cardForm.classList.contains('swipeRight') && DOMElements.cardForm.classList.contains('swipeLeft')) {
        DOMElements.cardForm.classList.toggle('swipeRight')
        DOMElements.cardForm.classList.toggle('swipeLeft')
        setTimeout(() => {
            DOMElements.cardForm.classList.toggle('swipeRight')
        }, 200);
    }
}

// function showUpdateCardForm() {
//     if(DOMElements.updateCardForm.classList.contains('swipeRight')) {
//         DOMElements.updateCardForm.classList.toggle('swipeLeft')
//     }
//     if(DOMElements.updateCardForm.classList.contains('swipeLeft')) {
//         DOMElements.updateCardForm.classList.toggle('swipeRight')
//     }
//     if(DOMElements.updateCardForm.classList.contains('swipeRight') && DOMElements.cardForm.classList.contains('swipeLeft')) {
//         DOMElements.updateCardForm.classList.toggle('swipeRight')
//         DOMElements.updateCardForm.classList.toggle('swipeLeft')
//         setTimeout(() => {
//             DOMElements.updateCardForm.classList.toggle('swipeRight')
//         }, 200);
//     }
// }

export {showCategoryForm, showCardForm }