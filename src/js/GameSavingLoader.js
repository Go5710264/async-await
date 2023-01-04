import read from './read';
import json from './json';

export default class GameSavingLoader {
  static async load() {
    const GameSaving = JSON.parse(await json(await read()));
    return GameSaving;
  }
}
