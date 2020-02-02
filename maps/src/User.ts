import faker from 'faker';
import { Mappable } from './interfaces/mappable';
class User implements Mappable {
  name: string;
  location: {
    lat: number;
    long: number;
  };

  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude())
    };
  }

  markerDescription(): string {
    return `User name is ${this.name}`;
  }
}

export default User;
