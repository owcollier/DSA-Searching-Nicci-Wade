'use strict';

const sharesToConsider = [128, 97, 121, 123, 98, 97, 105];

function findMaxProfit(shares) {

  if (!shares.length) {
    return 0;
  }

  let buyShare = shares[0];

  let sellShare = shares[0];

  let profit = 0;

  for (let i = 1; i < shares.length; i++) {
    sellShare = shares[i];
    if (sellShare < buyShare) {
      buyShare = sellShare;
    }
    if (sellShare - buyShare > profit) {
      profit = sellShare - buyShare;
    }
  }
  return profit;

}

console.log(findMaxProfit(sharesToConsider));