function somar(imput) {
    let multi3 = 0
    let multi5 = 0

    for (x = 1; imput >= x; x++) {
        if (x % 3 === 0) multi3 += x
        if (x % 5 === 0) multi5 += x
    }

    console.log(multi3 + multi5);
}

somar(10)