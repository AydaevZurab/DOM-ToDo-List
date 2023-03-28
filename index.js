const form = document.getElementById('form')
const input = document.getElementById('input')

form.addEventListener('submit', (eventObject) => {
    eventObject.preventDefault()

    const div = document.createElement('div')
    div.textContent = input.value;

    const dlt = document.createElement('button')
    dlt.id = 'delete'
    dlt.textContent = 'x'

    dlt.addEventListener('click', (eventObject) => {
        eventObject.target.parentElement.remove()
    })

    const mark = document.createElement('input')
    mark.setAttribute('type', 'checkbox')

    div.prepend(mark)
    div.append(dlt)
    form.after(div)
    input.value = '';
})