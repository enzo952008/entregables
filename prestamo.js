"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prestamo = void 0;
var Prestamo = /** @class */ (function () {
    function Prestamo(usuario, item) {
        this.usuario = usuario;
        this.item = item;
        this.estaDevuelto = false;
    }
    return Prestamo;
}());
exports.Prestamo = Prestamo;
