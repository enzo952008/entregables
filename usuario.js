"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    Usuario.prototype.puedeTomarPrestado = function () {
        // Agregar lógica aquí si se necesita restringir a algunos usuarios.
        return true;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
