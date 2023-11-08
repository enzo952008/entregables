class Deportista {
    protected nombre: string;
    private edad: number;
    genero: string;

    constructor(nombre: string, edad: number, genero: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    protected entrenar(): void {
        console.log(`${this.nombre} está entrenando.`);
    }
}

class Futbolista extends Deportista {
    private posicion: string;

    constructor(nombre: string, edad: number, genero: string, posicion: string) {
        super(nombre, edad, genero);
        this.posicion = posicion;
    }

    jugarPartido(): void {
        console.log(`${this.nombre} está jugando un partido de fútbol como ${this.posicion}.`);
    }
}

class Nadador extends Deportista {
    private estilo: string;

    constructor(nombre: string, edad: number, genero: string, estilo: string) {
        super(nombre, edad, genero);
        this.estilo = estilo;
    }

 nadar(): void {
        console.log(`${this.nombre} está nadando con el estilo ${this.estilo}.`);
    }
}

class Entrenador {
    private nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

 darInstrucciones(deportista: Deportista): void {
        console.log(`${this.nombre} está dando instrucciones a ${deportista['nombre']}.`);
    }
}

class Atleta extends Deportista {
    private especialidad: string;
    private entrenador: Entrenador;

    constructor(nombre: string, edad: number, genero: string, especialidad: string, entrenador: Entrenador) {
        super(nombre, edad, genero);
        this.especialidad = especialidad;
        this.entrenador = entrenador;
    }

    public competir(): void {
        console.log(`${this.nombre} está compitiendo en ${this.especialidad}.`);
    }

    public recibirInstrucciones(): void {
        this.entrenador.darInstrucciones(this);
    }

    public entrenarEspecialidad(): void {
        this.entrenar(); 
        console.log(`${this.nombre} está siguiendo un plan de entrenamiento especial para ${this.especialidad}.`);
    }
}

const nadador = new Nadador("Michael Phelps", 36, "Masculino", "Estilo libre");
const entrenadorJohn = new Entrenador("Lionel Scaloni");
const atleta = new Atleta("Lionel Messi", 36, "Masculino", "competir en la copa del mundo ", entrenadorJohn);
atleta.entrenarEspecialidad();
atleta.competir();
atleta.recibirInstrucciones();
nadador.nadar();


