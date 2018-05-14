export class ObjectUtil {

  constructor() {
  }

  static copy(target: Object, store: Object): void {
    for (const key in store) {
      if (store[key]) {
        if (Array.isArray(store[key]) && store[key].length === 0) {
          continue;
        }
        target[key] = store[key];
      }
    }
  }
}
