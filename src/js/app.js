import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const GameSaving = JSON.parse(await GameSavingLoader.load());
    return GameSaving;
  } catch (e) {
    return console.log(e);
  }
})();
