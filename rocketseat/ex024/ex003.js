function mediaDoAluno(notas) {
    const media = notas.reduce((accumulator, currentValue) => accumulator + currentValue) / notas.length

    return media <= 59 ? 'F' :
        media <= 69 ? 'D' :
            media <= 79 ? 'C' :
                media <= 89 ? 'B' :
                    'A'
}

const array = [89]
console.log(mediaDoAluno(array));


// Math.Floor()