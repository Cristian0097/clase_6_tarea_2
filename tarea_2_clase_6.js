let integrantes = document.querySelector("#integrantes")

document.querySelector("#agregar-familiar").onclick = function () {
    agregarInputs()
    mostrarBotonQuitarCampo()
    if (document.querySelectorAll("#integrante").length > 1) {
        mostrarBotonCalcular()
    }

    return false
}

document.querySelector("#quitar-campos").onclick = function () {
    quitarInputs()
    ocultarBotonQuitarCampo()
}

document.querySelector("#calcular").onclick = function () {
    mostrarResultados()

    ocultarBotonAgregarCampo()
    ocultarBotonQuitarCampo()
    ocultarBotonCalcular()
    mostrarBotonResetear()


    return false
}

document.querySelector("#resetear").onclick = function () {
    quitarInputs()
    borrarResultados()
    ocultarBotonResetear()

    mostrarBotonAgregarCampo()
    
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

function obtenerSalarios() {
    let $salarios = document.querySelectorAll("#integrante input")
    let salarios = []

    for (let i = 0; i < $salarios.length; i++) {
        if ($salarios[i].value != 0)
            salarios.push(Number($salarios[i].value))
    }

    return salarios
}

function mostrarResultados() {
    const salariosIntegrantes = obtenerSalarios()
    document.querySelector("#mayor-salario-anual").textContent = 'El mayor salario es ' + encontrarMayorSalario(salariosIntegrantes) + 'U$D'
    document.querySelector("#menor-salario-anual").textContent = 'El menor salario es ' + encontrarMenorSalario(salariosIntegrantes) + 'U$D'
    document.querySelector("#salario-anual-promedio").textContent = 'El salario anual promedio es ' + calcularSalarioAnualPromedio(salariosIntegrantes) + 'U$D'
    document.querySelector("#salario-mensual-promedio").textContent = 'El salario mensual promedio es ' + calcularSalarioMensualPromedio(salariosIntegrantes) + 'U$D'
}

function borrarResultados() {
    document.querySelector("#mayor-salario-anual").textContent = ''
    document.querySelector("#menor-salario-anual").textContent = ''
    document.querySelector("#salario-anual-promedio").textContent = ''
    document.querySelector("#salario-mensual-promedio").textContent = ''
}   


function mostrarBotonQuitarCampo() {
    document.querySelector("#quitar-campos").className = ''
}

function ocultarBotonQuitarCampo() {
    document.querySelector("#quitar-campos").className = 'oculto'
}

function mostrarBotonCalcular() {
    document.querySelector("#calcular").className = ''
}

function ocultarBotonCalcular() {
    document.querySelector("#calcular").className = 'oculto'
}

function mostrarBotonAgregarCampo() {
    document.querySelector("#agregar-familiar").className = ''
}

function ocultarBotonAgregarCampo() {
    document.querySelector("#agregar-familiar").className = 'oculto'
}

function mostrarBotonResetear() {
    document.querySelector("#resetear").className = ''
}

function ocultarBotonResetear() {
    document.querySelector("#resetear").className = 'oculto'
}
