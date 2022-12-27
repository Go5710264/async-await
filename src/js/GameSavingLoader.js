import read from './read';
import json from './json';

export default class GameSavingLoader {
  static async load() {
    try {
      return await json(await read());
    } catch (e) {
      return console.log(e);
    }
  }
}
