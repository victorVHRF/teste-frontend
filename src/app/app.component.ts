import { Component } from '@angular/core';
import { CurrentExchangeService } from './current-exchange.service';
interface Coin {
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedValue: string;
  coins: Coin[] = [
    { value: 'USD' },
    { value: 'EUR' },
    { value: 'GBP' },
    { value: 'JPY' },
    { value: 'CAD' },
  ];
  showDetails = false;

  exchangeRate: number = 0;
  lastUpdatedAt: string = '';
  fromSymbol: string = '';
  toSymbol: string = '';

  constructor(private currentExchangeService: CurrentExchangeService) {
    this.selectedValue = ''
  }


  showValue(coin: string) {
    console.log(coin);
    this.currentExchangeService.getPriceCurrency(coin, 'BRL').subscribe((data) => {

      this.exchangeRate = data.exchangeRate
      this.lastUpdatedAt = data.lastUpdatedAt
      this.fromSymbol = data.fromSymbol
      this.toSymbol = data.toSymbol
      this.showDetails = true;
    })
    this.exchangeRate = 0
    this.lastUpdatedAt = ''
    this.fromSymbol = ''
    this.toSymbol = ''
    this.showDetails = false;

  }
}
