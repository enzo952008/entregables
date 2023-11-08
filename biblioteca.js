"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
var usuario_1 = require("./usuario");
var item_1 = require("./item");
var prestamo_1 = require("./prestamo");
var Biblioteca = /** @class */ (function () {
    function Biblioteca(estaAbierto) {
        if (estaAbierto === void 0) { estaAbierto = true; }
        this.estaAbierto = estaAbierto;
        this.usuarios = [];
        this.items = [];
        this.prestamos = [];
    }
    Biblioteca.prototype.agregarUsuario = function (nombre, direccion, telefono) {
        var usuario = new usuario_1.Usuario(nombre, direccion, telefono);
        this.usuarios.push(usuario);
    };
    Biblioteca.prototype.agregarItem = function (titulo, autor, año) {
        var item = new item_1.Item(titulo, autor, año);
        this.items.push(item);
    };
    Biblioteca.prototype.prestarItem = function (usuario, item) {
        if (!this.estaAbierto) {
            throw new Error('La biblioteca está cerrada.');
        }
        if (!usuario.puedeTomarPrestado() || item.estaPrestado) {
            throw new Error('No se puede prestar el ítem.');
        }
        item.estaPrestado = true;
        var prestamo = new prestamo_1.Prestamo(usuario, item);
        this.prestamos.push(prestamo);
    };
    Biblioteca.prototype.devolverItem = function (item) {
        item.estaPrestado = false;
        var prestamo = this.encontrarPrestamoPorItem(item);
        if (prestamo) {
            prestamo.estaDevuelto = true;
        }
    };
    Biblioteca.prototype.mostrarPrestamosActivos = function () {
        return this.prestamos.filter(function (prestamo) { return !prestamo.estaDevuelto; });
    };
    Biblioteca.prototype.encontrarPrestamoPorItem = function (item) {
        return this.prestamos.find(function (prestamo) { return prestamo.item === item; });
    };
    return Biblioteca;
}());
exports.Biblioteca = Biblioteca;
