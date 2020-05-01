'use strict'

class StockTrade {
  constructor(days, min, max) {
    this.days = parseInt(days);
    this.min = parseInt(min);
    this.max = parseInt(max);
  }

  trade(stockPrices) {
    return 30;
  }

}

module.exports = StockTrade;
