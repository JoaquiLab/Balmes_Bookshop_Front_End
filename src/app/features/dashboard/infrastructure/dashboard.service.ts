import { inject, Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { DashboardResponse } from '../interfaces/dashboard-data-response.interface';
import { HttpClient } from '@angular/common/http';
import { Book } from '@shared';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  http: HttpClient = inject(HttpClient);

  getBooks(keyToSearch: string): Observable<Book[]> {
    let endpoint: string;
    if (keyToSearch) {
      endpoint = `${environment.apiUrl}/books?name=${keyToSearch}`;
    }
    else{
      endpoint = `${environment.apiUrl}/books?name=`;
    }
    return this.http.get<Book[]>(endpoint);
  }


}
