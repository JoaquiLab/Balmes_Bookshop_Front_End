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
import { Order, SearchConfig } from './interfaces/product-grid-product-interfaces';
import { GridSortOption } from '../products-grid/interfaces/product-grid-sort.interface';

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
  protected readonly books: Observable<Book[]> = this.fadaceService.books$;
  protected categoryTreeDataSource: CategoryTreeNode[] = EXAMPLE_DATA;
  protected gridOptions: GridSortOption[] = [
    { value: Order.LATEST, label: 'Por los últimos' },
    { value: Order.HIGH_PRICE, label: 'Ordenar por precio más alto' },
    { value: Order.LOW_PRICE, label: 'Ordenar por precio más bajo' },
  ];
  protected gridTitle = 'A title';
  protected currentSearchKey = '';
  protected defaultSorting = Order.LATEST

  ngOnInit(): void {
    //Initial search every time that the page is loaded
    this.fadaceService.getBooks({ key: '', sortType: this.defaultSorting });
  }

  /**
   * Makes new search with the current search key and default sorting
   * @param searchConfig
   */
  searchBarUpdate(key: string): void {
    this.currentSearchKey = key;
    this.fadaceService.getBooks({
      key: this.currentSearchKey,
      sortType: Order.LATEST,
    });
  }
  /**
   * Makes new search with the current search key and a new sorting
   * @param sortType
   */
  sortingUpdate(sortType: number): void {
    const newSearchConfigWithNewSort: SearchConfig = {
      key: this.currentSearchKey,
      sortType: sortType
    }
    this.fadaceService.getBooks(newSearchConfigWithNewSort)
    console.log('TEST_NEW_SEARCH_CONFIG = ', newSearchConfigWithNewSort);
  }

  /**
   * Delete the user, remove the token and drive the user to the login page
   */
  logOut(): void {
    console.log('LOG OUTING OF THE SESSION');
    this.authFacade.deleteUser();
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth-page');
  }
}

const EXAMPLE_DATA: CategoryTreeNode[] = [
  {
    name: 'Los imprescindibles',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'Religión',
    children: [
      {
        name: 'Catequesis',
      },
      {
        name: 'Historia de la iglesia',
      },
    ],
  },
  {
    name: 'Humanidades',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Ciencias Naturales',
        children: [
          {
            name: 'Bioetica',
          },
          {
            name: 'Evolucionismo',
          },
          {
            name: 'Salud',
          },
        ],
      },
    ],
  },
];
