"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.AutoDeportivo = void 0;
var Herencia_1 = require("./Herencia");
;
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo(marca, modelo, ano, estaEncendido, accesoriosDeportivos) {
        var _this = _super.call(this, marca, modelo, ano, estaEncendido) || this;
        _this.accesoriosDeportivos = accesoriosDeportivos;
        return _this;
    }
    AutoDeportivo.prototype.acelerar = function () {
        if (this.estaEncendido) {
            this.velocidadActual += 10;
            console.log("Acelerando. Velocidad actual: ".concat(this.velocidadActual, " km/h"));
        }
        else {
            console.log('No se puede acelerar, el vehículo está apagado.');
        }
    };
    AutoDeportivo.prototype.frenar = function () {
        if (this.estaEncendido && this.velocidadActual > 0) {
            this.velocidadActual -= 5;
            console.log("Frenando. Velocidad actual: ".concat(this.velocidadActual, " km/h"));
        }
        else {
            console.log('No se puede frenar, el vehículo está apagado o detenido.');
        }
    };
    return AutoDeportivo;
}(Herencia_1.Vehiculo));
exports.AutoDeportivo = AutoDeportivo;
