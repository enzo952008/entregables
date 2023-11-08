"use strict";
exports.__esModule = true;
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, ano, estaEncendido) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.estaEncendido = estaEncendido;
        this.velocidadActual = 0;
    }
    Vehiculo.prototype.prender = function () {
        this.estaEncendido = true;
        console.log('El vehículo ha sido encendido.');
    };
    Vehiculo.prototype.apagar = function () {
        this.estaEncendido = false;
        this.velocidadActual = 0;
        console.log('El vehículo ha sido apagado.');
    };
    Vehiculo.prototype.obtenerInfo = function () {
        console.log("Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", A\u00F1o: ").concat(this.ano, ", Encendido: ").concat(this.estaEncendido, ", Velocidad Actual: ").concat(this.velocidadActual));
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
