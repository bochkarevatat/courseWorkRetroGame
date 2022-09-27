// Персонажи генерируются рандомно в столбцах 1 и 2 для игрока и в столбцах 7 и 8 для компьютера:
import randomPosition from './randomPosition';

export default function getPositions(length) {
  const position = {
    human: [],
    computer: [],
  };
  let random;
  for (let i = 0; i < length; i += 1) {
    do {
      random = randomPosition();
    } while (position.human.includes(random));
    position.human.push(random);

    do {
      random = randomPosition(6);
    } while (position.computer.includes(random));
    position.computer.push(random);
  }
  return position;
}
