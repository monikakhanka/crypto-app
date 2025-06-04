export interface Asset {
  id: string;
  name: string;
  slug: string;
  symbol: string;
  rank: number;
  category: string;
  sector: string;
  tags: string[];
  description: string;
  links: {
    name: string;
    url: string;
  }[];
  marketData: {
    priceUsd: number;
    priceBtc: number;
    priceEth: number;
    volume24Hour: number;
    ohlcv1HourUsd: {
      open: number;
      high: number;
      low: number;
      close: number;
      volume: number;
    };
    ohlcv24HourUsd: {
      open: number;
      high: number;
      low: number;
      close: number;
      volume: number;
    };
    supply: {
      circulating: number;
      total: number;
      max: number;
    };
    marketcap: {
      circulatingUsd: number;
      fullyDilutedUsd: number;
      dominance: number;
    };
  };
  networkSlugs: string[];
  protocolSlugs: string[];
  returnOnInvestment: {
    priceChange24h: number;
    priceChange7d: number;
    priceChange30d: number;
    priceChange1y: number;
    priceChange3y: number;
    priceChange5y: number;
    priceChangeMTD: number;
    priceChangeQTD: number;
    priceChangeYTD: number;
  };
  allTimeHigh: {
    allTimeHigh: number;
    allTimeHighDate: string;
    allTimeHighTimeSinceSeconds: number;
    allTimeHighPercentDown: number;
    breakevenMultiple: number;
    cycleLow: number;
    cycleLowDate: string;
    cycleLowTimeSinceSeconds: number;
    cycleLowPercentUp: number;
  };
  contractAddresses: never[];
}
