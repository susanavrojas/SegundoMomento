let zonaProductosMalos = [];
let zonaProductosVarios = [];
let zonaProductosHogar = [];
let zonaProductosTecnologicos = [];


function zona1() {
    if (tipoUsuarioIngresado === 'administrador') {
        function crearProducto() {
            var productosMalos = {}
            let nombreProducto = prompt('Ingrese el nombre del producto');
            let referenciaProducto = prompt('Ingrese la referencia del producto');
            let valorProducto = prompt('Ingrese el valor del producto');
            let cantidadProducto = prompt('Ingrese la cantidad');
            let descripcionProducto = prompt('Ingrese descripción del producto');
            productosMalos = {
                nombre: nombreProducto,
                referencia: referenciaProducto,
                valor: valorProducto,
                cantidad: cantidadProducto,
                descripcion: descripcionProducto,
            }
            return productosMalos;
        }
        zonaProductosMalos.push(crearProducto())
    } else {
        console.log('Los vendedores no tienen acceso a la "Zona 1: Productos Malos".');
    }
}


function buscarzonaProductosMalos() {
    let referencia = prompt('Ingrese la referencia del producto');
    let productoEncontrado = zonaProductosMalos.find((productosMalos) => referencia == productosMalos.referencia);
    return productoEncontrado

}

function listadozonaProductosMalos() {
    zonaProductosMalos.forEach((productosMalos) => {
        console.log(productosMalos)
    })
}


function zona2() {
    function crearProducto() {
        var productosVarios = {}
        let nombreProducto = prompt('Ingrese el nombre del producto');
        let referenciaProducto = prompt('Ingrese la referencia del producto');
        let valorProducto = prompt('Ingrese el valor del producto');
        let cantidadProducto = prompt('Ingrese la cantidad');
        let descripcionProducto = prompt('Ingrese descripción del producto');
        productosVarios = {
            nombre: nombreProducto,
            referencia: referenciaProducto,
            valor: valorProducto,
            cantidad: cantidadProducto,
            descripcion: descripcionProducto,
        }
        return productosVarios;
    }
    zonaProductosVarios.push(crearProducto())
}

function buscarzonaProductosVarios() {
    let referencia = prompt('Ingrese la referencia del producto');
    let productoEncontrado = zonaProductosVarios.find((productosVarios) => referencia == productosVarios.referencia);
    return productoEncontrado
}

function listadozonaProductosVarios() {
    zonaProductosVarios.forEach((productosVarios) => {
        console.log(productosVarios)
    })
}


function zona3() {
    function crearProducto() {
        var productosHogar = {}
        let nombreProducto = prompt('Ingrese el nombre del producto');
        let referenciaProducto = prompt('Ingrese la referencia del producto');
        let valorProducto = prompt('Ingrese el valor del producto');
        let cantidadProducto = prompt('Ingrese la cantidad');
        let descripcionProducto = prompt('Ingrese descripción del producto');
        productosHogar = {
            nombre: nombreProducto,
            referencia: referenciaProducto,
            valor: valorProducto,
            cantidad: cantidadProducto,
            descripcion: descripcionProducto,
        }
        return productosHogar;
    }
    zonaProductosHogar.push(crearProducto())
}

function buscarzonaProductosHogar() {
    let referencia = prompt('Ingrese la referencia del producto');
    let productoEncontrado = zonaProductosHogar.find((productosHogar) => referencia == productosHogar.referencia);
    return productoEncontrado
}

function listadozonaProductosHogar() {
    zonaProductosHogar.forEach((productosHogar) => {
        console.log(productosHogar)
    })
}


function zona4() {
    function crearProducto() {
        var productosTecnologicos = {}
        let nombreProducto = prompt('Ingrese el nombre del producto');
        let referenciaProducto = prompt('Ingrese la referencia del producto');
        let valorProducto = prompt('Ingrese el valor del producto');
        let cantidadProducto = prompt('Ingrese la cantidad');
        let descripcionProducto = prompt('Ingrese descripción del producto');
        productosTecnologicos = {
            nombre: nombreProducto,
            referencia: referenciaProducto,
            valor: valorProducto,
            cantidad: cantidadProducto,
            descripcion: descripcionProducto,
        }
        return productosTecnologicos;
    }
    zonaProductosTecnologicos.push(crearProducto())
}

function buscarzonaProductosTecnologicos() {
    let referencia = prompt('Ingrese la referencia del producto');
    let productoEncontrado = zonaProductosTecnologicos.find((productosTecnologicos) => referencia == productosTecnologicos.referencia);
    return productoEncontrado
}

function listadozonaProductosTecnologicos() {
    zonaProductosTecnologicos.forEach((productosTecnologicos) => {
        console.log(productosTecnologicos)
    })
}



const tipoUsuarioIngresado = prompt('Ingrese el tipo de usuario (administrador o vendedor):');
const usuarioIngresado = prompt('Ingrese su nombre de usuario:');
const contraseñaIngresada = prompt('Ingrese su contraseña:');

const usuarios = [
    { tipo: 'administrador', usuario: 'admin', contraseña: 'admin123' },
    { tipo: 'vendedor', usuario: 'vendedor', contraseña: 'vendedor123' }
];

function verificarCredenciales(tipoUsuario, usuarioIngresado, contraseñaIngresada) {
    const usuario = usuarios.find((u) => u.tipo === tipoUsuario);

    if (usuario && usuario.usuario === usuarioIngresado && usuario.contraseña === contraseñaIngresada) {
        return true;
    }

    return false;
}

if (verificarCredenciales(tipoUsuarioIngresado, usuarioIngresado, contraseñaIngresada)) {
    console.log('Bienvenido, acceso concedido.');
} else {
    console.log('Usuario y/o contraseña incorrectos.');
}

let repetir = true;
let opcion;
while (repetir) {
    opcion = parseInt(prompt('SELECCIONE OPCION A EJECUTAR \n1) Registrar Productos \n2) Consultar Productos \n3) Salir'));
    if (opcion == 1) {
        opcion = parseInt(prompt('SELECCIONE PRODUCTO A REGISTRAR \n1) Productos Malos \n2) Productos Varios \n3) Productos de Hogar \n4) Productos Tecnologicos \n5) Salir'));
        switch (opcion) {
            case 1:
                zona1()
                break;
            case 2:
                zona2()
                break;
            case 3:
                zona3()
                break;
            case 4:
                zona4()
                break;
            case 5:
                break;
        }
    }
    if (opcion == 2) {
        opcion = parseInt(prompt('SELECCIONE LA ZONA A CONSULTAR \n1) Zona 1: Productos Malos \n2) Zona 2: Productos Varios \n3) Zona 3: Productos de Hogar \n4) Zona 4: Productos Tecnologicos \n5) Salir'));
        switch (opcion) {
            case 1:
                console.log(buscarzonaProductosMalos())
                break;
            case 2:
                console.log(buscarzonaProductosVarios())
                break;
            case 3:
                console.log(buscarzonaProductosHogar())
                break;
            case 4:
                console.log(buscarzonaProductosTecnologicos())
                break;
            case 5:
                break;
        }

    }

    if (opcion == 3) {
        repetir = false;
    }
}
