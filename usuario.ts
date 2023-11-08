export class Usuario {
    constructor(public nombre: string, public direccion: string, public telefono: string) {}
  
    puedeTomarPrestado() {
      // Agregar lógica aquí si se necesita restringir a algunos usuarios.
      return true;
    }
  }
  