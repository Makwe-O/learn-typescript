//
const bigHouse = {
  color: 'blue',
  sittingRoom: 1,
  bedRoom: 3,
  bathRoom: 4
};

const smallHouse = {
    color: 'brown',
    sittingRoom: 1,
    bedRoom: 1,
    bathRoom: 1
  };

interface House {
  color: string;
  sittingRoom: number;
}
function printHouse({ color, sittingRoom }: House): void {
  console.log(`House color: ${color} \nSitting Room: ${sittingRoom}`);
}

printHouse(bigHouse);
