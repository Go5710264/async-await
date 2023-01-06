import read from './read';
import json from './json';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    return new GameSaving(JSON.parse(await json(await read())));
  }
}
