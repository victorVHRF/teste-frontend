import { Component, Input } from '@angular/core';
import { CurrentExchangeService } from '../current-exchange.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent  {
  @Input() exchangeRate: number = 0;
  lastUpdatedAt: string = '';
  history: any[] = [];

  constructor(
    private currentExchangeService: CurrentExchangeService
  ) {
  }

  historyPrice() {
    this.currentExchangeService.getHistoryPrice('USD', 'BRL').subscribe((res) => {
      res.data?.map((day) => {
        this.history.push(day)
      })

    })

  }
}
