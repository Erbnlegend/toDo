import { displayInnerCards } from './displayCards'
import { displayCategories } from './displayCategories'
import { getLocalData } from './index'

function removeCategory (e, category) {
  const board = getLocalData()
  const message = `Are you sure you want to remove the ${board[category].category} category?`
  if (confirm(message)) {
    board.splice(category, 1)
    const boardtoString = JSON.stringify(board)
    localStorage.setItem('board', boardtoString)
    displayCategories()
  }
}

function removeInnerCard (e, category) {
  const board = getLocalData()
  const targetRemove = e.target.dataset.card
  const dataCard = e.target.dataset.card
  const generateColor = Math.floor(Math.random() * 16777215).toString(16)
  const randomColor = `#${generateColor}50`
  const message = `Are you sure you want to remove the ${category.todo[targetRemove].title} card?`
  if (confirm(message)) {
    category.todo.splice(dataCard, 1)
    const boardtoString = JSON.stringify(board)
    localStorage.setItem('board', boardtoString)
    displayInnerCards(category, randomColor)
  }
}

export { removeCategory, removeInnerCard }
