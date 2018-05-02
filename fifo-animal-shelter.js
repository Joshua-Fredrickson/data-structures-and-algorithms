'use strict';

const AnimalShelter = {
  dog : [],
  cat : [],
}

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  enqueue(animal) {
    if(animal.species === 'cat') {
      AnimalShelter.cat.push(animal);
    } else if (animal.species === 'dog') {
    AnimalShelter.dog.push(animal);
    }
    return null;
  }

  dequeue(pref) {
    if(pref.species === 'cat') {
      AnimalShelter.cat.shift(0);
    } else if (pref.species === 'dog') {
      AnimalShelter.dog.shift(0);
    }
    return null;
  }

}