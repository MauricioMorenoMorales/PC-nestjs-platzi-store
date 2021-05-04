export class Persona {
  public nombre: string;
  private edad: number;
  constructor(nombre: string = 'Anonimo', edad: number = 0) {
    this.nombre = nombre;
    this.edad = edad;
  }

  getSummary() {
    return `My name is ${this.nombre}, ${this.edad}`;
  }
}

const Mauricio = new Persona('Mauricio', 23);
Mauricio.getSummary();
