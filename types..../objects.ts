const maksProfile = {
  name: 'Maks',
  age: 21,
  profession: 'Software Engineer',
  incrementAge(newAge: number): void {
    console.log(`Name updated from ${this.age} to ${newAge}`);
    this.age = newAge;
  }
};

console.log(maksProfile.age);
console.log(maksProfile.incrementAge(22));
console.log(maksProfile.age);
