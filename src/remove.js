import {displayCategories, displayInnerCategories} from './displayCards'
import {cardFactory} from './cardFactories'

function removeCategory(e, board, category) {
    let message = `Are you sure you want to remove the ${category} category?`
    if(confirm(message)) {
        delete board.allCategories[category]
        displayCategories(board)
    }
    return
    
}

function removeInnerCard(e, board, category) {
    const targetRemove = e.target.parentNode.firstChild.innerHTML
    const dataCard = e.target.dataset.card
    let generateColor = Math.floor(Math.random()*16777215).toString(16);
    const randomColor = `#${generateColor}50`
    e = category
    let message = `Are you sure you want to remove the ${targetRemove} card?`
    if(confirm(message)) {
        delete board.allCategories[category][dataCard]
        const newArray = board.allCategories[category].filter(function () { return true })
        // Clean Dirty Array
        if(board.allCategories[category].length === 0) {
            board.allCategories[category] = []
        }
        else {
            board.allCategories[category] = newArray
        }

        displayInnerCategories(e, board, randomColor)
    }
    return
    
}

export {removeCategory, removeInnerCard}