import { Injectable } from '@angular/core';
import { ExchangeModel, ExchangeHistoryModel } from './exchange.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrentExchangeService {

  API_URL_TODAY = `https://api-brl-exchange.actionlabs.com.br/api/1.0/open/currentExchangeRate?apiKey=RVZG0GHEV2KORLNA&`;

  API_URL_HISTORY = `https://api-brl-exchange.actionlabs.com.br/api/1.0/open/dailyExchangeRate?apiKey=RVZG0GHEV2KORLNA&`;

  constructor(private http: HttpClient) { }

  getPriceCurrency(from: string, toSymbol: string) {
    return this.http.get<ExchangeModel>(`${this.API_URL_TODAY}from_symbol=${from}&to_symbol=${toSymbol}`)
  }

  getHistoryPrice(from: string, toSymbol: string){
    return this.http.get<ExchangeHistoryModel>(`${this.API_URL_HISTORY}from_symbol=${from}&to_symbol=${toSymbol}`)
  }
}
