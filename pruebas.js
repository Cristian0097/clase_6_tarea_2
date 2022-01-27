function probarValidarSalarios() {
    console.assert(
        validarSalarios('+-., ') === 'El campo solo acepta 1 o mas numeros del 0 al 9',
        'Validar numeros no valido que el campo solo tenga numeros del 1 al 9'
    )

    console.assert(
        validarSalarios(10) === '',
        'Validar numeros no funciono con un numero valido'
    )

    console.assert(
        validarSalarios('0') === 'El numero no puede ser 0, ni un valor negativo, ni vacio',
        'Validar numeros no validó que el numero de integrantes no sea 0'
    )
}

probarValidarSalarios()
