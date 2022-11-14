import {displayCategories, displayInnerCategories} from './displayCards'

function edit(e, board, item) {
    const editButton = document.getElementById(`editButton${item}`)
    const field = document.getElementById(item)
    const editText = document.getElementById(`edit${item}`)
    const submitField = document.getElementById(`submit${item}`)
    editButton.style.display = 'none'
    field.style.display = 'none'
    editText.style.display = 'block'
    submitField.style.display = 'block'
}

function submitChange(e, board, item) {
    const editButton = document.getElementById(`editButton${item}`)
    const field = document.getElementById(item)
    const editText = document.getElementById(`edit${item}`)
    const submitField = document.getElementById(`submit${item}`)
    field.innerHTML = editText.value
    board[item].category = editText.value
    editButton.style.display = 'block'
    field.style.display = 'grid'
    editText.style.display = 'none'
    submitField.style.display = 'none'
}

function editCard(e, board, i) {
    const editButton = document.getElementById(`editButton${i}`)
    const titleField = document.getElementById(i)
    const editTitleField = document.getElementById(`edit${i}`)
    const descriptionField = document.getElementById(`description${i}`)
    const editDescriptionField = document.getElementById(`editDescription${i}`)
    const dateField = document.getElementById(`date${i}`)
    const editDateField = document.getElementById(`editDate${i}`)
    const submitField = document.getElementById(`submit${i}`)

    editButton.style.display = 'none'
    titleField.style.display = 'none'
    descriptionField.style.display = 'none'
    dateField.style.display = 'none'


    editTitleField.style.display = 'block'
    editDescriptionField.style.display = 'block'
    editDateField.style.display = 'block'
    submitField.style.display = 'block'
}

function submitChangeCard(e, board, i, category) {
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
    
    editButton.style.display = 'block'
    titleField.style.display = 'block'
    descriptionField.style.display = 'block'
    dateField.style.display = 'block'


    editTitleField.style.display = 'none'
    editDescriptionField.style.display = 'none'
    editDateField.style.display = 'none'
    submitField.style.display = 'none'
}

export {edit, submitChange, editCard, submitChangeCard}