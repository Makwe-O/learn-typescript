import faker from 'faker';
class Company {
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
}

export default Company;
