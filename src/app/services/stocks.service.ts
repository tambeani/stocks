import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service: string = 'http://localhost:3000';

export interface StockInterface {
  symbol: string;     
  lastTradePriceOnly: number;     
  change: number;     
  changeInPercent: number;     
}     

@Injectable({
  providedIn: 'root'
})
export class StocksService {
 
  // Injects the HttpClient dependency (Angular Injection System)
  constructor(private http: HttpClient) {}
  
  // Returns a copy of stocks
  get() {     
      return stocks.slice();     
  }        

  // Add a stock symbol
  add(stock: string){
    stocks.push(stock);     
    return this.get();     
  }
  
  // Removes a stock symbol
  remove(stock: string){
    stocks.splice(stocks.indexOf(stock), 1);     
    return this.get();         
  }

  //Invokes the api to load symbols
  load(symbols: Array<string>) {
    if (symbols) {     
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot');   
    }
    return null;     
  }     

}
