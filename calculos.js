function encontrarMayorSalario(salariosIntegrantes) {
    let mayorSalario = salariosIntegrantes[0];
    for (let i = 0; i < salariosIntegrantes.length; i++) {
        if (salariosIntegrantes[i] > mayorSalario) {
            mayorSalario = salariosIntegrantes[i]
        }
    }
    return mayorSalario
}

function encontrarMenorSalario(salariosIntegrantes) {
    let menorSalario = salariosIntegrantes[0];
    for (let i = 0; i < salariosIntegrantes.length; i++) {
        if (salariosIntegrantes[i] < menorSalario) {
            menorSalario = salarios[i]
        }
    }
    return menorSalario
}

function calcularSalarioAnualPromedio(salariosIntegrantes) {
    let sumatoriaDeSalarios = 0

    for (let i = 0; i < salariosIntegrantes.length; i++) {
        sumatoriaDeSalarios += salariosIntegrantes[i]
    }
    return Math.floor(sumatoriaDeSalarios / salariosIntegrantes.length)
}

function calcularSalarioMensualPromedio(salariosIntegrantes) {
    let sumatoriaDeSalarios = 0

    for (let i = 0; i < salariosIntegrantes.length; i++) {
        sumatoriaDeSalarios += salariosIntegrantes[i]
    }
    return Math.floor((sumatoriaDeSalarios / 12) / salariosIntegrantes.length)
}