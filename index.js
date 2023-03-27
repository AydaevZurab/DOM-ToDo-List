const form = document.getElementById('form')
const input = document.getElementById('input')
const ul = document.getElementById('ul')

form.addEventListener('submit', (eventObject) => {
    eventObject.preventDefault()
    const li = document.createElement('li')
    li.textContent = input.value;
    ul.append(li)
    input.value = '';
})