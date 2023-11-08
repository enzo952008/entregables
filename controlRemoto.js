var Televisor = /** @class */ (function () {
    function Televisor(on, vol, chn) {
        if (on === void 0) { on = false; }
        if (vol === void 0) { vol = 0; }
        if (chn === void 0) { chn = 1; }
        this.isOn = on;
        this.volume = vol;
        this.channel = chn;
    }
    Televisor.prototype.switchOnOff = function () {
        this.isOn = !this.isOn;
        console.log(this.isOn ? "Encendido" : "Apagado");
    };
    Televisor.prototype.volUp = function () {
        if (this.isOn && this.volume < 100) {
            this.volume++;
            console.log("Volumen aumentado:", this.volume);
        }
    };
    Televisor.prototype.volDown = function () {
        if (this.isOn && this.volume > 0) {
            this.volume--;
            console.log("Volumen disminuido:", this.volume);
        }
    };
    Televisor.prototype.channelUp = function () {
        if (this.isOn && this.channel < 99) {
            this.channel++;
            console.log("Cambiado al canal:", this.channel);
        }
    };
    Televisor.prototype.channelDown = function () {
        if (this.isOn && this.channel > 1) {
            this.channel--;
            console.log("Cambiado al canal:", this.channel);
        }
    };
    Televisor.prototype.info = function () {
        console.log("Canal: ".concat(this.channel, ", Volumen: ").concat(this.volume, ", Hora actual: ").concat(new Date()));
    };
    return Televisor;
}());
// Uso de la clase Televisor
var tv01 = new Televisor();
// Encender el televisor
tv01.switchOnOff();
// Aumentar el volumen (debería mostrar "Volumen aumentado: X")
tv01.volUp();
// Intentar aumentar el volumen cuando está en el máximo (no debería aumentar más)
tv01.volUp();
// Mostrar información del televisor
tv01.info();
// Apagar el televisor
tv01.switchOnOff();
