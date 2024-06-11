import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  private apiUrl = 'https://v6.exchangerate-api.com/v6/851d4ccaf367edaba948c73e/latest/USD';
  constructor(private http:HttpClient) { }

  getExchangeRates():Observable<any>{
    return this.http.get(this.apiUrl)
  }
}
