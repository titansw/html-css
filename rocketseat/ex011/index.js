const questions = [
    'O que aprendi hoje?',
    'O que me deixou aborrecido? O que eu poderia fazer para melhorar?',
    'O que me deixou feliz hoje?',
    'Quantas pessoas ajudei hoje?'
]

const ask = (index = 0) => {
    process.stdout.write('\n' + questions[index] + ' > ')
    // Tbm da para usar o log
    //console.log('\n' + questions[index] + ' > ');
}

ask()

const answers = []

//Fica escutando esperando dados in
process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit()
    }
})

//Fica esperando o exit
process.on('exit', () => {
    console.log(`
    ---------------------------------------------
    Bacana Titan!

    O que aprendi hoje foi:
    ${answers[0]}

    O que te aborreceu e vc poderia melhorar foi:
    ${answers[1]}

    O que te deixou feliz hj:
    ${answers[2]}

    Vc ajudou ${answers[3]} pessoas hj!

    Volte amanhã para novas reflexões.
    `);
})