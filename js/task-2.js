'use strict';

class Storage {
  #item;

  constructor(item) {
    this.#item = item;
  }

  getItems() {
    return this.#item;
  }

  addItem(newItem) {
    this.#item.push(newItem);
  }

  removeItem(delItem) {
    this.#item = this.#item.filter(el => el !== delItem);
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
