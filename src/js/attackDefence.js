export default function attackDefence(attackBefore, life) {
  return Math.floor(Math.max(attackBefore, attackBefore * (1.8 - life / 100)));
}
