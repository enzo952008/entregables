class Televisor {
    isOn: boolean;
    volume: number;
    channel: number;
  
    constructor(on: boolean = false, vol: number = 0, chn: number = 1) {
      this.isOn = on;
      this.volume = vol;
      this.channel = chn;
    }
  
    switchOnOff(): void {
      this.isOn = !this.isOn;
      console.log(this.isOn ? "Encendido" : "Apagado");
    }
  
    volUp(): void {
      if (this.isOn && this.volume < 100) {
        this.volume++;
        console.log("Volumen aumentado:", this.volume);
      }
    }
  
    volDown(): void {
      if (this.isOn && this.volume > 0) {
        this.volume--;
        console.log("Volumen disminuido:", this.volume);
      }
    }
  
    channelUp(): void {
      if (this.isOn && this.channel < 99) {
        this.channel++;
        console.log("Cambiado al canal:", this.channel);
      }
    }
  
    channelDown(): void {
      if (this.isOn && this.channel > 1) {
        this.channel--;
        console.log("Cambiado al canal:", this.channel);
      }
    }
  
    info(): void {
      console.log(`Canal: ${this.channel}, Volumen: ${this.volume}, Hora actual: ${new Date()}`);
    }
  }
  
const tv01 = new Televisor();


tv01.switchOnOff();
tv01.volUp();
tv01.volUp();
tv01.info();
tv01.switchOnOff();