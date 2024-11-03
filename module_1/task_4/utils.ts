export function* generateId(): Generator<number> {
    let id = 1
    while (true) {
      yield id
      id++
    }
  }