function probarValidarSalarios() {
    console.assert(
        validarSalarios([]) === 'Debe ingresar el salario de al menos 2 familiares',
        'Validar salarios no validó que el usuario haya ingresado al menos 1 salario'
    )

    console.assert(
        validarSalarios([100,200,300]) ===  '',
        'Validar salarios no funcionó con un parametro correcto'
    )
}

probarValidarSalarios()
