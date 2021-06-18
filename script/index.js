const buttonGet = document.getElementById('button-get')
const buttonPost = document.getElementById('button-post')

buttonGet.addEventListener('click', () => {
    fetch('http://www.raydelto.org/agenda.php').then(data => data.json()).then(data => {

        const list = document.getElementById('list')
        for (const userInfo of data) {
            const listItem = document.createElement('li')
            listItem.textContent = `Nombre: ${userInfo.nombre} Apellido: ${userInfo.apellido} Telefono: ${userInfo.telefono}`
            list.appendChild(listItem)
        }
    })
})

buttonPost.addEventListener('click', () => {
    const name = document.getElementById('name')
    const lastName = document.getElementById('lastName')
    const phone = document.getElementById('phone')

    const newContact = {
        nombre: name.value,
        apellido: lastName.value,
        telefono: phone.value,
    }

    fetch('http://www.raydelto.org/agenda.php', {
        method: 'POST',
        body: JSON.stringify(newContact),
        headers: {
            "content-type": "text/plain"
        }
    }).then(res => res.json()).then(res => console.log(res))
})