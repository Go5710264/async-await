import GameSavingLoader from '../js/GameSavingLoader';

test('getting JSON object', async () => {
  const hitmanParameters = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  expect(await GameSavingLoader.load()).toEqual(hitmanParameters);
});
