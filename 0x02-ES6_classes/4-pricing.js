import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }


  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a Number');
    }
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('currency must be an instance of Currency');
    }
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }

    return amount * conversionRate;
  }
}
