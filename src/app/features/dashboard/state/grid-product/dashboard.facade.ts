import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { booksSelector, metadataSelector } from './dashboard.selectors';
import { gridProductActions } from './dashboard.actions';
import { SearchConfig } from '../../interfaces/product-grid-product-interfaces';

@Injectable({
  providedIn: 'root',
})
export class DashboardFacadeService {
  private readonly store = inject(Store);
  readonly books$ = this.store.select(booksSelector);
  readonly metadata$ = this.store.select(metadataSelector)

  /**
   * Launches a request with the SearchConfig provided
   * @param searchConfig
   */
  getBooks(searchConfig: SearchConfig): void {
     this.store.dispatch(gridProductActions.loadGridProduct({searchConfig: searchConfig, }));
  }
}
