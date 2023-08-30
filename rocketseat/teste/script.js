
function chamado() {
    const imput = document.getElementById("cep").value
    const result = document.createElement("div")
    let linha
    let map = `https://www.google.com/maps?q=${imput}`

    result.classList = "resultado"

    axios.get(`https://viacep.com.br/ws/${imput}/json/`)
        .then(resp => {
            const data = resp.data

            if (Object.keys(data).length < 10) {
                alert("Digite um CEP válido")

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
}


//  85802000