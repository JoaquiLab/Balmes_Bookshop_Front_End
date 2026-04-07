import { inject, Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { DashboardResponse } from '../interfaces/dashboard-data-response.interface';
import { HttpClient } from '@angular/common/http';
import { Book } from '@shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  http: HttpClient = inject(HttpClient);
  getData(): Observable<Book[]> {
    const endpoint = 'http://localhost:8000/books';
    return this.http.get<Book[]>(endpoint);
  }
}
