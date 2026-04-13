import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { categoryNodesSelector } from './category-menu.selectors';
import { categoryMenuActions } from './category-menu.actions';

@Injectable({
  providedIn: 'root',
})
export class CategoryMenuFacadeService {
  private readonly store = inject(Store);
  readonly categoryMenuNodes$ = this.store.select(categoryNodesSelector);

  /**
   * Dispath action to get treeNodes data for the dashboard-menu
   */
  getCategoryNode(): void {
    this.store.dispatch(categoryMenuActions.loadCategoryMenu());
  }
}
