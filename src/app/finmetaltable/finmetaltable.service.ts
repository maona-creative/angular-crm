import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Finmetal } from '../finmetal';

@Injectable({
  providedIn: 'root'
})
export class FinmetaltableService {

  private baseUrl = 'http://localhost:3000/finmetals';

  constructor(private http: HttpClient) { }

  getFinmetal(): Observable<Finmetal[]>{
    return this.http.get<Finmetal[]>(this.baseUrl);
}
}
