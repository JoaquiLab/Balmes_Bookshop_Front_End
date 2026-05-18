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
  //SERVICES
  private readonly authFacade = inject(AuthFacade);
  private readonly router = inject(Router);
  protected readonly fadaceService = inject(DashboardFacadeService);
  // DATA SOURCER
  protected readonly books: Observable<Book[]> = this.fadaceService.books$;
  protected readonly categoryTreeDataSource: CategoryTreeNode[] = EXAMPLE_DATA;
  //OPTIONS
  protected readonly gridOptions: GridSortOption[] = [
    { value: Order.LATEST, label: 'Por los últimos' },
    { value: Order.HIGH_PRICE, label: 'Ordenar por precio más alto' },
    { value: Order.LOW_PRICE, label: 'Ordenar por precio más bajo' },
  ];
  //INTERNAL VARIALBES
  protected currentSearchKey = '';
  protected readonly gridTitle = 'A title';
  private readonly defaultSortingConf: SearchConfig = {
    keyToSearch: '',
    sortType: Order.LATEST,
    numberOfPages: 20,
    page: 1,
  };

  ngOnInit(): void {
    //Initial search every time that the page is loaded
    this.fadaceService.getBooks(this.defaultSortingConf);
  }

  /**
   * Makes new search with the current search key and default sorting
   * @param searchConfig
   */
  searchBarUpdate(key: string): void {
    this.currentSearchKey = key;
    const newSearchConf: SearchConfig = {
      keyToSearch: this.currentSearchKey,
      sortType: this.defaultSortingConf.sortType,
      numberOfPages: this.defaultSortingConf.numberOfPages,
      page: this.defaultSortingConf.page,
    };
    this.fadaceService.getBooks(newSearchConf);
    console.log('SEARCH-BAR-UPDATE-TEST: ', newSearchConf);
  }
  /**
   * Makes new search with the default search conf but, using the passed parameter as sorType
   * @param sortType
   */
  sortingUpdate(sortType: number): void {
    const newSearchConfigWithNewSort: SearchConfig = {
      keyToSearch: this.currentSearchKey,
      sortType: sortType,
      numberOfPages: this.defaultSortingConf.numberOfPages,
      page: this.defaultSortingConf.page,
    };
    this.fadaceService.getBooks(newSearchConfigWithNewSort);
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
