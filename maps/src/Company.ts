import faker from 'faker';
import { Mappable } from './interfaces/mappable';
class Company implements Mappable {
  constructor() {
    this.name = faker.company.companyName();
    this.motto = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude())
    };
  }
  name: string;
  motto: string;
  location: {
    lat: number;
    long: number;
  };
  markerDescription(): string {
    return `
    Our name is ${this.name}
    Our company's motto is ${this.motto}`;
  }
}

export default Company;
