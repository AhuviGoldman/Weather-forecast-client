import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public http: HttpClient) { }
  city: string = "";
  routeUrl = `${environment.baseUrl}`;
  getCity() {
    return this.city;
  }
  saveCity(c: string) {
    this.city = c;
  }
  seeWeather() {
    return this.http.get<string>(`${environment.baseUrl}${this.city}`)
  }
  seeWeather3days() {
    return this.http.get<string>(`${environment.baseUrl}3days/${this.city}`)
  }

}
