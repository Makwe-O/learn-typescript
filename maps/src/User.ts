import faker from 'faker';
class User {
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

  description(): string {
    return `User name is ${name}`;
  }
}

export default User;
