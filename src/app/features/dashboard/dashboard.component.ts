import { Component, inject, OnInit } from '@angular/core';
import { Book } from '@shared';
import { AuthFacade } from '@features/auth';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { DashboardFacadeService } from './state/dashboard/dashboard.facade';
import { Observable } from 'rxjs';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CategoryMenuComponent } from '../category-menu/category-menu.component';
import { CategoryNode } from '.';
import { ProductsGridComponent } from '../products-grid';

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
  protected categoryTreeDataSource: CategoryNode[] = EXAMPLE_DATA;

  ngOnInit(): void {
    this.fadaceService.getBooks('');
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

const EXAMPLE_DATA: CategoryNode[] = [
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
