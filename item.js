"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(titulo, autor, año) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.estaPrestado = false;
    }
    return Item;
}());
exports.Item = Item;
