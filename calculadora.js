var Calculadora = /** @class */ (function () {
    function Calculadora(sumar, restar, dividir, multiplicar, getresult) {
        if (sumar === void 0) { sumar = 0; }
        if (restar === void 0) { restar = 0; }
        if (dividir === void 0) { dividir = 0; }
        if (multiplicar === void 0) { multiplicar = 0; }
        if (getresult === void 0) { getresult = 0; }
        this.sumar = sumar;
        this.restar = restar;
        this.dividir = dividir;
        this.multiplicar = multiplicar;
        this.getresult = getresult;
    }
    Calculadora.prototype.realizarSuma = function () {
        this.getresult = this.sumar + this.restar;
        console.log("Resultado de la suma:", this.getresult);
    };
    Calculadora.prototype.realizarResta = function () {
        this.getresult = this.restar - this.sumar;
        console.log("Resultado de la resta:", this.getresult);
    };
    Calculadora.prototype.realizarDivision = function () {
        if (this.dividir !== 0) {
            this.getresult = this.sumar / this.dividir;
            console.log("Resultado de la división:", this.getresult);
        }
        else {
            console.log("No es posible dividir por cero.");
        }
    };
    Calculadora.prototype.realizarMultiplicacion = function () {
        this.getresult = this.sumar * this.multiplicar;
        console.log("Resultado de la multiplicación:", this.getresult);
    };
    return Calculadora;
}());
