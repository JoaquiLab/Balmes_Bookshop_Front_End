import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GridProductResponse, SearchConfig } from '../interfaces/product-grid-product-interfaces';
import { environment } from '@env';
import { CategoryMenuResponse } from '../interfaces/category-node.interface';

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
  getBooks(searchConfig: SearchConfig): Observable<GridProductResponse> {
    let endpoint: string;
    if (searchConfig.key) {
      endpoint = `${environment.apiUrl}/books?name=${searchConfig.key}`;
    } else {
      endpoint = `${environment.apiUrl}/books?name=`;
    }
    return this.http.get<GridProductResponse>(endpoint);
  }
  /**
   * API call to GET the books categories
   * @returns
   */
  getCategoryNode(): Observable<CategoryMenuResponse> {
    const endpoint = `${environment.apiUrl}/books_categories}`;
    return this.http.get<CategoryMenuResponse>(endpoint);
  }
}
