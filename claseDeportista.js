var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Deportista = /** @class */ (function () {
    function Deportista(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    Deportista.prototype.entrenar = function () {
        console.log("".concat(this.nombre, " est\u00E1 entrenando."));
    };
    return Deportista;
}());
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(nombre, edad, genero, posicion) {
        var _this = _super.call(this, nombre, edad, genero) || this;
        _this.posicion = posicion;
        return _this;
    }
    Futbolista.prototype.jugarPartido = function () {
        console.log("".concat(this.nombre, " est\u00E1 jugando un partido de f\u00FAtbol como ").concat(this.posicion, "."));
    };
    return Futbolista;
}(Deportista));
var Nadador = /** @class */ (function (_super) {
    __extends(Nadador, _super);
    function Nadador(nombre, edad, genero, estilo) {
        var _this = _super.call(this, nombre, edad, genero) || this;
        _this.estilo = estilo;
        return _this;
    }
    Nadador.prototype.nadar = function () {
        console.log("".concat(this.nombre, " est\u00E1 nadando con el estilo ").concat(this.estilo, "."));
    };
    return Nadador;
}(Deportista));
var Entrenador = /** @class */ (function () {
    function Entrenador(nombre) {
        this.nombre = nombre;
    }
    Entrenador.prototype.darInstrucciones = function (deportista) {
        console.log("".concat(this.nombre, " est\u00E1 dando instrucciones a ").concat(deportista['nombre'], "."));
    };
    return Entrenador;
}());
var Atleta = /** @class */ (function (_super) {
    __extends(Atleta, _super);
    function Atleta(nombre, edad, genero, especialidad, entrenador) {
        var _this = _super.call(this, nombre, edad, genero) || this;
        _this.especialidad = especialidad;
        _this.entrenador = entrenador;
        return _this;
    }
    Atleta.prototype.competir = function () {
        console.log("".concat(this.nombre, " est\u00E1 compitiendo en ").concat(this.especialidad, "."));
    };
    Atleta.prototype.recibirInstrucciones = function () {
        this.entrenador.darInstrucciones(this);
    };
    Atleta.prototype.entrenarEspecialidad = function () {
        this.entrenar();
        console.log("".concat(this.nombre, " est\u00E1 siguiendo un plan de entrenamiento especial para ").concat(this.especialidad, "."));
    };
    return Atleta;
}(Deportista));
var nadador = new Nadador("Michael Phelps", 36, "Masculino", "Estilo libre");
var entrenadorJohn = new Entrenador("Lionel Scaloni");
var atleta = new Atleta("Lionel Messi", 36, "Masculino", "competir en la copa del mundo ", entrenadorJohn);
atleta.entrenarEspecialidad();
atleta.competir();
atleta.recibirInstrucciones();
nadador.nadar();
