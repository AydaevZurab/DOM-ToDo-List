const form = document.getElementById('form')
const input = document.getElementById('input')
const ul = document.createElement('ul')
form.after(ul) 

form.addEventListener('submit', (eventObject) => {
    eventObject.preventDefault()

    const li = document.createElement('li')
    li.textContent = input.value;

    const dlt = document.createElement('button')
    dlt.textContent = 'x'

    dlt.addEventListener('click', (eventObject) => {
        eventObject.target.parentElement.remove()
    })

    const mark = document.createElement('input')
    mark.setAttribute('type', 'checkbox')

    ul.prepend(mark)
    li.append(dlt)
    ul.prepend(li)
    input.value = '';
})