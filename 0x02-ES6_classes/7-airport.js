export default class Airport {
  constructor(name, string) {
    this._name = name;
    this._string = string;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
