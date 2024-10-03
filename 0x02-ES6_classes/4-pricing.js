import Currency from './3-currency';

export default class Pricing {
  constructor(amount, Currency) {
    this._amount = amount;
    this._Currency = Currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get Currency() {
    return this._Currency;
  }

  set Currency(Currency) {
    this._Currency = Currency;
  }

  displayFullPrice() {
    return `${this._amount} ${Currency.displayFullPrice}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
