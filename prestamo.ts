import { Usuario } from './usuario';
import { Item } from './item';

export class Prestamo {
  estaDevuelto: boolean = false;

  constructor(public usuario: Usuario, public item: Item) {}
}
