class Vehicle {
  color: number;
  protected sound(): void {
    console.log('Zoom Zoom');
  }

  public name(word: string): void {
    console.log(`The name is ${word}`);
  }
}

class Car extends Vehicle {
  public tires(num: number): void {
    console.log(`It has ${num} tires`);
  }

  public description(): void {
    console.log(`The car makes the ${this.sound()} sound`);
  }
}

const pagani = new Car();

pagani.tires(4);
pagani.name('pagani');
