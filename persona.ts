class Persona {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    setName(name: string) {
        this.name = name;
    }

    setAge(age: number) {
        this.age = age;
    }

    getInfo() {
        return `Nombre: ${this.name}, Edad: ${this.age}`;
    }
}
 