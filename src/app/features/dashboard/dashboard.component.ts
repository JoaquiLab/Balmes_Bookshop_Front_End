import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { TaskPageComponent } from './dashboard-UI/dashboard-page.component';
import { Book } from '@shared';
import { AuthFacade } from '@features/auth';
import { Router } from '@angular/router';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { DashboardFacadeService } from './state/dashboard/dashboard.facade';
import { interval, Observable, of, Subscription } from 'rxjs';
import { Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductCardComponent } from '../product-card';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CategoryMenuComponent } from '../category-menu/category-menu.component';
import { CategoryTreeNode } from '.';
import { ProductsGridComponent } from '../products-grid';
import { CategoryMenuFacadeService } from './state/category-menu/category-menu.facade';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  imports: [SearchBarComponent, AsyncPipe, ProductCardComponent, CategoryMenuComponent],
})
export class DashboardComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  private authFacade = inject(AuthFacade);
  private router = inject(Router);
  protected fadaceService = inject(DashboardFacadeService);
  protected categoryMenuService = inject(CategoryMenuFacadeService);
  protected readonly books: Observable<Book[]> = this.fadaceService.books$;
  protected categoryTreeDataSource = this.categoryMenuService.categoryMenuNodes$;

  ngOnInit(): void {
    this.fadaceService.getBooks('');
    this.categoryMenuService.getCategoryNode()
  }

  search(searchBarValue: string): void {
    this.fadaceService.getBooks(searchBarValue);
  }

  logOut(): void {
    console.log('LOG OUTING OF THE SESSION');
    this.authFacade.deleteUser();
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth-page');
  }
}
