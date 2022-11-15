import {displayCategories} from './displayCategories'
import {displayInnerCards} from './displayCards'



function edit(e, item) {
    const editButton = document.getElementById(`editButton${item}`)
    const field = document.getElementById(item)
    const editText = document.getElementById(`edit${item}`)
    const submitField = document.getElementById(`submit${item}`)

    editButton.classList.toggle('editButtonReset')
    field.style.display = 'none'
    editText.style.display = 'block'
    submitField.style.display = 'block'
}

function submitChange(e, item) {
    const boardString = window.localStorage.getItem('board')
    const board = JSON.parse(boardString)
    const editButton = document.getElementById(`editButton${item}`)
    const field = document.getElementById(item)
    const editText = document.getElementById(`edit${item}`)
    const submitField = document.getElementById(`submit${item}`)
    field.innerHTML = editText.value
    board[item].category = editText.value

    const boardtoString = JSON.stringify(board)
    window.localStorage.setItem('board', boardtoString)

    editButton.classList.toggle('editButtonReset')
    field.style.display = 'block'
    editText.style.display = 'none'
    submitField.style.display = 'none'
    displayCategories()
}

function editCard(e, i) {
    const editButton = document.getElementById(`editButton${i}`)
    const titleField = document.getElementById(i)
    const editTitleField = document.getElementById(`edit${i}`)
    const descriptionField = document.getElementById(`description${i}`)
    const editDescriptionField = document.getElementById(`editDescription${i}`)
    const dateField = document.getElementById(`date${i}`)
    const editDateField = document.getElementById(`editDate${i}`)
    const submitField = document.getElementById(`submit${i}`)

    editButton.classList.toggle('editButtonReset')
    titleField.style.display = 'none'
    descriptionField.style.display = 'none'
    dateField.style.display = 'none'
    submitField.style.display = 'block'

    editTitleField.style.display = 'block'
    editDescriptionField.style.display = 'block'
    editDateField.style.display = 'block'
    submitField.style.display = 'block'
}

function submitChangeCard(e, i, category) {
    const boardString = window.localStorage.getItem('board')
    const board = JSON.parse(boardString)
    const editButton = document.getElementById(`editButton${i}`)
    const innerCategory = category.category
    let index = board.findIndex(x => x.category === innerCategory)
    const titleField = document.getElementById(i)
    const editTitleField = document.getElementById(`edit${i}`)

    const descriptionField = document.getElementById(`description${i}`)
    const editDescriptionField = document.getElementById(`editDescription${i}`)

    const dateField = document.getElementById(`date${i}`)
    const editDateField = document.getElementById(`editDate${i}`)

    const submitField = document.getElementById(`submit${i}`)

    titleField.innerHTML = editTitleField.value
    descriptionField.innerHTML = editDescriptionField.value
    dateField.innerHTML = editDateField.value

    board[index].todo[i].title = editTitleField.value
    board[index].todo[i].description = editDescriptionField.value
    board[index].todo[i].date = editDateField.value

    const boardtoString = JSON.stringify(board)
    window.localStorage.setItem('board', boardtoString)
    
    editButton.classList.toggle('editButtonReset')
    titleField.style.display = 'block'
    descriptionField.style.display = 'block'
    dateField.style.display = 'block'


    editTitleField.style.display = 'none'
    editDescriptionField.style.display = 'none'
    editDateField.style.display = 'none'
    submitField.style.display = 'none'
}

function editCheck(e, i, category) {
    const boardString = window.localStorage.getItem('board')
    const board = JSON.parse(boardString)

    const changeCheck = document.getElementById(`editCheck${i}`)
    const innerCategory = category.category

    let index = board.findIndex(x => x.category === innerCategory)
    const ifCompleted = board[index].todo[i].complete
    if(ifCompleted){
        changeCheck.classList.remove('greenCompleted')
        board[index].todo[i].complete = false
        const boardtoString = JSON.stringify(board)
        window.localStorage.setItem('board', boardtoString)
    }
    if(!ifCompleted) {
        changeCheck.classList.add('greenCompleted')
        board[index].todo[i].complete = true
        const boardtoString = JSON.stringify(board)
        window.localStorage.setItem('board', boardtoString)
    }
}

export {edit, submitChange, editCard, submitChangeCard, editCheck}