let defaultDuration = 1.15

let letters = {
  A: defaultDuration,
  B: defaultDuration,
  C: defaultDuration,
  D: defaultDuration,
  E: defaultDuration,
  F: defaultDuration,
  G: defaultDuration * 2,
  H: defaultDuration,
  I: defaultDuration,
  J: defaultDuration + .3,
  K: defaultDuration,
  L: defaultDuration,
  M: defaultDuration,
  N: defaultDuration * 2,
  O: defaultDuration,
  P: defaultDuration,
  Q: defaultDuration,
  R: defaultDuration,
  S: defaultDuration,
  T: defaultDuration,
  U: defaultDuration * 2 + .3,
  V: defaultDuration + 1,
  W: defaultDuration * 2,
  X: defaultDuration + .3,
  Y: defaultDuration,
  Z: defaultDuration * 2,
}

module.exports = {
  index: -1,
  keys: Object.keys(letters),
  length: Object.keys(letters).length,
  durations: letters
}
