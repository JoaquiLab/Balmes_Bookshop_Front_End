import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { booksSelector } from './dashboard.selectors';
import { DashBoardActions } from './dashboard.actions';

@Injectable({
  providedIn: 'root',
})
export class DashboardFacadeService {
  private readonly store = inject(Store);
  readonly books$ = this.store.select(booksSelector);

  getBooks(key: string): void {
    this.store.dispatch(DashBoardActions.loadDashboard({key: key}));
  }
}
