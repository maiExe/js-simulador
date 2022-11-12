const arrayModelos = [];

const model1 = new Modelo(1, 'Antara', 500000);
const model2 = new Modelo(2, 'Bamboo', 700000);
const model3 = new Modelo(3, 'Malibu', 1000000);

arrayModelos.push(model1, model2, model3);

// Ordenar modelos de mayor a menor precio

const sortDesc = () => {
    arrayModelos.sort((a, b) => b.costo - a.costo);
    showOrderedList();
};

// Ordenar modelos de menor a mayor precio

const sortAsc = () => {
    arrayModelos.sort((a, b) => a.costo - b.costo);
    showOrderedList();
};

// Funcion mostrar lista ordenada

const showOrderedList = () => {
    let array = [];
    arrayModelos.forEach(departamento => array.push(departamento.model + ' $' + departamento.costo));
    alert('Lista de costos' + '\n' + array.join('\n'));
};

// Inicializar variables
let modelo = '';
let costo = 0;
let costoInicial = 0;
let enganche = 0;
let meses = 0;
let interesMensual = .05;
let pagoMensual = 0;
let pagoMensualTotal = 0;
let costoFinal = 0; //con intereses
let otraSimulacion = false;

function simulacionCreditoHipotecario() {

    do {

        modelo = prompt('Seleccionar modelo: Antara, Bamboo, Malibu. ESC para salir del ciclo.');

        switch (modelo) {
            case 'Antara':
                costoInicial = 500000;
                break;
            case 'Bamboo':
                costoInicial = 700000;
                break;
            case 'Malibu':
                costoInicial = 1000000;
                break;
            default:
                alert('Datos incorrectos');
                break;
        }

    } while (otraSimulacion) //No funciona

    modelo = getModelo(modelo);

    enganche = parseInt(prompt('¿Cuánto deseas abonar de enganche?'));
    enganche = getEnganche(enganche);

    meses = parseInt(prompt('¿En cuántos meses deseas pagar el departamento?.'));
    costoFinal = getMensualidades(costo, meses);

    alert('Tu pago mensual total sera de ' + pagoMensualTotal + ' por ' + meses + ' meses');

}

function getModelo(modelo) {
    while ((typeof modelo !== 'string') || (modelo.lenght === 0)) {
        if (modelo.lenght == 0) {
            alert('Modelo no existe.')
        } else {
            alert('Debes ingresar un string')
        }
        modelo = prompt('Seleccionar modelo: Antara, Bamboo, Malibu. ESC para salir del ciclo.');
    }
    return modelo;
}

function getEnganche(enganche) {
    while (Number.isNaN(enganche) || (enganche < 50000 || enganche > 100000)) {
        if (Number.isNaN(enganche)) {
            alert('Debes agregar un numero.')
        } else {
            alert('El enganche debe ser mayor a $50000 y menor a $100000');
        }
        enganche = parseInt(prompt('¿Cuánto deseas abonar de enganche?'));
    }
    return enganche;
}

function getMensualidades(costo, meses) {
    costo = costoInicial - enganche;
    pagoMensual += costo / meses;
    pagoMensualTotal += pagoMensual + (pagoMensual * interesMensual);
}

function startSimulation() {
    const orderBy = confirm('Ordenar por precio del más barato al más caro.');
    if (orderBy) {
        sortAsc();
    } else {
        sortDesc();
    }

    simulacionCreditoHipotecario();

}

//START MAIN

startSimulation();





