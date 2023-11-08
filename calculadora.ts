class Calculadora {
    sumar: number;
    restar: number;
    dividir: number;
    multiplicar: number;
    getresult: number;

    constructor(sumar: number = 0, restar: number = 0, dividir: number = 0, multiplicar: number = 0, getresult: number = 0) {
        this.sumar = sumar;
        this.restar = restar;
        this.dividir = dividir;
        this.multiplicar = multiplicar;
        this.getresult = getresult;
    }

    realizarSuma(): void {
        this.getresult = this.sumar + this.restar;
        console.log("Resultado de la suma:", this.getresult);
    }

    realizarResta(): void {
        this.getresult = this.restar - this.sumar;
        console.log("Resultado de la resta:", this.getresult);
    }

    realizarDivision(): void {
        if (this.dividir !== 0) {
            this.getresult = this.sumar / this.dividir;
            console.log("Resultado de la división:", this.getresult);
        } else {
            console.log("No es posible dividir por cero.");
        }
    }

    realizarMultiplicacion(): void {
        this.getresult = this.sumar * this.multiplicar;
        console.log("Resultado de la multiplicación:", this.getresult);
    }
}
const calculadora1 = new Calculadora



