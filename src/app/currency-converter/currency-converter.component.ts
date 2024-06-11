import { Component } from '@angular/core';
import { ExchangeRateService } from '../exchange-rate.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss'
})
export class CurrencyConverterComponent {
   rates:any={};
   fromCurrency:string ='USD';
   toCurrency:string='IND';
   amount:number=1;
   convertedAmount:number|null = null;

   constructor(private exchangeRateService:ExchangeRateService){}

   ngOnInit():void{
this.exchangeRateService.getExchangeRates().subscribe(data =>{
  this.rates = data.rates;
  console.log(data)
})
   }

   convertCurrency():void{
    if(this.rates[this.fromCurrency] && this.rates[this.toCurrency]){
      const fromRate = this.rates[this.fromCurrency];
      const toRate = this.rates[this.toCurrency];
      this.convertedAmount = (this.amount/fromRate)*toRate;
    }
   }
}
