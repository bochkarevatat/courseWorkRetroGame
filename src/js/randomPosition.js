export default function randomPosition(column = 0) {
  return (Math.floor(Math.random() * 8) * 8) + ((Math.floor(Math.random() * 2) + column));
}
