export abstract class Vehiculo {
    private marca: string;
    private modelo: string;
    private ano: number;
    protected estaEncendido: boolean;
    protected velocidadActual: number;
  
    constructor(marca: string, modelo: string, ano: number, estaEncendido: boolean) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.estaEncendido = estaEncendido;
      this.velocidadActual = 0;
    }
  
    prender(): void {
      this.estaEncendido = true;
      console.log('El vehículo ha sido encendido.');
    }
  
    apagar(): void {
      this.estaEncendido = false;
      this.velocidadActual = 0;
      console.log('El vehículo ha sido apagado.');
    }
  
    abstract acelerar(): void;
    abstract frenar(): void;
  
    obtenerInfo(): void {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.ano}, Encendido: ${this.estaEncendido}, Velocidad Actual: ${this.velocidadActual}`);
    }
  }
  