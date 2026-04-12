import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { booksSelector, metadataSelector } from './dashboard.selectors';
import { dashBoardActions, categoryNodeActions } from './dashboard.actions';

@Injectable({
  providedIn: 'root',
})
export class DashboardFacadeService {
  private readonly store = inject(Store);
  readonly books$ = this.store.select(booksSelector);
  readonly metadata$ = this.store.select(metadataSelector)

  getBooks(key: string): void {
     this.store.dispatch(dashBoardActions.loadDashboard({key: key}));
  }
  getCategoryNode(): void{
    this.store.dispatch(categoryNodeActions.loadCategoryNode())
  }
}
