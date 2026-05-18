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
    // https://www.barnesandnoble.com/s/edward+feser?Nrpp=40&Ns=P_Sale_Price%7C0&page=1

    let endpoint: string = `${environment.apiUrl}/books?name=`;

    if (searchConfig.keyToSearch) {
      endpoint += `${searchConfig.keyToSearch}`;
    }
    if (searchConfig.numberOfPages) {
      endpoint += `&Nrpp=${searchConfig.numberOfPages}`;
    }
    if (searchConfig.sortType) {
      endpoint += `&Ns=${searchConfig.sortType}`;
    }
    if (searchConfig.page) {
      endpoint += `&page=${searchConfig.page}`;
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
