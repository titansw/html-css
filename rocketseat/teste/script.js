function chamado() {
    const imput = document.getElementById("cep")
    const result = document.createElement("div")
    const map = `https://www.google.com/maps?q=${imput.value}`
    let linha

    result.classList = "resultado"

    axios.get(`https://viacep.com.br/ws/${imput.value}/json/`)
        .then(resp => {
            const data = resp.data

            if (Object.keys(data) == 'erro') {
                console.log(Object.keys(data))
                alert("Cep não encontrado, digite um CEP válido!")

            } else {
                document.body.appendChild(result)

                linha = document.createElement("a")
                linha.textContent = `Mapa`
                linha.setAttribute('href', map)
                linha.setAttribute('target', '_blank')
                result.appendChild(linha)


                for (let i in data) {
                    if (i != 'ibge' && i != 'gia' && i != 'siafi') {
                        linha = document.createElement("p")
                        linha.classList = "linha"

                        result.appendChild(linha)

                        linha.textContent += `${i[0].toUpperCase() + i.slice(1)}: ${data[i]} `
                    }
                }
            }
        })
        .catch(error => console.error(error))
    imput.value = ''
}

function onlyNumber(evt, value) {
    if (value.length === 8) return false
    return /\d/.test(evt.key)
}

//  85802000
//  72231100
//  01153000