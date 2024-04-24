import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailsItemDto } from '../models/rental-details-dto';

@Injectable({
  providedIn: 'root'
})
export class RentalsApiService {

  constructor(
    private http: HttpClient
  ) { }

  getList(): Observable<RentalDetailsItemDto[]>  {
    return this.http.get<RentalDetailsItemDto[]>('http://localhost:3000/rentals');
  }

}
