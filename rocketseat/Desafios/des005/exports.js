//console.log(process.argv[5]);


function getFlag(imput) {
    const index = process.argv.indexOf(imput) + 1
    return process.argv[index]
}



module.exports = getFlag
