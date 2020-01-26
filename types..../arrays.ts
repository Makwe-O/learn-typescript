// Arrays with flexible types
const games: Array<string | number | boolean | object> = [
  'GOW',
  'Spiderman',
  'Spiro',
  'StarWars',
  3,
  false,
  { name: '' }
];
const empty: string | number | boolean | object[] = [];
const carsMakers = ['Innoson', 'Mercedes', 'Pagani'];
carsMakers.map((car: string): number => {
  return car.length;
});
