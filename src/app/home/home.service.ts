import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Homeservice {

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any>{
 return this.http.get('assets/json/product.json');
  }
}
