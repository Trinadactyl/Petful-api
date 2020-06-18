const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    const nextCat = pets.cats.show();
    const nextDog = pets.dogs.show();
    const allCats = pets.cats.all();
    const allDogs = pets.dogs.all();
    return {
      nextCat,
      nextDog,
      allCats,
      allDogs
    }
  },

  dequeue(type) {
    // Remove a pet from the queue.
    if (type === 'cat') {
      pets.cats.dequeue();  
    }
    
    if (type === 'dog') {
      pets.dogs.dequeue()  
    }    
  }
}
