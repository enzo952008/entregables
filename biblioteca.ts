import { Usuario } from './usuario';
import { Item } from './item';
import { Prestamo } from './prestamo';

export class Biblioteca {
  private usuarios: Usuario[] = [];
  private Libros: Item[] = [];
  private prestamos: Prestamo[] = [];

  constructor(public estaAbierto: boolean = true) {}

  agregarUsuario(nombre: string, direccion: string, telefono: string) {
    const usuario = new Usuario(nombre, direccion, telefono);
    this.usuarios.push(usuario);
  }

  agregarLibro(titulo: string, autor: string, año: number) {
    const Libro = new Item(titulo, autor, año);
    this.Libros.push(Libro);
  }

  prestarLibro(usuario: Usuario, Libro: Item) {
    if (!this.estaAbierto) {
      throw new Error('La biblioteca está cerrada.');
    }

    if (!usuario.puedeTomarPrestado() || Libro.estaPrestado) {
      throw new Error('No se puede prestar el ítem.');
    }

    Libro.estaPrestado = true;
    const prestamo = new Prestamo(usuario, Libro);
    this.prestamos.push(prestamo);
  }

  devolverLibro(Libro: Item) {
    Libro.estaPrestado = false;
    const prestamo = this.encontrarPrestamoPorLibro(Libro);
    if (prestamo) {
      prestamo.estaDevuelto = true;
    }
  }

  mostrarPrestamosActivos() {
    return this.prestamos.filter((prestamo) => !prestamo.estaDevuelto);
  }

  private encontrarPrestamoPorLibro(Libro: Item) {
    return this.prestamos.find((prestamo) => prestamo.item === Libro);
  }
}
