const url = "http://localhost:5500/api"

function getUser() {
    axios.get(url)
        .then(response => {
            apiResult.textContent = JSON.stringify(response.data)
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

const user = {
    name: "Gracielly",
    avatar: "https://avatars.githubusercontent.com/u/17316392?v=4", city: "Recife"
}

getUser()