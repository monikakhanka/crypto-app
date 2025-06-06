export interface AssetsTableItemProps {
  tokenInfo: TokenInfo[];
}

export interface TokenInfo {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string; // ISO date string
  atl: number;
  atl_change_percentage: number;
  atl_date: string; // ISO date string
  roi: null | {
    times: number;
    currency: string;
    percentage: number;
  };
}

export interface Token {
  toUpperCase(): import("react").ReactNode;
  id: string;
  symbol: string;
  name: string;
}

export interface TradeBoxProps {
  type: "Sell" | "Buy";
  inputValue: number;
  onInputChange: (val: number) => void;
  selectedToken: string;
  onTokenChange: (val: string) => void;
  usdValue: number;
  tokenList: Token[];
  disabled: boolean;
}
