import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: string;
  flag: boolean = false;
  flag3: boolean = false;
  temp: any;
  w: any[] = [];

  constructor(public weather: WeatherService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.weather.saveCity(this.city);
  }

  send(c) {
    this.weather.city = c;
    this.weather.saveCity(c);
    this.weather.seeWeather().subscribe(res => {
      console.log("send")
      this.temp = res;
    });
    this.flag = true;
    console.log("temp", this.temp)
  }
  
  send3days(c) {
    console.log("send", c);
    this.weather.city = c;
    this.weather.saveCity(c);
    this.weather.seeWeather3days().subscribe(res => {
      console.log("send3days")
      this.temp = res;
    });
    this.flag = true;
    this.flag3 = true;
    console.log("temp", this.temp)
  }
}
