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
var Auto = /** @class */ (function () {
    // Constructor
    function Auto(marca, modelo, año, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
    }
    // Métodos
    Auto.prototype.acelerar = function (velocidad) {
        if (velocidad > 0) {
            console.log("El auto est\u00E1 acelerando a ".concat(velocidad, " km/h."));
        }
        else {
            console.log("El auto está detenido.");
        }
    };
    Auto.prototype.frenar = function () {
        console.log("El auto está frenando.");
    };
    Auto.prototype.mostrarInformacion = function () {
        console.log("Marca: ".concat(this.marca));
        console.log("Modelo: ".concat(this.modelo));
        console.log("A\u00F1o: ".concat(this.año));
        console.log("Color: ".concat(this.color));
    };
    return Auto;
}());
// Subclase AutoDeportivo
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    // Constructor
    function AutoDeportivo(marca, modelo, año, color, caballosDeFuerza) {
        var _this = _super.call(this, marca, modelo, año, color) || this;
        _this.caballosDeFuerza = caballosDeFuerza;
        return _this;
    }
    // Método adicional de la subclase
    AutoDeportivo.prototype.hacerDrift = function () {
        console.log("El auto deportivo está haciendo drift.");
    };
    // Sobrescribir método acelerar
    AutoDeportivo.prototype.acelerar = function (velocidad) {
        if (velocidad > 0) {
            console.log("El auto deportivo est\u00E1 acelerando a ".concat(velocidad, " km/h de manera emocionante."));
        }
        else {
            console.log("El auto deportivo está detenido.");
        }
    };
    return AutoDeportivo;
}(Auto));
// Ejemplo de uso
var miAutoDeportivo = new AutoDeportivo("Ferrari", "F430", 2023, "Rojo", 600);
miAutoDeportivo.mostrarInformacion();
miAutoDeportivo.acelerar(100);
miAutoDeportivo.hacerDrift();
