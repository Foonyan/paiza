'use strict'

class StockTrade {
  constructor(days, min, max) {
    this.days = parseInt(days);
    this.min = parseInt(min);
    this.max = parseInt(max);
  }

  trade(stockPrices) {
    let stockCount = 0;
    let result = 0;
    stockPrices = stockPrices.map( str => parseInt(str, 10) );
    const finalPrice = stockPrices.pop();
    for (const price of stockPrices) {
      if (price <= this.min) {
        result -= price;
        stockCount++;
      } else if (this.max <= price) {
        result += price * stockCount;
        stockCount = 0;
      }
    }
    result += finalPrice * stockCount;
    return result;
  }

}

module.exports = StockTrade;
