import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DashboardResponse } from '../interfaces/product-grid.interface';
import { environment } from '@env';
import { CategoryNodeResponse } from '../interfaces/category-node.interface';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  http: HttpClient = inject(HttpClient);
  /**
   * API call to get the books to show in the dashboard,
   * @param keyToSearch book name or author used to get a concretly book, if is empty, will return all books
   * @returns
   */
  getBooks(keyToSearch: string): Observable<DashboardResponse> {
    let endpoint: string;
    if (keyToSearch) {
      endpoint = `${environment.apiUrl}/books?name=${keyToSearch}`;
    } else {
      endpoint = `${environment.apiUrl}/books?name=`;
    }
    return this.http.get<DashboardResponse>(endpoint);
  }
  /**
   * API call to GET the books categories
   * @returns
   */
  getCategoryNode(): Observable<CategoryNodeResponse> {
    const endpoint = `${environment.apiUrl}/books/categories}`;
    return this.http.get<CategoryNodeResponse>(endpoint);
  }

}
