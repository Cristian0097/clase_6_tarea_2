let integrantes = document.querySelector("#integrantes")

document.querySelector("#agregar-familiar").onclick = function () {
    agregarInputs()
    mostrarElemento("#quitar-campos")
    if (document.querySelectorAll("#integrante").length > 1) {
        mostrarElemento("#calcular")
    }

    return false
}

document.querySelector("#quitar-campos").onclick = function () {
    quitarInputs()
    ocultarElemento("#quitar-campos")
}

document.querySelector("#calcular").onclick = function () {
    let $salarios = document.querySelectorAll("#integrante input")
    let arraySalarios = []

    let errores = 0

    $salarios.forEach(function (salario) {
        if (validarSalarios(salario.value)) {
            errores++
            salario.className = 'error'
            document.querySelector("#error-salarios").textContent = validarSalarios(salario.value)

        } else {
            salario.className = ''
            document.querySelector("#error-salarios").textContent = ''

        }
    
    })

    let esExito = errores === 0

    if (esExito) {

        $salarios.forEach(function (salario) {
            arraySalarios.push(Number(salario.value))
        })

        mostrarResultados(arraySalarios)
    }

    return false
}

document.querySelector("#resetear").onclick = function () {
    quitarInputs()
    borrarResultados()
    ocultarElemento("#resetear")

    mostrarElemento("#agregar-familiar")

}

let numero = 0

function agregarInputs() {
    numero += 1
    let integrante = document.createElement("div")
    integrante.id = "integrante"
    let labelIntegrante = document.createElement("label")
    labelIntegrante.textContent = "Salario anual de integrante N° " + numero
    let salarioIntegrante = document.createElement("input")
    salarioIntegrante.type = "number"

    integrante.appendChild(labelIntegrante)
    integrante.appendChild(salarioIntegrante)
    integrantes.appendChild(integrante)
}

function quitarInputs() {
    let listaIntegrantes = document.querySelectorAll("#integrante")

    for (let i = 0; i < listaIntegrantes.length; i++) {
        listaIntegrantes[i].remove()
    }
}

function mostrarResultados(salarios) {
    document.querySelector("#mayor-salario-anual").textContent = 'El mayor salario es ' + encontrarMayorSalario(salarios) + 'U$D'
    document.querySelector("#menor-salario-anual").textContent = 'El menor salario es ' + encontrarMenorSalario(salarios) + 'U$D'
    document.querySelector("#salario-anual-promedio").textContent = 'El salario anual promedio es ' + calcularSalarioAnualPromedio(salarios) + 'U$D'
    document.querySelector("#salario-mensual-promedio").textContent = 'El salario mensual promedio es ' + calcularSalarioMensualPromedio(salarios) + 'U$D'
}

function borrarResultados() {
    document.querySelector("#mayor-salario-anual").textContent = ''
    document.querySelector("#menor-salario-anual").textContent = ''
    document.querySelector("#salario-anual-promedio").textContent = ''
    document.querySelector("#salario-mensual-promedio").textContent = ''
}

function mostrarElemento(id) {
    document.querySelector(id).className = ''
}

function ocultarElemento(id) {
    document.querySelector(id).className = 'oculto'
}

function validarSalarios(salario) {

    if (!/^[0-9]\d*$/.test(salario)) {

        return 'El campo solo acepta 1 o mas numeros del 0 al 9'

    } else if (salario + 1 <= 1) {

        return 'El numero no puede ser 0, ni un valor negativo, ni vacio'

    } else {

        return ''

    }
}