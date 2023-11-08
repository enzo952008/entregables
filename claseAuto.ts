class Auto {
    // Atributos
    protected marca: string;
    protected modelo: string;
    protected año: number;
    protected color: string;

    // Constructor
    constructor(marca: string, modelo: string, año: number, color: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
    }

    // Métodos
    acelerar(velocidad: number): void {
        if (velocidad > 0) {
            console.log(`El auto está acelerando a ${velocidad} km/h.`);
        } else {
            console.log("El auto está detenido.");
        }
    }

    frenar(): void {
        console.log("El auto está frenando.");
    }

    mostrarInformacion(): void {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Año: ${this.año}`);
        console.log(`Color: ${this.color}`);
    }
}

// Subclase AutoDeportivo
class AutoDeportivo extends Auto {
    private caballosDeFuerza: number;

    // Constructor
    constructor(marca: string, modelo: string, año: number, color: string, caballosDeFuerza: number) {
        super(marca, modelo, año, color);
        this.caballosDeFuerza = caballosDeFuerza;
    }

    // Método adicional de la subclase
    hacerDrift(): void {
        console.log("El auto deportivo está haciendo drift.");
    }

    // Sobrescribir método acelerar
    acelerar(velocidad: number): void {
        if (velocidad > 0) {
            console.log(`El auto deportivo está acelerando a ${velocidad} km/h de manera emocionante.`);
        } else {
            console.log("El auto deportivo está detenido.");
        }
    }
}

// Ejemplo de uso
const miAutoDeportivo = new AutoDeportivo("Ferrari", "F430", 2023, "Rojo", 600);

miAutoDeportivo.mostrarInformacion();
miAutoDeportivo.acelerar(100);
miAutoDeportivo.hacerDrift();
