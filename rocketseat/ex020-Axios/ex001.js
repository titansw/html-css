const url = "http://localhost:5500/api/"

function getUsers() {
    axios.get(url)
        .then(response => {
            apiResult.textContent = JSON.stringify(response.data)
        })
        .catch(error => console.error(error))
}

function getUser(id) {
    axios.get(url + id)
        .then(response => {
            const data = response.data

            userName.textContent = data.name
            userCity.textContent = data.city
            userID.textContent = data.id
            userAvatar.src = data.avatar
        })
        .catch(error => console.error(error))
}

function addNewUser(user) {
    axios.post(url, user)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.error(error))
}

function updateUser(id, userUpdated) {
    axios.put(url + id, userUpdated)
        .then(response => console.log(response))
        .catch(error => console.error(error))
}

function deleteUser(id) {
    axios.delete(url + id)
        .then(response => console.log(response))
        .catch(error => console.error(error))
}

const user = {
    name: "Gracielly",
    avatar: "https://picsum.photos/200/300",
    city: "Recife"
}

const userUpdated = {
    name: "GG",
    avatar: "https://picsum.photos/200/300",
    city: "Recife"
}



getUsers()
getUser(3)
//updateUser(2, userUpdated)
//addNewUser(user)
//deleteUser(4)