import trustCoins from "./trust-coins.json";

export interface ITrustCoin {
  id: string;
  coinId: number;
  name: string;
  symbol: string;
  explorer: {
    url: string;
    accountPath: string;
  }
}

const coins: { [network: number]: ITrustCoin } = {};
trustCoins.forEach(coin => { coins[coin.coinId] = coin as ITrustCoin; });

export interface INetwork {
  address: string;
  network: number;
  coin: ITrustCoin;
}

function clone<T>(t: T): T {
  return JSON.parse(JSON.stringify(t));
}


export function findCoinByNetwork(network: number): ITrustCoin {
  let coin = coins[network];
  if (!coin) {
    coin = clone(coins[-1]);
    coin.explorer.accountPath += `${network}/`;
  }

  return coin;
}
