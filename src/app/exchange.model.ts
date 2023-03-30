export interface ExchangeModel {
  exchangeRate: number;
  fromSymbol: string;
  lastUpdatedAt: string;
  success: boolean;
  toSymbol: string;
}

export interface ExchangeHistoryModel {
  data: daysModel[]
  from: string;
  lastUpdatedAt: string;
  success: boolean;
  to: string;
}
export interface daysModel {
  close: number,
  date: number,
  hight: number,
  low: number,
  open: number,

  /* data: [{
  }], */
}
