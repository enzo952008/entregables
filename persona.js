var Persona = /** @class */ (function () {
    function Persona(name, age) {
        this.name = name;
        this.age = age;
    }
    Persona.prototype.setName = function (name) {
        this.name = name;
    };
    Persona.prototype.setAge = function (age) {
        this.age = age;
    };
    Persona.prototype.getInfo = function () {
        return "Nombre: ".concat(this.name, ", Edad: ").concat(this.age);
    };
    return Persona;
}());
