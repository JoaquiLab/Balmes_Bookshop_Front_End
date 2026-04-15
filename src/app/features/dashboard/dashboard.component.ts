import { Component, inject, OnInit } from '@angular/core';
import { Book } from '@shared';
import { AuthFacade } from '@features/auth';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { DashboardFacadeService } from './state/grid-product/dashboard.facade';
import { Observable } from 'rxjs';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CategoryMenuComponent } from '../category-menu/category-menu.component';
import { CategoryTreeNode } from '.';
import { ProductsGridComponent } from '../products-grid';
import { CategoryMenuFacadeService } from './state/category-menu/category-menu.facade';

@Component({
  selector: 'cl-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [SearchBarComponent, AsyncPipe, CategoryMenuComponent, ProductsGridComponent],
})
export class DashboardComponent implements OnInit {
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
