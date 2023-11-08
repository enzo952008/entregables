import { Vehiculo } from './Herencia';;

export class AutoDeportivo extends Vehiculo {
  private accesoriosDeportivos: string[];

  constructor(marca: string, modelo: string, ano: number, estaEncendido: boolean, accesoriosDeportivos: string[]) {
    super(marca, modelo, ano, estaEncendido);
    this.accesoriosDeportivos = accesoriosDeportivos;
  }

  acelerar(): void {
    if (this.estaEncendido) {
      this.velocidadActual += 10;
      console.log(`Acelerando. Velocidad actual: ${this.velocidadActual} km/h`);
    } else {
      console.log('No se puede acelerar, el vehículo está apagado.');
    }
  }

  frenar(): void {
    if (this.estaEncendido && this.velocidadActual > 0) {
      this.velocidadActual -= 5;
      console.log(`Frenando. Velocidad actual: ${this.velocidadActual} km/h`);
    } else {
      console.log('No se puede frenar, el vehículo está apagado o detenido.');
    }
  }
}
